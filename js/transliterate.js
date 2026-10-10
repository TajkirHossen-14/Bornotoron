/* Pure conversion engine: no DOM, network, or storage dependencies.
 * API: new BornotoronEngine(personalOverrides).convert(text, bengaliDigits)
 * A word's case is ignored ONLY for dictionary lookup, not phonetic matching. */
(function () {
  'use strict';
  const rules = window.BornotoronRules;
  const dictionary = window.BornotoronDictionary;
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  // Sort once. Aspirates, diphthongs and conjunct patterns win over prefixes.
  const patterns = Object.keys({ ...rules.vowels, ...rules.consonants, ...rules.symbols })
    .sort((a, b) => b.length - a.length);

  function phonetic(word) {
    let output = '', consonantPending = false;
    // Verb suffixes (kor+bo → করবো, kor+te → করতে) sit on a syllable boundary,
    // not a conjunct, so they must be emitted as whole written forms.
    const verbStem = (rules.verbStems || rules.futureStems).find(stem => word.startsWith(stem) && rules.verbSuffixes.includes(word.slice(stem.length)));
    for (let i = 0; i < word.length;) {
      if (verbStem && i === verbStem.length) {
        const form = rules.verbSuffixForms[word.slice(verbStem.length)];
        if (form) { output += form; i = word.length; continue; }
        consonantPending = false;
      }
      const pattern = patterns.find(p => word.startsWith(p, i));
      if (!pattern) {
        const char = word[i];
        // Ordinary uppercase letters are accepted without erasing T/D/N/O/I/U.
        output += /[A-Z]/.test(char) ? phonetic(char.toLowerCase()) : char;
        consonantPending = /[A-Z]/.test(char);
        i++;
        continue;
      }
      if (own(rules.vowels, pattern)) {
        const [independent, kar] = rules.vowels[pattern];
        // o after a consonant closes its inherent vowel, without adding ো.
        output += consonantPending ? kar : independent;
        consonantPending = false;
      } else if (own(rules.consonants, pattern)) {
        let letter = rules.consonants[pattern];
        if (letter === 'ং') {
          output += letter;
          consonantPending = false;
        } else {
          // y is য-ফলা after a consonant, and য় elsewhere.
          if (pattern === 'y' && consonantPending) letter = 'য';
          output += (consonantPending ? '্' : '') + letter;
          consonantPending = letter !== 'ও';
        }
      } else {
        output += rules.symbols[pattern];
        consonantPending = false;
      }
      i += pattern.length;
    }
    return output;
  }

  function resolveSuffix(word) {
    const suffixRules = [
      { suffix: 'gulote', replacement: 'গুলোতে' },
      { suffix: 'guloke', replacement: 'গুলোকে' },
      { suffix: 'gulor', replacement: 'গুলোর' },
      { suffix: 'gulai', replacement: 'গুলোই' },
      { suffix: 'gulo', replacement: 'গুলো' },
      { suffix: 'take', replacement: 'টাকে' },
      { suffix: 'toke', replacement: 'টাকে' },
      { suffix: 'tate', replacement: 'টাতে' },
      { suffix: 'tote', replacement: 'টোতে' },
      { suffix: 'tar', replacement: 'টার' },
      { suffix: 'ter', replacement: 'টির' },
      { suffix: 'ta', replacement: 'টা' },
      { suffix: 'ti', replacement: 'টি' },
      { suffix: 'ke', replacement: 'কে' },
      { suffix: 'e', replacement: 'ে' },
      { suffix: 'er', replacement: 'ের' },
      { suffix: 'ar', replacement: 'ার' },
      { suffix: 'or', replacement: 'োর' },
      // X-o → Xও ("tumi-o" → তুমিও). Kept last so every longer suffix,
      // including -or and -e, still wins when both could match.
      { suffix: 'o', replacement: 'ও' },
    ];
    for (const rule of suffixRules) {
      if (word.length > rule.suffix.length && word.endsWith(rule.suffix)) {
        let base = word.slice(0, -rule.suffix.length).replace(/-$/, '');
        if (own(dictionary.overrides, base)) {
          return { text: dictionary.overrides[base] + rule.replacement, source: 'dictionary' };
        }
      }
    }
    return null;
  }

  class BornotoronEngine {
    constructor(personal = {}) {
      this.cache = new Map();
      this.tokens = [];
      this.nextId = 0;
      this.setPersonal(personal);
    }
    setPersonal(personal) {
      this.personal = Object.assign(Object.create(null), personal);
      this.cache.clear();
      this.tokens = [];
    }
    resolve(word) {
      if (this.cache.has(word)) return this.cache.get(word);
      const key = word.toLowerCase();
      let result;
      // Priority: capital acronym → personal learning → curated spelling →
      // ambiguity → suffix → rules.
      if (own(rules.uppercaseForms, word)) result = { text: rules.uppercaseForms[word], source: 'dictionary' };
      else if (own(this.personal, key)) result = { text: this.personal[key], source: 'personal' };
      else if (own(dictionary.overrides, key)) result = { text: dictionary.overrides[key], source: 'dictionary' };
      else if (own(dictionary.homophones, key)) {
        result = { text: dictionary.homophones[key][0], source: 'ambiguous', options: dictionary.homophones[key] };
      } else {
        const suffixed = resolveSuffix(key);
        if (suffixed) result = suffixed;
        // A hyphen that matches no suffix rule is a soft join: resolve each
        // part on its own and concatenate. phonetic() would otherwise copy the
        // hyphen straight into the Bangla output (tumi-o → তুমি-অ).
        else if (key.includes('-')) result = this.resolveHyphen(key);
        else result = { text: phonetic(word), source: 'phonetic' };
      }
      if (this.cache.size > 12000) this.cache.clear();
      this.cache.set(word, result);
      return result;
    }
    // Each part goes through resolve() again, so dictionary entries, homophones
    // and suffix rules still apply per part; the hyphen itself is dropped.
    resolveHyphen(word) {
      let text = '';
      for (const part of word.split('-')) {
        if (!part) continue;
        text += this.resolve(part).text;
      }
      return { text, source: 'phonetic' };
    }
    convert(text, bengaliDigits = true) {
      const parts = text.match(/[A-Za-z^`]+(?:-[A-Za-z^`]+)*|[0-9]+|[^A-Za-z^`0-9]+/g) || [];
      const old = this.tokens;
      let prefix = 0, suffix = 0;
      const same = (token, raw) => token && token.raw === raw && token.digits === bengaliDigits;
      while (prefix < parts.length && same(old[prefix], parts[prefix])) prefix++;
      while (suffix < parts.length - prefix && suffix < old.length - prefix &&
        same(old[old.length - 1 - suffix], parts[parts.length - 1 - suffix])) suffix++;
      // Unchanged prefix/suffix tokens retain IDs and occurrence-specific choices.
      this.tokens = parts.map((raw, index) => {
        if (index < prefix) return old[index];
        if (index >= parts.length - suffix) return old[old.length - (parts.length - index)];
        const isWord = /^[A-Za-z^`]+(?:-[A-Za-z^`]+)*$/.test(raw);
        const isDecimalDot = raw === '.' && /^[0-9]+$/.test(parts[index - 1]) && /^[0-9]+$/.test(parts[index + 1]);
        const result = isWord ? this.resolve(raw) : {
          text: (isDecimalDot ? raw : raw.replace(/\./g, '।')).replace(bengaliDigits ? /[0-9]/g : /(?!)/g, n => rules.digits[Number(n)]),
          source: 'separator'
        };
        return { raw, isWord, id: ++this.nextId, digits: bengaliDigits, ...result };
      });
      return this.tokens;
    }
    text() { return this.tokens.map(token => token.text).join(''); }
    choose(id, value) {
      const token = this.tokens.find(item => item.id === id);
      if (token && token.isWord) token.text = value;
    }
  }
  window.BornotoronEngine = BornotoronEngine;
  window.BornotoronPhonetic = phonetic;
})();
