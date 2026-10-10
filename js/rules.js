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
  // Capitals-only acronyms. These are matched case-sensitively BEFORE the
  // lowercase lookup, so "ph" stays the consonant ফ while "PH" is পিএইচ.
  uppercaseForms: { PH: 'পিএইচ' },
  // Abbreviations keep their stop: a known "X." is one token, so the stop stays
  // a stop instead of becoming দাঁড়ি (।). Dr. is ambiguous (doctorate vs physician).
  abbreviations: Object.freeze({
    'Dr.': ['ড.', 'ডা.'],
    'Md.': 'মো.',
    'Mst.': 'মোসা.',
    'Mr.': 'মি.',
    'Mrs.': 'মিসেস',
    'Ms.': 'মিস',
    'Engr.': 'ইঞ্জি.',
    'Adv.': 'অ্যাড.',
    'Lt.': 'লে.',
    'No.': 'নং',
    'Ltd.': 'লি.',
    'Pvt.': 'প্রা.',
    'Co.': 'কোং'
  }),
  digits: '০১২৩৪৫৬৭৮৯',
  // Verb suffixes sit on a syllable boundary, not a conjunct:
  // kor + bo → করবো, kor + te → করতে, kor + lam → করলাম, kor + chi → করছি;
  // sorbo/sorbon still fall back to সর্ব because sorbo is not a stem+suffix pair.
  verbStems: [
    'kor', 'bol', 'dekh', 'por', 'par', 'dhor', 'chol', 'khel', 'shun', 'jan',
    'bujh', 'likh', 'shikh', 'rakh', 'thak', 'bhul', 'ghur', 'har', 'jit',
    'bos', 'has', 'nach', 'as', 'mar', 'kar', 'por', 'mor', 'bosh', 'uth',
    'nam'
  ],
  verbSuffixes: ['bo', 'be', 'ben', 'bi', 'te', 'lam', 'le', 'lo', 'len', 'chi', 'chen', 'chis', 'chili'],
  verbSuffixForms: {
    bo: 'বো', be: 'বে', ben: 'বেন', bi: 'বি',
    te: 'তে', lam: 'লাম', le: 'লে', lo: 'লো', len: 'লেন',
    chi: 'ছি', chen: 'ছেন', chis: 'ছিস', chili: 'ছিলি'
  },
  // Kept as aliases so existing references keep working.
  futureStems: [
    'kor', 'dhor', 'por', 'mor', 'chol', 'bol', 'likh', 'dekh', 'shikh',
    'shun', 'bosh', 'uth', 'nam', 'thak'
  ],
  futureSuffixes: ['bo', 'be', 'ben', 'bi'],
  futureSuffixForms: { bo: 'বো', be: 'বে', ben: 'বেন', bi: 'বি' }
});
