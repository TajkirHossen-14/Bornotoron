/* Bornotoron phonetic data. Case is meaningful in fallback rules.
 * o = inherent vowel / initial অ; O = explicit ও / ো.
 * Avro-style c = চ and ch = ছ; familiar spellings also live in the dictionary. */
window.BornotoronRules = Object.freeze({
  vowels: {
    'ou': ['ঔ', 'ৌ'], 'oi': ['ঐ', 'ৈ'], 'OI': ['ঐ', 'ৈ'], 'OU': ['ঔ', 'ৌ'],
    'aa': ['আ', 'া'], 'ee': ['ঈ', 'ী'], 'oo': ['উ', 'ু'],
    'II': ['ঈ', 'ী'], 'UU': ['ঊ', 'ূ'], 'rri': ['ঋ', 'ৃ'],
    'a': ['আ', 'া'], 'A': ['আ', 'া'], 'i': ['ই', 'ি'], 'I': ['ঈ', 'ী'],
    'u': ['উ', 'ু'], 'U': ['ঊ', 'ূ'], 'e': ['এ', 'ে'], 'E': ['এ', 'ে'],
    'o': ['অ', ''], 'O': ['ও', 'ো']
  },
  consonants: {
    'kSh': 'ক্ষ', 'kkh': 'ক্ষ', 'ksh': 'ক্ষ', 'ngk': 'ঙ্ক', 'ngg': 'ঙ্গ',
    'chh': 'ছ', 'NG': 'ঙ', 'Ng': 'ঙ', 'ng': 'ং', 'NY': 'ঞ', 'ny': 'ঞ',
    'kh': 'খ', 'gh': 'ঘ', 'ch': 'ছ', 'jh': 'ঝ', 'Th': 'ঠ', 'Dh': 'ঢ',
    'th': 'থ', 'dh': 'ধ', 'ph': 'ফ', 'bh': 'ভ', 'sh': 'শ', 'Sh': 'ষ',
    'Rh': 'ঢ়', 'rh': 'ঢ়', 'rr': 'ড়', 'gg': 'জ্ঞ',
    'k': 'ক', 'g': 'গ', 'c': 'চ', 'j': 'জ', 'T': 'ট', 'D': 'ড', 'N': 'ণ',
    't': 'ত', 'd': 'দ', 'n': 'ন', 'p': 'প', 'f': 'ফ', 'b': 'ব', 'v': 'ভ',
    'm': 'ম', 'z': 'য', 'y': 'য়', 'r': 'র', 'R': 'ড়', 'l': 'ল',
    's': 'স', 'S': 'ষ', 'h': 'হ', 'w': 'ও', 'q': 'ক', 'x': 'ক্স'
  },
  symbols: { 't`': 'ৎ', 'H': 'ঃ', '^': 'ঁ', '`': '্', '.': '।' },
  digits: '০১২৩৪৫৬৭৮৯',
  // The future-tense suffix is a syllable boundary, not a conjunct:
  // kor + bo → করব, bol + be → বলবে; sorbo still falls back to সর্ব.
  futureStems: ['kor', 'dhor', 'por', 'mor', 'chol', 'bol', 'likh', 'dekh', 'shikh', 'shun', 'bosh', 'uth', 'nam', 'thak'],
  futureSuffixes: ['bo', 'be', 'ben', 'bi']
});
