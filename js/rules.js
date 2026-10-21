window.BornotoronRules = Object.freeze({
  vowels: {
  'o': ['অ', ''],
  'a': ['আ', 'া'], 'A': ['আ', 'া'], 'aa': ['আ', 'া'],
  'i': ['ই', 'ি'],
  'I': ['ঈ', 'ী'], 'ee': ['ঈ', 'ী'], 'II': ['ঈ', 'ী'],
  'u': ['উ', 'ু'], 'oo': ['উ', 'ু'],
  'U': ['ঊ', 'ূ'], 'UU': ['ঊ', 'ূ'],
  'rri': ['ঋ', 'ৃ'],
  'e': ['এ', 'ে'], 'E': ['এ', 'ে'],
  'oi': ['ঐ', 'ৈ'], 'OI': ['ঐ', 'ৈ'],
  'O': ['ও', 'ো'], 'w': ['ও','ো'],
  'ou': ['ঔ', 'ৌ'], 'OU': ['ঔ', 'ৌ']
},
  consonants: {
  'k': 'ক', 'q': 'ক',
  'kSh': 'ক্ষ', 'ksh': 'ক্ষ', 'kkh': 'ক্ষ',
  'x': 'ক্স',
  'kh': 'খ',
  'g': 'গ',
  'gh': 'ঘ',
  'NG': 'ঙ', 'Ng': 'ঙ', 'ngk': 'ঙ্ক', 'ngg': 'ঙ্গ',
  'c': 'চ',
  'ch': 'ছ', 'chh': 'ছ',
  'j': 'জ',
  'gg': 'জ্ঞ',
  'jh': 'ঝ',
  'NY': 'ঞ', 'ny': 'ঞ',
  'T': 'ট',
  'Th': 'ঠ',
  'D': 'ড',
  'Dh': 'ঢ',
  'N': 'ণ',
  't': 'ত',
  'th': 'থ',
  'd': 'দ',
  'dh': 'ধ',
  'n': 'ন',
  'p': 'প',
  'ph': 'ফ', 'f': 'ফ',
  'b': 'ব',
  'bh': 'ভ', 'v': 'ভ',
  'm': 'ম',
  'z': 'য',
  'r': 'র',
  'l': 'ল',
  'sh': 'শ',
  'Sh': 'ষ', 'S': 'ষ',
  's': 'স',
  'h': 'হ',
  'R': 'ড়', 'rr': 'ড়',
  'Rh': 'ঢ়', 'rh': 'ঢ়',
  'y': 'য়',
  'ng': 'ং',
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
