/*
 * Bornotoron Dictionary
 * ---------------------------------------------------------------------------
 * overrides      Roman (Banglish) key -> ONE Bangla spelling, used as-is.
 * homophones     Roman key -> [preview spelling, ...other candidates].
 * doNotOverride  Words the phonetic engine must spell by itself. A key listed
 *                here must NOT also appear in overrides.
 *
 * House rules
 *  - Keys are lowercase. Multi-word / hyphenated keys are quoted.
 *  - Every key appears ONCE. (In a JS object a repeated key silently overwrites
 *    the earlier one, so a duplicate is always a bug.)
 *  - Words are grouped by topic, then sorted A-Z inside each group, except where
 *    a natural order matters (ordinals, weekdays, elements, compass, upazilas).
 *  - A word that fits two topics lives in ONE of them; the other section lists it
 *    under "See also".
 *
 * Contents
 *   PART 1 - BANGLA WORDS TYPED IN ROMAN LETTERS (BANGLISH)
 *     01. Pronouns, Demonstratives & Indefinites                 78
 *     02. Time, Frequency & Sequence Words                       34
 *     03. Conjunctions, Particles & Connectors                   42
 *     04. Imperatives & Commands                                 61
 *     05. Verb Forms & Verbal Nouns                             150
 *     06. Bhalo & Bhalobasha Family                              18
 *     07. Feelings, Qualities & Descriptions                     49
 *     08. Body, People & Relations                               31
 *     09. Nature, Light & Weather                                51
 *     10. Food, Kitchen & Market                                 28
 *     11. Language, Books & Arts                                 45
 *     12. Greetings, Festivals & National Words                  28
 *     13. Life, Dreams & Abstract Words                          42
 *     14. Compound Words & Spelling Exceptions                   34
 *   PART 2 - EVERYDAY ENGLISH
 *     15. Pronouns, Question Words, Prepositions & Conjunctions   39
 *     16. Common Verbs, Modals & Stop/End Words                  84
 *     17. Adjectives & Adverbs                                   93
 *     18. Everyday Expressions & Greetings                       55
 *     19. Time, Days & Calendar                                  39
 *     20. Numbers, Units & Measurements                          38
 *     21. Ordinals & Sequence Words                             129
 *     22. Directions & Positions                                 46
 *     23. People, Family & Relationships                         48
 *     24. Home, Household & Utilities                            83
 *     25. Fashion, Clothing & Beauty                            139
 *     26. Food, Drinks & Dining                                  77
 *     27. Health, Medical & Fitness                              70
 *     28. Pharmacy: Medicines & Brands                          189
 *     29. Education, School & Campus                            109
 *     30. Office, Work & Career                                  76
 *     31. Banking, Money & Finance                               32
 *     32. Shopping, Business & E-commerce                        52
 *     33. Transport & Vehicles                                   90
 *     34. Travel, Tourism & Leisure                              25
 *     35. Entertainment, Music & Media                           37
 *     36. Events & Celebrations                                  13
 *     37. Sports & Games                                         52
 *     38. Government, Law & Politics                             64
 *     39. Housing, Construction & Property                       44
 *     40. Literature & Writing                                   59
 *   PART 3 - TECHNOLOGY
 *     41. Devices, Hardware & Gadgets                            50
 *     42. Social Media & Online                                  46
 *     43. Telecom & Mobile Services                              68
 *     44. Computer Actions & Controls                           101
 *     45. UI Elements, Boxes & Shapes                            30
 *     46. Browsers, Tech Companies & Online Services             26
 *     47. Typing, Text & Fonts                                   40
 *     48. Dictionary, Grammar & Linguistics                      36
 *     49. Programming Languages & Code                           31
 *     50. Programming Concepts & Data Structures                 53
 *     51. Web, Networking & Hosting                              33
 *     52. Databases, Frameworks & Libraries                      28
 *     53. Git, Tools & Workflow                                  33
 *     54. Security                                               15
 *     55. IDEs & Code Editors                                    43
 *     56. AI, Machine Learning & Data Science                    73
 *     57. Computer Science & Infrastructure                      37
 *     58. Abbreviations & Acronyms                               45
 *   PART 4 - SCIENCE & NATURE
 *     59. Chemical Elements & Metals                            119
 *     60. Physics, Chemistry & Space                             61
 *     61. Biology & Genetics                                     12
 *     62. Nature, Environment & Landscape                       141
 *     63. Weather & Seasons                                      40
 *     64. Flowers & Plants                                       23
 *     65. Colours                                               249
 *   PART 5 - WORLD, NAMES & PLACES
 *     66. Continents, Countries & Cities                        212
 *     67. Currency                                               73
 *     68. Nationalities & Languages                             200
 *     69. Bangladesh: Upazilas, Dhaka Areas & Districts         475
 */
window.BornotoronDictionary = Object.freeze({
  overrides: Object.freeze({
    // ===========================================================================
    // PART 1 - BANGLA WORDS TYPED IN ROMAN LETTERS (BANGLISH)
    // ===========================================================================

    // ---------------------------------------------------------------------------
    // 01. Pronouns, Demonstratives & Indefinites                             
    // ---------------------------------------------------------------------------
    amar: 'আমার', ami: 'আমি', apnader: 'আপনাদের', apnaderke: 'আপনাদেরকে', apnake: 'আপনাকে',
    apnakei: 'আপনাকেই', apnar: 'আপনার', apnara: 'আপনারা', apnay: 'আপনায়', apni: 'আপনি',
    apnider: 'আপনাদের', apniderke: 'আপনাদেরকে', apnike: 'আপনাকে', apnira: 'আপনারা', egulo: 'এগুলো',
    eguloke: 'এগুলোকে', egulor: 'এগুলোর', egulote: 'এগুলোতে', ekhaneo: 'এখানেও', jetuku: 'যেটুকু',
    jototuku: 'যতটুকু', kon: 'কোন', kono: 'কোনো', konobhabe: 'কোনোভাবে', konodin: 'কোনোদিন',
    konokichu: 'কোনো কিছু', konomote: 'কোনোমতে', konota: 'কোনোটা', konoti: 'কোনোটি', konta: 'কোনটা',
    oder: 'ওদের', oderke: 'ওদেরকে', odero: 'ওদেরও', ogulo: 'ওগুলো', oguloke: 'ওগুলোকে',
    ogulor: 'ওগুলোর', ogulote: 'ওগুলোতে', oke: 'ওকে', okhan: 'ওখান', okhane: 'ওখানে',
    okhaneo: 'ওখানেও', okhankar: 'ওখানকার', okhanteke: 'ওখান থেকে', onader: 'ওনাদের',
    onake: 'ওনাকে', onar: 'ওনার', onara: 'ওনারা', or: 'ওর', ora: 'ওরা', orao: 'ওরাও', ota: 'ওটা',
    otake: 'ওটাকে', otar: 'ওটার', otate: 'ওটাতে', oti: 'ওটি', segulo: 'সেগুলো',
    seguloke: 'সেগুলোকে', segulor: 'সেগুলোর', shob: 'সব', shobai: 'সবাই', shobar: 'সবার',
    shobcheye: 'সবচেয়ে', shobkichu: 'সবকিছু', tomader: 'তোমাদের', tomaderi: 'তোমাদেরই',
    tomaderke: 'তোমাদেরকে', tomadero: 'তোমাদেরও', tomake: 'তোমাকে', tomakeo: 'তোমাকেও',
    tomar: 'তোমার', tomarai: 'তোমরাই', tomari: 'তোমারই', tomaro: 'তোমারও', tomay: 'তোমায়',
    tomra: 'তোমরা', tomrai: 'তোমরাই', tumi: 'তুমি', uni: 'উনি',

    // ---------------------------------------------------------------------------
    // 02. Time, Frequency & Sequence Words                                   
    // ---------------------------------------------------------------------------
    ajkeo: 'আজকেও', ajo: 'আজও', ebaro: 'এবারও',
    ekhoni: 'এখনই', ekhono: 'এখনো', jokhon: 'যখন', kalkeo: 'কালকেও', kokhono: 'কখনো',
    kokhonoi: 'কখনোই', majhe: 'মাঝে', majhemajhe: 'মাঝে মাঝে', majher: 'মাঝের', 
    roj: 'রোজ', rojkar: 'রোজকার', rojroj: 'রোজ রোজ', shesh: 'শেষ', shokal: 'সকাল', shokale: 'সকালে',
    shokaler: 'সকালের', shomoy: 'সময়', shomoye: 'সময়ে', shomoyer: 'সময়ের', shondha: 'সন্ধ্যা',
    shondhay: 'সন্ধ্যায়', somoy: 'সময়', somoye: 'সময়ে', somoyer: 'সময়ের', sondha: 'সন্ধ্যা',
    tokhono: 'তখনো', zokhon: 'যখন', 
    prothom: 'প্রথম', ditiyo: 'দ্বিতীয়', ditio: 'দ্বিতীয়', dwitiyo: 'দ্বিতীয়', 
    tritiyo: 'তৃতীয়', tritio: 'তৃতীয়', choturtho: 'চতুর্থ',
    ponchom: 'পঞ্চম', shoshtho: 'ষষ্ঠ', shoptom: 'সপ্তম', soptom: 'সপ্তম',
    ostom: 'অষ্টম', oshtom: 'অষ্টম', nobom: 'নবম', doshom: 'দশম', 
    ekadosh: 'একাদশ', dwadosh: 'দ্বাদশ', dadosh: 'দ্বাদশ', 
    troyodosh: 'ত্রয়োদশ', choturdosh: 'চতুর্দশ', ponchodosh: 'পঞ্চদশ', 
    shorosh: 'ষোড়শ', shoroshi: 'ষোড়শী',
    shoptodosh: 'সপ্তদশ', soptodosh: 'সপ্তদশ',
    oshtadosh: 'অষ্টাদশ', ostadosh: 'অষ্টাদশ',
    unobingsho: 'ঊনবিংশ', unobingshoti: 'ঊনবিংশতি',
    bingsho: 'বিংশ', bingshoti: 'বিংশতি', ekobingsho: 'একবিংশ',

    // ---------------------------------------------------------------------------
    // 03. Conjunctions, Particles & Connectors                               
    // ---------------------------------------------------------------------------
    abar: 'আবার', abaro: 'আবারও', ar: 'আর', aro: 'আরও', chaile: 'চাইলে', ekrokom: 'একরকম',
    ektu: 'একটু', hea: 'হ্যাঁ', hoyto: 'হয়তো', hya: 'হ্যাঁ', jekhane: 'যেখানে', jeno: 'যেন',
    jodi: 'যদি', jodio: 'যদিও', jonno: 'জন্য', kebhabe: 'কীভাবে', keno: 'কেন', kevabe: 'কীভাবে',
    kibhabe: 'কীভাবে', kivabe: 'কীভাবে', motamoti: 'মোটামুটি', moto: 'মতো', moton: 'মতন',
    noile: 'নইলে', oboshshoi: 'অবশ্যই', obossho: 'অবশ্য', obosshoi: 'অবশ্যই', onek: 'অনেক',
    onnorokom: 'অন্যরকম', ontoto: 'অন্তত', orthat: 'অর্থাৎ', rokom: 'রকম', rokomer: 'রকমের',
    shotti: 'সত্যি', shottyi: 'সত্যি', shudhu: 'শুধু', shudhumatro: 'শুধুমাত্র',
    sottikar: 'সত্যিকার', tobu: 'তবু', tobuo: 'তবুও', zekhane: 'যেখানে', zodi: 'যদি',

    // ---------------------------------------------------------------------------
    // 04. Imperatives & Commands                                             
    // ---------------------------------------------------------------------------
    // Informal imperatives: the final explicit ো is intentional.
    bacho: 'বাঁচো', bancho: 'বাঁচো', bhabo: 'ভাবো', bhulo: 'ভুলো', bojho: 'বোঝো', bolo: 'বলো',
    bolona: 'বলো না', bosho: 'বসো', boso: 'বসো', bujho: 'বুঝো', chao: 'চাও', charo: 'ছাড়ো',
    cheno: 'চেনো', chharo: 'ছাড়ো', cholo: 'চলো', cholona: 'চলো না', dako: 'ডাকো', dekhao: 'দেখাও',
    dekho: 'দেখো', dhoro: 'ধরো', diyo: 'দিয়ো', esho: 'এসো', eso: 'এসো', ghumao: 'ঘুমাও',
    ghumo: 'ঘুমো', hanso: 'হাসো', haso: 'হাসো', jano: 'জানো', jao: 'যাও', jeo: 'যেয়ো',
    jeyo: 'যেয়ো', kando: 'কাঁদো', khelo: 'খেলো', kheyo: 'খেয়ো', khojo: 'খোঁজো', kholo: 'খোলো',
    khujo: 'খুঁজো', koro: 'করো', korona: 'করো না', lekho: 'লেখো', likho: 'লিখো', mano: 'মানো',
    nacho: 'নাচো', naco: 'নাচো', nio: 'নিও', niyo: 'নিয়ো', otho: 'ওঠো', paro: 'পারো', poro: 'পড়ো',
    pouchao: 'পৌঁছাও', poucho: 'পৌঁছো', rakho: 'রাখো', shekho: 'শেখো', shikho: 'শিখো',
    shono: 'শোনো', shonona: 'শোনো না', thako: 'থাকো', utho: 'উঠো', zao: 'যাও', zeo: 'যেয়ো',
    zeyo: 'যেয়ো',

    // ---------------------------------------------------------------------------
    // 05. Verb Forms & Verbal Nouns                                         
    // ---------------------------------------------------------------------------
    ache: 'আছে', achhe: 'আছে', achhi: 'আছি', achho: 'আছ', achi: 'আছি', acho: 'আছ', asben: 'আসবেন',
    asbi: 'আসবি', asche: 'আসছে', aschen: 'আসছেন', aschi: 'আসছি', aschile: 'আসছিলে',
    aschilo: 'আসছিল', aschis: 'আসছিস', ashbe: 'আসবে', ashben: 'আসবেন', ashbi: 'আসবি',
    ashche: 'আসছে', ashchen: 'আসছেন', ashchhi: 'আসছি', ashchi: 'আসছি', ashchile: 'আসছিলে',
    ashchilo: 'আসছিল', ashchis: 'আসছিস', ashlam: 'আসলাম', ashle: 'আসলে', ashlo: 'আসলো',
    bojha: 'বোঝা', bojhabe: 'বোঝাবে', bojhai: 'বোঝাই', bojhalo: 'বোঝাল', bojhano: 'বোঝানো',
    bojhar: 'বোঝার', bojhate: 'বোঝাতে', bolchhi: 'বলছি', bolchho: 'বলছ', bolchi: 'বলছি',
    bolcho: 'বলছ', bolechho: 'বলেছ', bolechi: 'বলেছি', bolecho: 'বলেছ', boshe: 'বসে',
    boshechi: 'বসেছি', boshecho: 'বসেছ', chaicho: 'চাইছ', chay: 'চায়', cheye: 'চেয়ে',
    chhilam: 'ছিলাম', chhilen: 'ছিলেন', chhilo: 'ছিল', chilam: 'ছিলাম', chilen: 'ছিলেন',
    chilo: 'ছিল', cholbo: 'চলবো', cholchi: 'চলছি', cholte: 'চলতে', dekhechhi: 'দেখেছি',
    dekhechho: 'দেখেছ', dekhechi: 'দেখেছি', dekhechilo: 'দেখেছিল', dekhecho: 'দেখেছ',
    esecho: 'এসেছ', esheche: 'এসেছে', eshechen: 'এসেছেন', eshechi: 'এসেছি', eshechile: 'এসেছিলে',
    eshechilo: 'এসেছিল', eshechis: 'এসেছিস', eshecho: 'এসেছ', gechhi: 'গেছি', gechi: 'গেছি',
    ghum: 'ঘুম', ghumiye: 'ঘুমিয়ে', ghumochhe: 'ঘুমোচ্ছে', ghumono: 'ঘুমোনো', ghumote: 'ঘুমোতে',
    giyechi: 'গিয়েছি', giyecho: 'গিয়েছ', hocche: 'হচ্ছে', hochchhe: 'হচ্ছে', hochhe: 'হচ্ছে',
    hoy: 'হয়', hoye: 'হয়ে', hoyeche: 'হয়েছে', hoyechilo: 'হয়েছিল', hoyni: 'হয়নি', jabe: 'যাবে',
    jabo: 'যাব', jacchi: 'যাচ্ছি', jaccho: 'যাচ্ছ', jachcho: 'যাচ্ছ', jachhi: 'যাচ্ছি', jai: 'যাই',
    jay: 'যায়', jete: 'যেতে', kheyechho: 'খেয়েছ', kheyechi: 'খেয়েছি', kheyecho: 'খেয়েছ',
    khoj: 'খোঁজ', khoje: 'খোঁজে', khojer: 'খোঁজের', khola: 'খোলা', kholao: 'খোলাও', kholar: 'খোলার',
    khulecho: 'খুলেছ', korchhi: 'করছি', korchho: 'করছ', korchi: 'করছি', korchilo: 'করছিল',
    korcho: 'করছ', korechhi: 'করেছি', korechhilo: 'করেছিল', korechho: 'করেছ', korechi: 'করেছি',
    korechilo: 'করেছিল', korecho: 'করেছ', lagche: 'লাগছে', lagchhe: 'লাগছে', likhchhi: 'লিখছি',
    likhchi: 'লিখছি', nachbo: 'নাচবো', nachle: 'নাচলে', nachte: 'নাচতে', noy: 'নয়',
    pacchi: 'পাচ্ছি', pachhi: 'পাচ্ছি', parcho: 'পারছ', perecho: 'পেরেছ', peyechhe: 'পেয়েছে',
    peyechi: 'পেয়েছি', peyecho: 'পেয়েছ', porchi: 'পরছি', porechi: 'পড়েছি', porecho: 'পড়েছ',
    porte: 'পড়তে', shonabe: 'শোনাবে', shonabo: 'শোনাব', shonano: 'শোনানো', shonar: 'শোনার',
    shonate: 'শোনাতে', shonen: 'শোনেন', shunchho: 'শুনছ', shunchi: 'শুনছি', shunecho: 'শুনেছ',
    uthbe: 'উঠবে', zabe: 'যাবে', zabo: 'যাব', zai: 'যাই', zay: 'যায়', zete: 'যেতে',

    // ---------------------------------------------------------------------------
    // 06. Bhalo & Bhalobasha Family                                          
    // ---------------------------------------------------------------------------
    // Frequent explicit ও / ো words and their everyday inflections.
    bhalo: 'ভালো', bhalobasar: 'ভালোবাসার', bhalobasbo: 'ভালোবাসব', bhalobase: 'ভালোবাসে',
    bhalobasha: 'ভালোবাসা', bhalobashar: 'ভালোবাসার', bhalobashbo: 'ভালোবাসব',
    bhalobashe: 'ভালোবাসে', bhalobashi: 'ভালোবাসি', bhalobasho: 'ভালোবাসো', bhalobasi: 'ভালোবাসি',
    bhalobaso: 'ভালোবাসো', bhalobese: 'ভালোবেসে', bhalobeshe: 'ভালোবেসে', bhaloi: 'ভালোই',
    bhalor: 'ভালোর', bhalota: 'ভালোটা', valo: 'ভালো',

    // ---------------------------------------------------------------------------
    // 07. Feelings, Qualities & Descriptions                                 
    // ---------------------------------------------------------------------------
    anond: 'আনন্দ', anondo: 'আনন্দ', boro: 'বড়', boroder: 'বড়দের', brihot: 'বৃহৎ', chhoto: 'ছোট',
    chhotto: 'ছোট্ট', choto: 'ছোট', chotoder: 'ছোটদের', chotoo: 'ছোটও', chotto: 'ছোট্ট',
    dhire: 'ধীরে', dhireo: 'ধীরেও', druto: 'দ্রুত', dukhito: 'দুঃখিত', dukkher: 'দুঃখের',
    dukkhito: 'দুঃখিত', dukkho: 'দুঃখ', iccha: 'ইচ্ছা', icche: 'ইচ্ছে', ichchha: 'ইচ্ছা',
    ichchhe: 'ইচ্ছে', ichha: 'ইচ্ছা', ichhe: 'ইচ্ছে', khushi: 'খুশি', khushir: 'খুশির',
    kothin: 'কঠিন', notunotto: 'নতুনত্ব', onubhob: 'অনুভব', purono: 'পুরোনো', sastho: 'স্বাস্থ্য',
    shastho: 'স্বাস্থ্য', shohoj: 'সহজ', shohoje: 'সহজে', shukh: 'সুখ', shukhi: 'সুখী',
    shundor: 'সুন্দর', shundorbhabe: 'সুন্দরভাবে', shundori: 'সুন্দরী', shustho: 'সুস্থ',
    sohoj: 'সহজ', sohoje: 'সহজে', sona: 'সোনা', sonali: 'সোনালি', sonalite: 'সোনালিতে',
    sonar: 'সোনার', sonay: 'সোনায়', sustho: 'সুস্থ', taratari: 'তাড়াতাড়ি',

    // ---------------------------------------------------------------------------
    // 08. Body, People & Relations                                           
    // ---------------------------------------------------------------------------
    bondhu: 'বন্ধু', bondhur: 'বন্ধুর', bondhura: 'বন্ধুরা', bondhutto: 'বন্ধুত্ব', chokh: 'চোখ',
    chokhe: 'চোখে', chokheo: 'চোখেও', chokher: 'চোখের', chokherpata: 'চোখের পাতা',
    chokhgulo: 'চোখগুলো', chokhta: 'চোখটা', chokhti: 'চোখটি', chul: 'চুল', chuler: 'চুলের',
    lok: 'লোক', loke: 'লোকে', loker: 'লোকের', lokgaan: 'লোকগান', lokgulo: 'লোকগুলো',
    lokjon: 'লোকজন', lokjoner: 'লোকজনের', lokkotha: 'লোককথা', lokshilpo: 'লোকশিল্প', lokta: 'লোকটা',
    lokti: 'লোকটি', poribar: 'পরিবার', poribarer: 'পরিবারের', porichito: 'পরিচিত',
    porichoy: 'পরিচয়', shorir: 'শরীর', sorir: 'শরীর',

    // ---------------------------------------------------------------------------
    // 09. Nature, Light & Weather                                            
    // ---------------------------------------------------------------------------
    alo: 'আলো', alor: 'আলোর', alote: 'আলোতে', aloy: 'আলোয়', brishti: 'বৃষ্টি', brishtir: 'বৃষ্টির',
    brishtite: 'বৃষ্টিতে', bristi: 'বৃষ্টি', chad: 'চাঁদ', chader: 'চাঁদের', chand: 'চাঁদ',
    chander: 'চাঁদের', chaya: 'ছায়া', chhaya: 'ছায়া', chhayay: 'ছায়ায়', golaper: 'গোলাপের',
    golapful: 'গোলাপফুল', golapi: 'গোলাপি', megh: 'মেঘ', megher: 'মেঘের', meghla: 'মেঘলা',
    nodi: 'নদী', nodir: 'নদীর', nodite: 'নদীতে', nouka: 'নৌকা', noukar: 'নৌকার', noukay: 'নৌকায়',
    nouko: 'নৌকো', noukor: 'নৌকোর', noukoy: 'নৌকোয়', ondhokar: 'অন্ধকার', pahar: 'পাহাড়',
    pahare: 'পাহাড়ে', paharer: 'পাহাড়ের', pakhi: 'পাখি', pakhir: 'পাখির', pakhira: 'পাখিরা',
    rod: 'রোদ', roddur: 'রোদ্দুর', roddure: 'রোদ্দুরে', roddurer: 'রোদ্দুরের', rode: 'রোদে',
    rodela: 'রোদেলা', roder: 'রোদের', sagor: 'সাগর', shagor: 'সাগর', shagorer: 'সাগরের',
    shomudro: 'সমুদ্র', somudrer: 'সমুদ্রের', somudro: 'সমুদ্র', srabon: 'শ্রাবণ',

    // ---------------------------------------------------------------------------
    // 10. Food, Kitchen & Market                                             
    // ---------------------------------------------------------------------------
    bhoj: 'ভোজ', bhojer: 'ভোজের', bhojon: 'ভোজন', cha: 'চা', chal: 'চাল', chaler: 'চালের',
    chamoc: 'চামচ', chamoch: 'চামচ', chini: 'চিনি', doi: 'দই', dokan: 'দোকান', dokandar: 'দোকানদার',
    dokane: 'দোকানে', dokaner: 'দোকানের', khabar: 'খাবার', lobon: 'লবণ', mishti: 'মিষ্টি',
    mishtir: 'মিষ্টির', misti: 'মিষ্টি', noon: 'নুন', peyaj: 'পেঁয়াজ', piyaj: 'পেঁয়াজ',
    ranna: 'রান্না', rannar: 'রান্নার', roshun: 'রসুন', ruti: 'রুটি', tel: 'তেল', tele: 'তেলে',

    // ---------------------------------------------------------------------------
    // 11. Language, Books & Arts                                             
    // ---------------------------------------------------------------------------
    avro: 'অভ্র', banan: 'বানান', bangla: 'বাংলা', banglar: 'বাংলার', banglay: 'বাংলায়',
    banglish: 'বাংলিশ', bhasa: 'ভাষা', bhasha: 'ভাষা', vasha: 'ভাষা', boi: 'বই', boier: 'বইয়ের',
    boigulo: 'বইগুলো', boimela: 'বইমেলা', boimelar: 'বইমেলার', boimelay: 'বইমেলায়', boita: 'বইটা',
    boiti: 'বইটি', bornotoron: 'বর্ণতরণ', chhobi: 'ছবি', chobi: 'ছবি', chobir: 'ছবির',
    chobite: 'ছবিতে', ingreji: 'ইংরেজি', obhidhan: 'অভিধান', okkhor: 'অক্ষর', onubad: 'অনুবাদ',
    ovro: 'অভ্র', poralekha: 'পড়ালেখা', porashona: 'পড়াশোনা', porashonar: 'পড়াশোনার',
    porikkha: 'পরীক্ষা', porikkhar: 'পরীক্ষার', poriksha: 'পরীক্ষা', proshno: 'প্রশ্ন',
    prosno: 'প্রশ্ন', shobder: 'শব্দের', shobdo: 'শব্দ', uccaron: 'উচ্চারণ', uccarone: 'উচ্চারণে',
    uccaroner: 'উচ্চারণের', uccharon: 'উচ্চারণ', uccharone: 'উচ্চারণে', uccharoner: 'উচ্চারণের',
    uttor: 'উত্তর', uttorer: 'উত্তরের', 

    // ---------------------------------------------------------------------------
    // 12. Greetings, Festivals & National Words                              
    // ---------------------------------------------------------------------------
    bangali: 'বাঙালি', bijoy: 'বিজয়', bijoyer: 'বিজয়ের', boishakh: 'বৈশাখ', boishakhi: 'বৈশাখি',
    dhonnobaad: 'ধন্যবাদ', dhonnobad: 'ধন্যবাদ', dhonyobad: 'ধন্যবাদ', itihas: 'ইতিহাস',
    itihaser: 'ইতিহাসের', itihash: 'ইতিহাস', itihasher: 'ইতিহাসের', jatio: 'জাতীয়',
    jatiyo: 'জাতীয়', jatyo: 'জাতীয়', noboborsher: 'নববর্ষের', noboborsho: 'নববর্ষ',
    pohela: 'পহেলা', shadhin: 'স্বাধীন', shadhinota: 'স্বাধীনতা', shagoto: 'স্বাগত',
    shagotom: 'স্বাগতম', shubho: 'শুভ', swadhin: 'স্বাধীন', swadhinota: 'স্বাধীনতা', utshob: 'উৎসব',
    utshober: 'উৎসবের', utsob: 'উৎসব',

    // ---------------------------------------------------------------------------
    // 13. Life, Dreams & Abstract Words                                      
    // ---------------------------------------------------------------------------
    asha: 'আশা', ashar: 'আশার', ashay: 'আশায়', bonton: 'বণ্টন', cheshta: 'চেষ্টা',
    cheshtar: 'চেষ্টার', chesta: 'চেষ্টা', chhotobela: 'ছোটবেলা', chotobela: 'ছোটবেলা',
    chotobelar: 'ছোটবেলার', jibon: 'জীবন', jibone: 'জীবনে', jiboner: 'জীবনের', jogajog: 'যোগাযোগ',
    jogajoger: 'যোগাযোগের', khobor: 'খবর', khoborer: 'খবরের', obostha: 'অবস্থা',
    oshubidha: 'অসুবিধা', osubidha: 'অসুবিধা', poristhiti: 'পরিস্থিতি', proyojon: 'প্রয়োজন',
    proyojone: 'প্রয়োজনে', proyojoniyo: 'প্রয়োজনীয়', shomadhan: 'সমাধান', shomossha: 'সমস্যা',
    shongkha: 'সংখ্যা', shongkhya: 'সংখ্যা', shopne: 'স্বপ্নে', shopner: 'স্বপ্নের',
    shopno: 'স্বপ্ন', shujog: 'সুযোগ', somadhan: 'সমাধান', somossa: 'সমস্যা', songkha: 'সংখ্যা',
    songkhya: 'সংখ্যা', sopno: 'স্বপ্ন', srijon: 'সৃজন', srishti: 'সৃষ্টি', sristi: 'সৃষ্টি',
    subidha: 'সুবিধা', sujog: 'সুযোগ',

    // ---------------------------------------------------------------------------
    // 14. Compound Words & Spelling Exceptions                               
    // ---------------------------------------------------------------------------
    // Tadbhava & compound words where র keeps its inherent vowel instead of forming a conjunct
    // (সরকার not সর্কার, একবার not এক্বার), plus place names.
    amio: 'আমিও', asmani: 'আসমানি', balti: 'বালতি', chalna: 'চালনা', daktar: 'ডাক্তার',
    dhakna: 'ঢাকনা', dinkal: 'দিনকাল', dorja: 'দরজা', dorkar: 'দরকার', ekbar: 'একবার',
    ekdin: 'একদিন', ekdom: 'একদম', ekjon: 'একজন', eksathe: 'একসাথে', ekta: 'একটা',
    ghorbari: 'ঘরবাড়ি', jolpai: 'জলপাই', kajkormo: 'কাজকর্ম', khelna: 'খেলনা', khorcha: 'খরচ',
    kolkata: 'কলকাতা', kolsi: 'কলসি', milbe: 'মিলবে', namta: 'নামটা', porpor: 'পরপর',
    rajniti: 'রাজনীতি', rajnoitik: 'রাজনৈতিক', shorbot: 'শরবত', shorisha: 'সরিষা',
    sorisha: 'সরিষা', sorkar: 'সরকার', tarpor: 'তারপর', tinbar: 'তিনবার', tinjon: 'তিনজন',


    // ===========================================================================
    // PART 2 - EVERYDAY ENGLISH
    // ===========================================================================

    // ---------------------------------------------------------------------------
    // 15. Pronouns, Question Words, Prepositions & Conjunctions              
    // ---------------------------------------------------------------------------
    about: 'অ্যাবাউট', above: 'অ্যাবাভ', after: 'আফটার', and: 'অ্যান্ড', at: 'অ্যাট',
    because: 'বিকজ', before: 'বিফোর', below: 'বিলো', between: 'বিটুইন', but: 'বাট', by: 'বাই',
    from: 'ফ্রম', he: 'হি', here: 'হিয়ার', how: 'হাউ', if: 'ইফ', in: 'ইন', into: 'ইনটু', it: 'ইট',
    my: 'মাই', myself: 'মাইসেলফ', on: 'অন', she: 'শি', that: 'দ্যাট', there: 'দেয়ার', these: 'দিজ',
    they: 'দে', this: 'দিস', those: 'দোজ', through: 'থ্রু', we: 'উই', what: 'হোয়াট',
    when: 'হোয়েন', where: 'হোয়্যার', which: 'হুইচ', who: 'হু', why: 'হোয়াই', with: 'উইথ',
    you: 'ইউ',
    // See also (kept under the section number in brackets): down(22), or(01), up(22)

    // ---------------------------------------------------------------------------
    // 16. Common Verbs, Modals & Stop/End Words                              
    // ---------------------------------------------------------------------------
    abort: 'অ্যাবোর্ট', adjust: 'অ্যাডজাস্ট', affect: 'অ্যাফেক্ট', ask: 'আস্ক',
    automatic: 'অটোম্যাটিক', battle: 'ব্যাটল', be: 'বি', begin: 'বিগিন', believe: 'বিলিভ',
    block: 'ব্লক', bring: 'ব্রিং', build: 'বিল্ড', call: 'কল', can: 'ক্যান', care: 'কেয়ার',
    cease: 'সিজ', come: 'কাম', complete: 'কমপ্লিট', control: 'কন্ট্রোল', could: 'কুড',
    disturb: 'ডিস্টার্ব', do: 'ডু', effect: 'এফেক্ট', end: 'এন্ড', enjoy: 'এনজয়', enter: 'এন্টার',
    feel: 'ফিল', fight: 'ফাইট', find: 'ফাইন্ড', finish: 'ফিনিশ', focus: 'ফোকাস', freeze: 'ফ্রিজ',
    get: 'গেট', give: 'গিভ', go: 'গো', halt: 'হল্ট', happen: 'হ্যাপেন', have: 'হ্যাভ',
    hear: 'হিয়ার', help: 'হেল্প', ignore: 'ইগনোর', interrupt: 'ইন্টারাপ্ট', keep: 'কিপ',
    kill: 'কিল', know: 'নো', leave: 'লিভ', let: 'লেট', look: 'লুক', make: 'মেইক', manage: 'ম্যানেজ',
    may: 'মে', might: 'মাইট', move: 'মুভ', must: 'মাস্ট', need: 'নিড', play: 'প্লে',
    prevent: 'প্রিভেন্ট', quit: 'কুইট', read: 'রিড', run: 'রান', say: 'সে', see: 'সি',
    shall: 'শ্যাল', should: 'শুড', show: 'শো', shutdown: 'শাটডাউন', standstill: 'স্ট্যান্ডস্টিল',
    start: 'স্টার্ট', stop: 'স্টপ', suspend: 'সাসপেন্ড', take: 'টেক', tell: 'টেল',
    terminate: 'টার্মিনেট', think: 'থিংক', trust: 'ট্রাস্ট', try: 'ট্রাই', use: 'ইউজ',
    wait: 'ওয়েট', want: 'ওয়ান্ট', will: 'উইল', work: 'ওয়ার্ক', working: 'ওয়ার্কিং', would: 'উড',
    write: 'রাইট',
    // See also (kept under the section number in brackets): intern(30), internship(30)

    // ---------------------------------------------------------------------------
    // 17. Adjectives & Adverbs                                               
    // ---------------------------------------------------------------------------
    angry: 'অ্যাংরি', bad: 'ব্যাড', beautiful: 'বিউটিফুল', best: 'বেস্ট', big: 'বিগ',
    casual: 'ক্যাজুয়াল', chance: 'চান্স', cold: 'কোল্ড', confirmed: 'কনফার্মড', cool: 'কুল',
    cute: 'কিউট', danger: 'ডেঞ্জার', dangerous: 'ডেঞ্জারাস', digital: 'ডিজিটাল', direct: 'ডাইরেক্ট',
    easy: 'ইজি', empty: 'এম্পটি', extra: 'এক্সট্রা', fake: 'ফেক', false: 'ফলস', fast: 'ফাস্ট',
    fat: 'ফ্যাট', final: 'ফাইনাল', fine: 'ফাইন', fit: 'ফিট', foreign: 'ফরেন', formal: 'ফর্মাল',
    full: 'ফুল', good: 'গুড', great: 'গ্রেট', handsome: 'হ্যান্ডসাম', happy: 'হ্যাপি',
    hard: 'হার্ড', high: 'হাই', hot: 'হট', ideal: 'আইডিয়াল', immediately: 'ইমিডিয়েটলি',
    important: 'ইম্পর্টেন্ট', last: 'লাস্ট', latest: 'লেটেস্ট', lazy: 'লেজি', little: 'লিটল',
    long: 'লং', low: 'লো', manual: 'ম্যানুয়াল', modern: 'মডার্ন', natural: 'ন্যাচারাল',
    naturally: 'ন্যাচারালি', new: 'নিউ', nice: 'নাইস', normal: 'নরমাল', official: 'অফিশিয়াল',
    old: 'ওল্ড', perfect: 'পারফেক্ট', perfectly: 'পারফেক্টলি', personal: 'পার্সোনাল', poor: 'পুওর',
    pro: 'প্রো', proper: 'প্রোপার', public: 'পাবলিক', ready: 'রেডি', real: 'রিয়েল', reason: 'রিজন',
    reasonable: 'রিজনেবল', regular: 'রেগুলার', rich: 'রিচ', risk: 'রিস্ক', round: 'রাউন্ড',
    sad: 'স্যাড', safe: 'সেফ', secret: 'সিক্রেট', serious: 'সিরিয়াস', short: 'শর্ট',
    simple: 'সিম্পল', slim: 'স্লিম', slow: 'স্লো', small: 'স্মল', smart: 'স্মার্ট',
    special: 'স্পেশাল', strong: 'স্ট্রং', super: 'সুপার', superb: 'সুপার্ব', tall: 'টল',
    tension: 'টেনশন', tired: 'টায়ার্ড', together: 'টুগেদার', total: 'টোটাল', true: 'ট্রু',
    urgent: 'আর্জেন্ট', weak: 'উইক', worst: 'ওয়ার্স্ট', wow: 'ওয়াও', wrong: 'রং',
    advanced: 'অ্যাডভান্সড', basic: 'বেসিক', elementary: 'এলিমেন্টারি',
    higher: 'হায়ার', intermediate: 'ইন্টারমিডিয়েট', preliminary: 'প্রিলিমিনারি',
    primary: 'প্রাইমারি', quaternary: 'কোয়াটারনারি', secondary: 'সেকেন্ডারি',
    alternate: 'অল্টারনেট', auxiliary: 'অক্সিলিয়ারি', compulsory: 'কমপালসরি',
    custom: 'কাস্টম', default: 'ডিফল্ট', general: 'জেনারেল', mandatory: 'ম্যান্ডেটরি',
    optional: 'অপশনাল', premium: 'প্রিমিয়াম', standard: 'স্ট্যান্ডার্ড',
    supplementary: 'সাপ্লিমেন্টারি', temporary: 'টেম্পোরারি', permanent: 'পার্মানেন্ট',
    active: 'অ্যাক্টিভ', external: 'এক্সটার্নাল', global: 'গ্লোবাল',
    internal: 'ইন্টারনাল', international: 'ইন্টারন্যাশনাল', national: 'ন্যাশনাল',
    partial: 'পার্শিয়াল', passive: 'প্যাসিভ', major: 'মেজর', minor: 'মাইনর',
    // See also (kept under the section number in brackets): first(21), right(22)

    // ---------------------------------------------------------------------------
    // 18. Everyday Expressions & Greetings                                   
    // ---------------------------------------------------------------------------
    actually: 'অ্যাকচুয়ালি', age: 'এজ', anyway: 'এনিওয়ে', attitude: 'অ্যাটিটিউড',
    basically: 'বেসিক্যালি', bestofluck: 'বেস্ট অব লাক', busy: 'বিজি', byebye: 'বাই-বাই',
    bytheway: 'বাই দ্য ওয়ে', cancel: 'ক্যান্সেল', cheating: 'চিটিং', confirm: 'কনফার্ম',
    congratulation: 'কনগ্র্যাচুলেশন', correct: 'কারেক্ট', date: 'ডেট', exactly: 'এক্স্যাক্টলি',
    excuse: 'এক্সকিউজ', excuseme: 'এক্সকিউজ মি', fact: 'ফ্যাক্ট', feeling: 'ফিলিং',
    fixing: 'ফিক্সিং', free: 'ফ্রি', goodluck: 'গুড লাক', goodmorning: 'গুড মর্নিং',
    goodnight: 'গুড নাইট', happybirthday: 'হ্যাপি বার্থডে', happynewyear: 'হ্যাপি নিউ ইয়ার',
    hi: 'হাই', hint: 'হিন্ট', idea: 'আইডিয়া', information: 'ইনফরমেশন', just: 'জাস্ট', life: 'লাইফ',
    maybe: 'মেবি', mind: 'মাইন্ড', mistake: 'মিসটেক', mood: 'মুড', name: 'নেম', no: 'নো',
    please: 'প্লিজ', problem: 'প্রবলেম', really: 'রিয়েলি', seeyou: 'সি ইউ', shortcut: 'শর্টকাট',
    solution: 'সলিউশন', sorry: 'স্যরি', surething: 'শিওর থিং', system: 'সিস্টেম',
    takecare: 'টেক কেয়ার', thanks: 'থ্যাংকস', thankyou: 'থ্যাংক ইউ', timepass: 'টাইমপাস',
    tip: 'টিপস', welcome: 'ওয়েলকাম', yes: 'ইয়েস',
    // See also (kept under the section number in brackets): can(16)

    // ---------------------------------------------------------------------------
    // 19. Time, Days & Calendar                                              
    // ---------------------------------------------------------------------------
    // -- Time words (29)
    afternoon: 'আফটারনুন', always: 'অলওয়েজ', am: 'এএম', calendar: 'ক্যালেন্ডার',
    calender: 'ক্যালেন্ডার', clock: 'ক্লক', day: 'ডে', early: 'আর্লি', evening: 'ইভনিং',
    hour: 'আওয়ার', late: 'লেট', minute: 'মিনিট', month: 'মান্থ', morning: 'মর্নিং', never: 'নেভার',
    night: 'নাইট', now: 'নাউ', pm: 'পিএম', schedule: 'শিডিউল', second: 'সেকেন্ড', sharp: 'শার্প',
    sometimes: 'সামটাইমস', then: 'দেন', time: 'টাইম', today: 'টুডে', tomorrow: 'টুমোরো',
    week: 'উইক', year: 'ইয়ার', yesterday: 'ইয়েস্টারডে',
    // -- Days of the week (Bangla spellings) (10)
    shonibar: 'শনিবার', sonibar: 'শনিবার', robibar: 'রবিবার', sombar: 'সোমবার', shombar: 'সোমবার',
    mongolbar: 'মঙ্গলবার', budhbar: 'বুধবার', brihospotibar: 'বৃহস্পতিবার',
    brihoshpotibar: 'বৃহস্পতিবার', shukrobar: 'শুক্রবার',

    // ---------------------------------------------------------------------------
    // 20. Numbers, Units & Measurements                                      
    // ---------------------------------------------------------------------------
    // -- Numbers & maths (17)
    average: 'অ্যাভারেজ', billion: 'বিলিয়ন', double: 'ডাবল', half: 'হাফ', hundred: 'হান্ড্রেড',
    million: 'মিলিয়ন', minus: 'মাইনাস', number: 'নাম্বার', percent: 'পারসেন্ট', plus: 'প্লাস',
    point: 'পয়েন্ট', quadruple: 'কোয়াড্রাপল', quarter: 'কোয়ার্টার', single: 'সিঙ্গেল',
    thousand: 'থাউজ্যান্ড', triple: 'ট্রিপল', zero: 'জিরো',
    // -- Units & measures (21)
    bundle: 'বান্ডিল', celsius: 'সেলসিয়াস', centimeter: 'সেন্টিমিটার', centimetre: 'সেন্টিমিটার',
    dozen: 'ডজন', feet: 'ফিট', foot: 'ফুট', gram: 'গ্রাম', height: 'হাইট', inch: 'ইঞ্চি',
    kg: 'কেজি', kilo: 'কিলো', kilometer: 'কিলোমিটার', kilometre: 'কিলোমিটার', liter: 'লিটার',
    litre: 'লিটার', meter: 'মিটার', metre: 'মিটার', pair: 'পেয়ার', piece: 'পিস', sack: 'বস্তা',
    // See also (kept under the section number in brackets): can(16), second(19)

    // ---------------------------------------------------------------------------
    // 21. Ordinals & Sequence Words                                         
    // ---------------------------------------------------------------------------
    // Ordinals are listed in natural order (first, second, third ...), not alphabetically.
    // -- Ordinals (107)
    first: 'ফার্স্ট', third: 'থার্ড', fourth: 'ফোর্থ', fifth: 'ফিফথ', sixth: 'সিক্সথ',
    seventh: 'সেভেন্থ', eighth: 'এইটথ', ninth: 'নাইন্থ', tenth: 'টেন্থ', eleventh: 'ইলেভেন্থ',
    twelfth: 'টুয়েলফথ', thirteenth: 'থার্টিন্থ', fourteenth: 'ফোর্টিন্থ', fifteenth: 'ফিফটিন্থ',
    sixteenth: 'সিক্সটিন্থ', seventeenth: 'সেভেন্টিন্থ', eighteenth: 'এইটিন্থ',
    nineteenth: 'নাইনটিন্থ', twentieth: 'টোয়েন্টিয়েথ', 'twenty-first': 'টোয়েন্টি-ফার্স্ট',
    'twenty-second': 'টোয়েন্টি-সেকেন্ড', 'twenty-third': 'টোয়েন্টি-থার্ড',
    'twenty-fourth': 'টোয়েন্টি-ফোর্থ', 'twenty-fifth': 'টোয়েন্টি-ফিফথ',
    'twenty-sixth': 'টোয়েন্টি-সিক্সথ', 'twenty-seventh': 'টোয়েন্টি-সেভেন্থ',
    'twenty-eighth': 'টোয়েন্টি-এইটথ', 'twenty-ninth': 'টোয়েন্টি-নাইন্থ', thirtieth: 'থার্টিয়েথ',
    'thirty-first': 'থার্টি-ফার্স্ট', 'thirty-second': 'থার্টি-সেকেন্ড',
    'thirty-third': 'থার্টি-থার্ড', 'thirty-fourth': 'থার্টি-ফোর্থ', 'thirty-fifth': 'থার্টি-ফিফথ',
    'thirty-sixth': 'থার্টি-সিক্সথ', 'thirty-seventh': 'থার্টি-সেভেন্থ',
    'thirty-eighth': 'থার্টি-এইটথ', 'thirty-ninth': 'থার্টি-নাইন্থ', fortieth: 'ফোর্টিয়েথ',
    'forty-first': 'ফোর্টি-ফার্স্ট', 'forty-second': 'ফোর্টি-সেকেন্ড',
    'forty-third': 'ফোর্টি-থার্ড', 'forty-fourth': 'ফোর্টি-ফোর্থ', 'forty-fifth': 'ফোর্টি-ফিফথ',
    'forty-sixth': 'ফোর্টি-সিক্সথ', 'forty-seventh': 'ফোর্টি-সেভেন্থ',
    'forty-eighth': 'ফোর্টি-এইটথ', 'forty-ninth': 'ফোর্টি-নাইন্থ', fiftieth: 'ফিফটিয়েথ',
    'fifty-first': 'ফিফটি-ফার্স্ট', 'fifty-second': 'ফিফটি-সেকেন্ড', 'fifty-third': 'ফিফটি-থার্ড',
    'fifty-fourth': 'ফিফটি-ফোর্থ', 'fifty-fifth': 'ফিফটি-ফিফথ', 'fifty-sixth': 'ফিফটি-সিক্সথ',
    'fifty-seventh': 'ফিফটি-সেভেন্থ', 'fifty-eighth': 'ফিফটি-এইটথ', 'fifty-ninth': 'ফিফটি-নাইন্থ',
    sixtieth: 'সিক্সটিয়েথ', 'sixty-first': 'সিক্সটি-ফার্স্ট', 'sixty-second': 'সিক্সটি-সেকেন্ড',
    'sixty-third': 'সিক্সটি-থার্ড', 'sixty-fourth': 'সিক্সটি-ফোর্থ', 'sixty-fifth': 'সিক্সটি-ফিফথ',
    'sixty-sixth': 'সিক্সটি-সিক্সথ', 'sixty-seventh': 'সিক্সটি-সেভেন্থ',
    'sixty-eighth': 'সিক্সটি-এইটথ', 'sixty-ninth': 'সিক্সটি-নাইন্থ', seventieth: 'সেভেন্টিয়েথ',
    'seventy-first': 'সেভেন্টি-ফার্স্ট', 'seventy-second': 'সেভেন্টি-সেকেন্ড',
    'seventy-third': 'সেভেন্টি-থার্ড', 'seventy-fourth': 'সেভেন্টি-ফোর্থ',
    'seventy-fifth': 'সেভেন্টি-ফিফথ', 'seventy-sixth': 'সেভেন্টি-সিক্সথ',
    'seventy-seventh': 'সেভেন্টি-সেভেন্থ', 'seventy-eighth': 'সেভেন্টি-এইটথ',
    'seventy-ninth': 'সেভেন্টি-নাইন্থ', eightieth: 'এইটিয়েথ', 'eighty-first': 'এইটি-ফার্স্ট',
    'eighty-second': 'এইটি-সেকেন্ড', 'eighty-third': 'এইটি-থার্ড', 'eighty-fourth': 'এইটি-ফোর্থ',
    'eighty-fifth': 'এইটি-ফিফথ', 'eighty-sixth': 'এইটি-সিক্সথ', 'eighty-seventh': 'এইটি-সেভেন্থ',
    'eighty-eighth': 'এইটি-এইটথ', 'eighty-ninth': 'এইটি-নাইন্থ', ninetieth: 'নাইনটিয়েথ',
    'ninety-first': 'নাইনটি-ফার্স্ট', 'ninety-second': 'নাইনটি-সেকেন্ড',
    'ninety-third': 'নাইনটি-থার্ড', 'ninety-fourth': 'নাইনটি-ফোর্থ', 'ninety-fifth': 'নাইনটি-ফিফথ',
    'ninety-sixth': 'নাইনটি-সিক্সথ', 'ninety-seventh': 'নাইনটি-সেভেন্থ',
    'ninety-eighth': 'নাইনটি-এইটথ', 'ninety-ninth': 'নাইনটি-নাইন্থ', hundredth: 'হান্ড্রেড্থ',
    'hundred and first': 'হান্ড্রেড অ্যান্ড ফার্স্ট', 'two hundredth': 'টু হান্ড্রেড্থ',
    'five hundredth': 'ফাইভ হান্ড্রেড্থ', thousandth: 'থাউজ্যান্ড্থ',
    'ten thousandth': 'টেন থাউজ্যান্ড্থ', 'hundred thousandth': 'হান্ড্রেড থাউজ্যান্ড্থ',
    millionth: 'মিলিয়ন্থ', billionth: 'বিলিয়ন্থ',
    // -- Sequence adverbs (13)
    firstly: 'ফার্স্টলি', secondly: 'সেকেন্ডলি', thirdly: 'থার্ডলি', fourthly: 'ফোর্থলি',
    fifthly: 'ফিফথলি', sixthly: 'সিক্সথলি', seventhly: 'সেভেন্থলি', eighthly: 'এইটথলি',
    ninthly: 'নাইন্থলি', tenthly: 'টেন্থলি', lastly: 'লাস্টলি', finally: 'ফাইনালি',
    primarily: 'প্রাইমারিলি',
    // -- Position & rank words (9)
    initial: 'ইনিশিয়াল', tertiary: 'টার্শিয়ারি', subsequent: 'সাবসিকোয়েন্ট',
    consecutive: 'কনসেকিউটিভ', sequence: 'সিকোয়েন্স', rank: 'র‍্যাংক', 'runner-up': 'রানার-আপ',
    penultimate: 'পেনাল্টিমেট', ultimate: 'আল্টিমেট',
    // See also (kept under the section number in brackets): double(20), order(32), quadruple(20),
    //   second(19), single(20), triple(20)

    // ---------------------------------------------------------------------------
    // 22. Directions & Positions                                             
    // ---------------------------------------------------------------------------
    // -- Compass (9)
    east: 'ইস্ট', west: 'ওয়েস্ট', north: 'নর্থ', south: 'সাউথ', northeast: 'নর্থইস্ট',
    northwest: 'নর্থওয়েস্ট', southeast: 'সাউথইস্ট', southwest: 'সাউথওয়েস্ট', compass: 'কম্পাস',
    // -- Position (25)
    left: 'লেফট', right: 'রাইট', up: 'আপ', down: 'ডাউন', top: 'টপ', bottom: 'বটম', front: 'ফ্রন্ট',
    back: 'ব্যাক', center: 'সেন্টার', middle: 'মিডল', side: 'সাইড', corner: 'কর্নার',
    inside: 'ইনসাইড', outside: 'আউটসাইড', upper: 'আপার', lower: 'লোয়ার', near: 'নিয়ার',
    far: 'ফার', forward: 'ফরওয়ার্ড', backward: 'ব্যাকওয়ার্ড', horizontal: 'হরাইজন্টাল',
    vertical: 'ভার্টিক্যাল', diagonal: 'ডায়াগোনাল', clockwise: 'ক্লকওয়াইজ',
    anticlockwise: 'অ্যান্টিক্লকওয়াইজ',
    // -- Navigation (12)
    direction: 'ডিরেকশন', position: 'পজিশন', location: 'লোকেশন', map: 'ম্যাপ', route: 'রুট',
    turn: 'টার্ন', 'u-turn': 'ইউ-টার্ন', straight: 'স্ট্রেইট', junction: 'জংশন', place: 'প্লেস',
    placement: 'প্লেসমেন্ট', placeholder: 'প্লেসহোল্ডার',

    // ---------------------------------------------------------------------------
    // 23. People, Family & Relationships                                     
    // ---------------------------------------------------------------------------
    aunty: 'আন্টি', baby: 'বেবি', bestfriend: 'বেস্ট ফ্রেন্ড', boy: 'বয়', boyfriend: 'বয়ফ্রেন্ড',
    breakup: 'ব্রেকআপ', bro: 'ব্রো', brother: 'ব্রাদার', celebrity: 'সেলিব্রিটি', child: 'চাইল্ড',
    colleague: 'কলিগ', couple: 'কাপল', cousin: 'কাজিন', crush: 'ক্রাশ', dad: 'ড্যাড',
    engagement: 'এনগেজমেন্ট', family: 'ফ্যামিলি', father: 'ফাদার', fiance: 'ফিয়াঁসে',
    friend: 'ফ্রেন্ড', gentleman: 'জেন্টলম্যান', girl: 'গার্ল', girlfriend: 'গার্লফ্রেন্ড',
    guest: 'গেস্ট', kid: 'কিড', lady: 'লেডি', love: 'লাভ', maid: 'মেইড', man: 'ম্যান', mate: 'মেট',
    mom: 'মম', mother: 'মাদার', mummy: 'মামি', neighbour: 'নেইবার', owner: 'ওনার', papa: 'পাপা',
    partner: 'পার্টনার', propose: 'প্রপোজ', relationship: 'রিলেশনশিপ', relative: 'রিলেটিভ',
    sis: 'সিস', sister: 'সিস্টার', star: 'স্টার', sweetheart: 'সুইটহার্ট', uncle: 'আঙ্কেল',
    vip: 'ভিআইপি', volunteer: 'ভলান্টিয়ার', woman: 'ওম্যান',

    // ---------------------------------------------------------------------------
    // 24. Home, Household & Utilities                                        
    // ---------------------------------------------------------------------------
    ac: 'এসি', balcony: 'ব্যালকনি', basin: 'বেসিন', basket: 'বাস্কেট', bathroom: 'বাথরুম',
    bed: 'বেড', bedroom: 'বেডরুম', bedsheet: 'বেডশিট', blanket: 'ব্লাঙ্কেট', blender: 'ব্লেন্ডার',
    bottle: 'বোতল', brush: 'ব্রাশ', bucket: 'বালতি', bulb: 'বাল্ব', burner: 'বার্নার',
    callingbell: 'কলিং বেল', candle: 'ক্যান্ডেল', carpet: 'কার্পেট', chair: 'চেয়ার',
    cleaner: 'ক্লিনার', commode: 'কমোড', cooker: 'কুকার', current: 'কারেন্ট', curtain: 'কার্টেন',
    detergent: 'ডিটারজেন্ট', dining: 'ডাইনিং', door: 'ডোর', drawingroom: 'ড্রয়িংরুম',
    dustbin: 'ডাস্টবিন', electricmeter: 'ইলেকট্রিক মিটার', fan: 'ফ্যান', fanspeed: 'ফ্যান স্পিড',
    flask: 'ফ্লাস্ক', freezer: 'ফ্রিজার', fridge: 'ফ্রিজ', gate: 'গেট', geyser: 'গিজার',
    glass: 'গ্লাস', handwash: 'হ্যান্ডওয়াশ', heater: 'হিটার', home: 'হোম', ips: 'আইপিএস',
    kitchen: 'কিচেন', led: 'এলইডি', light: 'লাইট', lighter: 'লাইটার', loadshedding: 'লোডশেডিং',
    mat: 'ম্যাট', mattress: 'ম্যাট্রেস', microwave: 'মাইক্রোওয়েভ', mirror: 'মিরর', mop: 'মপ',
    motor: 'মোটর', mug: 'মগ', oven: 'ওভেন', pillow: 'পিলো', plate: 'প্লেট', pot: 'পট',
    pump: 'পাম্প', rack: 'র‍্যাক', remote: 'রিমোট', ricecooker: 'রাইস কুকার', room: 'রুম',
    shampoo: 'শ্যাম্পু', shelf: 'শেলফ', shower: 'শাওয়ার', soap: 'সোপ', sofa: 'সোফা',
    spray: 'স্প্রে', stabilizer: 'স্টেবিলাইজার', table: 'টেবিল', toilet: 'টয়লেট', torch: 'টর্চ',
    towel: 'তোয়ালে', tray: 'ট্রে', tubelight: 'টিউবলাইট', tv: 'টিভি', ups: 'ইউপিএস',
    voltage: 'ভোল্টেজ', washingmachine: 'ওয়াশিং মেশিন', washroom: 'ওয়াশরুম', window: 'উইন্ডো',
    wire: 'ওয়্যার',
    // See also (kept under the section number in brackets): iron(59)

    // ---------------------------------------------------------------------------
    // 25. Fashion, Clothing & Beauty                                        
    // ---------------------------------------------------------------------------
    // -- Shirts & Tops (20)
    casualshirt: 'ক্যাজুয়াল শার্ট', chambrayshirt: 'শ্যামব্রে শার্ট', croptop: 'ক্রপ টপ',
    denimshirt: 'ডেনিম শার্ট', dressshirt: 'ড্রেস শার্ট', flannelshirt: 'ফ্ল্যানেল শার্ট',
    formalshirt: 'ফর্মাল শার্ট', graphictee: 'গ্রাফিক টি', hawaiianshirt: 'হাওয়াইয়ান শার্ট',
    henley: 'হেনলি', linenshirt: 'লিনেন শার্ট', oxfordshirt: 'অক্সফোর্ড শার্ট',
    poloshirt: 'পোলো শার্ট', shirt: 'শার্ট', sweatshirt: 'সোয়েটশার্ট', tanktop: 'ট্যাংক টপ',
    tunic: 'টিউনিক', tuxedoshirt: 'টাক্সিডো শার্ট', undershirt: 'আন্ডারশার্ট', vest: 'ভেস্ট',
    // -- Shirt style words (9)
    chambray: 'শ্যামব্রে', crop: 'ক্রপ', dress: 'ড্রেস', flannel: 'ফ্ল্যানেল', graphic: 'গ্রাফিক',
    oxford: 'অক্সফোর্ড', polo: 'পোলো', tee: 'টি', tuxedo: 'টাক্সিডো',
    // -- Collars & necklines (15)
    button: 'বাটন', buttondowncollar: 'বাটন-ডাউন কলার', camp: 'ক্যাম্প', campcollar: 'ক্যাম্প কলার',
    collar: 'কলার', collarless: 'কলারলেস', crewneck: 'ক্রু নেক', cubancollar: 'কিউবান কলার',
    mandarincollar: 'ম্যান্ডারিন কলার', neck: 'নেক', polocollar: 'পোলো কলার',
    roundneck: 'রাউন্ড নেক', spread: 'স্প্রেড', spreadcollar: 'স্প্রেড কলার', vneck: 'ভি-নেক',
    // -- Sleeves (9)
    cuff: 'কাফ', fullsleeve: 'ফুল স্লিভ', halfsleeve: 'হাফ স্লিভ', longsleeve: 'লং স্লিভ',
    shortsleeve: 'শর্ট স্লিভ', sleeve: 'স্লিভ', sleeveless: 'স্লিভলেস', three: 'থ্রি',
    threequartersleeve: 'থ্রি-কোয়ার্টার স্লিভ',
    // -- Fits (9)
    loose: 'লুজ', loosefit: 'লুজ ফিট', oversized: 'ওভারসাইজড', regularfit: 'রেগুলার ফিট',
    relaxed: 'রিল্যাক্সড', relaxedfit: 'রিল্যাক্সড ফিট', slimfit: 'স্লিম ফিট', tailored: 'টেইলার্ড',
    tailoredfit: 'টেইলার্ড ফিট',
    // -- Patterns & fabrics (13)
    check: 'চেক', cotton: 'কটন', dot: 'ডট', floral: 'ফ্লোরাল', plaid: 'প্লেইড', polka: 'পোলকা',
    polkadot: 'পোলকা ডট', polyester: 'পলিয়েস্টার', printed: 'প্রিন্টেড', satin: 'স্যাটিন',
    silk: 'সিল্ক', striped: 'স্ট্রাইপড', wool: 'উল',
    // -- Clothing (27)
    belt: 'বেল্ট', blazer: 'ব্লেজার', blouse: 'ব্লাউজ', cap: 'ক্যাপ', coat: 'কোট', frock: 'ফ্রক',
    gloves: 'গ্লাভস', halfpant: 'হাফ প্যান্ট', hat: 'হ্যাট', hoodie: 'হুডি', jacket: 'জ্যাকেট',
    jeans: 'জিন্স', kurti: 'কুর্তি', muffler: 'মাফলার', pant: 'প্যান্ট', petticoat: 'পেটিকোট',
    sandal: 'স্যান্ডেল', scarf: 'স্কার্ফ', shoes: 'জুতা', skirt: 'স্কার্ট', slipper: 'স্লিপার',
    socks: 'মোজা', suit: 'স্যুট', sweater: 'সোয়েটার', threepiece: 'থ্রি-পিস', tie: 'টাই',
    tshirt: 'টি-শার্ট',
    // -- Tailoring & shopping (8)
    boutique: 'বুটিক', collection: 'কালেকশন', design: 'ডিজাইন', fashion: 'ফ্যাশন', fitting: 'ফিটিং',
    readymade: 'রেডিমেড', showroom: 'শোরুম', tailor: 'দর্জি',
    // -- Jewellery & accessories (9)
    bracelet: 'ব্রেসলেট', chain: 'চেইন', earring: 'ইয়ারিং', locket: 'লকেট', purse: 'পার্স',
    ring: 'রিং', sunglasses: 'সানগ্লাস', wallet: 'ওয়ালেট', watch: 'ওয়াচ',
    // -- Beauty & grooming (20)
    blade: 'ব্লেড', bodyspray: 'বডি স্প্রে', comb: 'কম্ব', deodorant: 'ডিওডোরেন্ট',
    facewash: 'ফেসওয়াশ', foundation: 'ফাউন্ডেশন', gel: 'জেল', haircut: 'হেয়ারকাট',
    hairstyle: 'হেয়ার স্টাইল', lipstick: 'লিপস্টিক', lotion: 'লোশন', makeup: 'মেকআপ',
    nailpolish: 'নেইল পলিশ', parlor: 'পার্লার', parlour: 'পার্লার', perfume: 'পারফিউম',
    powder: 'পাউডার', razor: 'রেজার', salon: 'স্যালুন', trimmer: 'ট্রিমার',

    // ---------------------------------------------------------------------------
    // 26. Food, Drinks & Dining                                              
    // ---------------------------------------------------------------------------
    bbq: 'বারবিকিউ', beef: 'বিফ', bill: 'বিল', biscuit: 'বিস্কুট', bread: 'ব্রেড', buffet: 'বুফে',
    bun: 'বান', burger: 'বার্গার', butter: 'বাটার', cafe: 'ক্যাফে', cake: 'কেক', candy: 'ক্যান্ডি',
    cheese: 'চিজ', chewinggum: 'চুইং গাম', chicken: 'চিকেন', chips: 'চিপস', chowmein: 'চাউমিন',
    coke: 'কোক', colddrinks: 'কোল্ড ড্রিংকস', combo: 'কম্বো', cornflakes: 'কর্নফ্লেক্স',
    cream: 'ক্রিম', cup: 'কাপ', custard: 'কাস্টার্ড', dietcoke: 'ডায়েট কোক', donut: 'ডোনাট',
    energydrink: 'এনার্জি ড্রিংক', fastfood: 'ফাস্ট ফুড', food: 'ফুড', fork: 'ফর্ক',
    frenchfries: 'ফ্রেঞ্চ ফ্রাই', fresh: 'ফ্রেশ', friedchicken: 'ফ্রাইড চিকেন', frozen: 'ফ্রোজেন',
    fry: 'ফ্রাই', homedelivery: 'হোম ডেলিভারি', icecream: 'আইসক্রিম', jelly: 'জেলি', juice: 'জুস',
    kabab: 'কাবাব', ketchup: 'কেচাপ', lassi: 'লাচ্ছি', mayonnaise: 'মেয়োনিজ', menu: 'মেন্যু',
    milk: 'মিল্ক', milkshake: 'মিল্কশেক', mineralwater: 'মিনারেল ওয়াটার', mutton: 'মাটন',
    noodles: 'নুডলস', nuggets: 'নাগেটস', oats: 'ওটস', omelette: 'অমলেট', pasta: 'পাস্তা',
    pastry: 'পেস্ট্রি', pizza: 'পিৎজা', popcorn: 'পপকর্ন', pudding: 'পুডিং',
    restaurant: 'রেস্টুরেন্ট', salad: 'সালাদ', sandwich: 'স্যান্ডউইচ', sauce: 'সস', sausage: 'সসেজ',
    setmenu: 'সেট মেন্যু', shake: 'শেক', soup: 'স্যুপ', spicy: 'স্পাইসি', sweet: 'সুইট',
    takeaway: 'টেকঅ্যাওয়ে', tea: 'টি', teabag: 'টি ব্যাগ', tissue: 'টিস্যু', toast: 'টোস্ট',
    toffee: 'টফি', treat: 'ট্রিট', waiter: 'ওয়েটার', water: 'ওয়াটার', waterbottle: 'ওয়াটার বটল',
    // See also (kept under the section number in brackets): order(32)

    // ---------------------------------------------------------------------------
    // 27. Health, Medical & Fitness                                          
    // ---------------------------------------------------------------------------
    admit: 'অ্যাডমিট', allergy: 'অ্যালার্জি', ambulance: 'অ্যাম্বুলেন্স',
    antibiotic: 'অ্যান্টিবায়োটিক', bandage: 'ব্যান্ডেজ', bloodgroup: 'ব্লাড গ্রুপ',
    bloodpressure: 'ব্লাড প্রেসার', bloodtest: 'ব্লাড টেস্ট', cabin: 'কেবিন', caesarean: 'সিজার',
    cancer: 'ক্যানসার', capsule: 'ক্যাপসুল', checkup: 'চেকআপ', cholesterol: 'কোলেস্টেরল',
    clinic: 'ক্লিনিক', consultant: 'কনসালট্যান্ট', corona: 'করোনা', covid: 'কোভিড',
    ctscan: 'সিটি স্ক্যান', cylinder: 'সিলিন্ডার', dengue: 'ডেঙ্গু', dentist: 'ডেন্টিস্ট',
    depression: 'ডিপ্রেশন', diabetes: 'ডায়াবেটিস', diet: 'ডায়েট', discharge: 'ডিসচার্জ',
    doctor: 'ডক্টর', doctorer: 'ডক্টরের', donor: 'ডোনার', ecg: 'ইসিজি', emergency: 'ইমার্জেন্সি',
    exercise: 'এক্সারসাইজ', gastric: 'গ্যাস্ট্রিক', glucose: 'গ্লুকোজ', gym: 'জিম',
    heartattack: 'হার্ট অ্যাটাক', hospital: 'হসপিটাল', infection: 'ইনফেকশন', kidney: 'কিডনি',
    liver: 'লিভার', medicine: 'মেডিসিন', mri: 'এমআরআই', normaldelivery: 'নরমাল ডেলিভারি',
    nurse: 'নার্স', ointment: 'অয়েন্টমেন্ট', operation: 'অপারেশন', ot: 'ওটি',
    paracetamol: 'প্যারাসিটামল', patient: 'পেশেন্ট', pharmacy: 'ফার্মেসি',
    physiotherapy: 'ফিজিওথেরাপি', prescription: 'প্রেসক্রিপশন', pressure: 'প্রেসার',
    report: 'রিপোর্ট', saline: 'স্যালাইন', sanitizer: 'স্যানিটাইজার', specialist: 'স্পেশালিস্ট',
    stress: 'স্ট্রেস', stroke: 'স্ট্রোক', sugar: 'সুগার', surgery: 'সার্জারি', therapy: 'থেরাপি',
    thermometer: 'থার্মোমিটার', thyroid: 'থাইরয়েড', ultrasonogram: 'আলট্রাসনোগ্রাম',
    vaccine: 'ভ্যাকসিন', vitamin: 'ভিটামিন', ward: 'ওয়ার্ড', weight: 'ওয়েট', xray: 'এক্স-রে',

    // ---------------------------------------------------------------------------
    // 28. Pharmacy: Medicines & Brands                                      
    // ---------------------------------------------------------------------------
    ace: 'এইস', aceclofenac: 'অ্যাসিক্লোফেনাক', adovas: 'এডোভাস', alatrol: 'অ্যালাট্রল',
    albendazole: 'অ্যালবেন্ডাজল', alprazolam: 'অ্যালপ্রাজোলাম', ambroxol: 'অ্যামব্রক্সল',
    amcard: 'অ্যামকার্ড', amitriptyline: 'অ্যামিট্রিপটিলিন', amlodipine: 'অ্যামলোডিপিন',
    amlopres: 'অ্যামলোপ্রেস', amoclav: 'অ্যামোক্লাভ', amodis: 'এমোডিস',
    amoxicillin: 'অ্যামোক্সিসিলিন', antacid: 'অ্যান্টাসিড', aristocal: 'অ্যারিস্টোক্যাল',
    artificial: 'আর্টিফিশিয়াল', aspirin: 'অ্যাসপিরিন', atenolol: 'অ্যাটেনলল',
    atorvastatin: 'অ্যাটোরভাস্ট্যাটিন', azithrocin: 'এজিথ্রোসিন', azithromycin: 'অ্যাজিথ্রোমাইসিন',
    baclofen: 'ব্যাকলোফেন', betadine: 'বেটাডিন', betamethasone: 'বিটামেথাসোন',
    bextram: 'বেক্সট্রাম', bisacodyl: 'বিসাকোডিল', bisocor: 'বিসোকর', bisoprolol: 'বিসোপ্রোলল',
    bromhexine: 'ব্রোমহেক্সিন', burnol: 'বার্নল', camlosart: 'ক্যামলোসার্ট',
    carbimazole: 'কার্বিমাজল', ceevit: 'সিভিত', cef: 'সেফ', cefixime: 'সেফিক্সিম',
    cefotil: 'সেফোটিল', cefpodoxime: 'সেফপোডক্সিম', cefradine: 'সেফ্রাডিন',
    ceftriaxone: 'সেফট্রিয়াক্সোন', cefuroxime: 'সেফুরক্সিম', celecoxib: 'সেলিকক্সিব',
    cetirizine: 'সেটিরিজিন', chloramphenicol: 'ক্লোরামফেনিকল', chlorpheniramine: 'ক্লোরফেনিরামিন',
    ciprocin: 'সিপ্রোসিন', ciprofloxacin: 'সিপ্রোফ্লক্সাসিন', clarithromycin: 'ক্ল্যারিথ্রোমাইসিন',
    clavulanic: 'ক্লাভুলানিক', clonazepam: 'ক্লোনাজেপাম', clopidogrel: 'ক্লোপিডোগ্রেল',
    clotrimazole: 'ক্লোট্রিমাজল', comet: 'কমেট', complex: 'কমপ্লেক্স', concor: 'কনকর',
    coralcal: 'কোরালক্যাল', cotrimoxazole: 'কোট্রিমক্সাজল', deslor: 'ডেসলর', dettol: 'ডেটল',
    dextromethorphan: 'ডেক্সট্রোমেথরফান', diabinil: 'ডায়াবিনিল', diazepam: 'ডায়াজেপাম',
    diclofenac: 'ডাইক্লোফেনাক', domperidon: 'ডমপেরিডন', dose: 'ডোজ', doxycycline: 'ডক্সিসাইক্লিন',
    ecosprin: 'ইকোসপ্রিন', emcon: 'এমকন', eno: 'ইনো', entacyd: 'এনটাসিড',
    erythromycin: 'এরিথ্রোমাইসিন', escitalopram: 'এসসিটালোপ্রাম', esloric: 'এসলোরিক',
    esomep: 'এসোমেপ', esomeprazole: 'ইসোমেপ্রাজল', etoricoxib: 'ইটোরিকক্সিব', extend: 'এক্সটেন্ড',
    famotidine: 'ফ্যামোটিডিন', fefol: 'ফিফল', fenadin: 'ফেনাডিন', ferrous: 'ফেরাস', fexo: 'ফেক্সো',
    fexofenadine: 'ফেক্সোফেনাডিন', filmet: 'ফিলমেট', finix: 'ফিনিক্স', flagyl: 'ফ্লাজিল',
    flexi: 'ফ্লেক্সি', floclox: 'ফ্লুক্লক্স', fluconazole: 'ফ্লুকোনাজল', flunarizine: 'ফ্লুনারিজিন',
    folic: 'ফলিক', fumarate: 'ফিউমারেট', furosemide: 'ফিউরোসেমাইড', gabapentin: 'গ্যাবাপেন্টিন',
    gentamicin: 'জেন্টামাইসিন', gliclazide: 'গ্লাইক্লাজাইড', glimepiride: 'গ্লিমেপিরাইড',
    glucophage: 'গ্লুকোফেজ', hexisol: 'হেক্সিসল', histacin: 'হিস্টাসিন',
    hydrocortisone: 'হাইড্রোকর্টিসোন', ibuprofen: 'আইবুপ্রোফেন', icu: 'আইসিইউ', indever: 'ইনডেভার',
    inhaler: 'ইনহেলার', injection: 'ইনজেকশন', insulin: 'ইনসুলিন', ipill: 'আই-পিল',
    ivermectin: 'আইভারমেকটিন', ketoconazole: 'কিটোকোনাজল', ketorol: 'কিটোরোল',
    ketorolac: 'কিটোরোলাক', ketotifen: 'কিটোটিফেন', lactulose: 'ল্যাকটুলোজ',
    lansoprazole: 'ল্যানসোপ্রাজল', levofloxacin: 'লেভোফ্লক্সাসিন', levosalbutamol: 'লেভোসালবিউটামল',
    levothyroxine: 'লিভোথাইরক্সিন', linaglip: 'লিনাগ্লিপ', loperamide: 'লোপেরামাইড',
    loratadine: 'লরাটাডিন', losartan: 'লোসারটান', losectil: 'লোসেক্টিল', mask: 'মাস্ক',
    maxpro: 'ম্যাক্সপ্রো', mebendazole: 'মেবেন্ডাজল', metformin: 'মেটফরমিন',
    methylcobalamin: 'মিথাইলকোবালামিন', metoclopramide: 'মেটোক্লোপ্রামাইড',
    metronidazole: 'মেট্রোনিডাজল', monas: 'মোনাস', monocef: 'মনোসেফ', montair: 'মন্টেইর',
    montelukast: 'মন্টেলুকাস্ট', motigut: 'মোটিগাট', moxacil: 'মক্সাসিল',
    multivitamin: 'মাল্টিভিটামিন', mupirocin: 'মুপিরোসিন', napa: 'নাপা', naproxen: 'ন্যাপ্রক্সেন',
    neofloxin: 'নিওফ্লক্সিন', neotack: 'নিওট্যাক', nervita: 'নার্ভিটা', neuro: 'নিউরো',
    normens: 'নরমেন্স', odrel: 'ওড্রেল', omega: 'ওমেগা', omeprazole: 'ওমেপ্রাজল', omidon: 'ওমিডন',
    ondansetron: 'অনডানসেট্রন', orsaline: 'ওরস্যালাইন', ostocal: 'অস্টোক্যাল',
    pantonix: 'প্যান্টোনিক্স', pantoprazole: 'প্যান্টোপ্রাজল', phylopen: 'ফাইলোপেন', pill: 'পিল',
    povidone: 'পোভিডোন', prednisolone: 'প্রেডনিসোলোন', pregabalin: 'প্রিগাবালিন',
    propranolol: 'প্রোপ্রানোলল', rabep: 'র্যাবেপ', rabeprazole: 'র্যাবেপ্রাজল', rolac: 'রোলাক',
    rosuva: 'রোসুভা', rosuvastatin: 'রোসুভাস্ট্যাটিন', rupafin: 'রূপাফিন', salbutamol: 'সালবিউটামল',
    savlon: 'স্যাভলন', seclo: 'সেক্লো', secrin: 'সেক্রিন', sergel: 'সার্জেল',
    simethicone: 'সিমেথিকন', sulfadiazine: 'সালফাডায়াজিন', syrup: 'সিরাপ', tablet: 'ট্যাবলেট',
    tears: 'টিয়ারস', telmisartan: 'টেলমিসার্টান', terbinafine: 'টারবিনাফিন', test: 'টেস্ট',
    thyrox: 'থাইরক্স', tolperisone: 'টলপেরিসন', tramadol: 'ট্রামাডল', trulax: 'ট্রুল্যাক্স',
    trupan: 'ট্রুপ্যান', tusca: 'টাস্কা', vicks: 'ভিক্স', voltalin: 'ভল্টালিন', zif: 'জিফ',
    zimax: 'জিম্যাক্স',
    // See also (kept under the section number in brackets): calcium(59), iodine(59), oxygen(59),
    //   zinc(59)

    // ---------------------------------------------------------------------------
    // 29. Education, School & Campus                                        
    // ---------------------------------------------------------------------------
    admission: 'এডমিশন', admitcard: 'অ্যাডমিট কার্ড', application: 'অ্যাপ্লিকেশন',
    apply: 'অ্যাপ্লাই', assembly: 'অ্যাসেম্বলি', assignment: 'অ্যাসাইনমেন্ট',
    attendance: 'অ্যাটেনডেন্স', bag: 'ব্যাগ', batch: 'ব্যাচ', batchmate: 'ব্যাচমেট', bell: 'বেল',
    bench: 'বেঞ্চ', blackboard: 'ব্ল্যাকবোর্ড', book: 'বুক', break: 'ব্রেক', campus: 'ক্যাম্পাস',
    canteen: 'ক্যান্টিন', certificate: 'সার্টিফিকেট', cgpa: 'সিজিপিএ', chapter: 'চ্যাপ্টার',
    class: 'ক্লাস', classmate: 'ক্লাসমেট', classroom: 'ক্লাসরুম', coaching: 'কোচিং',
    college: 'কলেজ', convocation: 'কনভোকেশন', course: 'কোর্স', credit: 'ক্রেডিট', degree: 'ডিগ্রি',
    diploma: 'ডিপ্লোমা', duster: 'ডাস্টার', education: 'এডুকেশন', exam: 'এক্সাম',
    examination: 'এক্সামিনেশন', faculty: 'ফ্যাকাল্টি', fail: 'ফেল', fee: 'ফি', form: 'ফর্ম',
    fresher: 'ফ্রেশার', geometrybox: 'জিওমেট্রি বক্স', gpa: 'জিপিএ', grade: 'গ্রেড',
    guardian: 'গার্ডিয়ান', hall: 'হল', headsir: 'হেড স্যার', homework: 'হোমওয়ার্ক',
    honours: 'অনার্স', hostel: 'হোস্টেল', idcard: 'আইডি কার্ড', junior: 'জুনিয়র', lab: 'ল্যাব',
    lecture: 'লেকচার', lecturer: 'লেকচারার', library: 'লাইব্রেরি', madam: 'ম্যাডাম', mark: 'মার্ক',
    marker: 'মার্কার', marks: 'মার্কস', marksheet: 'মার্কশিট', masters: 'মাস্টার্স', merit: 'মেরিট',
    mess: 'মেস', note: 'নোট', notebook: 'নোটবুক', notice: 'নোটিশ', paper: 'পেপার', pass: 'পাস',
    pen: 'পেন', pencil: 'পেন্সিল', period: 'পিরিয়ড', practical: 'প্র্যাকটিক্যাল',
    presentation: 'প্রেজেন্টেশন', principal: 'প্রিন্সিপাল', private: 'প্রাইভেট',
    professor: 'প্রফেসর', project: 'প্রজেক্ট', question: 'কোশ্চেন', quiz: 'কুইজ',
    registration: 'রেজিস্ট্রেশন', result: 'রেজাল্ট', roll: 'রোল', roommate: 'রুমমেট',
    routine: 'রুটিন', rubber: 'রাবার', scale: 'স্কেল', scholarship: 'স্কলারশিপ', school: 'স্কুল',
    semester: 'সেমিস্টার', seminar: 'সেমিনার', senior: 'সিনিয়র', sir: 'স্যার', student: 'স্টুডেন্ট',
    study: 'স্টাডি', subject: 'সাবজেক্ট', syllabus: 'সিলেবাস', teacher: 'টিচার', thesis: 'থিসিস',
    tiffin: 'টিফিন', topic: 'টপিক', topper: 'টপার', training: 'ট্রেনিং',
    transcript: 'ট্রান্সক্রিপ্ট', tuition: 'টিউশন', uniform: 'ইউনিফর্ম', university: 'ইউনিভার্সিটি',
    vicechancellor: 'ভাইস চ্যান্সেলর', viva: 'ভাইভা', whiteboard: 'হোয়াইটবোর্ড',
    workshop: 'ওয়ার্কশপ',

    // ---------------------------------------------------------------------------
    // 30. Office, Work & Career                                              
    // ---------------------------------------------------------------------------
    appointment: 'অ্যাপয়েন্টমেন্ট', assistant: 'অ্যাসিস্ট্যান্ট', bonus: 'বোনাস', boss: 'বস',
    brainstorming: 'ব্রেইনস্টর্মিং', branch: 'ব্রাঞ্চ', business: 'বিজনেস', captain: 'ক্যাপ্টেন',
    chairman: 'চেয়ারম্যান', circular: 'সার্কুলার', client: 'ক্লায়েন্ট', cofounder: 'কো-ফাউন্ডার',
    committee: 'কমিটি', company: 'কোম্পানি', contribution: 'কন্ট্রিবিউশন',
    coordinator: 'কোঅর্ডিনেটর', crew: 'ক্রু', cv: 'সিভি', deadline: 'ডেডলাইন',
    department: 'ডিপার্টমেন্ট', desk: 'ডেস্ক', diary: 'ডায়েরি', director: 'ডিরেক্টর',
    discussion: 'ডিসকাশন', duty: 'ডিউটি', employee: 'এমপ্লয়ি', engineer: 'ইঞ্জিনিয়ার',
    engineers: 'ইঞ্জিনিয়ারস', executive: 'এক্সিকিউটিভ', fax: 'ফ্যাক্স', file: 'ফাইল',
    folder: 'ফোল্ডার', founder: 'ফাউন্ডার', freelancing: 'ফ্রিল্যান্সিং', goal: 'গোল',
    groupchat: 'গ্রুপ চ্যাট', increment: 'ইনক্রিমেন্ট', intern: 'ইন্টার্ন',
    internship: 'ইন্টার্নশিপ', interview: 'ইন্টারভিউ', job: 'জব', joining: 'জয়েনিং',
    leader: 'লিডার', manager: 'ম্যানেজার', meeting: 'মিটিং', member: 'মেম্বার', mentor: 'মেন্টর',
    office: 'অফিস', officer: 'অফিসার', overtime: 'ওভারটাইম', panel: 'প্যানেল', pdf: 'পিডিএফ',
    performance: 'পারফর্মেন্স', photocopy: 'ফটোকপি', player: 'প্লেয়ার', promotion: 'প্রমোশন',
    resign: 'রিজাইন', resignation: 'রেজিগনেশন', role: 'রোল', salary: 'স্যালারি', seal: 'সিল',
    shift: 'শিফট', sign: 'সাইন', signature: 'সিগনেচার', squad: 'স্কোয়াড', staff: 'স্টাফ',
    stamp: 'স্ট্যাম্প', stapler: 'স্টেপলার', strategy: 'স্ট্র্যাটেজি', support: 'সাপোর্ট',
    target: 'টার্গেট', task: 'টাস্ক', team: 'টিম', teammate: 'টিমমেট', teamwork: 'টিমওয়ার্ক',
    unit: 'ইউনিট',
    // See also (kept under the section number in brackets): dollar(67), manage(16)

    // ---------------------------------------------------------------------------
    // 31. Banking, Money & Finance                                           
    // ---------------------------------------------------------------------------
    amount: 'অ্যামাউন্ট', balance: 'ব্যালেন্স', bank: 'ব্যাংক', budget: 'বাজেট', card: 'কার্ড',
    cash: 'ক্যাশ', cashin: 'ক্যাশ ইন', cashout: 'ক্যাশ আউট', cheque: 'চেক',
    creditcard: 'ক্রেডিট কার্ড', currency: 'কারেন্সি', debitcard: 'ডেবিট কার্ড', deposit: 'ডিপোজিট',
    dps: 'ডিপিএস', economy: 'ইকোনোমি', fdr: 'এফডিআর', installment: 'ইনস্টলমেন্ট',
    interest: 'ইন্টারেস্ট', loan: 'লোন', loss: 'লস', mobilebanking: 'মোবাইল ব্যাংকিং',
    money: 'মানি', payment: 'পেমেন্ট', pin: 'পিন', profit: 'প্রফিট', receipt: 'রিসিট',
    remittance: 'রেমিট্যান্স', sendmoney: 'সেন্ড মানি', tax: 'ট্যাক্স', transfer: 'ট্রান্সফার',
    vat: 'ভ্যাট', withdraw: 'উইথড্র',

    // ---------------------------------------------------------------------------
    // 32. Shopping, Business & E-commerce                                    
    // ---------------------------------------------------------------------------
    agent: 'এজেন্ট', agreement: 'অ্যাগ্রিমেন্ট', bargain: 'বার্গেইন', booth: 'বুথ',
    brand: 'ব্র্যান্ড', cart: 'কার্ট', cashback: 'ক্যাশব্যাক', cashmemo: 'ক্যাশ মেমো',
    cashondelivery: 'ক্যাশ অন ডেলিভারি', changemoney: 'চেঞ্জ', contract: 'কন্ট্রাক্ট',
    coupon: 'কুপন', courier: 'কুরিয়ার', customer: 'কাস্টমার', delivery: 'ডেলিভারি',
    discount: 'ডিসকাউন্ট', exchange: 'এক্সচেঞ্জ', fair: 'ফেয়ার', freedelivery: 'ফ্রি ডেলিভারি',
    guarantee: 'গ্যারান্টি', market: 'মার্কেট', marketing: 'মার্কেটিং', offer: 'অফার',
    onlineorder: 'অনলাইন অর্ডার', order: 'অর্ডার', original: 'অরিজিনাল', parcel: 'পার্সেল',
    preorder: 'প্রি-অর্ডার', price: 'প্রাইস', product: 'প্রোডাক্ট', quality: 'কোয়ালিটি',
    refund: 'রিফান্ড', retail: 'রিটেইল', return: 'রিটার্ন', sale: 'সেল', sales: 'সেলস',
    secondhand: 'সেকেন্ড হ্যান্ড', shop: 'শপ', shopping: 'শপিং', shoppingmall: 'শপিং মল',
    size: 'সাইজ', stall: 'স্টল', startup: 'স্টার্টআপ', stock: 'স্টক', stockout: 'স্টক আউট',
    supermarket: 'সুপারমার্কেট', supplier: 'সাপ্লায়ার', tender: 'টেন্ডার',
    tradelicence: 'ট্রেড লাইসেন্স', voucher: 'ভাউচার', warranty: 'ওয়ারেন্টি', wholesale: 'হোলসেল',
    // See also (kept under the section number in brackets): colour(65)

    // ---------------------------------------------------------------------------
    // 33. Transport & Vehicles                                               
    // ---------------------------------------------------------------------------
    accident: 'অ্যাক্সিডেন্ট', airport: 'এয়ারপোর্ট', airporte: 'এয়ারপোর্টে', auto: 'অটো',
    bike: 'বাইক', brake: 'ব্রেক', bus: 'বাস', busstand: 'বাস স্ট্যান্ড', busstop: 'বাস স্টপ',
    car: 'কার', cng: 'সিএনজি', coach: 'কোচ', conductor: 'কন্ডাক্টর', counter: 'কাউন্টার',
    cycle: 'সাইকেল', diesel: 'ডিজেল', driver: 'ড্রাইভার', drivinglicence: 'ড্রাইভিং লাইসেন্স',
    drop: 'ড্রপ', engine: 'ইঞ্জিন', express: 'এক্সপ্রেস', ferry: 'ফেরি', fitness: 'ফিটনেস',
    flight: 'ফ্লাইট', flyover: 'ফ্লাইওভার', footpath: 'ফুটপাথ', garage: 'গ্যারেজ', gas: 'গ্যাস',
    gear: 'গিয়ার', headlight: 'হেডলাইট', helicopter: 'হেলিকপ্টার', helmet: 'হেলমেট',
    helper: 'হেলপার', highway: 'হাইওয়ে', horn: 'হর্ন', jam: 'জ্যাম', launch: 'লঞ্চ',
    launchpad: 'লঞ্চপ্যাড', licence: 'লাইসেন্স', license: 'লাইসেন্স', local: 'লোকাল', lorry: 'লরি',
    mechanic: 'মেকানিক', metrorail: 'মেট্রোরেল', microbus: 'মাইক্রোবাস', mileage: 'মাইলেজ',
    minibus: 'মিনিবাস', motorcycle: 'মোটরসাইকেল', nonstop: 'নন-স্টপ', numberplate: 'নাম্বার প্লেট',
    octane: 'অকটেন', overbridge: 'ওভারব্রিজ', parking: 'পার্কিং', petrol: 'পেট্রল',
    petrolpump: 'পেট্রোল পাম্প', pickup: 'পিকআপ', pickuppoint: 'পিকআপ পয়েন্ট', plane: 'প্লেন',
    platform: 'প্ল্যাটফর্ম', repair: 'রিপেয়ার', reserve: 'রিজার্ভ', ride: 'রাইড',
    ridesharing: 'রাইড শেয়ারিং', road: 'রোড', scooter: 'স্কুটার', seat: 'সিট',
    seatbelt: 'সিট বেল্ট', sensor: 'সেন্সর', service: 'সার্ভিস', ship: 'শিপ', signal: 'সিগন্যাল',
    sleeper: 'স্লিপার', speed: 'স্পিড', speedbreaker: 'স্পিড ব্রেকার', station: 'স্টেশন',
    steamer: 'স্টিমার', switch: 'সুইচ', tank: 'ট্যাংক', taxi: 'ট্যাক্সি', tempo: 'টেম্পো',
    terminal: 'টার্মিনাল', ticket: 'টিকিট', traffic: 'ট্রাফিক', train: 'ট্রেন', truck: 'ট্রাক',
    tyre: 'টায়ার', uber: 'উবার', underpass: 'আন্ডারপাস', van: 'ভ্যান',
    zebracrossing: 'জেব্রা ক্রসিং',
    // See also (kept under the section number in brackets): meter(20)

    // ---------------------------------------------------------------------------
    // 34. Travel, Tourism & Leisure                                          
    // ---------------------------------------------------------------------------
    beach: 'বিচ', booking: 'বুকিং', camping: 'ক্যাম্পিং', checkin: 'চেক-ইন', checkout: 'চেক-আউট',
    fun: 'ফান', guesthouse: 'গেস্ট হাউস', guide: 'গাইড', hilltracts: 'হিল ট্র্যাক্টস',
    holiday: 'হলিডে', hotel: 'হোটেল', hotele: 'হোটেলে', hoteler: 'হোটেলের', luggage: 'লাগেজ',
    museum: 'মিউজিয়াম', packagetour: 'প্যাকেজ ট্যুর', picnic: 'পিকনিক', resort: 'রিসোর্ট',
    roomrent: 'রুম রেন্ট', sightseeing: 'সাইটসিয়িং', tour: 'ট্যুর', trip: 'ট্রিপ',
    vacation: 'ভ্যাকেশন', weekend: 'উইকেন্ড', zoo: 'জু',

    // ---------------------------------------------------------------------------
    // 35. Entertainment, Music & Media                                       
    // ---------------------------------------------------------------------------
    action: 'অ্যাকশন', actor: 'অ্যাক্টর', actress: 'অ্যাক্ট্রেস', adventure: 'অ্যাডভেঞ্চার',
    animation: 'অ্যানিমেশন', anime: 'অ্যানিমে', band: 'ব্যান্ড', cartoon: 'কার্টুন',
    channel: 'চ্যানেল', cinema: 'সিনেমা', comedy: 'কমেডি', concert: 'কনসার্ট', dance: 'ড্যান্স',
    dj: 'ডিজে', drama: 'ড্রামা', episode: 'এপিসোড', film: 'ফিল্ম', game: 'গেম', hero: 'হিরো',
    heroine: 'হিরোইন', horror: 'হরর', instrument: 'ইন্সট্রুমেন্ট', instruments: 'ইন্সট্রুমেন্টস',
    movie: 'মুভি', music: 'মিউজিক', news: 'নিউজ', review: 'রিভিউ', romantic: 'রোমান্টিক',
    serial: 'সিরিয়াল', singer: 'সিঙ্গার', song: 'সং', stars: 'স্টার্স', talkshow: 'টক শো',
    thriller: 'থ্রিলার', trailer: 'ট্রেইলার', villain: 'ভিলেন', webseries: 'ওয়েব সিরিজ',
    // See also (kept under the section number in brackets): beach(34)

    // ---------------------------------------------------------------------------
    // 36. Events & Celebrations                                              
    // ---------------------------------------------------------------------------
    anniversary: 'অ্যানিভার্সারি', birthday: 'বার্থডে', celebration: 'সেলিব্রেশন', event: 'ইভেন্ট',
    festival: 'ফেস্টিভ্যাল', honeymoon: 'হানিমুন', party: 'পার্টি', photographer: 'ফটোগ্রাফার',
    photography: 'ফটোগ্রাফি', programme: 'প্রোগ্রাম', studio: 'স্টুডিও', surprise: 'সারপ্রাইজ',
    wedding: 'ওয়েডিং',

    // ---------------------------------------------------------------------------
    // 37. Sports & Games                                                     
    // ---------------------------------------------------------------------------
    badminton: 'ব্যাডমিন্টন', basketball: 'বাস্কেটবল', batsman: 'ব্যাটসম্যান',
    boundary: 'বাউন্ডারি', bowler: 'বোলার', carrom: 'ক্যারাম', catch: 'ক্যাচ',
    champion: 'চ্যাম্পিয়ন', chess: 'চেস', cricket: 'ক্রিকেট', draw: 'ড্র',
    fastbowler: 'ফাস্ট বোলার', football: 'ফুটবল', foul: 'ফাউল', four: 'ফোর',
    freefire: 'ফ্রি ফায়ার', gaming: 'গেমিং', goalkeeper: 'গোলকিপার', highlights: 'হাইলাইটস',
    hockey: 'হকি', jersey: 'জার্সি', league: 'লিগ', livescore: 'লাইভ স্কোর', ludo: 'লুডু',
    match: 'ম্যাচ', medal: 'মেডেল', notout: 'নট আউট', offside: 'অফসাইড', over: 'ওভার',
    penalty: 'পেনাল্টি', pitch: 'পিচ', pubg: 'পাবজি', ranking: 'র‍্যাংকিং', referee: 'রেফারি',
    semifinal: 'সেমিফাইনাল', series: 'সিরিজ', six: 'ছক্কা', spin: 'স্পিন', spinner: 'স্পিনার',
    stadium: 'স্টেডিয়াম', striker: 'স্ট্রাইকার', substitute: 'সাবস্টিটিউট', supporter: 'সাপোর্টার',
    tennis: 'টেনিস', tournament: 'টুর্নামেন্ট', trophy: 'ট্রফি', umpire: 'আম্পায়ার',
    videogame: 'ভিডিও গেম', volleyball: 'ভলিবল', wicket: 'উইকেট', win: 'উইন',
    worldcup: 'ওয়ার্ল্ড কাপ',
    // See also (kept under the section number in brackets): bronze(59), corner(22), fast(17),
    //   gold(59), silver(59)

    // ---------------------------------------------------------------------------
    // 38. Government, Law & Politics                                         
    // ---------------------------------------------------------------------------
    advocate: 'অ্যাডভোকেট', affidavit: 'অ্যাফিডেভিট', ansar: 'আনসার', army: 'আর্মি',
    arrest: 'অ্যারেস্ট', attest: 'অ্যাটেস্ট', bail: 'বেইল', banner: 'ব্যানার', bgb: 'বিজিবি',
    birthcertificate: 'বার্থ সার্টিফিকেট', blockade: 'ব্লকেড', candidate: 'ক্যান্ডিডেট',
    case: 'কেস', constitution: 'কনস্টিটিউশন', corruption: 'করাপশন', councillor: 'কাউন্সিলর',
    court: 'কোর্ট', curfew: 'কার্ফিউ', customs: 'কাস্টমস', dc: 'ডিসি', dig: 'ডিআইজি',
    election: 'ইলেকশন', festoon: 'ফেস্টুন', gd: 'জিডি', government: 'গভর্নমেন্ট',
    ground: 'গ্রাউন্ড', ig: 'আইজি', immigration: 'ইমিগ্রেশন', judge: 'জাজ', law: 'ল',
    lawyer: "ল'ইয়ার", microphone: 'মাইক্রোফোন', minister: 'মিনিস্টার', ministry: 'মিনিস্ট্রি',
    mp: 'এমপি', nid: 'এনআইডি', notary: 'নোটারি', oc: 'ওসি', out: 'আউট', parliament: 'পার্লামেন্ট',
    passport: 'পাসপোর্ট', permit: 'পারমিট', police: 'পুলিশ', policy: 'পলিসি', poster: 'পোস্টার',
    president: 'প্রেসিডেন্ট', primeminister: 'প্রাইম মিনিস্টার', procession: 'প্রসেশন',
    protest: 'প্রটেস্ট', quota: 'কোটা', rab: 'র‍্যাব', reform: 'রিফর্ম', remand: 'রিমান্ড',
    secretary: 'সেক্রেটারি', securityguard: 'সিকিউরিটি গার্ড', slogan: 'স্লোগান', sp: 'এসপি',
    strike: 'স্ট্রাইক', tiger: 'টাইগার', uno: 'ইউএনও', verdict: 'ভার্ডিক্ট', visa: 'ভিসা',
    vote: 'ভোট', warrant: 'ওয়ারেন্ট',

    // ---------------------------------------------------------------------------
    // 39. Housing, Construction & Property                                   
    // ---------------------------------------------------------------------------
    address: 'অ্যাড্রেস', advance: 'অ্যাডভান্স', apartment: 'অ্যাপার্টমেন্ট',
    architect: 'আর্কিটেক্ট', bachelor: 'ব্যাচেলর', basement: 'বেজমেন্ট', building: 'বিল্ডিং',
    cctv: 'সিসিটিভি', cement: 'সিমেন্ট', construction: 'কন্সট্রাকশন', contractor: 'কন্ট্রাক্টর',
    decoration: 'ডেকোরেশন', developer: 'ডেভেলপার', electrician: 'ইলেকট্রিশিয়ান', flat: 'ফ্ল্যাট',
    floor: 'ফ্লোর', furniture: 'ফার্নিচার', grill: 'গ্রিল', groundfloor: 'গ্রাউন্ড ফ্লোর',
    guard: 'গার্ড', intercom: 'ইন্টারকম', interior: 'ইন্টিরিয়র', land: 'ল্যান্ড',
    landlord: 'ল্যান্ডলর্ড', lift: 'লিফট', moving: 'মুভিং', packing: 'প্যাকিং', paint: 'পেইন্ট',
    pipe: 'পাইপ', plan: 'প্ল্যান', plot: 'প্লট', plumber: 'প্লাম্বার', putty: 'পুটি', rent: 'রেন্ট',
    roof: 'রুফ', rooftop: 'রুফটপ', security: 'সিকিউরিটি', servicecharge: 'সার্ভিস চার্জ',
    shifting: 'শিফটিং', stairs: 'স্টেয়ার্স', sublet: 'সাবলেট', tenant: 'টেন্যান্ট', tiles: 'টাইলস',
    tolet: 'টু-লেট',

    // ---------------------------------------------------------------------------
    // 40. Literature & Writing                                               
    // ---------------------------------------------------------------------------
    allegory: 'অ্যালিগরি', antagonist: 'অ্যান্টাগনিস্ট', anthology: 'অ্যান্থোলজি',
    autobiography: 'অটোবায়োগ্রাফি', biography: 'বায়োগ্রাফি', classic: 'ক্ল্যাসিক', comic: 'কমিক',
    crime: 'ক্রাইম', 'detective-fiction': 'ডিটেকটিভ ফিকশন', dialogue: 'ডায়ালগ', elegy: 'এলিজি',
    epic: 'এপিক', epigram: 'এপিগ্রাম', essay: 'এসে', fable: 'ফেবল', 'fairy-tale': 'ফেয়ারি টেল',
    fantasy: 'ফ্যান্টাসি', farce: 'ফার্স', fiction: 'ফিকশন', folklore: 'ফোকলোর',
    'free-verse': 'ফ্রি ভার্স', genre: 'জনরা', 'graphic-novel': 'গ্রাফিক নভেল', haiku: 'হাইকু',
    imagery: 'ইমেজারি', irony: 'আয়রনি', legend: 'লেজেন্ড', limerick: 'লিমেরিক',
    literature: 'লিটারেচার', lyric: 'লিরিক', memoir: 'মেমোয়ার', metaphor: 'মেটাফর',
    monologue: 'মনোলগ', mystery: 'মিস্ট্রি', myth: 'মিথ', narrator: 'ন্যারেটর',
    'non-fiction': 'নন-ফিকশন', novel: 'নভেল', novella: 'নভেলা', parody: 'প্যারোডি',
    poetry: 'পোয়েট্রি', prose: 'প্রোজ', protagonist: 'প্রোটাগনিস্ট', rhyme: 'রাইম', rhythm: 'রিদম',
    romance: 'রোমান্স', satire: 'স্যাটায়ার', 'science-fiction': 'সায়েন্স ফিকশন',
    'short-story': 'শর্ট স্টোরি', simile: 'সিমিলি', soliloquy: 'সলিলকি', sonnet: 'সনেট',
    stanza: 'স্ট্যাঞ্জা', symbolism: 'সিম্বলিজম', theme: 'থিম', tragedy: 'ট্র্যাজেডি',
    tragicomedy: 'ট্র্যাজিকমেডি', travelogue: 'ট্র্যাভেলগ', verse: 'ভার্স',
    // See also (kept under the section number in brackets): adventure(35), character(47),
    //   comedy(35), diary(30), drama(35), horror(35), letter(47), plot(39), thriller(35)


    // ===========================================================================
    // PART 3 - TECHNOLOGY
    // ===========================================================================

    // ---------------------------------------------------------------------------
    // 41. Devices, Hardware & Gadgets                                        
    // ---------------------------------------------------------------------------
    battery: 'ব্যাটারি', cable: 'ক্যাবল', camera: 'ক্যামেরা', charge: 'চার্জ', charger: 'চার্জার',
    chargerer: 'চার্জারের', computer: 'কম্পিউটার', desktop: 'ডেস্কটপ', device: 'ডিভাইস',
    display: 'ডিসপ্লে', earphone: 'ইয়ারফোন', email: 'ইমেইল', fingerprint: 'ফিঙ্গারপ্রিন্ট',
    flash: 'ফ্ল্যাশ', hang: 'হ্যাং', harddisk: 'হার্ড ডিস্ক', hardware: 'হার্ডওয়্যার',
    headphone: 'হেডফোন', hotspot: 'হটস্পট', internet: 'ইন্টারনেট', iphone: 'আইফোন', lag: 'ল্যাগ',
    laptop: 'ল্যাপটপ', memorycard: 'মেমরি কার্ড', mike: 'মাইক', monitor: 'মনিটর', mouse: 'মাউস',
    pad: 'প্যাড', pendrive: 'পেনড্রাইভ', photo: 'ফটো', ping: 'পিং', plug: 'প্লাগ', port: 'পোর্ট',
    powerbank: 'পাওয়ার ব্যাংক', printer: 'প্রিন্টার', router: 'রাউটার', scanner: 'স্ক্যানার',
    screen: 'স্ক্রিন', screenshot: 'স্ক্রিনশট', selfie: 'সেলফি', smartphone: 'স্মার্টফোন',
    socket: 'সকেট', software: 'সফটওয়্যার', speaker: 'স্পিকার', tab: 'ট্যাব', touch: 'টাচ',
    touchscreen: 'টাচস্ক্রিন', usb: 'ইউএসবি', wallpaper: 'ওয়ালপেপার', website: 'ওয়েবসাইট',
    // See also (kept under the section number in brackets): cloud(63)

    // ---------------------------------------------------------------------------
    // 42. Social Media & Online                                              
    // ---------------------------------------------------------------------------
    account: 'অ্যাকাউন্ট', add: 'অ্যাড', app: 'অ্যাপ', comment: 'কমেন্ট', coverphoto: 'কভার ফটো',
    dp: 'ডিপি', emoji: 'ইমোজি', facebook: 'ফেসবুক', feedback: 'ফিডব্যাক', follow: 'ফলো',
    follower: 'ফলোয়ার', friendrequest: 'ফ্রেন্ড রিকোয়েস্ট', group: 'গ্রুপ', hashtag: 'হ্যাশট্যাগ',
    instagram: 'ইনস্টাগ্রাম', like: 'লাইক', link: 'লিংক', linkedin: 'লিংকডইন', meme: 'মিম',
    message: 'মেসেজ', messenger: 'মেসেঞ্জার', notification: 'নোটিফিকেশন', offline: 'অফলাইন',
    online: 'অনলাইন', page: 'পেজ', post: 'পোস্ট', profile: 'প্রোফাইল', reel: 'রিল',
    screenshare: 'স্ক্রিন শেয়ার', share: 'শেয়ার', snapchat: 'স্ন্যাপচ্যাট', status: 'স্ট্যাটাস',
    sticker: 'স্টিকার', story: 'স্টোরি', subscribe: 'সাবস্ক্রাইব', tag: 'ট্যাগ',
    telegram: 'টেলিগ্রাম', tiktok: 'টিকটক', trending: 'ট্রেন্ডিং', troll: 'ট্রল', twitter: 'টুইটার',
    videocall: 'ভিডিও কল', viral: 'ভাইরাল', whatsapp: 'হোয়াটসঅ্যাপ', x: 'এক্স', youtube: 'ইউটিউব',

    // ---------------------------------------------------------------------------
    // 43. Telecom & Mobile Services                                          
    // ---------------------------------------------------------------------------
    biometric: 'বায়োমেট্রিক', broadband: 'ব্রডব্যান্ড', cableline: 'ক্যাবল লাইন',
    calldrop: 'কল ড্রপ', callerid: 'কলার আইডি', callforwarding: 'কল ফরওয়ার্ডিং',
    callrate: 'কল রেট', callrecord: 'কল রেকর্ড', callwaiting: 'কল ওয়েটিং',
    conferencecall: 'কনফারেন্স কল', contact: 'কন্টাক্ট', contactlist: 'কন্টাক্ট লিস্ট',
    customercare: 'কাস্টমার কেয়ার', datapack: 'ডাটা প্যাক', dial: 'ডায়াল', dialer: 'ডায়ালার',
    dialpad: 'ডায়াল প্যাড', dialtone: 'ডায়াল টোন', dishline: 'ডিশ লাইন',
    donotdisturb: 'ডু নট ডিস্টার্ব', extension: 'এক্সটেনশন', fiber: 'ফাইবার',
    flightmode: 'ফ্লাইট মোড', fon: 'ফোন', gb: 'জিবি', hello: 'হ্যালো', helpline: 'হেল্পলাইন',
    hold: 'হোল্ড', hotline: 'হটলাইন', internetpack: 'ইন্টারনেট প্যাক', isp: 'আইএসপি',
    keypad: 'কিপ্যাড', landline: 'ল্যান্ডলাইন', loudspeaker: 'লাউডস্পিকার', mb: 'এমবি',
    minutes: 'মিনিট', missedcall: 'মিসড কল', mobail: 'মোবাইল', mobailer: 'মোবাইলের',
    mobile: 'মোবাইল', modem: 'মডেম', operator: 'অপারেটর', outofcoverage: 'আউট অব কভারেজ',
    phone: 'ফোন', phonee: 'ফোনে', phoner: 'ফোনের', postpaid: 'পোস্টপেইড', prepaid: 'প্রিপেইড',
    receive: 'রিসিভ', recharge: 'রিচার্জ', redial: 'রিডায়াল', ringback: 'রিং ব্যাক',
    ringing: 'রিঙ্গিং', ringtone: 'রিংটোন', roaming: 'রোমিং', savenumber: 'সেভ নাম্বার',
    silent: 'সাইলেন্ট', simcard: 'সিম কার্ড', simregistration: 'সিম রেজিস্ট্রেশন', sms: 'এসএমএস',
    speeddial: 'স্পিড ডায়াল', switchedoff: 'সুইচড অফ', telephone: 'টেলিফোন', tollfree: 'টোল ফ্রি',
    tower: 'টাওয়ার', unreachable: 'আনরিচেবল', vibrate: 'ভাইব্রেট', voicemail: 'ভয়েসমেইল',

    // ---------------------------------------------------------------------------
    // 44. Computer Actions & Controls                                       
    // ---------------------------------------------------------------------------
    accept: 'অ্যাকসেপ্ট', allow: 'অ্যালাউ', backup: 'ব্যাকআপ', bookmark: 'বুকমার্ক',
    category: 'ক্যাটাগরি', clear: 'ক্লিয়ার', click: 'ক্লিক', close: 'ক্লোজ', connect: 'কানেক্ট',
    continue: 'কন্টিনিউ', copy: 'কপি', customise: 'কাস্টমাইজ', customize: 'কাস্টমাইজ', cut: 'কাট',
    decline: 'ডিক্লাইন', delete: 'ডিলিট', deny: 'ডিনাই', disconnect: 'ডিসকানেক্ট',
    download: 'ডাউনলোড', edit: 'এডিট', exit: 'এক্সিট', export: 'এক্সপোর্ট', favorite: 'ফেভারিট',
    format: 'ফরম্যাট', generate: 'জেনারেট', generator: 'জেনারেটর', hide: 'হাইড',
    historical: 'হিস্ট্রিক্যাল', history: 'হিস্ট্রি', id: 'আইডি', import: 'ইম্পোর্ট',
    index: 'ইনডেক্স', install: 'ইনস্টল', instance: 'ইন্সট্যান্স', instant: 'ইন্সট্যান্ট',
    instruction: 'ইন্সট্রাকশন', instructor: 'ইন্সট্রাকটর', list: 'লিস্ট', lock: 'লক', login: 'লগইন',
    logout: 'লগআউট', maximize: 'ম্যাক্সিমাইজ', media: 'মিডিয়া', minimize: 'মিনিমাইজ', mute: 'মিউট',
    navigation: 'নেভিগেশন', next: 'নেক্সট', notepad: 'নোটপ্যাড', open: 'ওপেন', otp: 'ওটিপি',
    password: 'পাসওয়ার্ড', paste: 'পেস্ট', pause: 'পজ', power: 'পাওয়ার', poweroff: 'পাওয়ার অফ',
    press: 'প্রেস', previous: 'প্রিভিয়াস', print: 'প্রিন্ট', privacy: 'প্রাইভেসি', reboot: 'রিবুট',
    recent: 'রিসেন্ট', record: 'রেকর্ড', redo: 'রিডু', refresh: 'রিফ্রেশ', register: 'রেজিস্টার',
    reject: 'রিজেক্ট', related: 'রিলেটেড', reload: 'রিলোড', rename: 'রিনেম', replace: 'রিপ্লেস',
    reset: 'রিসেট', restart: 'রিস্টার্ট', restore: 'রিস্টোর', save: 'সেভ', saveas: 'সেভ এজ',
    scan: 'স্ক্যান', scroll: 'স্ক্রল', search: 'সার্চ', select: 'সিলেক্ট', selectall: 'সিলেক্ট অল',
    setting: 'সেটিং', settings: 'সেটিংস', signin: 'সাইন ইন', signup: 'সাইন আপ', similar: 'সিমিলার',
    skip: 'স্কিপ', submit: 'সাবমিট', swipe: 'সোয়াইপ', tap: 'ট্যাপ', turnoff: 'টার্ন অফ',
    turnon: 'টার্ন অন', undo: 'আনডু', unhide: 'আনহাইড', uninstall: 'আনইনস্টল', unlock: 'আনলক',
    unmute: 'আনমিউট', update: 'আপডেট', upgrade: 'আপগ্রেড', upload: 'আপলোড', username: 'ইউজারনেম',
    verify: 'ভেরিফাই',
    // See also (kept under the section number in brackets): back(22), play(16)

    // ---------------------------------------------------------------------------
    // 45. UI Elements, Boxes & Shapes                                        
    // ---------------------------------------------------------------------------
    alertbox: 'অ্যালার্ট বক্স', border: 'বর্ডার', box: 'বক্স', carton: 'কার্টন',
    cashbox: 'ক্যাশ বক্স', checkbox: 'চেকবক্স', column: 'কলাম', combobox: 'কম্বো বক্স',
    commentbox: 'কমেন্ট বক্স', container: 'কনটেইনার', dialogbox: 'ডায়ালগ বক্স',
    dropdown: 'ড্রপডাউন', frame: 'ফ্রেম', giftbox: 'গিফট বক্স', grid: 'গ্রিড', inbox: 'ইনবক্স',
    inputbox: 'ইনপুট বক্স', lunchbox: 'টিফিন বক্স', matchbox: 'ম্যাচবক্স', messagebox: 'মেসেজ বক্স',
    modal: 'মোডাল', outbox: 'আউটবক্স', package: 'প্যাকেজ', packet: 'প্যাকেট', row: 'রো',
    searchbox: 'সার্চবক্স', section: 'সেকশন', square: 'স্কয়ার', textbox: 'টেক্সটবক্স',
    toolbox: 'টুল বক্স',

    // ---------------------------------------------------------------------------
    // 46. Browsers, Tech Companies & Online Services                         
    // ---------------------------------------------------------------------------
    android: 'অ্যান্ড্রয়েড', apple: 'অ্যাপল', appstore: 'অ্যাপ স্টোর', bing: 'বিং', brave: 'ব্রেভ',
    chrome: 'ক্রোম', drive: 'ড্রাইভ', edge: 'এজ', firefox: 'ফায়ারফক্স', gmail: 'জিমেইল',
    google: 'গুগল', ios: 'আইওএস', linux: 'লিনাক্স', mac: 'ম্যাক', macos: 'ম্যাকওএস', maps: 'ম্যাপস',
    microsoft: 'মাইক্রোসফট', netflix: 'নেটফ্লিক্স', opera: 'অপেরা', playstore: 'প্লে স্টোর',
    safari: 'সাফারি', spotify: 'স্পটিফাই', teams: 'টিমস', windows: 'উইন্ডোজ', yahoo: 'ইয়াহু',
    zoom: 'জুম',

    // ---------------------------------------------------------------------------
    // 47. Typing, Text & Fonts                                               
    // ---------------------------------------------------------------------------
    align: 'অ্যালাইন', alphabet: 'আলফাবেট', bold: 'বোল্ড', capital: 'ক্যাপিটাল',
    character: 'ক্যারেক্টার', consonant: 'কনসোনেন্ট', conversion: 'কনভার্সন', convert: 'কনভার্ট',
    converter: 'কনভার্টার', font: 'ফন্ট', input: 'ইনপুট', italic: 'ইটালিক', key: 'কী',
    keyboard: 'কীবোর্ড', layout: 'লেআউট', letter: 'লেটার', letters: 'লেটার্স', line: 'লাইন',
    lowercase: 'লোয়ারকেস', narrative: 'ন্যারেটিভ', output: 'আউটপুট', paragraph: 'প্যারাগ্রাফ',
    phonetic: 'ফোনেটিক', script: 'স্ক্রিপ্ট', sentence: 'সেন্টেন্স', style: 'স্টাইল',
    text: 'টেক্সট', translate: 'ট্রান্সলেট', translation: 'ট্রান্সলেশন', translator: 'ট্রান্সলেটর',
    transliterate: 'ট্রান্সলিটারেট', transliteration: 'ট্রান্সলিটারেশন', type: 'টাইপ',
    typing: 'টাইপিং', underline: 'আন্ডারলাইন', unicode: 'ইউনিকোড', uppercase: 'আপারকেস',
    vowel: 'ভাওয়েল', word: 'ওয়ার্ড', words: 'ওয়ার্ডস',
    // See also (kept under the section number in brackets): small(17)

    // ---------------------------------------------------------------------------
    // 48. Dictionary, Grammar & Linguistics                                  
    // ---------------------------------------------------------------------------
    accent: 'অ্যাকসেন্ট', adjective: 'অ্যাডজেক্টিভ', adverb: 'অ্যাডভার্ব', antonym: 'অ্যান্টোনিম',
    autocomplete: 'অটো-কমপ্লিট', conjunction: 'কনজাংশন', context: 'কনটেক্সট', details: 'ডিটেইলস',
    dictionary: 'ডিকশনারি', example: 'এক্সাম্পল', explanation: 'এক্সপ্লেনেশন', grammar: 'গ্রামার',
    interjection: 'ইন্টারজেকশন', language: 'ল্যাঙ্গুয়েজ', lookup: 'লুকআপ', meaning: 'মিনিং',
    noun: 'নাউন', origin: 'অরিজিন', plural: 'প্লুরাল', prefix: 'প্রিফিক্স',
    preposition: 'প্রিপজিশন', pronoun: 'প্রোনাউন', pronunciation: 'প্রোনানসিয়েশন', query: 'কোয়েরি',
    singular: 'সিঙ্গুলার', sound: 'সাউন্ড', speech: 'স্পিচ', spelling: 'স্পেলিং', suffix: 'সাফিক্স',
    suggestion: 'সাজেশন', synonym: 'সিনোনিম', tense: 'টেন্স', usage: 'ইউসেজ', verb: 'ভার্ব',
    vocabulary: 'ভোকাবুলারি', voice: 'ভয়েস',
    // See also (kept under the section number in brackets): root(62)

    // ---------------------------------------------------------------------------
    // 49. Programming Languages & Code                                       
    // ---------------------------------------------------------------------------
    bash: 'ব্যাশ', c: 'সি', code: 'কোড', coding: 'কোডিং', cpp: 'সি প্লাস প্লাস', csharp: 'সি শার্প',
    css: 'সিএসএস', dart: 'ডার্ট', golang: 'গোল্যাং', html: 'এইচটিএমএল', java: 'জাভা',
    javascript: 'জাভাস্ক্রিপ্ট', json: 'জেসন', kotlin: 'কটলিন', lua: 'লুয়া', markdown: 'মার্কডাউন',
    matlab: 'ম্যাটল্যাব', perl: 'পার্ল', php: 'পিএইচপি', powershell: 'পাওয়ারশেল',
    programming: 'প্রোগ্রামিং', python: 'পাইথন', ruby: 'রুবি', rust: 'রাস্ট', scala: 'স্কালা',
    shell: 'শেল', sql: 'এসকিউএল', swift: 'সুইফট', typescript: 'টাইপস্ক্রিপ্ট', xml: 'এক্সএমএল',
    yaml: 'ইয়ামল',

    // ---------------------------------------------------------------------------
    // 50. Programming Concepts & Data Structures                             
    // ---------------------------------------------------------------------------
    abstraction: 'অ্যাবস্ট্রাকশন', algorithm: 'অ্যালগরিদম', analysis: 'অ্যানালাইসিস',
    argument: 'আর্গুমেন্ট', array: 'অ্যারে', async: 'অ্যাসিঙ্ক', await: 'অ্যাওয়েট',
    binarysearch: 'বাইনারি সার্চ', boolean: 'বুলিয়ান', bug: 'বাগ', callback: 'কলব্যাক',
    compiler: 'কম্পাইলার', condition: 'কন্ডিশন', constant: 'কনস্ট্যান্ট',
    datastructure: 'ডাটা স্ট্রাকচার', debug: 'ডিবাগ', debugging: 'ডিবাগিং', duplicate: 'ডুপ্লিকেট',
    encapsulation: 'এনক্যাপসুলেশন', error: 'এরর', exception: 'এক্সেপশন', float: 'ফ্লোট',
    framework: 'ফ্রেমওয়ার্ক', function: 'ফাংশন', functional: 'ফাংশনাল', graph: 'গ্রাফ',
    hash: 'হ্যাশ', inheritance: 'ইনহেরিটেন্স', integer: 'ইন্টিজার', interface: 'ইন্টারফেস',
    interpreter: 'ইন্টারপ্রেটার', linkedlist: 'লিংকড লিস্ট', loop: 'লুপ', method: 'মেথড',
    modify: 'মডিফাই', module: 'মডিউল', nonfunctional: 'নন ফাংশনাল', object: 'অবজেক্ট',
    override: 'ওভাররাইড', parameter: 'প্যারামিটার', pointer: 'পয়েন্টার', polymorphism: 'পলিমরফিজম',
    promise: 'প্রমিস', queue: 'কিউ', recursion: 'রিকার্শন', runtime: 'রানটাইম',
    searching: 'সার্চিং', sorting: 'সর্টিং', stack: 'স্ট্যাক', string: 'স্ট্রিং',
    structure: 'স্ট্রাকচার', syntax: 'সিনট্যাক্স', variable: 'ভেরিয়েবল',
    // See also (kept under the section number in brackets): tree(62)

    // ---------------------------------------------------------------------------
    // 51. Web, Networking & Hosting                                         
    // ---------------------------------------------------------------------------
    ajax: 'অ্যাজাক্স', api: 'এপিআই', attribute: 'অ্যাট্রিবিউট', backend: 'ব্যাকএন্ড',
    cache: 'ক্যাশ', cookie: 'কুকি', cookies: 'কুকিজ', dashboard: 'ড্যাশবোর্ড', deploy: 'ডিপ্লয়',
    deployment: 'ডিপ্লয়মেন্ট', dom: 'ডম', domain: 'ডোমেইন', endpoint: 'এন্ডপয়েন্ট',
    flexbox: 'ফ্লেক্সবক্স', frontend: 'ফ্রন্টএন্ড', fullstack: 'ফুল স্ট্যাক', hosting: 'হোস্টিং',
    http: 'এইচটিটিপি', https: 'এইচটিটিপিএস', localhost: 'লোকালহোস্ট', navbar: 'ন্যাভবার',
    networking: 'নেটওয়ার্কিং', offset: 'অফসেট', reply: 'রিপ্লাই', request: 'রিকোয়েস্ট',
    response: 'রেসপন্স', responsive: 'রেসপনসিভ', restapi: 'রেস্ট এপিআই', server: 'সার্ভার',
    session: 'সেশন', token: 'টোকেন', view: 'ভিউ', web: 'ওয়েব',

    // ---------------------------------------------------------------------------
    // 52. Databases, Frameworks & Libraries                                  
    // ---------------------------------------------------------------------------
    angular: 'অ্যাঙ্গুলার', bootstrap: 'বুটস্ট্র্যাপ', database: 'ডাটাবেস', django: 'জ্যাঙ্গো',
    field: 'ফিল্ড', firebase: 'ফায়ারবেস', flutter: 'ফ্লাটার', foreignkey: 'ফরেন কি', join: 'জয়েন',
    jquery: 'জেকোয়েরি', laravel: 'লারাভেল', mongodb: 'মঙ্গোডিবি', mysql: 'মাইএসকিউএল',
    nextjs: 'নেক্সট জেএস', nodejs: 'নোড জেএস', numpy: 'নামপাই', pandas: 'পান্ডাস',
    postgresql: 'পোস্টগ্রেএসকিউএল', primarykey: 'প্রাইমারি কি', pytorch: 'পাইটর্চ',
    react: 'রিঅ্যাক্ট', reactnative: 'রিঅ্যাক্ট নেটিভ', redis: 'রেডিস', schema: 'স্কিমা',
    sqlite: 'এসকিউলাইট', tailwind: 'টেইলউইন্ড', tensorflow: 'টেনসরফ্লো', vue: 'ভিউ',
    // See also (kept under the section number in brackets): spring(63)

    // ---------------------------------------------------------------------------
    // 53. Git, Tools & Workflow                                              
    // ---------------------------------------------------------------------------
    agile: 'অ্যাজাইল', clone: 'ক্লোন', command: 'কমান্ড', commit: 'কমিট', console: 'কনসোল',
    docker: 'ডকার', documentation: 'ডকুমেন্টেশন', figma: 'ফিগমা', flow: 'ফ্লো', git: 'গিট',
    github: 'গিটহাব', gitlab: 'গিটল্যাব', issue: 'ইস্যু', jira: 'জিরা', merge: 'মার্জ',
    npm: 'এনপিএম', opensource: 'ওপেন সোর্স', overflow: 'ওভারফ্লো', pick: 'পিক', picker: 'পিকার',
    postman: 'পোস্টম্যান', pull: 'পুল', pullrequest: 'পুল রিকোয়েস্ট', push: 'পুশ', readme: 'রিডমি',
    repo: 'রিপো', repository: 'রিপোজিটরি', scrum: 'স্ক্রাম', sourcecode: 'সোর্স কোড',
    sprint: 'স্প্রিন্ট', ubuntu: 'উবুন্টু', version: 'ভার্সন', workflow: 'ওয়ার্কফ্লো',

    // ---------------------------------------------------------------------------
    // 54. Security                                                           
    // ---------------------------------------------------------------------------
    antivirus: 'অ্যান্টিভাইরাস', authentication: 'অথেনটিকেশন', authorization: 'অথরাইজেশন',
    captcha: 'ক্যাপচা', cybersecurity: 'সাইবার সিকিউরিটি', decryption: 'ডিক্রিপশন',
    encryption: 'এনক্রিপশন', firewall: 'ফায়ারওয়াল', hack: 'হ্যাক', hacker: 'হ্যাকার',
    malware: 'ম্যালওয়্যার', phishing: 'ফিশিং', ssl: 'এসএসএল', virus: 'ভাইরাস', vpn: 'ভিপিএন',

    // ---------------------------------------------------------------------------
    // 55. IDEs & Code Editors                                                
    // ---------------------------------------------------------------------------
    androidstudio: 'অ্যান্ড্রয়েড স্টুডিও', antigravity: 'অ্যান্টিগ্র্যাভিটি', arduino: 'আরডুইনো',
    arduinoide: 'আরডুইনো আইডিই', bluej: 'ব্লুজে', brackets: 'ব্র্যাকেটস', clion: 'সিলায়ন',
    codeblocks: 'কোড ব্লকস', codesandbox: 'কোডস্যান্ডবক্স', cursor: 'কার্সর', datagrip: 'ডাটাগ্রিপ',
    eclipse: 'ইক্লিপ্স', emacs: 'ইম্যাক্স', fleet: 'ফ্লিট', goland: 'গোল্যান্ড',
    googlecolab: 'গুগল কোল্যাব', ide: 'আইডিই', idle: 'আইডল', intellijidea: 'ইন্টেলিজে আইডিয়া',
    jupyterlab: 'জুপিটারল্যাব', jupyternotebook: 'জুপিটার নোটবুক', nano: 'ন্যানো', neovim: 'নিওভিম',
    netbeans: 'নেটবিনস', notepadplus: 'নোটপ্যাড প্লাস প্লাস', phpstorm: 'পিএইচপিস্টর্ম',
    pycharm: 'পাইচার্ম', qoder: 'কোডার', replit: 'রেপলিট', rider: 'রাইডার', rstudio: 'আরস্টুডিও',
    rubymine: 'রুবিমাইন', spyder: 'স্পাইডার', sublimetext: 'সাবলাইম টেক্সট', thonny: 'থনি',
    vim: 'ভিম', visualstudio: 'ভিজুয়াল স্টুডিও', visualstudiocode: 'ভিজুয়াল স্টুডিও কোড',
    vscode: 'ভিএস কোড', webstorm: 'ওয়েবস্টর্ম', windsurf: 'উইন্ডসার্ফ', xcode: 'এক্সকোড',
    zed: 'জেড',
    // See also (kept under the section number in brackets): atom(60), matlab(49)

    // ---------------------------------------------------------------------------
    // 56. AI, Machine Learning & Data Science                                
    // ---------------------------------------------------------------------------
    activation: 'অ্যাক্টিভেশন', activationfunction: 'অ্যাক্টিভেশন ফাংশন', ai: 'এআই',
    attention: 'অ্যাটেনশন', backpropagation: 'ব্যাকপ্রপাগেশন', bert: 'বার্ট', bigdata: 'বিগ ডাটা',
    bitcoin: 'বিটকয়েন', blockchain: 'ব্লকচেইন', chatbot: 'চ্যাটবট', chatgpt: 'চ্যাটজিপিটি',
    claude: 'ক্লড', cnn: 'সিএনএন', computervision: 'কম্পিউটার ভিশন',
    contextwindow: 'কনটেক্সট উইন্ডো', copilot: 'কোপাইলট', crypto: 'ক্রিপ্টো',
    datascience: 'ডাটা সায়েন্স', dataset: 'ডাটাসেট', decoder: 'ডিকোডার',
    deeplearning: 'ডিপ লার্নিং', deepseek: 'ডিপসিক', descent: 'ডিসেন্ট', diffusion: 'ডিফিউশন',
    embedded: 'এমবেডেড', embedding: 'এমবেডিং', encoder: 'এনকোডার', epoch: 'ইপক', face: 'ফেস',
    finetuning: 'ফাইন-টিউনিং', generative: 'জেনারেটিভ', generativeai: 'জেনারেটিভ এআই',
    gpt: 'জিপিটি', gradientdescent: 'গ্র্যাডিয়েন্ট ডিসেন্ট', hallucination: 'হ্যালুসিনেশন',
    hugging: 'হাগিং', huggingface: 'হাগিং ফেস', inference: 'ইনফারেন্স',
    intelligence: 'ইন্টেলিজেন্স', iot: 'আইওটি', layer: 'লেয়ার', learning: 'লার্নিং', llama: 'লামা',
    llm: 'এলএলএম', lstm: 'এলএসটিএম', machinelearning: 'মেশিন লার্নিং', midjourney: 'মিডজার্নি',
    mistral: 'মিস্ট্রাল', model: 'মডেল', multimodal: 'মাল্টিমোডাল',
    naturallanguageprocessing: 'ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং',
    neuralnetwork: 'নিউরাল নেটওয়ার্ক', nlp: 'এনএলপি', openai: 'ওপেনএআই', overfitting: 'ওভারফিটিং',
    prediction: 'প্রেডিকশন', prompt: 'প্রম্পট', qwen: 'কোয়েন', reinforcement: 'রিইনফোর্সমেন্ট',
    reinforcementlearning: 'রিইনফোর্সমেন্ট লার্নিং', rnn: 'আরএনএন', selfattention: 'সেলফ-অ্যাটেনশন',
    supervised: 'সুপারভাইজড', supervisedlearning: 'সুপারভাইজড লার্নিং', tokenizer: 'টোকেনাইজার',
    transferlearning: 'ট্রান্সফার লার্নিং', transformer: 'ট্রান্সফর্মার', tuning: 'টিউনিং',
    underfitting: 'আন্ডারফিটিং', unsupervised: 'আনসুপারভাইজড',
    unsupervisedlearning: 'আনসুপারভাইজড লার্নিং', vision: 'ভিশন', vr: 'ভিআর',

    // ---------------------------------------------------------------------------
    // 57. Computer Science & Infrastructure                                  
    // ---------------------------------------------------------------------------
    aws: 'এডব্লিউএস', bandwidth: 'ব্যান্ডউইথ', binary: 'বাইনারি', bit: 'বিট', buffer: 'বাফার',
    byte: 'বাইট', cloudcomputing: 'ক্লাউড কম্পিউটিং', cms: 'সিএমএস', connection: 'কানেকশন',
    data: 'ডাটা', destination: 'ডেস্টিনেশন', dns: 'ডিএনএস', entry: 'এন্ট্রি', gpu: 'জিপিইউ',
    ipaddress: 'আইপি অ্যাড্রেস', kernel: 'কার্নেল', lan: 'ল্যান', latency: 'ল্যাটেন্সি',
    memory: 'মেমোরি', netlify: 'নেটলিফাই', network: 'নেটওয়ার্ক',
    operatingsystem: 'অপারেটিং সিস্টেম', process: 'প্রসেস', processing: 'প্রসেসিং',
    processor: 'প্রসেসর', protocol: 'প্রোটোকল', seo: 'এসইও', source: 'সোর্স', storage: 'স্টোরেজ',
    sync: 'সিঙ্ক', synchronization: 'সিঙ্ক্রোনাইজেশন', thread: 'থ্রেড', ui: 'ইউআই', ux: 'ইউএক্স',
    vercel: 'ভার্সেল', wan: 'ওয়ান', wordpress: 'ওয়ার্ডপ্রেস', 
    architecture: 'আর্কিটেকচার', availability: 'অ্যাভেইলেবিলিটি', bottleneck: 'বটলনেক',
cluster: 'ক্লাস্টার', datacenter: 'ডেটা সেন্টার', gateway: 'গেটওয়ে',
infrastructure: 'ইনফ্রাস্ট্রাকচার', kubernetes: 'কুবারনেটিস', loadbalancer: 'লোড ব্যালান্সার',
logging: 'লগিং', microservice: 'মাইক্রোসার্ভিস', middleware: 'মিডলওয়্যার',
monitoring: 'মনিটরিং', node: 'নোড', orchestration: 'অর্কেস্ট্রেশন', proxy: 'প্রক্সি',
redundancy: 'রিডান্ড্যান্সি', reliability: 'রিলায়েবিলিটি', scalability: 'স্কেলেবিলিটি',
scalable: 'স্কেলেবল', serverless: 'সার্ভারলেস', throughput: 'থ্রুপুট',
virtualization: 'ভার্চুয়ালাইজেশন', virtualmachine: 'ভার্চুয়াল মেশিন',

    // ---------------------------------------------------------------------------
    // 58. Abbreviations & Acronyms                                          
    // ---------------------------------------------------------------------------
    // -- Tech & media (18)
    atm: 'এটিএম', bluetooth: 'ব্লুটুথ', cd: 'সিডি', cpu: 'সিপিইউ', dvd: 'ডিভিডি', gps: 'জিপিএস',
    ict: 'আইসিটি', jpg: 'জেপিজি', lcd: 'এলসিডি', mms: 'এমএমএস', pc: 'পিসি', png: 'পিএনজি',
    ram: 'র‍্যাম', rom: 'রম', sim: 'সিম', ssd: 'এসএসডি', url: 'ইউআরএল', wifi: 'ওয়াইফাই',
    // -- Degrees, exams & departments (10)
    bba: 'বিবিএ', bsc: 'বিএসসি', cse: 'সিএসই', eee: 'ইইই', hsc: 'এইচএসসি', mba: 'এমবিএ',
    mbbs: 'এমবিবিএস', msc: 'এমএসসি', phd: 'পিএইচডি', ssc: 'এসএসসি',
    // -- Organisations & institutions (15)
    brta: 'বিএআরটিএ', btrc: 'বিটিআরসি', btv: 'বিটিভি', buet: 'বুয়েট', ceo: 'সিইও', desco: 'ডেসকো',
    du: 'ডিইউ', gm: 'জিএম', hr: 'এইচআর', ngo: 'এনজিও', nsu: 'এনএসইউ', rajuk: 'রাজউক', un: 'ইউএন',
    unicef: 'ইউনিসেফ', wasa: 'ওয়াসা',
    // -- Other (2)
    bp: 'বিপি', fb: 'এফবি',


    // ===========================================================================
    // PART 4 - SCIENCE & NATURE
    // ===========================================================================

    // ---------------------------------------------------------------------------
    // 59. Chemical Elements & Metals                                        
    // ---------------------------------------------------------------------------
    // Listed in atomic-number order.
    hydrogen: 'হাইড্রোজেন', helium: 'হিলিয়াম', lithium: 'লিথিয়াম', beryllium: 'বেরিলিয়াম',
    oxygen: 'অক্সিজেন', boron: 'বোরন', carbon: 'কার্বন', nitrogen: 'নাইট্রোজেন',
    fluorine: 'ফ্লোরিন', neon: 'নিয়ন', sodium: 'সোডিয়াম', magnesium: 'ম্যাগনেসিয়াম',
    aluminium: 'অ্যালুমিনিয়াম', silicon: 'সিলিকন', phosphorus: 'ফসফরাস', sulphur: 'সালফার',
    calcium: 'ক্যালসিয়াম', chlorine: 'ক্লোরিন', argon: 'আর্গন', potassium: 'পটাসিয়াম',
    scandium: 'স্ক্যান্ডিয়াম', titanium: 'টাইটানিয়াম', vanadium: 'ভ্যানাডিয়াম',
    chromium: 'ক্রোমিয়াম', iron: 'আয়রন', manganese: 'ম্যাঙ্গানিজ', cobalt: 'কোবাল্ট',
    nickel: 'নিকেল', copper: 'কপার', zinc: 'জিঙ্ক', gallium: 'গ্যালিয়াম',
    germanium: 'জার্মেনিয়াম', arsenic: 'আর্সেনিক', selenium: 'সিলেনিয়াম', bromine: 'ব্রোমিন',
    krypton: 'ক্রিপ্টন', rubidium: 'রুবিডিয়াম', strontium: 'স্ট্রনশিয়াম', yttrium: 'ইট্রিয়াম',
    zirconium: 'জিরকোনিয়াম', niobium: 'নায়োবিয়াম', molybdenum: 'মলিবডেনাম',
    technetium: 'টেকনেসিয়াম', ruthenium: 'রুথেনিয়াম', rhodium: 'রোডিয়াম', silver: 'সিলভার',
    palladium: 'প্যালেডিয়াম', cadmium: 'ক্যাডমিয়াম', indium: 'ইন্ডিয়াম', tin: 'টিন',
    iodine: 'আয়োডিন', antimony: 'অ্যান্টিমনি', tellurium: 'টেলুরিয়াম', xenon: 'জেনন',
    caesium: 'সিজিয়াম', barium: 'ব্যারিয়াম', lanthanum: 'ল্যান্থানাম', cerium: 'সেরিয়াম',
    praseodymium: 'প্রাসিওডিমিয়াম', neodymium: 'নিওডিমিয়াম', promethium: 'প্রোমিথিয়াম',
    samarium: 'স্যামারিয়াম', europium: 'ইউরোপিয়াম', gadolinium: 'গ্যাডোলিনিয়াম',
    terbium: 'টার্বিয়াম', dysprosium: 'ডিসপ্রোসিয়াম', holmium: 'হোলমিয়াম', erbium: 'এরবিয়াম',
    thulium: 'থুলিয়াম', ytterbium: 'ইটারবিয়াম', lutetium: 'লুটেশিয়াম', hafnium: 'হাফনিয়াম',
    tantalum: 'ট্যান্টালাম', tungsten: 'টাংস্টেন', rhenium: 'রেনিয়াম', osmium: 'অসমিয়াম',
    iridium: 'ইরিডিয়াম', gold: 'গোল্ড', platinum: 'প্ল্যাটিনাম', mercury: 'মারকারি',
    thallium: 'থ্যালিয়াম', lead: 'লেড', bismuth: 'বিসমাথ', polonium: 'পোলোনিয়াম',
    astatine: 'অ্যাস্টাটিন', radon: 'রেডন', francium: 'ফ্রান্সিয়াম', radium: 'রেডিয়াম',
    actinium: 'অ্যাক্টিনিয়াম', thorium: 'থোরিয়াম', protactinium: 'প্রোটোঅ্যাক্টিনিয়াম',
    uranium: 'ইউরেনিয়াম', neptunium: 'নেপচুনিয়াম', plutonium: 'প্লুটোনিয়াম',
    americium: 'অ্যামেরিসিয়াম', curium: 'কিউরিয়াম', berkelium: 'বার্কেলিয়াম',
    californium: 'ক্যালিফোর্নিয়াম', einsteinium: 'আইনস্টাইনিয়াম', fermium: 'ফার্মিয়াম',
    mendelevium: 'মেন্ডেলেভিয়াম', nobelium: 'নোবেলিয়াম', lawrencium: 'লরেন্সিয়াম',
    rutherfordium: 'রাদারফোর্ডিয়াম', dubnium: 'ডুবনিয়াম', seaborgium: 'সিবোর্গিয়াম',
    bohrium: 'বোহরিয়াম', hassium: 'হ্যাসিয়াম', meitnerium: 'মাইটনারিয়াম',
    darmstadtium: 'ডার্মস্টাটিয়াম', roentgenium: 'রন্টজেনিয়াম', copernicium: 'কোপারনিসিয়াম',
    nihonium: 'নিহোনিয়াম', flerovium: 'ফ্লেরোভিয়াম', moscovium: 'মস্কোভিয়াম',
    livermorium: 'লিভারমোরিয়াম', tennessine: 'টেনেসিন', oganesson: 'ওগানেসন', bronze: 'ব্রোঞ্জ',

    // ---------------------------------------------------------------------------
    // 60. Physics, Chemistry & Space                                         
    // ---------------------------------------------------------------------------
    acid: 'অ্যাসিড', alkali: 'অ্যালকালি', ampere: 'অ্যাম্পিয়ার', analog: 'অ্যানালগ',
    atom: 'অ্যাটম', base: 'বেস', carbondioxide: 'কার্বন ডাই-অক্সাইড',
    carbonfootprint: 'কার্বন ফুটপ্রিন্ট', circuit: 'সার্কিট', climatechange: 'ক্লাইমেট চেঞ্জ',
    compound: 'কম্পাউন্ড', density: 'ডেনসিটি', electricity: 'ইলেকট্রিসিটি', electron: 'ইলেকট্রন',
    element: 'এলিমেন্ট', energy: 'এনার্জি', equation: 'ইকুয়েশন', experiment: 'এক্সপেরিমেন্ট',
    force: 'ফোর্স', formula: 'ফর্মুলা', frequency: 'ফ্রিকোয়েন্সি', friction: 'ফ্রিকশন',
    galaxy: 'গ্যালাক্সি', gravity: 'গ্র্যাভিটি', hypothesis: 'হাইপোথিসিস', laboratory: 'ল্যাবরেটরি',
    laser: 'লেজার', liquid: 'লিকুইড', machine: 'মেশিন', magnet: 'ম্যাগনেট', magnetic: 'ম্যাগনেটিক',
    mass: 'মাস', metal: 'মেটাল', microscope: 'মাইক্রোস্কোপ', mixture: 'মিক্সচার',
    molecule: 'মলিকিউল', neutron: 'নিউট্রন', nuclear: 'নিউক্লিয়ার', nucleus: 'নিউক্লিয়াস',
    orbit: 'অরবিট', ozone: 'ওজোন', planet: 'প্ল্যানেট', proton: 'প্রোটন', radiation: 'রেডিয়েশন',
    radioactive: 'রেডিওঅ্যাক্টিভ', reaction: 'রিঅ্যাকশন', reactor: 'রিঅ্যাক্টর',
    resistor: 'রেজিস্টর', robot: 'রোবট', rocket: 'রকেট', satellite: 'স্যাটেলাইট', solid: 'সলিড',
    telescope: 'টেলিস্কোপ', theory: 'থিওরি', universe: 'ইউনিভার্স', vacuum: 'ভ্যাকুয়াম',
    volt: 'ভোল্ট', volume: 'ভলিউম', watt: 'ওয়াট', wave: 'ওয়েভ', wavelength: 'ওয়েভলেংথ',
    // See also (kept under the section number in brackets): calcium(59), climate(62), cobalt(59),
    //   copper(59), ecosystem(62), environment(62), globalwarming(62), gold(59), iodine(59),
    //   iron(59), neon(59), oxygen(59), platinum(59), pollution(62), silver(59), species(61),
    //   tin(59), zinc(59)

    // ---------------------------------------------------------------------------
    // 61. Biology & Genetics                                                 
    // ---------------------------------------------------------------------------
    bacteria: 'ব্যাকটেরিয়া', cell: 'সেল', chromosome: 'ক্রোমোজোম', dna: 'ডিএনএ',
    evolution: 'ইভোলিউশন', gene: 'জিন', genetic: 'জেনেটিক', germ: 'জার্ম', immune: 'ইমিউন',
    microorganism: 'মাইক্রোঅর্গানিজম', rna: 'আরএনএ', species: 'স্পিসিস',

    // ---------------------------------------------------------------------------
    // 62. Nature, Environment & Landscape                                   
    // ---------------------------------------------------------------------------
    algae: 'অ্যালগি', amphibian: 'অ্যামফিবিয়ান', animal: 'অ্যানিমেল',
    aquaticlife: 'অ্যাকুয়াটিক লাইফ', archipelago: 'আর্কিপেলাগো', atmosphere: 'অ্যাটমোস্ফিয়ার',
    aurora: 'অরোরা', avalanche: 'অ্যাভালাঞ্চ', avian: 'এভিয়ান', bark: 'বার্ক', bay: 'বে',
    bee: 'বি', biodiversity: 'বায়োডাইভারসিটি', bird: 'বার্ড', boulder: 'বোল্ডার', brook: 'ব্রুক',
    bud: 'বাড', bush: 'বুশ', bushfire: 'বুশফায়ার', butterfly: 'বাটারফ্লাই', canyon: 'ক্যানিয়ন',
    carnivore: 'কার্নিভোর', cascade: 'ক্যাসকেড', cave: 'কেইভ', cavern: 'ক্যাভার্ন', cliff: 'ক্লিফ',
    climate: 'ক্লাইমেট', coast: 'কোস্ট', conservation: 'কনজারভেশন', crater: 'ক্রেটার',
    creek: 'ক্রিক', creeper: 'ক্রিপার', cyclone: 'সাইক্লোন', dawn: 'ডন',
    deforestation: 'ডিফরেস্টেশন', desert: 'ডেজার্ট', dew: 'ডিউ', downpour: 'ডাউনপোর',
    dragonfly: 'ড্রাগনফ্লাই', dune: 'ডিউন', dusk: 'ডাস্ক', earth: 'আর্থ', earthquake: 'আর্থকোয়েক',
    ecosystem: 'ইকোসিস্টেম', environment: 'এনভায়রনমেন্ট', estuary: 'এসচুয়ারি', fish: 'ফিশ',
    foliage: 'ফোলিয়েজ', forest: 'ফরেস্ট', frost: 'ফ্রস্ট', fruit: 'ফ্রুট', fuel: 'ফুয়েল',
    fungus: 'ফাঙ্গাস', glacier: 'গ্লেশিয়ার', globalwarming: 'গ্লোবাল ওয়ার্মিং', grass: 'গ্রাস',
    gulf: 'গালফ', habitat: 'হ্যাবিট্যাট', hailstone: 'হেইলস্টোন', herb: 'হার্ব',
    herbivore: 'হার্বিভোর', hill: 'হিল', horizon: 'হরাইজন', hurricane: 'হারিকেন',
    iceberg: 'আইসবার্গ', insect: 'ইনসেক্ট', island: 'আইল্যান্ড', jungle: 'জঙ্গল', lagoon: 'লাগুন',
    lake: 'লেক', leaf: 'লিফ', mammal: 'ম্যামাল', marsh: 'মার্শ', meadow: 'মেডো',
    moonlight: 'মুনলাইট', moss: 'মস', mountain: 'মাউন্টেন', mountainrange: 'মাউন্টেন রেঞ্জ',
    mud: 'মাড', mushroom: 'মাশরুম', naturalresources: 'ন্যাচারাল রিসোর্সেস', nature: 'নেচার',
    oasis: 'ওএসিস', ocean: 'ওশান', omnivore: 'অমনিভোর', organic: 'অর্গানিক', pebble: 'পেবল',
    peninsula: 'পেনিনসুলা', petal: 'পেটাল', plain: 'প্লেইন', plant: 'প্ল্যান্ট',
    plateau: 'প্ল্যাটৌ', pollen: 'পোলেন', pollution: 'পলিউশন', pond: 'পন্ড', predator: 'প্রেডেটর',
    prey: 'প্রেই', rainfall: 'রেইনফল', rainforest: 'রেইনফরেস্ট', reptile: 'রেপ্টাইল',
    river: 'রিভার', rock: 'রক', root: 'রুট', sand: 'স্যান্ড', sea: 'সি', seed: 'সিড', shore: 'শোর',
    shrub: 'শ্রাব', sky: 'স্কাই', snake: 'স্নেক', snakes: 'স্নেক্স', soil: 'সয়েল', solar: 'সোলার',
    solarflare: 'সোলার ফ্লেয়ার', solarpanel: 'সোলার প্যানেল', sprout: 'স্প্রাউট',
    strait: 'স্ট্রেইট', stream: 'স্ট্রিম', sunlight: 'সানলাইট', sunrise: 'সানরাইজ',
    sunset: 'সানসেট', sunshine: 'সানশাইন', sustainability: 'সাসটেইনেবিলিটি', swamp: 'সোয়াম্প',
    temperature: 'টেম্পারেচার', tempest: 'টেম্পেস্ট', thorn: 'থর্ন', tide: 'টাইড', tree: 'ট্রি',
    trunk: 'ট্রাঙ্ক', tsunami: 'সুনামি', twig: 'টুইগ', valley: 'ভ্যালি', vine: 'ভাইন',
    volcaniceruption: 'ভলক্যানিক ইরাপশন', volcano: 'ভলকানো', waterfall: 'ওয়াটারফল',
    wetland: 'ওয়েটল্যান্ড', wildfire: 'ওয়াইল্ডফায়ার', wildlife: 'ওয়াইল্ডলাইফ', wind: 'উইন্ড',
    // See also (kept under the section number in brackets): beach(34), branch(30), coral(65),
    //   drizzle(63), eclipse(55), flower(64), geyser(24), hail(63), landslide(63), snow(63),
    //   species(61), spring(63), wave(60)

    // ---------------------------------------------------------------------------
    // 63. Weather & Seasons                                                  
    // ---------------------------------------------------------------------------
    alert: 'অ্যালার্ট', autumn: 'অটাম', breeze: 'ব্রিজ', cloud: 'ক্লাউড', cloudy: 'ক্লাউডি',
    coldwave: 'কোল্ড ওয়েভ', drizzle: 'ড্রিজল', drought: 'ড্রট', dry: 'ড্রাই',
    dryseason: 'ড্রাই সিজন', fall: 'ফল', flood: 'ফ্লাড', fog: 'ফগ', forecast: 'ফোরকাস্ট',
    hail: 'হেইল', heatwave: 'হিটওয়েভ', humid: 'হিউমিড', humidity: 'হিউমিডিটি',
    landslide: 'ল্যান্ডস্লাইড', lightning: 'লাইটনিং', mist: 'মিস্ট', monsoon: 'মনসুন', rain: 'রেইন',
    rainbow: 'রেইনবো', rainy: 'রেইনি', rainyseason: 'রেইনি সিজন', season: 'সিজন', snow: 'স্নো',
    spring: 'স্প্রিং', storm: 'স্টর্ম', summer: 'সামার', sunny: 'সানি', thunder: 'থান্ডার',
    thunderstorm: 'থান্ডারস্টর্ম', tornado: 'টর্নেডো', typhoon: 'টাইফুন', warning: 'ওয়ার্নিং',
    weather: 'ওয়েদার', windy: 'উইন্ডি', winter: 'উইন্টার',
    // See also (kept under the section number in brackets): shower(24), sunrise(62), sunset(62),
    //   tide(62)

    // ---------------------------------------------------------------------------
    // 64. Flowers & Plants                                                  
    // ---------------------------------------------------------------------------
    aster: 'অ্যাস্টার', carnation: 'কার্নেশন', cosmos: 'কসমস', daffodil: 'ড্যাফোডিল',
    dahlia: 'ডালিয়া', daisy: 'ডেইজি', flower: 'ফ্লাওয়ার', flowers: 'ফ্লাওয়ারস',
    gladiolus: 'গ্ল্যাডিওলাস', golap: 'গোলাপ', hibiscus: 'হিবিস্কাস', iris: 'আইরিস',
    jasmine: 'জেসমিন', lily: 'লিলি', lotus: 'লোটাস', marigold: 'ম্যারিগোল্ড', orchid: 'অর্কিড',
    petunia: 'পিটুনিয়া', poppy: 'পপি', rose: 'রোজ', sunflower: 'সানফ্লাওয়ার', tulip: 'টিউলিপ',
    zinnia: 'জিনিয়া',
    // See also (kept under the section number in brackets): lavender(65), violet(65)

    // ---------------------------------------------------------------------------
    // 65. Colours                                                           
    // ---------------------------------------------------------------------------
    // -- White, gray & black (28)
    antiquewhite: 'অ্যান্টিক হোয়াইট', ash: 'অ্যাশ', black: 'ব্ল্যাক', charcoal: 'চারকোল',
    darkgray: 'ডার্ক গ্রে', dimgray: 'ডিম গ্রে', ebony: 'এবনি', floralwhite: 'ফ্লোরাল হোয়াইট',
    gainsboro: 'গেইন্সবোরো', ghostwhite: 'ঘোস্ট হোয়াইট', gray: 'গ্রে', gunmetal: 'গানমেটাল',
    ivory: 'আইভরি', jetblack: 'জেট ব্ল্যাক', lavenderblush: 'ল্যাভেন্ডার ব্লাশ',
    lightgray: 'লাইট গ্রে', lightslategray: 'লাইট স্লেট গ্রে', linen: 'লিনেন',
    mistyrose: 'মিস্টি রোজ', offwhite: 'অফ হোয়াইট', oldlace: 'ওল্ড লেস', onyx: 'অনিক্স',
    pearl: 'পার্ল', seashell: 'সিশেল', slategray: 'স্লেট গ্রে', smoke: 'স্মোক', white: 'হোয়াইট',
    whitesmoke: 'হোয়াইট স্মোক',
    // -- Red & pink (32)
    blush: 'ব্লাশ', brickred: 'ব্রিক রেড', burgundy: 'বার্গান্ডি', cardinal: 'কার্ডিনাল',
    carmine: 'কারমাইন', cerise: 'সেরিজ', cherry: 'চেরি', coral: 'কোরাল', crimson: 'ক্রিমসন',
    darkred: 'ডার্ক রেড', darksalmon: 'ডার্ক স্যামন', deeppink: 'ডিপ পিঙ্ক',
    firebrick: 'ফায়ারব্রিক', flamingo: 'ফ্লামিঙ্গো', fuchsia: 'ফুশিয়া', hotpink: 'হট পিঙ্ক',
    indianred: 'ইন্ডিয়ান রেড', lightcoral: 'লাইট কোরাল', lightpink: 'লাইট পিঙ্ক',
    lightsalmon: 'লাইট স্যামন', magenta: 'ম্যাজেন্টা', maroon: 'মেরুন',
    palevioletred: 'পেল ভায়োলেট রেড', pink: 'পিঙ্ক', raspberry: 'র্যাজবেরি', red: 'রেড',
    salmon: 'স্যামন', scarlet: 'স্কারলেট', tomato: 'টমেটো', vermilion: 'ভার্মিলিয়ন',
    watermelon: 'ওয়াটারমেলন', wine: 'ওয়াইন',
    // -- Orange & yellow (32)
    amber: 'অ্যাম্বার', apricot: 'অ্যাপ্রিকট', banana: 'বানানা', beige: 'বেজ', bisque: 'বিস্ক',
    blanchedalmond: 'ব্ল্যাঞ্চড অ্যালমন্ড', burntorange: 'বার্ন্ট অরেঞ্জ', canary: 'ক্যানারি',
    champagne: 'শ্যাম্পেন', cornsilk: 'কর্ন সিল্ক', darkgoldenrod: 'ডার্ক গোল্ডেনরড',
    darkkhaki: 'ডার্ক খাকি', darkorange: 'ডার্ক অরেঞ্জ', goldenrod: 'গোল্ডেনরড', honey: 'হানি',
    khaki: 'খাকি', lemon: 'লেমন', lemonchiffon: 'লেমন শিফন', lightyellow: 'লাইট ইয়েলো',
    moccasin: 'মোকাসিন', mustard: 'মাস্টার্ড', navajowhite: 'নাভাহো হোয়াইট', orange: 'অরেঞ্জ',
    palegoldenrod: 'পেল গোল্ডেনরড', papayawhip: 'পাপায়া হুইপ', peach: 'পিচ', peachpuff: 'পিচ পাফ',
    pumpkin: 'পাম্পকিন', saffron: 'স্যাফরন', tangerine: 'ট্যাঞ্জারিন', wheat: 'হুইট',
    yellow: 'ইয়েলো',
    // -- Green (38)
    armygreen: 'আর্মি গ্রিন', avocado: 'অ্যাভোকাডো', bottlegreen: 'বটল গ্রিন',
    chartreuse: 'শার্ত্রুজ', darkgreen: 'ডার্ক গ্রিন', darkolivegreen: 'ডার্ক অলিভ গ্রিন',
    darkseagreen: 'ডার্ক সি গ্রিন', emerald: 'এমারেল্ড', fern: 'ফার্ন', forestgreen: 'ফরেস্ট গ্রিন',
    green: 'গ্রিন', greenyellow: 'গ্রিন ইয়েলো', honeydew: 'হানিডিউ', huntergreen: 'হান্টার গ্রিন',
    jade: 'জেড', kellygreen: 'কেলি গ্রিন', lawngreen: 'লন গ্রিন', lightgreen: 'লাইট গ্রিন',
    lightseagreen: 'লাইট সি গ্রিন', lime: 'লাইম', limegreen: 'লাইম গ্রিন',
    mediumseagreen: 'মিডিয়াম সি গ্রিন', mediumspringgreen: 'মিডিয়াম স্প্রিং গ্রিন', mint: 'মিন্ট',
    mintcream: 'মিন্ট ক্রিম', neongreen: 'নিয়ন গ্রিন', olive: 'অলিভ', olivedrab: 'অলিভ ড্র্যাব',
    palegreen: 'পেল গ্রিন', parrotgreen: 'প্যারট গ্রিন', pine: 'পাইন', pistachio: 'পিস্তাচিও',
    sage: 'সেজ', seagreen: 'সি গ্রিন', shamrock: 'শ্যামরক', springgreen: 'স্প্রিং গ্রিন',
    teal: 'টিল', yellowgreen: 'ইয়েলো গ্রিন',
    // -- Blue & cyan (40)
    aliceblue: 'অ্যালিস ব্লু', aqua: 'অ্যাকোয়া', aquamarine: 'অ্যাকোয়ামেরিন', azure: 'অ্যাজিউর',
    babyblue: 'বেবি ব্লু', blue: 'ব্লু', cadetblue: 'ক্যাডেট ব্লু', cerulean: 'সেরুলিয়ান',
    cornflowerblue: 'কর্নফ্লাওয়ার ব্লু', cyan: 'সায়ান', darkblue: 'ডার্ক ব্লু',
    darkcyan: 'ডার্ক সায়ান', darkturquoise: 'ডার্ক টারকোয়েজ', deepskyblue: 'ডিপ স্কাই ব্লু',
    denim: 'ডেনিম', dodgerblue: 'ডজার ব্লু', electricblue: 'ইলেকট্রিক ব্লু', iceblue: 'আইস ব্লু',
    indigo: 'ইন্ডিগো', lightblue: 'লাইট ব্লু', lightcyan: 'লাইট সায়ান',
    lightskyblue: 'লাইট স্কাই ব্লু', lightsteelblue: 'লাইট স্টিল ব্লু', mediumblue: 'মিডিয়াম ব্লু',
    mediumturquoise: 'মিডিয়াম টারকোয়েজ', midnightblue: 'মিডনাইট ব্লু', navy: 'নেভি',
    navyblue: 'নেভি ব্লু', oxfordblue: 'অক্সফোর্ড ব্লু', paleturquoise: 'পেল টারকোয়েজ',
    peacockblue: 'পিকক ব্লু', powderblue: 'পাউডার ব্লু', prussianblue: 'প্রুশিয়ান ব্লু',
    royalblue: 'রয়্যাল ব্লু', sapphire: 'স্যাফায়ার', skyblue: 'স্কাই ব্লু',
    slateblue: 'স্লেট ব্লু', steelblue: 'স্টিল ব্লু', turquoise: 'টারকোয়েজ',
    ultramarine: 'আল্ট্রামেরিন',
    // -- Purple & violet (23)
    amethyst: 'অ্যামেথিস্ট', blueviolet: 'ব্লু ভায়োলেট', darkmagenta: 'ডার্ক ম্যাজেন্টা',
    darkorchid: 'ডার্ক অর্কিড', darkslateblue: 'ডার্ক স্লেট ব্লু', darkviolet: 'ডার্ক ভায়োলেট',
    eggplant: 'এগপ্ল্যান্ট', grape: 'গ্রেপ', heliotrope: 'হেলিওট্রোপ', lavender: 'ল্যাভেন্ডার',
    lilac: 'লাইল্যাক', mauve: 'মভ', mediumorchid: 'মিডিয়াম অর্কিড',
    mediumpurple: 'মিডিয়াম পার্পল', mediumslateblue: 'মিডিয়াম স্লেট ব্লু',
    periwinkle: 'পেরিউইঙ্কল', plum: 'প্লাম', purple: 'পার্পল', rebeccapurple: 'রেবেকা পার্পল',
    royalpurple: 'রয়্যাল পার্পল', thistle: 'থিসল', violet: 'ভায়োলেট', wisteria: 'উইস্টেরিয়া',
    // -- Brown & earth tones (23)
    brown: 'ব্রাউন', burlywood: 'বার্লিউড', caramel: 'ক্যারামেল', chestnut: 'চেস্টনাট',
    chocolate: 'চকলেট', cinnamon: 'সিনামন', cocoa: 'কোকো', coffee: 'কফি', darkbrown: 'ডার্ক ব্রাউন',
    espresso: 'এসপ্রেসো', hazel: 'হ্যাজেল', lightbrown: 'লাইট ব্রাউন', mahogany: 'মেহগনি',
    mocha: 'মোকা', rosybrown: 'রোজি ব্রাউন', saddlebrown: 'স্যাডল ব্রাউন',
    sandybrown: 'স্যান্ডি ব্রাউন', sienna: 'সিয়েনা', tan: 'ট্যান', taupe: 'টোপ',
    terracotta: 'টেরাকোটা', umber: 'আম্বার', walnut: 'ওয়ালনাট',
    // -- Colour terms (33)
    brightness: 'ব্রাইটনেস', cmyk: 'সিএমওয়াইকে', color: 'কালার', colorpalette: 'কালার প্যালেট',
    colorwheel: 'কালার হুইল', colour: 'কালার', complementarycolor: 'কমপ্লিমেন্টারি কালার',
    contrast: 'কনট্রাস্ট', dark: 'ডার্ক', deep: 'ডিপ', glossy: 'গ্লসি', gradient: 'গ্র্যাডিয়েন্ট',
    hex: 'হেক্স', hexadecimal: 'হেক্সাডেসিমাল', hsl: 'এইচএসএল', hue: 'হিউ', matte: 'ম্যাট',
    medium: 'মিডিয়াম', metallic: 'মেটালিক', multicolor: 'মাল্টিকালার', opacity: 'ওপাসিটি',
    pale: 'পেল', palette: 'প্যালেট', pastel: 'প্যাস্টেল', primarycolor: 'প্রাইমারি কালার',
    rgb: 'আরজিবি', saturation: 'স্যাচুরেশন', secondarycolor: 'সেকেন্ডারি কালার', shade: 'শেড',
    tint: 'টিন্ট', tone: 'টোন', transparent: 'ট্রান্সপারেন্ট', wheel: 'হুইল',
    // See also (kept under the section number in brackets): bronze(59), cobalt(59), copper(59),
    //   cream(26), gold(59), moss(62), neon(59), orchid(64), peru(66), platinum(59), rose(64),
    //   ruby(49), rust(49), sand(62), silver(59)


    // ===========================================================================
    // PART 5 - WORLD, NAMES & PLACES
    // ===========================================================================

    // ---------------------------------------------------------------------------
    // 66. Continents, Countries & Cities                                    
    // ---------------------------------------------------------------------------
    afghanistan: 'আফগানিস্তান', africa: 'আফ্রিকা', albania: 'আলবেনিয়া', algeria: 'আলজেরিয়া',
    america: 'আমেরিকা', andorra: 'অ্যান্ডোরা', angola: 'অ্যাঙ্গোলা', antarctica: 'অ্যান্টার্কটিকা',
    antiguaandbarbuda: 'অ্যান্টিগুয়া অ্যান্ড বার্বুডা', argentina: 'আর্জেন্টিনা',
    armenia: 'আর্মেনিয়া', asia: 'এশিয়া', australia: 'অস্ট্রেলিয়া', austria: 'অস্ট্রিয়া',
    azerbaijan: 'আজারবাইজান', bahamas: 'বাহামা', bahrain: 'বাহরাইন', bangladesh: 'বাংলাদেশ',
    barbados: 'বার্বাডোজ', belarus: 'বেলারুশ', belgium: 'বেলজিয়াম', belize: 'বেলিজ',
    benin: 'বেনিন', bhutan: 'ভুটান', bolivia: 'বলিভিয়া',
    bosniaandherzegovina: 'বসনিয়া ও হার্জেগোভিনা', botswana: 'বতসোয়ানা', brazil: 'ব্রাজিল',
    brunei: 'ব্রুনাই', bulgaria: 'বুলগেরিয়া', burkinafaso: 'বুরকিনা ফাসো', burundi: 'বুরুন্ডি',
    cambodia: 'কম্বোডিয়া', cameroon: 'ক্যামেরুন', canada: 'কানাডা', capeverde: 'কেপ ভার্দে',
    centralafricanrepublic: 'সেন্ট্রাল আফ্রিকান রিপাবলিক', chile: 'চিলি', china: 'চায়না',
    colombia: 'কলম্বিয়া', comoros: 'কমোরোস', congo: 'কঙ্গো', continent: 'কন্টিনেন্ট',
    continents: 'কন্টিনেন্টস', costarica: 'কোস্টারিকা', countries: 'কান্ট্রিজ', country: 'কান্ট্রি',
    croatia: 'ক্রোয়েশিয়া', cuba: 'কিউবা', cyprus: 'সাইপ্রাস', czechrepublic: 'চেক রিপাবলিক',
    democraticrepublicofthecongo: 'ডেমোক্রেটিক রিপাবলিক অব দ্য কঙ্গো', denmark: 'ডেনমার্ক',
    djibouti: 'জিবুতি', dominica: 'ডোমিনিকা', dominicanrepublic: 'ডোমিনিকান রিপাবলিক',
    easttimor: 'ইস্ট তিমুর', ecuador: 'ইকুয়েডর', egypt: 'মিশর', elsalvador: 'এল সালভাদর',
    equatorialguinea: 'ইকুয়েটোরিয়াল গিনি', eritrea: 'ইরিত্রিয়া', estonia: 'এস্তোনিয়া',
    eswatini: 'এসওয়াতিনি', ethiopia: 'ইথিওপিয়া', europe: 'ইউরোপ', fiji: 'ফিজি',
    finland: 'ফিনল্যান্ড', france: 'ফ্রান্স', gabon: 'গ্যাবন', gambia: 'গাম্বিয়া',
    georgia: 'জর্জিয়া', germany: 'জার্মানি', ghana: 'ঘানা', greece: 'গ্রিস', grenada: 'গ্রেনাডা',
    guatemala: 'গুয়াতেমালা', guinea: 'গিনি', guineabissau: 'গিনি-বিসাউ', guyana: 'গায়ানা',
    haiti: 'হাইতি', honduras: 'হন্ডুরাস', hongkong: 'হংকং', hungary: 'হাঙ্গেরি',
    iceland: 'আইসল্যান্ড', india: 'ভারত', indonesia: 'ইন্দোনেশিয়া', iran: 'ইরান', iraq: 'ইরাক',
    ireland: 'আয়ারল্যান্ড', italy: 'ইতালি', ivorycoast: 'আইভরি কোস্ট', jamaica: 'জামাইকা',
    japan: 'জাপান', jordan: 'জর্ডান', kazakhstan: 'কাজাখস্তান', kenya: 'কেনিয়া',
    kiribati: 'কিরিবাতি', kosovo: 'কসোভো', kuwait: 'কুয়েত', kyrgyzstan: 'কিরগিজস্তান',
    laos: 'লাওস', latvia: 'লাটভিয়া', lebanon: 'লেবানন', lesotho: 'লেসোথো', liberia: 'লাইবেরিয়া',
    libya: 'লিবিয়া', liechtenstein: 'লিচেনস্টাইন', lithuania: 'লিথুয়েনিয়া',
    luxembourg: 'লুক্সেমবার্গ', macau: 'ম্যাকাও', madagascar: 'মাদাগাস্কার', malawi: 'মালাউই',
    malaysia: 'মালয়েশিয়া', maldives: 'মালদ্বীপ', mali: 'মালি', malta: 'মাল্টা',
    marshallislands: 'মার্শাল আইল্যান্ডস', mauritania: 'মৌরিতানিয়া', mauritius: 'মরিশাস',
    mexico: 'মেক্সিকো', micronesia: 'মাইক্রোনেশিয়া', moldova: 'মলদোভা', monaco: 'মোনাকো',
    mongolia: 'মঙ্গোলিয়া', montenegro: 'মন্টেনিগ্রো', morocco: 'মরক্কো', mozambique: 'মোজাম্বিক',
    myanmar: 'মিয়ানমার', namibia: 'নামিবিয়া', nauru: 'নাউরু', nepal: 'নেপাল',
    netherlands: 'নেদারল্যান্ডস', newzealand: 'নিউজিল্যান্ড', nicaragua: 'নিকারাগুয়া',
    niger: 'নাইজার', nigeria: 'নাইজেরিয়া', northamerica: 'নর্থ আমেরিকা',
    northkorea: 'উত্তর কোরিয়া', northmacedonia: 'নর্থ ম্যাসেডোনিয়া', norway: 'নরওয়ে',
    oceania: 'ওশেনিয়া', oman: 'ওমান', pakistan: 'পাকিস্তান', palau: 'পালাউ',
    palestine: 'ফিলিস্তিন', panama: 'পানামা', papuanewguinea: 'পাপুয়া নিউ গিনি',
    paraguay: 'প্যারাগুয়ে', peru: 'পেরু', philippines: 'ফিলিপাইন', poland: 'পোল্যান্ড',
    portugal: 'পর্তুগাল', puertorico: 'পুয়ের্তো রিকো', qatar: 'কাতার', romania: 'রোমানিয়া',
    russia: 'রাশিয়া', rwanda: 'রুয়ান্ডা', saintkittsandnevis: 'সেন্ট কিটস অ্যান্ড নেভিস',
    saintlucia: 'সেন্ট লুসিয়া',
    saintvincentandthegrenadines: 'সেন্ট ভিনসেন্ট অ্যান্ড দ্য গ্রেনাডিন্স', samoa: 'সামোয়া',
    sanmarino: 'সান মারিনো', saotomeandprincipe: 'সাও তোমে অ্যান্ড প্রিন্সিপে',
    saudiarabia: 'সৌদি আরব', senegal: 'সেনেগাল', serbia: 'সার্বিয়া', seychelles: 'সেশেলস',
    sierraleone: 'সিয়েরা লিওন', singapore: 'সিঙ্গাপুর', slovakia: 'স্লোভাকিয়া',
    slovenia: 'স্লোভেনিয়া', solomonislands: 'সোলোমন আইল্যান্ডস', somalia: 'সোমালিয়া',
    southafrica: 'সাউথ আফ্রিকা', southamerica: 'সাউথ আমেরিকা', southkorea: 'দক্ষিণ কোরিয়া',
    southsudan: 'সাউথ সুদান', spain: 'স্পেইন', srilanka: 'শ্রীলঙ্কা', sudan: 'সুদান',
    suriname: 'সুরিনাম', sweden: 'সুইডেন', switzerland: 'সুইজারল্যান্ড', syria: 'সিরিয়া',
    taiwan: 'তাইওয়ান', tajikistan: 'তাজিকিস্তান', tanzania: 'তানজানিয়া', territories: 'টেরিটরিজ',
    territory: 'টেরিটরি', thailand: 'থাইল্যান্ড', togo: 'টোগো', tonga: 'টোঙ্গা',
    trinidadandtobago: 'ত্রিনিদাদ অ্যান্ড টোবাগো', tunisia: 'তিউনিসিয়া', turkey: 'তুরস্ক',
    turkmenistan: 'তুর্কমেনিস্তান', tuvalu: 'তুভালু', uganda: 'উগান্ডা', ukraine: 'ইউক্রেন',
    unitedarabemirates: 'ইউনাইটেড আরব আমিরাত', unitedkingdom: 'ইউনাইটেড কিংডম',
    unitedstatesofamerica: 'ইউনাইটেড স্টেটস অব আমেরিকা', uruguay: 'উরুগুয়ে',
    uzbekistan: 'উজবেকিস্তান', vanuatu: 'ভানুয়াতু', vaticancity: 'ভ্যাটিকান সিটি',
    venezuela: 'ভেনিজুয়েলা', vietnam: 'ভিয়েতনাম', yemen: 'ইয়েমেন', zambia: 'জাম্বিয়া',
    zimbabwe: 'জিম্বাবুয়ে',
    // See also (kept under the section number in brackets): chad(09)

    // ---------------------------------------------------------------------------
    // 67. Currency                                                           
    // ---------------------------------------------------------------------------
    afghani: 'আফগানি', ariary: 'আরিয়ারি', baht: 'বাত', balboa: 'বালবোয়া', birr: 'বির',
    bolivar: 'বলিভার', boliviano: 'বলিভিয়ানো', cedi: 'সেডি', colon: 'কোলন',
    convertiblemark: 'কনভার্টিবল মার্ক', dalasi: 'ডালাসি', denar: 'দেনার', dinar: 'দিনার',
    dirham: 'দিরহাম', dobra: 'ডোব্রা', dollar: 'ডলার', dong: 'দোং', dram: 'ড্রাম',
    escudo: 'এস্কুডো', euro: 'ইউরো', forint: 'ফোরিন্ট', franc: 'ফ্রাঙ্ক', gourde: 'গুরদে',
    guarani: 'গুয়ারানি', hryvnia: 'হরিভনিয়া', kina: 'কিনা', kip: 'কিপ', koruna: 'করুনা',
    krona: 'ক্রোনা', krone: 'ক্রোন', kwacha: 'কোয়াচা', kwanza: 'কোয়ানজা', kyat: 'কিয়াট',
    lari: 'লারি', lek: 'লেক', lempira: 'লেম্পিরা', leone: 'লিওন', leu: 'লেউ', lev: 'লেভ',
    lilangeni: 'লিলাঙ্গেনি', lira: 'লিরা', loti: 'লোটি', manat: 'মানাত', metical: 'মেটিক্যাল',
    naira: 'নাইরা', nakfa: 'নাকফা', ngultrum: 'গুলট্রাম', ouguiya: 'উগুইয়া', paanga: 'পাআঙ্গা',
    peso: 'পেসো', pound: 'পাউন্ড', pula: 'পুলা', quetzal: 'কোয়েটজাল', renminbi: 'রেনমিনবি',
    rial: 'রিয়াল', riel: 'রিয়েল', ringgit: 'রিংগিত', ruble: 'রুবেল', rufiyaa: 'রুফিয়া',
    rupee: 'রুপি', rupiah: 'রুপিয়া', shekel: 'শেকেল', shilling: 'শিলিং', sol: 'সোল', som: 'সোম',
    taka: 'টাকা', tenge: 'টেঙ্গে', togrog: 'তোগ্রোগ', vatu: 'ভাতু', won: 'ওন', yen: 'ইয়েন',
    yuan: 'ইয়ুয়ান', zloty: 'জ্লোটি',
    // See also (kept under the section number in brackets): real(17)

    // ---------------------------------------------------------------------------
    // 68. Nationalities & Languages                                         
    // ---------------------------------------------------------------------------
    // -- Asia (50)
    afghan: 'আফগান', armenian: 'আর্মেনিয়ান', azerbaijani: 'আজারবাইজানি', bahraini: 'বাহরাইনি',
    bangladeshi: 'বাংলাদেশি', bhutanese: 'ভুটানিজ', bruneian: 'ব্রুনেইয়ান', burmese: 'বার্মিজ',
    cambodian: 'কাম্বোডিয়ান', chinese: 'চাইনিজ', cypriot: 'সাইপ্রিয়ট', emirati: 'ইমিরাতি',
    filipino: 'ফিলিপিনো', georgian: 'জর্জিয়ান', indian: 'ইন্ডিয়ান', indonesian: 'ইন্দোনেশিয়ান',
    iranian: 'ইরানিয়ান', iraqi: 'ইরাকি', israeli: 'ইসরায়েলি', japanese: 'জাপানিজ',
    jordanian: 'জর্ডানিয়ান', kazakh: 'কাজাখ', korean: 'কোরিয়ান', kuwaiti: 'কুয়েতি',
    kyrgyz: 'কিরগিজ', laotian: 'লাওশিয়ান', lebanese: 'লেবানিজ', malaysian: 'মালয়েশিয়ান',
    maldivian: 'মালদিভিয়ান', mongolian: 'মঙ্গোলিয়ান', nepali: 'নেপালি',
    northkorean: 'নর্থ কোরিয়ান', omani: 'ওমানি', pakistani: 'পাকিস্তানি',
    palestinian: 'প্যালেস্টাইনিয়ান', qatari: 'কাতারি', saudi: 'সৌদি',
    singaporean: 'সিঙ্গাপুরিয়ান', southkorean: 'সাউথ কোরিয়ান', srilankan: 'শ্রীলঙ্কান',
    syrian: 'সিরিয়ান', taiwanese: 'তাইওয়ানিজ', tajik: 'তাজিক', thai: 'থাই', timorese: 'তিমোরিজ',
    turkish: 'টার্কিশ', turkmen: 'তুর্কমেন', uzbek: 'উজবেক', vietnamese: 'ভিয়েতনামিজ',
    yemeni: 'ইয়েমেনি',
    // -- Europe (43)
    albanian: 'আলবেনিয়ান', austrian: 'অস্ট্রিয়ান', belarusian: 'বেলারুশিয়ান',
    belgian: 'বেলজিয়ান', bosnian: 'বসনিয়ান', british: 'ব্রিটিশ', bulgarian: 'বুলগেরিয়ান',
    croatian: 'ক্রোয়েশিয়ান', czech: 'চেক', danish: 'ডেনিশ', dutch: 'ডাচ', english: 'ইংলিশ',
    estonian: 'এস্তোনিয়ান', finnish: 'ফিনিশ', french: 'ফ্রেঞ্চ', german: 'জার্মান', greek: 'গ্রিক',
    hungarian: 'হাঙ্গেরিয়ান', icelandic: 'আইসল্যান্ডিক', irish: 'আইরিশ', italian: 'ইতালিয়ান',
    kosovar: 'কসোভার', latvian: 'লাটভিয়ান', lithuanian: 'লিথুয়ানিয়ান',
    luxembourgish: 'লুক্সেমবার্গিশ', macedonian: 'ম্যাসেডোনিয়ান', maltese: 'মাল্টিজ',
    moldovan: 'মলদোভান', montenegrin: 'মন্টেনেগ্রিন', norwegian: 'নরওয়েজিয়ান', polish: 'পোলিশ',
    portuguese: 'পর্তুগিজ', romanian: 'রোমানিয়ান', russian: 'রাশিয়ান', scottish: 'স্কটিশ',
    serbian: 'সার্বিয়ান', slovak: 'স্লোভাক', slovenian: 'স্লোভেনিয়ান', spanish: 'স্প্যানিশ',
    swedish: 'সুইডিশ', swiss: 'সুইস', ukrainian: 'ইউক্রেনিয়ান', welsh: 'ওয়েলশ',
    // -- Africa (38)
    algerian: 'আলজেরিয়ান', angolan: 'অ্যাঙ্গোলান', botswanan: 'বতসোয়ানান',
    burundian: 'বুরুন্ডিয়ান', cameroonian: 'ক্যামেরুনিয়ান', chadian: 'চাদিয়ান',
    congolese: 'কঙ্গোলিজ', egyptian: 'ইজিপশিয়ান', eritrean: 'ইরিট্রিয়ান', ethiopian: 'ইথিওপিয়ান',
    gabonese: 'গ্যাবনিজ', gambian: 'গাম্বিয়ান', ghanaian: 'ঘানিয়ান', ivorian: 'আইভরিয়ান',
    kenyan: 'কেনিয়ান', liberian: 'লাইবেরিয়ান', libyan: 'লিবিয়ান', malagasy: 'মালাগাসি',
    malawian: 'মালাউইয়ান', malian: 'মালিয়ান', mauritian: 'মরিশিয়ান', moroccan: 'মরোক্কান',
    mozambican: 'মোজাম্বিকান', namibian: 'নামিবিয়ান', nigerian: 'নাইজেরিয়ান',
    nigerien: 'নাইজেরিয়েন', rwandan: 'রুয়ান্ডান', senegalese: 'সেনেগালিজ',
    sierraleonean: 'সিয়েরা লিওনিয়ান', somali: 'সোমালি', southafrican: 'সাউথ আফ্রিকান',
    southsudanese: 'সাউথ সুদানিজ', sudanese: 'সুদানিজ', tanzanian: 'তানজানিয়ান',
    tunisian: 'টিউনিশিয়ান', ugandan: 'উগান্ডান', zambian: 'জাম্বিয়ান',
    zimbabwean: 'জিম্বাবুইয়ান',
    // -- Americas (30)
    american: 'আমেরিকান', argentine: 'আর্জেন্টাইন', bahamian: 'বাহামিয়ান',
    barbadian: 'বার্বাডিয়ান', belizean: 'বেলিজিয়ান', bolivian: 'বলিভিয়ান',
    brazilian: 'ব্রাজিলিয়ান', canadian: 'কানাডিয়ান', chilean: 'চিলিয়ান', colombian: 'কলম্বিয়ান',
    costarican: 'কোস্টা রিকান', cuban: 'কিউবান', dominican: 'ডোমিনিকান',
    ecuadorian: 'ইকুয়েডরিয়ান', guatemalan: 'গুয়াতেমালান', guyanese: 'গায়ানিজ',
    haitian: 'হাইতিয়ান', honduran: 'হন্ডুরান', jamaican: 'জ্যামাইকান', mexican: 'মেক্সিকান',
    nicaraguan: 'নিকারাগুয়ান', panamanian: 'পানামানিয়ান', paraguayan: 'প্যারাগুয়ান',
    peruvian: 'পেরুভিয়ান', puertorican: 'পুয়ের্তো রিকান', salvadoran: 'সালভাদোরান',
    surinamese: 'সুরিনামিজ', trinidadian: 'ত্রিনিদাদিয়ান', uruguayan: 'উরুগুয়ান',
    venezuelan: 'ভেনেজুয়েলান',
    // -- Oceania (7)
    australian: 'অস্ট্রেলিয়ান', fijian: 'ফিজিয়ান', hawaiian: 'হাওয়াইয়ান',
    newzealander: 'নিউজিল্যান্ডার', papuanewguinean: 'পাপুয়া নিউ গিনিয়ান', samoan: 'সামোয়ান',
    tongan: 'টোঙ্গান',
    // -- Languages (32)
    afrikaans: 'আফ্রিকান্স', amharic: 'আমহারিক', arabic: 'অ্যারাবিক', basque: 'বাস্ক',
    bengali: 'বেঙ্গলি', cantonese: 'ক্যান্টনিজ', catalan: 'কাতালান', esperanto: 'এস্পেরান্তো',
    gaelic: 'গ্যালিক', gujarati: 'গুজরাটি', hausa: 'হাউসা', hebrew: 'হিব্রু', hindi: 'হিন্দি',
    kannada: 'কন্নড়', latin: 'ল্যাটিন', malayalam: 'মালায়ালাম', mandarin: 'ম্যান্ডারিন',
    maori: 'মাওরি', marathi: 'মারাঠি', pali: 'পালি', pashto: 'পশতু', persian: 'পার্সিয়ান',
    punjabi: 'পাঞ্জাবি', sanskrit: 'সংস্কৃত', sinhala: 'সিংহলি', swahili: 'সোয়াহিলি',
    tamil: 'তামিল', telugu: 'তেলুগু', urdu: 'উর্দু', yiddish: 'ইদ্দিশ', yoruba: 'ইয়োরুবা',
    zulu: 'জুলু',

    // ---------------------------------------------------------------------------
    // 69. Bangladesh: Upazilas, Dhaka Areas & Districts                     
    // ---------------------------------------------------------------------------
    // Upazilas of Bangladesh (all 8 divisions, listed district by district). Only the names whose phonetic
    // rendering differed are listed here; the rest come from the rules.
    // -- Upazilas - Dhaka Division (84)
    dhamrai: 'ধামরাই', dohar: 'দোহার', keraniganj: 'কেরাণীগঞ্জ', nawabganj: 'নবাবগঞ্জ',
    gazipur: 'গাজীপুর', kaliakair: 'কালিয়াকৈর', kaliganj: 'কালীগঞ্জ', kapasia: 'কাপাসিয়া',
    sreepur: 'শ্রীপুর', ashtagram: 'অষ্টগ্রাম', bajitpur: 'বাজিতপুর', bhairab: 'ভৈরব',
    hossainpur: 'হোসেনপুর', itna: 'ইটনা', karimganj: 'করিমগঞ্জ', katiadi: 'কটিয়াদী',
    kishoreganjsadar: 'কিশোরগঞ্জ সদর', kuliarchar: 'কুলিয়ারচর', mithamain: 'মিঠামইন',
    nikli: 'নিকলী', pakundia: 'পাকুন্দিয়া', tarail: 'তাড়াইল', daulatpur: 'দৌলতপুর', ghior: 'ঘিওর',
    harirampur: 'হরিরামপুর', manikganjsadar: 'মানিকগঞ্জ সদর', saturia: 'সাটুরিয়া',
    shibalaya: 'শিবালয়', singair: 'সিঙ্গাইর', gazaria: 'গজারিয়া', lohajang: 'লৌহজং',
    munshiganjsadar: 'মুন্সীগঞ্জ সদর', sirajdikhan: 'সিরাজদীখান', sreenagar: 'শ্রীনগর',
    tongibari: 'টংগীবাড়ী', araihazar: 'আড়াইহাজার', bandar: 'বন্দর',
    narayanganjsadar: 'নারায়ণগঞ্জ সদর', rupganj: 'রূপগঞ্জ', sonargaon: 'সোনারগাঁও',
    belabo: 'বেলাবো', monohardi: 'মনোহরদী', narsingdisadar: 'নরসিংদী সদর', palash: 'পলাশ',
    raipura: 'রায়পুরা', shibpur: 'শিবপুর', bhuapur: 'ভূয়াপুর', delduar: 'দেলদুয়ার',
    dhanbari: 'ধনবাড়ী', ghatail: 'ঘাটাইল', gopalpur: 'গোপালপুর', kalihati: 'কালিহাতী',
    madhupur: 'মধুপুর', mirzapur: 'মির্জাপুর', nagarpur: 'নাগরপুর', sakhipur: 'সখীপুর',
    tangailsadar: 'টাঙ্গাইল সদর', alfadanga: 'আলফাডাঙ্গা', bhanga: 'ভাঙ্গা', boalmari: 'বোয়ালমারী',
    charbhadrasan: 'চরভদ্রাসন', faridpursadar: 'ফরিদপুর সদর', madhukhali: 'মধুখালী',
    nagarkanda: 'নগরকান্দা', sadarpur: 'সদরপুর', saltha: 'সালথা', gopalganjsadar: 'গোপালগঞ্জ সদর',
    kashiani: 'কাশিয়ানী', kotalipara: 'কোটালীপাড়া', muksudpur: 'মুকসুদপুর',
    tungipara: 'টুঙ্গিপাড়া', kalkini: 'কালকিনি', madaripursadar: 'মাদারীপুর সদর',
    shibchar: 'শিবচর', dasar: 'ডাসার', baliakandi: 'বালিয়াকান্দি', goalanda: 'গোয়ালন্দ',
    kalukhali: 'কালুখালী', bhedarganj: 'ভেদরগঞ্জ', damudya: 'ডামুড্যা', gosairhat: 'গোসাইরহাট',
    naria: 'নড়িয়া', shariatpursadar: 'শরীয়তপুর সদর', zajira: 'জাজিরা',
    // -- Upazilas - Chattogram Division (97)
    anwara: 'আনোয়ারা', banshkhali: 'বাঁশখালী', boalkhali: 'বোয়ালখালী', chandanaish: 'চন্দনাইশ',
    fatikchhari: 'ফটিকছড়ি', hathazari: 'হাটহাজারী', karnaphuli: 'কর্ণফুলী', lohagara: 'লোহাগাড়া',
    mirsharai: 'মীরসরাই', patiya: 'পটিয়া', rangunia: 'রাঙ্গুনিয়া', raozan: 'রাউজান',
    sandwip: 'সন্দ্বীপ', satkania: 'সাতকানিয়া', sitakunda: 'সীতাকুণ্ড', chakaria: 'চকরিয়া',
    coxsbazarsadar: 'কক্সবাজার সদর', kutubdia: 'কুতুবদিয়া', maheshkhali: 'মহেশখালী',
    pekua: 'পেকুয়া', teknaf: 'টেকনাফ', ukhia: 'উখিয়া', eidgaon: 'ঈদগাঁও', alikadam: 'আলীকদম',
    bandarbansadar: 'বান্দরবান সদর', naikhongchhari: 'নাইক্ষ্যংছড়ি', rowangchhari: 'রোয়াংছড়ি',
    thanchi: 'থানচি', dighinala: 'দীঘিনালা', khagrachharisadar: 'খাগড়াছড়ি সদর',
    lakshmichhari: 'লক্ষ্মীছড়ি', mahalchhari: 'মহালছড়ি', manikchhari: 'মানিকছড়ি',
    matiranga: 'মাটিরাঙ্গা', panchhari: 'পানছড়ি', ramgarh: 'রামগড়', bagaichhari: 'বাঘাইছড়ি',
    barkal: 'বরকল', belaichhari: 'বিলাইছড়ি', juraichhari: 'জুরাছড়ি', kawkhali: 'কাউখালী',
    langadu: 'লংগদু', naniarchar: 'নানিয়ারচর', rajasthali: 'রাজস্থলী',
    rangamatisadar: 'রাঙ্গামাটি সদর', barura: 'বরুড়া', brahmanpara: 'ব্রাহ্মণপাড়া',
    burichang: 'বুড়িচং', chandina: 'চান্দিনা', chauddagram: 'চৌদ্দগ্রাম',
    cumillaadarshsadar: 'কুমিল্লা আদর্শ সদর', cumillasadardakshin: 'কুমিল্লা সদর দক্ষিণ',
    daudkandi: 'দাউদকান্দি', debidwar: 'দেবিদ্বার', homna: 'হোমনা', laksam: 'লাকসাম',
    lalmai: 'লালমাই', meghna: 'মেঘনা', monoharganj: 'মনোহরগঞ্জ', muradnagar: 'মুরাদনগর',
    nangalkot: 'নাঙ্গলকোট', akhaura: 'আখাউড়া', ashuganj: 'আশুগঞ্জ', banchharampur: 'বাঞ্ছারামপুর',
    bijoynagar: 'বিজয়নগর', brahmanbariasadar: 'ব্রাহ্মণবাড়িয়া সদর', kasba: 'কসবা',
    nabinagar: 'নবীনগর', nasirnagar: 'নাসিরনগর', sarail: 'সরাইল', chandpursadar: 'চাঁদপুর সদর',
    faridganj: 'ফরিদগঞ্জ', haimchar: 'হাইমচর', hajiganj: 'হাজীগঞ্জ', kachua: 'কচুয়া',
    matlabdakshin: 'মতলব দক্ষিণ', matlabuttar: 'মতলব উত্তর', shahrasti: 'শাহরাস্তি',
    begumganj: 'বেগমগঞ্জ', chatkhil: 'চাটখিল', companiganj: 'কোম্পানীগঞ্জ', kabirhat: 'কবিরহাট',
    noakhalisadar: 'নোয়াখালী সদর', senbagh: 'সেনবাগ', sonaimuri: 'সোনাইমুড়ী',
    subarnachar: 'সুবর্ণচর', chhagalnaiya: 'ছাগলনাইয়া', daganbhuiyan: 'দাগনভূঁয়া',
    fenisadar: 'ফেনী সদর', fulgazi: 'ফুলগাজী', parshuram: 'পরশুরাম', sonagazi: 'সোনাগাজী',
    kamalnagar: 'কমলনগর', lakshmipursadar: 'লক্ষ্মীপুর সদর', raipur: 'রায়পুর', ramganj: 'রামগঞ্জ',
    ramgati: 'রামগতি',
    // -- Upazilas - Rajshahi Division (58)
    bagmara: 'বাগমারা', charghat: 'চারঘাট', godagari: 'গোদাগাড়ী', mohanpur: 'মোহনপুর', paba: 'পবা',
    puthia: 'পুঠিয়া', tanore: 'তানোর', adamdighi: 'আদমদীঘি', bogurasadar: 'বগুড়া সদর',
    dhunat: 'ধুনট', dupchanchia: 'দুপচাঁচিয়া', gabtali: 'গাবতলী', nandigram: 'নন্দীগ্রাম',
    sariakandi: 'সারিয়াকান্দি', shajahanpur: 'শাজাহানপুর', shibganj: 'শিবগঞ্জ',
    sonatola: 'সোনাতলা', bholahat: 'ভোলাহাট', chapainawabganjsadar: 'চাঁপাইনবাবগঞ্জ সদর',
    gomastapur: 'গোমস্তাপুর', nachole: 'নাচোল', akkelpur: 'আক্কেলপুর',
    joypurhatsadar: 'জয়পুরহাট সদর', khetlal: 'ক্ষেতলাল', panchbibi: 'পাঁচবিবি',
    badalgachhi: 'বদলগাছী', dhamoirhat: 'ধামইরহাট', mohadevpur: 'মহাদেবপুর',
    naogaonsadar: 'নওগাঁ সদর', niamatpur: 'নিয়ামতপুর', patnitala: 'পত্নীতলা', porsha: 'পোরশা',
    raninagar: 'রাণীনগর', bagatipara: 'বাগাতিপাড়া', baraigram: 'বড়াইগ্রাম',
    gurudaspur: 'গুরুদাসপুর', lalpur: 'লালপুর', naldanga: 'নলডাঙ্গা', natoresadar: 'নাটোর সদর',
    singra: 'সিংড়া', atgharia: 'আটঘরিয়া', bera: 'বেড়া', bhangura: 'ভাঙ্গুড়া',
    chatmohar: 'চাটমোহর', faridpur: 'ফরিদপুর', ishwardi: 'ঈশ্বরদী', pabnasadar: 'পাবনা সদর',
    santhia: 'সাঁথিয়া', sujanagar: 'সুজানগর', belkuchi: 'বেলকুচি', chauhali: 'চৌহালী',
    kamarkhanda: 'কামারখন্দ', kazipur: 'কাজিপুর', raiganj: 'রায়গঞ্জ', shahjadpur: 'শাহজাদপুর',
    sirajganjsadar: 'সিরাজগঞ্জ সদর', tarash: 'তাড়াশ', ullahpara: 'উল্লাপাড়া',
    // -- Upazilas - Khulna Division (48)
    batiaghata: 'বটিয়াঘাটা', dacope: 'দাকোপ', dumuria: 'ডুমুরিয়া', dighalia: 'দিঘলিয়া',
    koyra: 'কয়রা', paikgachha: 'পাইকগাছা', phultala: 'ফুলতলা', rupsha: 'রূপসা',
    bagerhatsadar: 'বাগেরহাট সদর', chitalmari: 'চিতলমারী', fakirhat: 'ফকিরহাট', kachhua: 'কচুয়া',
    mollahat: 'মোল্লাহাট', mongla: 'মোংলা', morrelganj: 'মড়েলগঞ্জ', rampal: 'রামপাল',
    sarankhola: 'শরণখোলা', alamdanga: 'আলমডাঙ্গা', chuadangasadar: 'চুয়াডাঙ্গা সদর',
    damurhuda: 'দামুড়হুদা', jibannagar: 'জীবননগর', abhaynagar: 'অভয়নগর', bagherpara: 'বাঘারপাড়া',
    chaugachha: 'চৌগাছা', jhikargachha: 'ঝিকরগাছা', keshabpur: 'কেশবপুর', jashoresadar: 'যশোর সদর',
    manirampur: 'মণিরামপুর', harinakunda: 'হরিণাকুন্দু', jhenaidahsadar: 'ঝিনাইদহ সদর',
    kotchandpur: 'কোটচাঁদপুর', maheshpur: 'মহেশপুর', shailkupa: 'শৈলকুপা', bheramara: 'ভেড়ামারা',
    khoksa: 'খোকসা', kumarkhali: 'কুমারখালী', kushtiasadar: 'কুষ্টিয়া সদর',
    magurasadar: 'মাগুরা সদর', gangni: 'গাংনী', meherpursadar: 'মেহেরপুর সদর',
    mujibnagar: 'মুজিবনগর', kalia: 'কালিয়া', narailsadar: 'নড়াইল সদর', assasuni: 'আশাশুনি',
    debhata: 'দেবহাটা', kalaroa: 'কলারোঁয়া', satkhirasadar: 'সাতক্ষীরা সদর',
    shyamnagar: 'শ্যামনগর',
    // -- Upazilas - Barishal Division (41)
    agailjhara: 'আগৈলঝাড়া', babuganj: 'বাবুগঞ্জ', bakerganj: 'বাকেরগঞ্জ',
    banaripara: 'বানারীপাড়া', barishalsadar: 'বরিশাল সদর', gournadi: 'গৌরনদী', hizla: 'হিজলা',
    mehendiganj: 'মেহেন্দিগঞ্জ', muladi: 'মুলাদী', wazirpur: 'উজিরপুর', amtali: 'আমতলী',
    bamna: 'বামনা', bargunasadar: 'বরগুনা সদর', betagi: 'বেতাগী', patharghata: 'পাথরঘাটা',
    taltali: 'তালতলী', bholasadar: 'ভোলা সদর', burhanuddin: 'বোরহানউদ্দিন', charfasson: 'চরফ্যাশন',
    daulatkhan: 'দৌলতখান', lalmohan: 'লালমোহন', manpura: 'মনপুরা', tazumuddin: 'তজুমদ্দিন',
    jhalokathisadar: 'ঝালকাঠি সদর', kanthalia: 'কাঁঠালিয়া', nalchity: 'নলছিটি', bauphal: 'বাউফল',
    dashmina: 'দশমিনা', dumki: 'দুমকি', galachipa: 'গলাচিপা', kalapara: 'কলাপাড়া',
    mirzaganj: 'মির্জাগঞ্জ', patuakhalisadar: 'পটুয়াখালী সদর', rangabali: 'রাঙ্গাবালী',
    bhandaria: 'ভান্ডারিয়া', indurkani: 'ইন্দুরকানী', mathbaria: 'মঠবাড়িয়া',
    nazirpur: 'নাজিরপুর', nesarabad: 'নেছারাবাদ', swarupkathi: 'স্বরূপকাঠী',
    pirojpursadar: 'পিরোজপুর সদর',
    // -- Upazilas - Sylhet Division (40)
    balaganj: 'বালাগঞ্জ', beanibazar: 'বিয়ানীবাজার', bishwanath: 'বিশ্বনাথ',
    dakshinsurma: 'দক্ষিণ সুরমা', fenchuganj: 'ফেঞ্চুগঞ্জ', golapganj: 'গোলাপগঞ্জ',
    gowainghat: 'গোয়াইনঘাট', jaintapur: 'জৈন্তাপুর', kanaighat: 'কানাইঘাট',
    osmaninagar: 'ওসমানী নগর', sylhetsadar: 'সিলেট সদর', zakiganj: 'জকিগঞ্জ',
    ajmiriganj: 'আজমিরীগঞ্জ', bahubal: 'বাহুবল', baniachong: 'বানিয়াচং', chunarughat: 'চুনারুঘাট',
    habiganjsadar: 'হবিগঞ্জ সদর', madhabpur: 'মাধবপুর', nabiganj: 'নবীগঞ্জ',
    shayestaganj: 'শায়েস্তাগঞ্জ', barlekha: 'বড়লেখা', juri: 'জুড়ী', kamalganj: 'কমলগঞ্জ',
    kulaura: 'কুলাউড়া', moulvibazarsadar: 'মৌলভীবাজার সদর', rajnagar: 'রাজনগর',
    sreemangal: 'শ্রীমঙ্গল', bishwamvarpur: 'বিশ্বম্ভরপুর', chhatak: 'ছাতক',
    dakshinsunamganj: 'দক্ষিণ সুনামগঞ্জ', shantiganj: 'শান্তিগঞ্জ', derai: 'দিরাই',
    dharamapasha: 'ধর্মপাশা', dowarabazar: 'দোয়ারাবাজার', jagannathpur: 'জগন্নাথপুর',
    jamalganj: 'জামালগঞ্জ', madhyanagar: 'মধ্যনগর', sullah: 'সুল্লা',
    sunamganjsadar: 'সুনামগঞ্জ সদর', tahirpur: 'তাহিরপুর',
    // -- Upazilas - Rangpur Division (51)
    badarganj: 'বদরগঞ্জ', gangachhara: 'গঙ্গাচড়া', kaunia: 'কাউনিয়া', mithapukur: 'মিঠাপুকুর',
    pirgachha: 'পীরগাছা', pirganj: 'পীরগঞ্জ', rangpursadar: 'রংপুর সদর', taraganj: 'তারাগঞ্জ',
    biral: 'বিরল', birampur: 'বিরামপুর', birganj: 'বীরগঞ্জ', bochaganj: 'বোচাগঞ্জ',
    chirirbandar: 'চিরিরবন্দর', dinajpursadar: 'দিনাজপুর সদর', ghoraghat: 'ঘোড়াঘাট',
    hakimpur: 'হাকিমপুর', kaharole: 'কাহারোল', khansama: 'খানসামা', parbatipur: 'পার্বতীপুর',
    fulchhari: 'ফুলছড়ি', gaibandhasadar: 'গাইবান্ধা সদর', gobindaganj: 'গোবিন্দগঞ্জ',
    palashbari: 'পলাশবাড়ী', saghata: 'সাঘাটা', sundarganj: 'সুন্দরগঞ্জ',
    bhurungamari: 'ভূরুঙ্গামারী', charrajibpur: 'চর রাজিবপুর', chilmari: 'চিলমারী',
    kurigramsadar: 'কুড়িগ্রাম সদর', nageshwari: 'নাগেশ্বরী', phulbari: 'ফুলবাড়ী',
    rajarhat: 'রাজারহাট', raomari: 'রৌমারী', aditmari: 'আদিতমারী', hatibandha: 'হাতীবান্ধা',
    lalmonirhatsadar: 'লালমনিরহাট সদর', patgram: 'পাটগ্রাম', dimla: 'ডিমলা', domar: 'ডোমার',
    jaldhaka: 'জলঢাকা', nilphamarisadar: 'নীলফামারী সদর', saidpur: 'সৈয়দপুর', atwari: 'আটওয়ারী',
    boda: 'বোদা', debiganj: 'দেবীগঞ্জ', panchagarhsadar: 'পঞ্চগড় সদর', tetulia: 'তেঁতুলিয়া',
    baliadangi: 'বালিয়াডাঙ্গী', haripur: 'হরিপুর', ranisankail: 'রাণীশংকৈল',
    thakurgaonsadar: 'ঠাকুরগাঁও সদর',
    // -- Upazilas - Mymensingh Division (29)
    dhobaura: 'ধোবাউড়া', fulbaria: 'ফুলবাড়ীয়া', gafargaon: 'গফরগাঁও', gauripur: 'গৌরীপুর',
    haluaghat: 'হালুয়াঘাট', ishwarganj: 'ঈশ্বরগঞ্জ', mymensinghsadar: 'ময়মনসিংহ সদর',
    phulpur: 'ফুলপুর', baksiganj: 'বকশীগঞ্জ', dewanganj: 'দেওয়ানগঞ্জ', islampur: 'ইসলামপুর',
    jamalpursadar: 'জামালপুর সদর', madarganj: 'মাদারগঞ্জ', melandaha: 'মেলান্দহ',
    sarishabari: 'সরিষাবাড়ী', atpara: 'আটপাড়া', barhatta: 'বারহাট্টা', khaliajuri: 'খালিয়াজুরী',
    kalmakanda: 'কলমাকান্দা', kendua: 'কেন্দুয়া', madan: 'মদন', mohanganj: 'মোহনগঞ্জ',
    netrokonasadar: 'নেত্রকোণা সদর', purbadhala: 'পূর্বধলা', jhenaigati: 'ঝিনাইগাতী', nakla: 'নকলা',
    nalitabari: 'নালিতাবাড়ী', sherpursadar: 'শেরপুর সদর', sreebardi: 'শ্রীবরদী',
    // -- Dhaka city areas (10)
    mirpur: 'মিরপুর', mohammadpur: 'মোহাম্মদপুর', azimpur: 'আজিমপুর', rampura: 'রামপুরা',
    tejgaon: 'তেজগাঁও', shahbag: 'শাহবাগ', gabtoli: 'গাবতলী', komlapur: 'কমলাপুর', lalbag: 'লালবাগ',
    khilgaon: 'খিলগাঁও',
    // -- District name spellings (17)
    bagerhat: 'বাগেরহাট', borguna: 'বরগুনা', dinajpur: 'দিনাজপুর', foridpur: 'ফরিদপুর',
    jamalpur: 'জামালপুর', joypurhat: 'জয়পুরহাট', kishorganj: 'কিশোরগঞ্জ',
    lalmonirhat: 'লালমনিরহাট', moulvibazar: 'মৌলভীবাজার', nilphamari: 'নীলফামারী',
    norsingdi: 'নরসিংদী', pirojpur: 'পিরোজপুর', rajbari: 'রাজবাড়ি', rajshahi: 'রাজশাহী',
    sherpur: 'শেরপুর', sirajganj: 'সিরাজগঞ্জ', thakurgaon: 'ঠাকুরগাঁও',
  }),

  // Words that can be read in more than one way: first spelling is the preview, the rest are alternatives.
  homophones: Object.freeze({
    angilock: ['এঞ্জিলক', 'অ্যাঞ্জিলক'],
    aste: ['আসতে', 'আস্তে'],
    audio: ['অডিও', 'অডিয়ো'],
    bari: ['বাড়ি', 'বারি'],
    bhor: ['ভর', 'ভোর'],
    bol: ['বল', 'বোল'],
    bon: ['বন', 'বোন'],
    din: ['দিন', 'দীন'],
    fute: ['ফুটে', 'ফুতে'],
    gemini: ['জেমিনাই', 'জেমিনি'],
    handle: ['হ্যান্ডেল', 'হ্যান্ডল'],
    har: ['হার', 'হাড়'],
    house: ['হাউজ', 'হাউস'],
    jor: ['জড়', 'জোর', 'জ্বর'],
    koi: ['কই', 'কৈ'],
    ksh: ['ক্ষ', 'কষ', 'কশ'],
    kul: ['কুল', 'কূল'],
    live: ['লাইভ', 'লিভ'],
    main: ['মেইন', 'মাইন'],
    mile: ['মিলে', 'মাইল'],
    nari: ['নারী', 'নাড়ি'],
    pora: ['পড়া', 'পোড়া', 'পরা'],
    shona: ['শোনা', 'সোনা'],
    shor: ['সর', 'স্বর'],
    shur: ['সুর', 'শূর', 'শুঁড়'],
    sri: ['শ্রি', 'শ্রী'],
    the: ['দ্য', 'দি', 'থে'],
    tir: ['তির', 'তীর'],
    video: ['ভিডিও', 'ভিডিয়ো'],
  }),

  // Handled by the phonetic engine itself - never add these to overrides.
  doNotOverride: Object.freeze({
    bochor: 'বছর', bosen: 'বসেন', gorom: 'গরম', hobe: 'হবে', kolom: 'কলম', kor: 'কর', korbo: 'করবো',
    kotha: 'কথা', mojar: 'মজার', mon: 'মন', mone: 'মনে', notun: 'নতুন', sokal: 'সকাল',
    sundor: 'সুন্দর',
  }),
});