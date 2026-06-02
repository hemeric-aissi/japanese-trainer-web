/**
 * data.js — Données des exercices, vocabulaire et règles grammaticales
 */

// ─── DATA ───────────────────────────────────────────────────────────────────

const DATA = {
  1: [
    { sentence: "Nani ___ tabemasu ___ ?", blanks: ["o","ka"], fr: "Qu'est-ce que tu manges ?" },
    { sentence: "Naruto ___ ramen o tabemasu.", blanks: ["wa"], fr: "Naruto mange des ramen." },
    { sentence: "Kore ___ nan desu ___ ?", blanks: ["wa","ka"], fr: "Qu'est-ce que c'est ?" },
    { sentence: "Watashi ___ mizu o nomimasu.", blanks: ["wa"], fr: "Je bois de l'eau." },
    { sentence: "Sono pan ___ tabemasen.", blanks: ["wa"], fr: "Je ne mange pas ce pain." },
  ],

  2: [
    { word: "chiisai", answer: "chiisakunai", fr: "petit → pas petit (adj-i)" },
    { word: "kitanai", answer: "kitanakunai", fr: "sale → pas sale (adj-i)" },
    { word: "yuumei", answer: "yuumei janai", fr: "célèbre → pas célèbre (adj-na)" },
    { word: "hen", answer: "hen janai", fr: "bizarre → pas bizarre (adj-na)" },
    { word: "genki", answer: "genki janai", fr: "en forme → pas en forme (adj-na)" },
    { word: "omoi", answer: "omokunai", fr: "lourd → pas lourd (adj-i)" },
  ],

  3: [
    { sentence: "Kono hon wa ______ desu.", hint: "cher", answer: "takai", fr: "Ce livre est cher." },
    { sentence: "Sono neko wa ______ desu.", hint: "mignon / gentil", answer: ["kawaii","yasashii"], fr: "Ce chat est mignon / gentil." },
    { sentence: "Koko no ramen wa ______ desu.", hint: "délicieux (familier)", answer: "umai", fr: "Le ramen ici est délicieux." },
    { sentence: "Ano hito wa ______ desu.", hint: "célèbre", answer: "yuumei", fr: "Cette personne là-bas est célèbre." },
    { sentence: "Kono heya wa ______ desu.", hint: "sale", answer: "kitanai", fr: "Cette chambre est sale." },
    { sentence: "Nihongo wa ______ desu.", hint: "difficile", answer: "taihen", fr: "Le japonais est difficile." },
    { sentence: "Sakura wa ______ desu.", hint: "en forme", answer: "genki", fr: "Sakura est en forme." },
    { sentence: "Kono baggu wa ______ desu.", hint: "pratique", answer: "benri", fr: "Ce sac est pratique." },
  ],

  4: [
    { verb: "Miru", fr: "voir / regarder", polite: "mimasu", negative: "mimasen", hiragana_verb: "みる", hiragana_polite: "みます", hiragana_neg: "みません" },
    { verb: "Iku", fr: "aller", polite: "ikimasu", negative: "ikimasen", hiragana_verb: "いく", hiragana_polite: "いきます", hiragana_neg: "いきません" },
    { verb: "Nomu", fr: "boire", polite: "nomimasu", negative: "nomimasen", hiragana_verb: "のむ", hiragana_polite: "のみます", hiragana_neg: "のみません" },
    { verb: "Yomu", fr: "lire", polite: "yomimasu", negative: "yomimasen", hiragana_verb: "よむ", hiragana_polite: "よみます", hiragana_neg: "よみません" },
    { verb: "Taberu", fr: "manger", polite: "tabemasu", negative: "tabemasen", hiragana_verb: "たべる", hiragana_polite: "たべます", hiragana_neg: "たべません" },
    { verb: "Hairu", fr: "entrer / rentrer", polite: "hairimasu", negative: "hairimasen", hiragana_verb: "はいる", hiragana_polite: "はいります", hiragana_neg: "はいりません" },
    { verb: "Okiru", fr: "se lever", polite: "okimasu", negative: "okimasen", hiragana_verb: "おきる", hiragana_polite: "おきます", hiragana_neg: "おきません" },
    { verb: "Neru", fr: "dormir / se coucher", polite: "nemasu", negative: "nemasen", hiragana_verb: "ねる", hiragana_polite: "ねます", hiragana_neg: "ねません" },
    { verb: "Kau", fr: "acheter", polite: "kaimasu", negative: "kaimasen", hiragana_verb: "かう", hiragana_polite: "かいます", hiragana_neg: "かいません" },
    { verb: "Suru", fr: "faire", polite: "shimasu", negative: "shimasen", hiragana_verb: "する", hiragana_polite: "します", hiragana_neg: "しません" },
    { verb: "Kuru", fr: "venir", polite: "kimasu", negative: "kimasen", hiragana_verb: "くる", hiragana_polite: "きます", hiragana_neg: "きません" },
  ],

  5: [
    { fr: "Naruto regarde un anime à la maison.", answer: "naruto wa ie de anime o mimasu", note: "wa=thème, de=lieu d'action, o=objet" },
    { fr: "Le livre rouge est bizarre.", answer: "akai hon wa hen desu", note: "adjectif-i avant le nom, adjectif-na après wa" },
    { fr: "Le chat n'est pas derrière la voiture.", answer: "neko wa kuruma no ushiro ni imasen", note: "no ushiro ni = derrière, imasen = n'est pas (animé)" },
    { fr: "Il y a des mangas dans la bibliothèque.", answer: "toshokan ni manga ga arimasu", note: "ni=localisation, ga=sujet existentiel, arimasu=objet inanimé" },
    { fr: "Gojo donne un onigiri à Yuji.", answer: "gojo wa yuuji ni onigiri o agemasu", note: "ni=destinataire, o=objet direct, agemasu=donner" },
    { fr: "Cette montagne est belle.", answer: "kono yama wa kirei desu", note: "kono=ce (proche), kirei=adj-na (beau/propre)" },
    { fr: "À droite de l'hôtel, il y a une gare.", answer: "hoteru no migi ni eki ga arimasu", note: "no migi ni = à droite de, ga=sujet existentiel" },
    { fr: "Tanjiro n'achète pas de billet.", answer: "tanjiro wa kippu o kaimasen", note: "o=objet, kaimasen=forme négative polie de kau" },
    { fr: "Luffy mange un ramen au restaurant.", answer: "luffy wa resutoran de ramen o tabemasu", note: "de=lieu d'action, o=objet direct" },
  ],

  6: [
    { num: 72, answer: "nana juu ni" },
    { num: 999, answer: "kyuu hyaku kyuu juu kyuu" },
    { num: 108, answer: "hyaku hachi" },
    { num: 1245, answer: "sen ni hyaku yon juu go" },
    { num: 3784, answer: "sanzen nana hyaku hachi juu yon" },
    { num: 638, answer: "roppyaku san juu hachi" },
    { num: 310, answer: "sanbyaku juu" },
    { num: 56, answer: "go juu roku" },
    { num: 1854, answer: "sen happyaku go juu yon" },
    { num: 3673, answer: "sanzen roppyaku nana juu san" },
    { num: 870, answer: "happyaku nana juu" },
    { num: 45873, answer: "yon man go sen happyaku nana juu san" },
    { num: 87526, answer: "hachi man nana sen go hyaku ni juu roku" },
  ],

  7: [
    { jp: "Ni juu san", answer: "23" },
    { jp: "Sanbyaku go juu", answer: "350" },
    { jp: "Sanzen yon hyaku", answer: "3400" },
    { jp: "Yon man nana sen happyaku kyuu juu", answer: "47890" },
    { jp: "Ichi man sanzen roku juu go", answer: "13065" },
  ],

  8: {
    translate: [
      { fr: "Qu'est-ce que c'est ?", answer: "kore wa nan desu ka" },
      { fr: "Que bois-tu ?", answer: "nani o nomimasu ka" },
      { fr: "Quelle heure est-il ?", answer: "nan ji desu ka" },
      { fr: "Que lit Naruto ?", answer: "naruto wa nani o yomimasu ka" },
      { fr: "Combien de personnes y a-t-il ?", answer: "nan nin imasu ka" },
      { fr: "Que mange Sakura ?", answer: "sakura wa nani o tabemasu ka" },
    ],
    choose: [
      { sentence: "______ ji desu ka ?", answer: "Nan" },
      { sentence: "______ o tabemasu ka ?", answer: "Nani" },
      { sentence: "Kore wa ______ desu ka ?", answer: "Nan" },
      { sentence: "______ nin imasu ka ?", answer: "Nan" },
      { sentence: "______ no eiga ga suki desu ka ?", answer: "Nan" },
      { sentence: "______ youbi desu ka ?", answer: "Nan" },
    ],
  },

  9: [
    { fr: "Ce chien est mignon (Maomao parle)", answer: "kono inu wa kawaii desu" },
    { fr: "Ce magasin est célèbre (Jinshi parle)", answer: "kono mise wa yuumei desu" },
    { fr: "Cette montagne est belle", answer: "kono yama wa kirei desu" },
    { fr: "Cette rivière est calme (Jinshi parle)", answer: "kono kawa wa shizuka desu" },
    { fr: "Le pont là bas est rouge", answer: "ano hashi wa akai desu" },
    { fr: "Ces fleurs sont jolies", answer: "kono hana wa kirei desu" },
    { fr: "Ces sakura sont beaux", answer: "kono sakura wa kirei desu" },
    { fr: "Ici c'est animé", answer: "koko wa nigiyaka desu" },
    { fr: "Le ciel est rose et bleu", answer: "sora wa pinku to ao desu" },
  ],

  10: [
    { time: "7h12", answer: "shichi ji juu ni fun" },
    { time: "4h03", answer: "yo ji san pun" },
    { time: "11h58", answer: "juu ichi ji go juu happun" },
    { time: "2h10", answer: "ni ji juppun" },
    { time: "9h30", answer: "ku ji han" },
    { time: "6h34", answer: "roku ji san juu yon pun" },
    { time: "14h09", answer: "juu yo ji kyuu fun" },
    { time: "00h45", answer: "rei ji yon juu go fun" },
  ],

  11: [
    { sentence: "Neko ga ie ni ______.", answer: "imasu", fr: "Le chat est à la maison.", note: "neko=chat → être vivant → imasu" },
    { sentence: "Hon ga tsukue no ue ni ______.", answer: "arimasu", fr: "Le livre est sur le bureau.", note: "hon=livre → objet inanimé → arimasu" },
    { sentence: "Gakusei ga gakkou ni ______.", answer: "imasu", fr: "L'étudiant est à l'école.", note: "gakusei=étudiant → personne → imasu" },
    { sentence: "Kuruma ga parkingu ni ______.", answer: "arimasu", fr: "La voiture est au parking.", note: "kuruma=voiture → inanimé → arimasu" },
    { sentence: "Kodomo ga kouen ni ______.", answer: "imasu", fr: "L'enfant est au parc.", note: "kodomo=enfant → personne → imasu" },
    { sentence: "Pen ga kaban no naka ni ______.", answer: "arimasu", fr: "Le stylo est dans le sac.", note: "pen=stylo → objet → arimasu" },
  ],

  12: [
    { fr: "Le chat est à gauche de Miyo", answer: "neko wa miyo no hidari ni imasu", note: "no hidari ni = à gauche de, imasu (chat=animé)" },
    { fr: "Le stylo est sur le livre", answer: "pen wa hon no ue ni arimasu", note: "no ue ni = sur, arimasu (stylo=inanimé)" },
    { fr: "Derrière Kiyoka, il y a une table", answer: "kiyoka no ushiro ni teeburu ga arimasu", note: "no ushiro ni = derrière, ga=sujet existentiel" },
    { fr: "De l'autre côté de la maison, il y a une horloge", answer: "ie no mukou ni tokei ga arimasu", note: "no mukou ni = de l'autre côté de" },
    { fr: "Au dessus de la table, il y a un téléphone", answer: "teeburu no ue ni denwa ga arimasu", note: "no ue ni = au dessus de / sur" },
    { fr: "En dessous de cette bougie (rousoku), il y a la bibliothèque", answer: "kono rousoku no shita ni toshokan ga arimasu", note: "no shita ni = en dessous de" },
  ],

  13: [
    { fr: "Je mange un bento au parc", answer: "watashi wa kouen de bentou o tabemasu", note: "de=lieu d'action (manger), o=objet direct" },
    { fr: "Maomao lit un livre à la maison", answer: "maomao wa ie de hon o yomimasu", note: "de=lieu d'action (lire)" },
    { fr: "Sakura mange des ramen au konbini", answer: "sakura wa konbini de ramen o tabemasu", note: "de=lieu d'action" },
    { fr: "Miyo va en bus", answer: "miyo wa basu de ikimasu", note: "de=moyen de transport" },
    { fr: "Tanjiro va à Tokyo en train", answer: "tanjiro wa densha de tokyo ni ikimasu", note: "de=moyen, ni=destination" },
    { fr: "L'enfant joue au parc", answer: "kodomo wa kouen de asobimasu", note: "de=lieu d'action (jouer)" },
  ],

  14: [
    { sentence: "Watashi ___ ie ___ anime ___ mimasu.", blanks: ["wa","de","o"], fr: "Je regarde un anime à la maison.", note: "wa=thème, de=lieu d'action, o=objet" },
    { sentence: "Maomao ___ koohii ___ nomimasu.", blanks: ["wa","o"], fr: "Maomao boit un café.", note: "wa=thème, o=objet direct" },
    { sentence: "Jinshi ___ kafe ___ hon ___ yomimasu.", blanks: ["wa","de","o"], fr: "Jinshi lit un livre au café.", note: "de=lieu d'action" },
    { sentence: "Sakura ___ Tokyo ___ ikimasu.", blanks: ["wa","ni"], fr: "Sakura va à Tokyo.", note: "ni=destination avec ikimasu" },
    { sentence: "Kono neko ___ me wa aoi desu.", blanks: ["no"], fr: "Les yeux de ce chat sont bleus.", note: "no=possession/appartenance" },
    { sentence: "Miyo ___ tomodachi ___ tegami ___ kakimasu.", blanks: ["wa","ni","o"], fr: "Miyo écrit une lettre à son ami.", note: "ni=destinataire, o=objet direct" },
    { sentence: "Kodomo ___ kouen ___ asobimasu.", blanks: ["wa","de"], fr: "L'enfant joue au parc.", note: "de=lieu d'action" },
    { sentence: "Ano kaban ___ watashi ___ kaban desu.", blanks: ["wa","no"], fr: "Ce sac là-bas est mon sac.", note: "no=possession" },
    { sentence: "Kiyoka ___ pen ___ namae ___ kakimasu.", blanks: ["wa","de","o"], fr: "Kiyoka écrit son nom au stylo.", note: "de=instrument/moyen" },
    { sentence: "Sono hon ___ tsukue ___ ue ___ arimasu.", blanks: ["wa","no","ni"], fr: "Ce livre est sur le bureau.", note: "no ue ni = sur (position)" },
    { sentence: "Gojo ___ gakkou ___ nihongo ___ benkyou shimasu.", blanks: ["wa","de","o"], fr: "Gojo étudie le japonais à l'école.", note: "de=lieu d'action, o=objet" },
    { sentence: "Kore ___ Maomao ___ neko desu.", blanks: ["wa","no"], fr: "C'est le chat de Maomao.", note: "no=possession/appartenance" },
  ],
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  STATE & DONNÉES ANNEXES                                      ║
// ║  VERBS : liste des 30 verbes courants pour la section 15      ║
// ║  COLORS : 12 couleurs japonaises pour la section 16           ║
// ╚══════════════════════════════════════════════════════════════╝
// ─── STATE ──────────────────────────────────────────────────────────────────

const VERBS = [
  { fr: "manger", jp: "taberu", masu: "tabemasu", groupe: "2" },
  { fr: "boire", jp: "nomu", masu: "nomimasu", groupe: "1" },
  { fr: "voir / regarder", jp: "miru", masu: "mimasu", groupe: "2" },
  { fr: "aller", jp: "iku", masu: "ikimasu", groupe: "1" },
  { fr: "venir", jp: "kuru", masu: "kimasu", groupe: "irr" },
  { fr: "faire", jp: "suru", masu: "shimasu", groupe: "irr" },
  { fr: "lire", jp: "yomu", masu: "yomimasu", groupe: "1" },
  { fr: "ecrire", jp: "kaku", masu: "kakimasu", groupe: "1" },
  { fr: "parler", jp: "hanasu", masu: "hanashimasu", groupe: "1" },
  { fr: "ecouter / entendre", jp: "kiku", masu: "kikimasu", groupe: "1" },
  { fr: "acheter", jp: "kau", masu: "kaimasu", groupe: "1" },
  { fr: "vendre", jp: "uru", masu: "urimasu", groupe: "1" },
  { fr: "dormir", jp: "neru", masu: "nemasu", groupe: "2" },
  { fr: "se lever / se reveiller", jp: "okiru", masu: "okimasu", groupe: "2" },
  { fr: "entrer / rentrer", jp: "hairu", masu: "hairimasu", groupe: "1 (godan, attention)" },
  { fr: "jouer / s'amuser", jp: "asobu", masu: "asobimasu", groupe: "1" },
  { fr: "etudier", jp: "benkyou suru", masu: "benkyou shimasu", groupe: "irr" },
  { fr: "donner (a quelqu'un de superieur)", jp: "ageru", masu: "agemasu", groupe: "2" },
  { fr: "recevoir", jp: "morau", masu: "moraimasu", groupe: "1" },
  { fr: "attendre", jp: "matsu", masu: "machimasu", groupe: "1" },
  { fr: "comprendre", jp: "wakaru", masu: "wakarimasu", groupe: "1" },
  { fr: "savoir / connaitre", jp: "shiru", masu: "shirimasu", groupe: "1" },
  { fr: "rentrer a la maison", jp: "kaeru", masu: "kaerimasu", groupe: "1" },
  { fr: "travailler", jp: "hataraku", masu: "hatarakimasu", groupe: "1" },
  { fr: "nager", jp: "oyogu", masu: "oyogimasu", groupe: "1" },
  { fr: "courir", jp: "hashiru", masu: "hashirimasu", groupe: "1" },
  { fr: "marcher", jp: "aruku", masu: "arukimasu", groupe: "1" },
  { fr: "chanter", jp: "utau", masu: "utaimasu", groupe: "1" },
  { fr: "danser", jp: "odoru", masu: "odorimasu", groupe: "1" },
  { fr: "prendre / recevoir", jp: "toru", masu: "torimasu", groupe: "1" },
];

const COLORS = [
  { fr: "rouge", jp: "akai", type: "i", note: "adj-i" },
  { fr: "bleu", jp: "aoi", type: "i", note: "adj-i" },
  { fr: "blanc", jp: "shiroi", type: "i", note: "adj-i" },
  { fr: "noir", jp: "kuroi", type: "i", note: "adj-i" },
  { fr: "jaune", jp: "kiiroi", type: "i", note: "adj-i" },
  { fr: "vert", jp: "midori", type: "na", note: "adj-na / nom" },
  { fr: "rose", jp: "pinku", type: "na", note: "adj-na / emprunt" },
  { fr: "orange", jp: "orenji", type: "na", note: "adj-na / emprunt" },
  { fr: "violet", jp: "murasaki", type: "na", note: "adj-na / nom" },
  { fr: "marron / brun", jp: "chairo", type: "na", note: "adj-na (chairo no)" },
  { fr: "gris", jp: "haiiro", type: "na", note: "adj-na (haiiro no)" },
  { fr: "or / dore", jp: "kiniro", type: "na", note: "adj-na (kiniro no)" },
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  NAVIGATION                                                   ║
// ║  buildNav() : génère les onglets dynamiquement               ║
// ║  showSection(n) : affiche la section n, masque les autres    ║
// ║  updateProgress() : met à jour la barre de progression       ║
// ╚══════════════════════════════════════════════════════════════╝
