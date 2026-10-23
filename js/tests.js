/* Open tests.html. UI tests use the real index.html, never a mock layout. */
(async function () {
  'use strict';
  let passed = 0, failed = 0;
  const lines = [];
  function check(name, actual, expected = true) {
    if (actual === expected) passed++;
    else { failed++; lines.push(`FAIL ${name}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`); console.error(lines[lines.length - 1]); }
  }
  const text = (value, digits = true, personal = {}) => {
    const engine = new BornotoronEngine(personal); engine.convert(value, digits); return engine.text();
  };
  const dict = BornotoronDictionary;
  Object.entries(dict.doNotOverride).forEach(([key, value]) => {
    check(`regression ${key}`, BornotoronPhonetic(key), value);
    check(`not overridden ${key}`, Object.hasOwn(dict.overrides, key), false);
    check(`dictionary regression ${key}`, text(key), value);
  });
  Object.entries(dict.overrides).forEach(([key, value]) => {
    check(`override ${key}`, text(key), value);
    check(`case-insensitive ${key}`, text(key.toUpperCase()), value);
    check(`Latin lowercase key ${key}`, /^[a-z]+$/.test(key));
    check(`not a shadowed homophone ${key}`, Object.hasOwn(dict.homophones, key), false);
  });
  check('substantially expanded dictionary', Object.keys(dict.overrides).length >= 740);
  check('at least 590 spellings differ from phonetic fallback', Object.entries(dict.overrides).filter(([key, value]) => BornotoronPhonetic(key) !== value).length >= 590);
  Object.entries(dict.homophones).forEach(([key, options]) => {
    const e = new BornotoronEngine(); const tokens = e.convert(key);
    check(`ambiguous ${key}`, tokens[0].source, 'ambiguous');
    check(`first preview ${key}`, e.text(), options[0]);
    check(`alternatives ${key}`, options.length >= 2 && new Set(options).size === options.length);
    e.choose(tokens[0].id, options[1]); check(`choose ${key}`, e.text(), options[1]);
  });
  const cases = {
    'ami tomake bhalobashi': 'আমি তোমাকে ভালোবাসি',
    'Ami banglay likhchi': 'আমি বাংলায় লিখছি',
    'o O': 'অ ও', 'ko kO': 'ক কো', 'kori': 'করি',
    'kh gh ch chh jh Th Dh th dh ph bh': 'খ ঘ ছ ছ ঝ ঠ ঢ থ ধ ফ ভ',
    'T D N Sh R Rh': 'ট ড ণ ষ ড় ঢ়',
    'a i I u U e oi ou rri': 'আ ই ঈ উ ঊ এ ঐ ঔ ঋ',
    'ka ki kI ku kU ke koi kou krri': 'কা কি কী কু কূ কে কই কৌ কৃ',
    'kkh kSh gg ng Ng H ^': 'ক্ষ ক্ষ জ্ঞ ং ঙ ঃ ঁ',
    'nd tr kr ky': 'ন্দ ত্র ক্র ক্য', 't`': 'ৎ',
    'ami,\n\ttomake! 123 বাংলা 💚': 'আমি,\n\tতোমাকে! ১২৩ বাংলা 💚',
    '0123456789': '০১২৩৪৫৬৭৮৯', 'ami  123.45': 'আমি  ১২৩.৪৫',
    'ami.': 'আমি।', 'ami. tumi': 'আমি। তুমি', 'kori.kori': 'করি।করি',
    'mobile-ta': 'মোবাইলটা', 'doctor-er': 'ডাক্তারের', 'office-e': 'অফিসে',
    'khabar-er': 'খাবারের', 'bhalo-ta': 'ভালোটা',
    // Conjunct traps: র / clusters must keep their inherent vowel.
    'apnar': 'আপনার', 'apnara': 'আপনারা', 'apnar jonno': 'আপনার জন্য',
    'sorkar': 'সরকার', 'dorkar': 'দরকার', 'dorja': 'দরজা', 'tarpor': 'তারপর',
    'porpor': 'পরপর', 'khorcha': 'খরচ', 'ekbar': 'একবার', 'ekta': 'একটা',
    'rajniti': 'রাজনীতি', 'dhakna': 'ঢাকনা', 'kolkata': 'কলকাতা',
    'daktar': 'ডাক্তার', 'Daktar': 'ডাক্তার',
    // Verb suffixes sit on a syllable boundary, not a conjunct.
    'korbo': 'করবো', 'korbe': 'কरবে', 'korte': 'করতে', 'korlam': 'করলাম',
    'korchi': 'করছি', 'korchen': 'করছেন', 'porte': 'পড়তে', 'parbe': 'পারবে',
    'bolte': 'বলতে', 'likhte': 'লিখতে', 'dekhte': 'দেখতে', 'thakte': 'থাকতে',
    'shunte': 'শুনতে', 'jante': 'জানতে', 'bujhte': 'বুঝতে', 'nambe': 'নামবে',
    // Vowels and ফ are covered by the rows above; these lock the hyphen join.
    'tumi-o': 'তুমিও', 'ami-o': 'আমিও',
    '': '', 'বাংলা — 💚': 'বাংলা — 💚'
  };
  Object.entries(cases).forEach(([key, value]) => check(`conversion ${key}`, text(key), value));
  check('numbers off', text('2026', false), '2026');
  check('personal beats built-in', text('tomake', true, { tomake: 'তোমাকেই' }), 'তোমাকেই');
  check('personal beats homophone', text('bon', true, { bon: 'বোন' }), 'বোন');
  check('prototype names are safe', typeof text('constructor toString __proto__'), 'string');
  const e = new BornotoronEngine();
  e.convert('ami bon bhalo');
  const first = e.tokens[0], bon = e.tokens[2], last = e.tokens[4];
  e.choose(bon.id, 'বোন'); e.convert('tumi bon bhalo');
  check('suffix ID preserved', e.tokens[4].id, last.id);
  check('occurrence choice preserved', e.tokens[2].text, 'বোন');
  e.convert('tumi bon khub bhalo'); check('middle insertion suffix preserved', e.tokens[6].id, last.id);
  check('changed prefix replaced', e.tokens[0].id !== first.id);
  e.setPersonal({ bon: 'বোন' }); e.convert('bon'); check('personal invalidates cache', e.text(), 'বোন');
  const long = 'ami tomake bhalobashi. '.repeat(2500);
  const start = performance.now(); e.convert(long); const originalIds = e.tokens.slice(0, 10).map(t => t.id).join(',');
  const before = e.cache.size; e.convert(long + 'bhalo');
  check('long edit keeps prefix', e.tokens.slice(0, 10).map(t => t.id).join(','), originalIds);
  check('long edit only adds changed cache word', e.cache.size <= before + 1);
  lines.push(`Engine: ${long.length.toLocaleString()} characters + incremental edit in ${(performance.now() - start).toFixed(1)} ms.`);
  lines.push(`Dictionary: ${Object.keys(dict.overrides).length} overrides; ${Object.keys(dict.homophones).length} ambiguity groups.`);
  // WCAG relative luminance, not subjective visual contrast estimates.
  function luminance(hex) {
    const values = hex.match(/[a-f\d]{2}/gi).map(v => parseInt(v, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    return values[0] * .2126 + values[1] * .7152 + values[2] * .0722;
  }
  function contrast(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
  [
    ['light accent / silver', '#236340', '#edf0f2'],
    ['light accent / panel', '#236340', '#e6ecee'],
    ['light green text / surface', '#236340', '#fafcfd'],
    ['light button', '#ffffff', '#236340'],
    ['light secondary text', '#59646b', '#e6ecee'],
    ['dark accent / card', '#47be7a', '#161b22'],
    ['dark secondary text', '#a7b0ba', '#161b22'],
    ['dark button', '#47be7a', '#21262d']
  ].forEach(([name, fg, bg]) => { const ratio = contrast(fg, bg); check(`WCAG AA ${name}`, ratio >= 4.5); lines.push(`${name}: ${ratio.toFixed(2)}:1`); });

  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const keys = ['draft', 'history', 'personal', 'theme', 'digits'].map(key => 'bornotoron.' + key);
  let backup, frame;
  if (location.protocol !== 'file:') {
    try {
      backup = keys.map(key => [key, localStorage.getItem(key)]);
      keys.forEach(key => localStorage.removeItem(key));
      localStorage.setItem('bornotoron.theme', 'light');
      frame = document.createElement('iframe'); frame.title = 'Bornotoron interface test'; frame.src = 'index.html';
      const loaded = new Promise((resolve, reject) => { frame.onload = resolve; setTimeout(() => reject(new Error('UI load timed out')), 15000); });
      document.getElementById('ui-test-host').append(frame); await loaded; await pause(200);
      const w = frame.contentWindow, d = frame.contentDocument, get = id => d.getElementById(id);
      async function type(value) { get('banglish-input').value = value; get('banglish-input').dispatchEvent(new w.Event('input', { bubbles: true })); await pause(100); }
      check('initial sample renders', get('bangla-output').textContent, 'আমি বাংলায় লিখছি');
      check('initial input sentence', get('banglish-input').value, 'Ami banglay likhchi');
      check('Banglish panel label', d.querySelector('.panel-label').textContent, 'BANGLISH INPUT');
      check('input helper copy', d.querySelector('.input-hint').textContent, 'Write naturally. We’ll handle the letters.');
      check('Privacy title case', get('privacy-button').textContent, 'Privacy & Local Data');
      check('Report title case', get('report-button').textContent, 'Report an Issue');
      check('updated feature heading', d.querySelector('.benefits h3').textContent, 'লিখলেই ফুটে উঠুক বাংলা');
      check('logo tile is transparent', w.getComputedStyle(d.querySelector('.brand-mark')).backgroundColor, 'rgba(0, 0, 0, 0)');
      check('balanced desktop logo size', w.getComputedStyle(d.querySelector('.brand-mark')).width, '32px');
      check('logo asset path', d.querySelector('.brand-mark img').getAttribute('src'), 'Assets/Logo/Bornotoron_Logo.png');
      check('favicon asset path', d.querySelector('link[rel="icon"]').getAttribute('href'), 'Assets/Favicon/Bornotoron-Favicon-SVG.svg');
      // Inspect real alpha values, not a white checkerboard or a CSS trick.
      for (const path of ['Assets/Logo/Bornotoron_Logo.png', 'Assets/Favicon/Bornotoron-Favicon-SVG.svg']) {
        const image = new w.Image(); image.src = path; await image.decode();
        const canvas = d.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
        const context = canvas.getContext('2d', { willReadFrequently: true }); context.drawImage(image, 0, 0);
        const alpha = (x, y) => context.getImageData(Math.floor(x * canvas.width), Math.floor(y * canvas.height), 1, 1).data[3];
        check(`${path} transparent outer background`, alpha(.02, .02) <= 5);
        check(`${path} transparent inner cutout`, alpha(.52, .52) <= 5);
        check(`${path} original green mark retained`, alpha(.4, .3) >= 250);
      }
      function assertArrowGap(label) {
        const a = d.querySelector('.input-card').getBoundingClientRect();
        const arrow = d.querySelector('.conversion-bridge').getBoundingClientRect();
        const b = d.querySelector('.output-card').getBoundingClientRect();
        const mobile = w.matchMedia('(max-width: 700px)').matches;
        check(`${label} arrow clears input card`, mobile ? arrow.top - a.bottom >= 9 : arrow.left - a.right >= 9);
        check(`${label} arrow clears output card`, mobile ? b.top - arrow.bottom >= 9 : b.left - arrow.right >= 9);
      }
      assertArrowGap('desktop');
      check('browser title uses en dash', d.title, 'বর্ণতরণ – বাংলা লেখার সহজ পথ');
      check('requested light accent', w.getComputedStyle(d.documentElement).getPropertyValue('--accent').trim(), '#236340');
      check('silver background token', w.getComputedStyle(d.documentElement).getPropertyValue('--bg').trim(), '#edf0f2');
      check('copyright footer', d.querySelector('.site-footer > p').textContent, '© 2026 Bornotoron. All Rights Reserved');
      check('larger footer type', w.getComputedStyle(d.querySelector('.site-footer')).fontSize, '12px');
      check('light theme shows sun', w.getComputedStyle(d.querySelector('.sun-icon')).opacity, '1');
      check('light theme hides moon', w.getComputedStyle(d.querySelector('.moon-icon')).opacity, '0');
      check('footer repository URL', d.querySelector('.footer-github').href, 'https://github.com/TajkirHossen-14/Bornotoron');
      check('issue tracker URL', get('github-issues').href, 'https://github.com/TajkirHossen-14/Bornotoron/issues/new');
      await type('amar bon bhalo ache');
      check('live output', get('bangla-output').textContent, 'আমার বন ভালো আছে');
      check('ambiguous word underlined', !!get('bangla-output').querySelector('.ambiguous'));
      get('bangla-output').querySelector('.ambiguous').click(); await pause(50);
      check('popover opens', get('word-popover').hidden, false);
      get('word-options').children[1].click();
      check('option replaces word', get('bangla-output').textContent, 'আমার বোন ভালো আছে');
      check('remember offered', get('remember-prompt').hidden, false);
      get('remember-button').click(); await pause(200);
      check('personal saved', JSON.parse(localStorage.getItem('bornotoron.personal')).bon, 'বোন');
      await type('bon 123'); check('future personal conversion', get('bangla-output').textContent, 'বোন ১২৩');
      get('number-toggle').click(); check('number toggle', get('bangla-output').textContent, 'বোন 123');
      get('bangla-output').querySelector('.output-word').click(); await pause(30);
      get('correction-input').value = 'বোনটি';
      get('correction-form').dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
      check('manual word correction', get('bangla-output').textContent, 'বোনটি 123');
      get('forget-button').click(); await pause(200);
      check('dismiss popover', get('word-popover').hidden);
      await pause(1900);
      check('history persists', JSON.parse(localStorage.getItem('bornotoron.history')).length > 0);
      get('history-toggle').click(); check('history opens', get('history-content').classList.contains('is-open'));
      get('rules-link').click(); check('cheat opens', get('cheat-content').classList.contains('is-open'));
      get('tab-consonants').click(); check('mapping tab', get('tab-consonants').getAttribute('aria-selected'), 'true');
      get('theme-toggle').click(); check('theme toggles', d.documentElement.dataset.theme, 'dark');
      check('theme saved', localStorage.getItem('bornotoron.theme'), 'dark');
      await pause(350);
      check('requested dark accent', w.getComputedStyle(d.documentElement).getPropertyValue('--accent').trim(), '#47be7a');
      check('dark theme shows moon', w.getComputedStyle(d.querySelector('.moon-icon')).opacity, '1');
      check('dark theme hides sun', w.getComputedStyle(d.querySelector('.sun-icon')).opacity, '0');
      for (const [selector, expected] of [['body', '13,17,23'], ['.input-card', '22,27,34'], ['.output-card', '22,27,34'], ['.copy-button', '33,38,45'], ['.feature-icon', '22,27,34']]) {
        const channels = w.getComputedStyle(d.querySelector(selector)).backgroundColor.match(/\d+/g).slice(0, 3);
        check(`GitHub-dark surface ${selector}`, channels.join(','), expected);
      }
      // Functional breakpoint test; visual QA separately captures the real page
      // with the tool's mobile viewport, not this iframe as a screenshot stand-in.
      frame.style.width = '390px'; await pause(150);
      assertArrowGap('mobile');
      get('banglish-input').style.height = '300px'; await pause(50);
      assertArrowGap('mobile resized input');
      get('banglish-input').style.height = '';
      check('mobile menu starts collapsed', get('menu-toggle').getAttribute('aria-expanded'), 'false');
      check('closed mobile nav inert', get('navigation').inert);
      get('menu-toggle').click(); await pause(350);
      check('hamburger opens', get('menu-toggle').getAttribute('aria-expanded'), 'true');
      check('open menu accessible', get('navigation').inert, false);
      check('mobile menu contains theme control', get('navigation').contains(get('theme-toggle')));
      check('mobile menu visibly expanded', w.getComputedStyle(get('navigation')).visibility, 'visible');
      get('theme-toggle').click();
      check('theme works inside hamburger', d.documentElement.dataset.theme, 'light');
      get('theme-toggle').click();
      get('rules-link').focus();
      d.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      check('Escape closes hamburger', get('menu-toggle').getAttribute('aria-expanded'), 'false');
      check('Escape restores focus', d.activeElement.id, 'menu-toggle');
      get('menu-toggle').click();
      d.querySelector('main').dispatchEvent(new w.PointerEvent('pointerdown', { bubbles: true }));
      check('outside press closes hamburger', get('navigation').inert);
      get('menu-toggle').click(); get('rules-link').click();
      check('menu selection closes hamburger', get('navigation').inert);
      get('menu-toggle').click();
      const repository = get('nav-github');
      check('Bengali mobile GitHub label', repository.querySelector('.mobile-nav-label').textContent, 'গিটহাব');
      check('real repository destination', repository.href, 'https://github.com/TajkirHossen-14/Bornotoron');
      check('repository opens safely in new tab', repository.target === '_blank' && repository.rel.includes('noopener'));
      repository.addEventListener('click', event => event.preventDefault(), { once: true });
      repository.click();
      check('GitHub selection closes hamburger', get('navigation').inert);
      frame.style.width = '100%'; await pause(150);
      check('desktop nav is not inert', get('navigation').inert, false);
      get('report-button').click(); check('report dialog opens', get('report-dialog').open);
      get('report-dialog').close();
      get('clear-button').click(); check('clear output', get('bangla-output').textContent, '');
      check('empty copy disabled', get('copy-button').disabled);
      get('history-list').querySelector('button').click();
      check('history exact correction restored', get('bangla-output').textContent, 'বোনটি 123');
      // Stub only clipboard transport; verify the real copy handler and UI.
      let copiedText = '';
      Object.defineProperty(w.navigator, 'clipboard', { configurable: true, value: { writeText: async value => { copiedText = value; } } });
      get('copy-button').click(); await pause(100);
      check('clipboard payload', copiedText, 'বোনটি 123');
      check('copied state', get('copy-button').classList.contains('copied'));
      await pause(1600); check('copy state resets', get('copy-button').classList.contains('copied'), false);
      // Verify actual browser download Blob without opening a save dialog.
      let blob, filename;
      w.URL.createObjectURL = value => { blob = value; return 'blob:test'; };
      w.HTMLAnchorElement.prototype.click = function () { filename = this.download; };
      get('download-button').click();
      check('download filename', /^bornotoron-.*\.txt$/.test(filename));
      check('download contents', (await blob.text()).replace(/^\uFEFF/, ''), 'বোনটি 123');
      get('issue-details').value = 'Menu test report'; get('download-report').click();
      check('issue report filename', filename, 'bornotoron-issue-report.txt');
      const reportText = await blob.text();
      check('issue report contains only supplied description', reportText.includes('Menu test report') && !reportText.includes('বোনটি 123'));
      const reloaded = new Promise(resolve => { frame.onload = resolve; }); frame.contentWindow.location.reload(); await reloaded; await pause(200);
      check('draft survives reload', frame.contentDocument.getElementById('bangla-output').textContent, 'বোনটি 123');
      check('theme survives reload', frame.contentDocument.documentElement.dataset.theme, 'dark');
      frame.contentDocument.getElementById('clear-history').click();
      check('history cleared', JSON.parse(localStorage.getItem('bornotoron.history')).length, 0);
      lines.push('Real UI: typing, alternatives, corrections, local learning, digits, history, tabs, themes, clipboard, download, and reload verified.');
    } catch (error) { check('UI integration suite', error.message, 'no errors'); }
    finally {
      frame?.remove(); await pause(100);
      if (backup) backup.forEach(([key, value]) => value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value));
    }
  } else lines.push('UI suite skipped on file://; serve statically to test same-origin iframe interactions.');
  const summary = `${passed} passed · ${failed} failed`;
  const el = document.getElementById('test-summary'); el.textContent = summary; el.className = failed ? 'fail' : 'pass'; el.dataset.complete = 'true';
  document.getElementById('test-results').textContent = lines.join('\n');
  console.log('BORNOTORON TESTS: ' + summary + '\n' + lines.join('\n'));
})();
