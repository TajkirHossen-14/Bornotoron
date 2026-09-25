/* Bornotoron UI. DOM is built with textContent/createElement (never user HTML).
 * All persistence is local, optional and quota/error tolerant. No network API. */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const input = $('banglish-input');
  const output = $('bangla-output');
  const popover = $('word-popover');
  let storageWarning = false, toastTimer, historyTimer, copyTimer, renderFrame;
  let activeToken = null, activeAnchor = null, rememberValue = '', popoverTimer;
  let lastRendered = [], nodes = [], currentText = '', composing = false;
  let localDataDeleted = false;
  const storage = {
    get(key, fallback) {
      try { const value = localStorage.getItem('bornotoron.' + key); return value === null ? fallback : JSON.parse(value); }
      catch (_) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('bornotoron.' + key, JSON.stringify(value)); return true; }
      catch (_) {
        if (!storageWarning) { notify('Browser storage is unavailable or full. Your text still works; changes may not be saved.'); storageWarning = true; }
        return false;
      }
    }
  };
  const validPersonal = value => {
    const result = Object.create(null);
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.entries(value).slice(0, 3000).forEach(([key, spelling]) => {
        if (/^[a-z^`]+$/.test(key) && typeof spelling === 'string' && spelling.length <= 100 && /[\u0980-\u09ff]/.test(spelling)) result[key] = spelling;
      });
    }
    return result;
  };
  let personal = validPersonal(storage.get('personal', {}));
  const engine = new window.BornotoronEngine(personal);
  let history = storage.get('history', []);
  if (!Array.isArray(history)) history = [];
  history = history.filter(item => item && typeof item.input === 'string' && typeof item.output === 'string' && Number.isFinite(item.time)).slice(0, 10);
  const digits = storage.get('digits', true);
  $('number-toggle').checked = typeof digits === 'boolean' ? digits : true;
  const draft = storage.get('draft', null);
  if (draft && typeof draft.input === 'string') input.value = draft.input;

  function notify(message) {
    clearTimeout(toastTimer);
    $('status-message').textContent = message;
    $('status-message').classList.add('is-visible');
    toastTimer = setTimeout(() => $('status-message').classList.remove('is-visible'), 3300);
  }

  // Patch only the changed token range. Unchanged suffix DOM and engine tokens
  // survive a middle edit; no full innerHTML rebuild on each keystroke.
  const cursor = document.createElement('span');
  cursor.className = 'output-cursor'; cursor.setAttribute('aria-hidden', 'true');
  output.append(cursor);
  function makeNode(token) {
    if (!token.isWord) return document.createTextNode(token.text);
    const node = document.createElement('button');
    node.type = 'button';
    node.dataset.token = String(token.id);
    node.className = 'output-word fresh';
    node.classList.toggle('ambiguous', token.source === 'ambiguous');
    node.classList.toggle('personal', token.source === 'personal');
    node.textContent = token.text;
    node.setAttribute('aria-label', `${token.text} — ${token.options ? 'বিকল্প বানান দেখুন' : 'বানান সংশোধন করুন'}`);
    node.setAttribute('aria-haspopup', 'dialog');
    node.addEventListener('animationend', () => node.classList.remove('fresh'), { once: true });
    return node;
  }
  function renderOutput() {
    const tokens = engine.tokens;
    let prefix = 0, suffix = 0;
    const same = (a, b) => a && b && a.id === b.id && a.text === b.text;
    while (prefix < tokens.length && same(lastRendered[prefix], tokens[prefix])) prefix++;
    while (suffix < tokens.length - prefix && suffix < lastRendered.length - prefix &&
      same(lastRendered[lastRendered.length - 1 - suffix], tokens[tokens.length - 1 - suffix])) suffix++;
    const end = nodes.length - suffix;
    for (let i = prefix; i < end; i++) nodes[i].remove();
    const replacement = tokens.slice(prefix, tokens.length - suffix).map(makeNode);
    const fragment = document.createDocumentFragment();
    replacement.forEach(node => fragment.append(node));
    output.insertBefore(fragment, suffix ? nodes[end] : cursor);
    nodes = [...nodes.slice(0, prefix), ...replacement, ...nodes.slice(end)];
    lastRendered = tokens.map(({ id, text }) => ({ id, text }));
    currentText = engine.text();
    cursor.hidden = !currentText;
    $('output-placeholder').hidden = !!currentText;
    updateCounts();
    $('copy-button').disabled = !currentText;
    $('download-button').disabled = !currentText;
    $('clear-button').disabled = !input.value;
  }
  const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter('bn', { granularity: 'grapheme' }) : null;
  function updateCounts() {
    const count = segmenter ? Array.from(segmenter.segment(currentText)).length : Array.from(currentText).length;
    const words = (currentText.match(/[\p{L}\p{N}][\p{L}\p{M}\p{N}]*/gu) || []).length;
    const format = n => n.toLocaleString('bn-BD');
    $('output-counter').textContent = `${format(count)} অক্ষর · ${format(words)} শব্দ`;
  }
  function convert() {
    engine.convert(input.value, $('number-toggle').checked);
    renderOutput();
  }
  function choices(all = false) {
    return engine.tokens.flatMap((token, index) => token.isWord && (all || token.text !== engine.resolve(token.raw).text) ? [{ index, raw: token.raw, text: token.text }] : []);
  }
  function restoreChoices(saved) {
    if (!Array.isArray(saved)) return;
    saved.forEach(choice => {
      const token = choice && engine.tokens[choice.index];
      if (token && token.isWord && token.raw === choice.raw && typeof choice.text === 'string' && choice.text.length <= 100) engine.choose(token.id, choice.text);
    });
    renderOutput();
  }
  function saveDraft() {
    if (localDataDeleted) return;
    storage.set('draft', { input: input.value, choices: choices() });
  }
  function saveHistory() {
    clearTimeout(historyTimer);
    if (localDataDeleted || !input.value.trim() || !currentText.trim()) return;
    // Bound history storage, not editing: long documents remain fully usable.
    if (input.value.length > 50000) { saveDraft(); return; }
    const entry = { input: input.value, output: currentText, choices: choices(true), digits: $('number-toggle').checked, time: Date.now() };
    history = history.filter(item => item.input !== entry.input || item.output !== entry.output);
    history.unshift(entry); history = history.slice(0, 10);
    storage.set('history', history);
    saveDraft(); renderHistory();
  }
  function edited() {
    localDataDeleted = false;
    clearTimeout(historyTimer);
    historyTimer = setTimeout(saveHistory, 1800);
  }
  input.addEventListener('compositionstart', () => { composing = true; });
  input.addEventListener('compositionend', () => { composing = false; convert(); edited(); });
  input.addEventListener('input', () => {
    if (composing) return;
    closePopover(false);
    cancelAnimationFrame(renderFrame);
    renderFrame = requestAnimationFrame(() => { convert(); edited(); });
  });
  $('number-toggle').addEventListener('change', () => {
    closePopover(false);
    const savedChoices = choices();
    storage.set('digits', $('number-toggle').checked);
    convert(); restoreChoices(savedChoices); edited();
  });
  $('clear-button').addEventListener('click', () => {
    clearTimeout(historyTimer); cancelAnimationFrame(renderFrame);
    closePopover(false); input.value = ''; convert();
    localDataDeleted = false; saveDraft(); input.focus(); notify('A fresh page. লিখুন আপনার মনের কথা।');
  });
  document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => {
    if (input.value.trim() && input.value !== button.dataset.example) saveHistory();
    input.value = button.dataset.example; closePopover(false); convert(); edited();
    input.focus(); input.setSelectionRange(input.value.length, input.value.length);
  }));

  async function copyText() {
    // Flush any queued typing before exporting.
    cancelAnimationFrame(renderFrame); convert();
    if (!currentText) return;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Use local fallback');
      await navigator.clipboard.writeText(currentText);
      copied();
    } catch (_) {
      // file:// and browsers with clipboard permission disabled.
      const temp = document.createElement('textarea');
      temp.value = currentText; temp.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(temp); temp.select();
      let success = false;
      try { success = document.execCommand('copy'); } catch (_) { /* manual selection below */ }
      temp.remove();
      if (success) copied();
      else {
        const range = document.createRange(); range.selectNodeContents(output);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
        notify('Text selected. Press Ctrl/Cmd+C, or use your device’s Copy command.');
      }
    }
  }
  function copied() {
    clearTimeout(copyTimer);
    const button = $('copy-button');
    button.classList.add('copied'); button.querySelector('use').setAttribute('href', '#i-check');
    button.querySelector('span').textContent = 'কপি হয়েছে';
    notify('Copied! বাংলা এখন আপনার ক্লিপবোর্ডে।'); saveHistory();
    copyTimer = setTimeout(() => {
      button.classList.remove('copied'); button.querySelector('use').setAttribute('href', '#i-copy');
      button.querySelector('span').textContent = 'কপি করুন';
    }, 1500);
  }
  $('copy-button').addEventListener('click', copyText);
  input.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); copyText(); }
  });
  $('download-button').addEventListener('click', () => {
    cancelAnimationFrame(renderFrame); convert();
    if (!currentText) return;
    // UTF-8 Blob + BOM works in older desktop text editors. No server involved.
    const url = URL.createObjectURL(new Blob(['\uFEFF', currentText], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = `bornotoron-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.append(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    saveHistory(); notify('Your Bangla text is ready to download.');
  });

  // A small, non-modal, keyboard-operable word editor doubles as suggestions.
  function positionPopover(anchor) {
    const bounds = anchor.getBoundingClientRect();
    const rect = popover.getBoundingClientRect();
    const x = Math.max(12, Math.min(bounds.left, innerWidth - rect.width - 12));
    const y = bounds.bottom + rect.height + 10 < innerHeight ? bounds.bottom + 8 : Math.max(12, bounds.top - rect.height - 8);
    popover.style.left = `${x}px`; popover.style.top = `${y}px`;
  }
  function openPopover(anchor, focus = false) {
    const token = engine.tokens.find(item => item.id === Number(anchor.dataset.token));
    if (!token) return;
    clearTimeout(popoverTimer);
    activeToken = token; activeAnchor = anchor; rememberValue = '';
    $('remember-prompt').hidden = true;
    $('popover-heading').textContent = token.options ? 'আপনি কোনটি বোঝাতে চান?' : 'আপনার পছন্দের বানান';
    $('popover-source').textContent = `${token.raw} → ${token.text}`;
    $('correction-input').value = token.text;
    $('word-options').replaceChildren();
    (token.options || []).forEach(option => {
      const button = document.createElement('button');
      button.textContent = option; button.type = 'button';
      button.setAttribute('aria-pressed', String(option === token.text));
      button.addEventListener('click', () => applyCorrection(option));
      $('word-options').append(button);
    });
    popover.hidden = false; positionPopover(anchor);
    requestAnimationFrame(() => popover.classList.add('is-visible'));
    if (focus) (popover.querySelector('.word-options button') || $('correction-input')).focus({ preventScroll: true });
  }
  function closePopover(returnFocus = false) {
    popover.classList.remove('is-visible');
    if (returnFocus && activeAnchor?.isConnected) activeAnchor.focus({ preventScroll: true });
    clearTimeout(popoverTimer);
    popoverTimer = setTimeout(() => { popover.hidden = true; activeToken = null; }, 150);
  }
  output.addEventListener('click', event => {
    const anchor = event.target.closest('[data-token]'); if (anchor) openPopover(anchor, true);
  });
  output.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse') return;
    const anchor = event.target.closest('.ambiguous');
    if (anchor && popover.hidden) openPopover(anchor);
  });
  // Hover suggestions stay open while moving to them; outside click or Escape closes.
  document.addEventListener('pointerdown', event => {
    if (!popover.hidden && !popover.contains(event.target) && !event.target.closest('[data-token]')) closePopover(false);
  });
  $('close-popover').addEventListener('click', () => closePopover(true));
  popover.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); closePopover(true); }
    if ((event.key === 'ArrowRight' || event.key === 'ArrowLeft') && event.target.closest('.word-options')) {
      const buttons = [...$('word-options').children];
      const next = (buttons.indexOf(document.activeElement) + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next]?.focus(); event.preventDefault();
    }
  });
  document.addEventListener('focusin', event => {
    if (!popover.hidden && !popover.contains(event.target) && !event.target.closest('[data-token]')) closePopover(false);
  });
  function applyCorrection(value) {
    value = value.trim();
    if (!activeToken || !value) return;
    if (!/^[\u0980-\u09ff\s\u200c\u200d]+$/.test(value)) { notify('Please enter a Bangla spelling, not Romanized text.'); $('correction-input').focus(); return; }
    const id = activeToken.id;
    engine.choose(id, value); renderOutput();
    activeAnchor = output.querySelector(`[data-token="${id}"]`);
    $('correction-input').value = value;
    $('popover-source').textContent = `${activeToken.raw} → ${value}`;
    [...$('word-options').children].forEach(button => button.setAttribute('aria-pressed', String(button.textContent === value)));
    rememberValue = value; $('remember-prompt').hidden = false;
    positionPopover(activeAnchor); edited();
  }
  $('correction-form').addEventListener('submit', event => { event.preventDefault(); applyCorrection($('correction-input').value); });
  $('forget-button').addEventListener('click', () => closePopover(true));
  $('remember-button').addEventListener('click', () => {
    if (!activeToken || !rememberValue) return;
    const key = activeToken.raw.toLowerCase(); personal[key] = rememberValue;
    const stored = storage.set('personal', personal);
    const savedChoices = choices();
    engine.setPersonal(personal); convert(); restoreChoices(savedChoices);
    closePopover(false); edited();
    if (stored) notify(`Remembered: ${key} → ${rememberValue}`);
  });
  window.addEventListener('resize', () => { if (!popover.hidden && activeAnchor?.isConnected) positionPopover(activeAnchor); });
  window.addEventListener('scroll', () => {
    $('site-header').classList.toggle('scrolled', scrollY > 8);
    if (!popover.hidden && activeAnchor?.isConnected) positionPopover(activeAnchor);
  }, { passive: true });
  output.parentElement.addEventListener('scroll', () => closePopover(false), { passive: true });

  function setSection(name, open) {
    const content = $(name + '-content');
    content.classList.toggle('is-open', open); content.inert = !open;
    const toggle = name === 'cheat' ? $('cheat-toggle') : $('history-section-toggle');
    toggle.setAttribute('aria-expanded', String(open));
    const navToggle = name === 'cheat' ? $('rules-link') : $('history-toggle');
    navToggle.setAttribute('aria-expanded', String(open));
  }
  $('cheat-toggle').addEventListener('click', () => setSection('cheat', $('cheat-toggle').getAttribute('aria-expanded') !== 'true'));
  $('rules-link').addEventListener('click', () => {
    const open = $('rules-link').getAttribute('aria-expanded') !== 'true';
    setSection('cheat', open);
    if (open) $('cheat-sheet').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
  $('history-section-toggle').addEventListener('click', () => setSection('history', $('history-toggle').getAttribute('aria-expanded') !== 'true'));
  $('history-toggle').addEventListener('click', () => {
    const open = $('history-toggle').getAttribute('aria-expanded') !== 'true';
    setSection('history', open);
    if (open) { renderHistory(); $('recent-history').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
  function renderHistory() {
    $('history-count').textContent = `${history.length} saved`;
    $('history-list').replaceChildren();
    $('clear-history').disabled = history.length === 0;
    if (!history.length) {
      const empty = document.createElement('p'); empty.className = 'history-empty';
      empty.textContent = 'এখনো কিছু লেখা হয়নি। Your next words will find a home here.';
      $('history-list').append(empty); return;
    }
    history.forEach(entry => {
      const button = document.createElement('button'); button.className = 'history-item';
      const preview = document.createElement('span'), bangla = document.createElement('strong'), original = document.createElement('small'), time = document.createElement('time');
      bangla.textContent = entry.output; original.textContent = entry.input;
      time.dateTime = new Date(entry.time).toISOString();
      time.textContent = new Date(entry.time).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      preview.append(bangla, original); button.append(preview, time);
      button.title = 'Restore this conversion';
      button.addEventListener('click', () => {
        clearTimeout(historyTimer); cancelAnimationFrame(renderFrame);
        input.value = entry.input;
        if (typeof entry.digits === 'boolean') $('number-toggle').checked = entry.digits;
        engine.tokens = []; convert(); restoreChoices(entry.choices);
        localDataDeleted = false; saveDraft(); storage.set('digits', $('number-toggle').checked);
        input.focus({ preventScroll: true }); $('writing-workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
        notify('Previous words, ready for a new thought.');
      });
      $('history-list').append(button);
    });
  }
  $('clear-history').addEventListener('click', () => {
    clearTimeout(historyTimer); history = []; storage.set('history', history); renderHistory(); notify('History cleared from this browser.');
  });
  function showMappings(category) {
    const entries = category === 'vowels' ? Object.entries(BornotoronRules.vowels).map(([p, [v]]) => [p, v]) : category === 'consonants' ? Object.entries(BornotoronRules.consonants) : [
      ['kSh / kkh', 'ক্ষ'], ['gg', 'জ্ঞ'], ['nd', 'ন্দ'], ['tr', 'ত্র'], ['kr', 'ক্র'], ['ky', 'ক্য'], ['ng', 'ং'], ['H', 'ঃ'], ['^', 'ঁ'], ['`', '্'], ['R', 'ড়'], ['Rh', 'ঢ়'], ['y', 'য়'], ['rri', 'ঋ / ৃ'], ['t`', 'ৎ'], ['kO', 'কো']
    ];
    $('mapping-grid').replaceChildren();
    entries.forEach(([pattern, character]) => {
      const item = document.createElement('div'); item.className = 'mapping-item';
      const key = document.createElement('span'), value = document.createElement('span');
      key.textContent = pattern; value.textContent = character; item.append(key, value); $('mapping-grid').append(item);
    });
    document.querySelectorAll('[data-category]').forEach(tab => {
      const selected = tab.dataset.category === category;
      tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
      if (selected) $('mapping-panel').setAttribute('aria-labelledby', tab.id);
    });
  }
  const tabs = [...document.querySelectorAll('[data-category]')];
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showMappings(tab.dataset.category));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); tabs[next].focus(); showMappings(tabs[next].dataset.category);
    });
  });

  // Responsive disclosure: one set of nav controls for desktop and mobile.
  // Closed mobile content is inert, so invisible links cannot receive focus.
  const mobileNav = matchMedia('(max-width: 700px)');
  const menuButton = $('menu-toggle');
  const navPanel = $('navigation');
  // Defer a mobile deep-link until its media query is ready (e.g. viewport
  // initialization or rotating a desktop-width device into portrait).
  let pendingNavigationLink = location.hash === '#navigation';
  function setMenuOpen(open, returnFocus = false) {
    open = Boolean(open && mobileNav.matches);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
    navPanel.classList.toggle('is-open', open);
    navPanel.inert = mobileNav.matches && !open;
    if (returnFocus && mobileNav.matches) menuButton.focus({ preventScroll: true });
  }
  menuButton.addEventListener('click', () => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  function syncNavigationViewport() {
    const focusInside = navPanel.contains(document.activeElement);
    const open = pendingNavigationLink && mobileNav.matches;
    setMenuOpen(open, !open && mobileNav.matches && focusInside);
    if (open) {
      pendingNavigationLink = false;
      menuButton.focus({ preventScroll: true });
    }
  }
  mobileNav.addEventListener('change', syncNavigationViewport);
  document.addEventListener('pointerdown', event => {
    if (!event.target.closest('#site-header')) setMenuOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      event.preventDefault(); setMenuOpen(false, true);
    }
  });
  document.addEventListener('focusin', event => {
    if (!event.target.closest('#site-header')) setMenuOpen(false);
  });
  navPanel.addEventListener('click', event => {
    const action = event.target.closest('a, button');
    if (action && action.id !== 'theme-toggle') setMenuOpen(false, !document.querySelector('dialog[open]'));
  });
  syncNavigationViewport();

  // First paint theme is set in <head>; follow OS only without an explicit choice.
  function updateThemeLabel() {
    const dark = document.documentElement.dataset.theme === 'dark';
    $('theme-toggle').setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    $('theme-toggle').setAttribute('aria-pressed', String(dark));
    $('theme-label').textContent = dark ? 'ডার্ক থিম' : 'লাইট থিম';
    $('theme-toggle').title = `${dark ? 'Dark' : 'Light'} theme · switch to ${dark ? 'light' : 'dark'}`;
    document.querySelector('meta[name="theme-color"]').content = dark ? '#0D1117' : '#EDF0F2';
  }
  $('theme-toggle').addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('bornotoron.theme', theme); } catch (_) { /* Session choice still applies. */ }
    updateThemeLabel();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    let choice; try { choice = localStorage.getItem('bornotoron.theme'); } catch (_) { /* OS fallback */ }
    if (!choice) { document.documentElement.dataset.theme = event.matches ? 'dark' : 'light'; updateThemeLabel(); }
  });
  $('privacy-button').addEventListener('click', () => {
    $('learned-count').textContent = `${Object.keys(personal).length} learned spellings`;
    $('privacy-dialog').showModal();
  });
  $('clear-learned').addEventListener('click', () => {
    personal = Object.create(null); storage.set('personal', personal); engine.setPersonal(personal); convert(); saveDraft();
    $('learned-count').textContent = '0 learned spellings'; notify('Learned spellings forgotten.');
  });
  $('clear-local').addEventListener('click', () => {
    if (!confirm('Delete your draft, history, learned spellings, and preferences from this browser?')) return;
    clearTimeout(historyTimer); cancelAnimationFrame(renderFrame); localDataDeleted = true;
    try { ['draft', 'history', 'personal', 'digits', 'theme'].forEach(key => localStorage.removeItem('bornotoron.' + key)); } catch (_) { notify('Storage could not be cleared. Use your browser’s site-data settings.'); return; }
    personal = Object.create(null); history = []; engine.setPersonal(personal);
    input.value = ''; $('number-toggle').checked = true; closePopover(false); convert(); renderHistory();
    document.documentElement.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    updateThemeLabel(); $('privacy-dialog').close(); notify('All Bornotoron data has been deleted from this browser.');
  });
  document.querySelectorAll('a[href="#project-info"]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault(); $('about-dialog').showModal();
  }));
  $('report-button').addEventListener('click', () => $('report-dialog').showModal());
  $('download-report').addEventListener('click', () => {
    const details = $('issue-details').value.trim();
    if (!details) { $('issue-details').focus(); notify('Please describe the issue first.'); return; }
    // A local file only. Never collect editor text or silently submit a report.
    const report = `Bornotoron – Issue report\nDate: ${new Date().toISOString()}\n\n${details}\n\nPrepared locally; not submitted.\n`;
    const url = URL.createObjectURL(new Blob([report], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'bornotoron-issue-report.txt';
    document.body.append(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    notify('Report downloaded. Share the file with the project maintainer.');
  });
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  }));
  $('dictionary-size').textContent = `${Object.keys(BornotoronDictionary.overrides).length} built-in spellings and ${Object.keys(BornotoronDictionary.homophones).length} sets of alternate spellings. No installation needed.`;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('will-reveal'); observer.unobserve(entry.target); }
    }), { threshold: .05 });
    document.querySelectorAll('.reveal').forEach(section => { section.classList.add('will-reveal'); observer.observe(section); });
  }
  // Do not add an untouched demo to history. Save user work on pause/export.
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(renderFrame); convert();
    if (historyTimer) saveDraft();
  });
  // Crop transparent margins from the existing PNG, not the artwork itself.
  // A PNG Blob fills more of the browser's fixed favicon slot without base64.
  async function enhanceFavicon() {
    const link = $('site-favicon');
    if (!link) return;
    try {
      const image = new Image(); image.src = link.dataset.source; await image.decode();
      const source = document.createElement('canvas');
      source.width = image.naturalWidth; source.height = image.naturalHeight;
      const ctx = source.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(image, 0, 0);
      const pixels = ctx.getImageData(0, 0, source.width, source.height).data;
      let left = source.width, top = source.height, right = -1, bottom = -1;
      for (let y = 0; y < source.height; y++) for (let x = 0; x < source.width; x++) {
        if (pixels[(y * source.width + x) * 4 + 3] > 12) {
          left = Math.min(left, x); right = Math.max(right, x);
          top = Math.min(top, y); bottom = Math.max(bottom, y);
        }
      }
      if (right < left) return;
      const width = right - left + 1, height = bottom - top + 1;
      const icon = document.createElement('canvas'); icon.width = icon.height = 64;
      const target = icon.getContext('2d'); target.imageSmoothingQuality = 'high';
      const scale = 60 / Math.max(width, height);
      target.drawImage(image, left, top, width, height, (64 - width * scale) / 2, (64 - height * scale) / 2, width * scale, height * scale);
      const blob = await new Promise(resolve => icon.toBlob(resolve, 'image/png'));
      if (!blob) return;
      link.href = URL.createObjectURL(blob); link.setAttribute('sizes', '64x64');
      link.dataset.enhanced = 'true';
      // Keep the object URL alive until document disposal, including bfcache.
    } catch (_) {
      // file:// privacy policies may block pixel reads; retain the PNG fallback.
      link.dataset.enhanced = 'fallback';
    }
  }
  enhanceFavicon();
  convert(); if (draft) restoreChoices(draft.choices);
  renderHistory(); showMappings('vowels'); updateThemeLabel();
  if (location.hash === '#cheat-sheet') setSection('cheat', true);
  if (location.hash === '#recent-history') setSection('history', true);
})();
