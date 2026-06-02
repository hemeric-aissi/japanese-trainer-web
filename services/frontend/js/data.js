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

// ── Règles grammaticales + fonctions de résultat ────────────────────────────

const RULES = {
  1: { title: "Particules wa / o / ka", rules: [
    { label: "wa — theme", expl: "Marque le theme de la phrase. Ce dont on parle.", ex: "Naruto wa ramen o tabemasu." },
    { label: "o — objet direct", expl: "Marque l'objet direct du verbe.", ex: "Mizu o nomimasu. — Je bois de l'eau." },
    { label: "ka — question", expl: "Se place en fin de phrase pour former une question.", ex: "Nani o tabemasu ka ?" },
  ]},
  2: { title: "Forme negative des adjectifs", rules: [
    { label: "Adjectifs-i : remplace -i par -kunai", expl: "On retire le -i final et on ajoute -kunai. Regle generale pour tous les vrais adjectifs-i.", ex: "chiisai → chiisakunai / omoi → omokunai / takai → takakunai / yasashii → yasashikunai" },
    { label: "Exception : ii (bon) → yokunai", expl: "ii est le seul adjectif-i vraiment irregulier. Sa negation ne suit pas la regle -kunai.", ex: "ii → yokunai (pas iikunai)" },
    { label: "Adjectifs-na : + janai", expl: "Les adjectifs-na se nient avec + janai, quelle que soit leur terminaison.", ex: "yuumei → yuumei janai / genki → genki janai / shizuka → shizuka janai" },
    { label: "Pieges : adjectifs-na qui finissent en -i", expl: "Ces mots finissent en -i mais sont des adjectifs-NA. Ils prennent donc janai et non -kunai. A memoriser absolument.", ex: "kirei (beau) → kirei janai / yuumei (celebre) → yuumei janai / kirai (detester) → kirai janai / teinei (poli) → teinei janai / hen (bizarre) → hen janai" },
    { label: "Kitanai est un vrai adjectif-i", expl: "Contrairement a kirei qui lui ressemble, kitanai est un adjectif-i. Sa negation suit donc la regle normale.", ex: "kitanai → kitanakunai (pas kitanai janai)" },
  ]},
  3: { title: "Adjectifs courants", rules: [
    { label: "Adjectifs-i courants", expl: "Se placent avant le nom ou apres wa + desu.", ex: "takai (cher), chiisai (petit), omoi (lourd), yasashii (gentil), kawaii (mignon)" },
    { label: "Adjectifs-na courants", expl: "Necessitent na devant un nom, mais pas devant desu.", ex: "yuumei (celebre), genki (en forme), kirei (beau), benri (pratique), taihen (difficile)" },
    { label: "umai vs oishii", expl: "Tous deux signifient delicieux. umai est familier, oishii est neutre.", ex: "Ramen wa umai desu. (familier)" },
  ]},
  4: { title: "Conjugaison — formes polies (masu/masen)", rules: [
    { label: "Verbes groupe 1 (godan) — en -u", expl: "La voyelle finale change : u → i + masu.", ex: "nomu → nomimasu / kau → kaimasu / yomu → yomimasu" },
    { label: "Verbes groupe 2 (ichidan) — en -ru", expl: "On retire -ru et on ajoute -masu.", ex: "miru → mimasu / taberu → tabemasu / neru → nemasu" },
    { label: "Irreguliers : suru et kuru", expl: "A memoriser absolument.", ex: "suru → shimasu/shimasen | kuru → kimasu/kimasen" },
    { label: "Negation : -masu → -masen", expl: "Pour nier, on remplace simplement -masu par -masen.", ex: "tabemasu → tabemasen" },
  ]},
  5: { title: "Structure de la phrase japonaise", rules: [
    { label: "Ordre : Sujet + Lieu + Objet + Verbe", expl: "Le verbe est toujours en fin de phrase.", ex: "Luffy wa resutoran de ramen o tabemasu." },
    { label: "ni — destination et localisation", expl: "ni indique ou aller ou ou se trouve quelque chose.", ex: "Toshokan ni manga ga arimasu. / Tokyo ni ikimasu." },
    { label: "de — lieu d'action", expl: "de indique ou se deroule une action.", ex: "Ie de anime o mimasu." },
    { label: "Negation verbale : -masen", expl: "Pour nier une action en forme polie.", ex: "Kippu o kaimasen." },
  ]},
  6: { title: "Les nombres en japonais", rules: [
    { label: "Base 1-10", expl: "ichi, ni, san, yon, go, roku, nana, hachi, kyuu, juu", ex: "4 → yon / 7 → nana / 9 → kyuu" },
    { label: "Dizaines : juu x N", expl: "juu = 10. ni-juu = 20, san-juu = 30...", ex: "72 = nana-juu-ni / 56 = go-juu-roku" },
    { label: "Centaines avec mutations", expl: "hyaku = 100. 300 = sanbyaku, 600 = roppyaku, 800 = happyaku.", ex: "638 = roppyaku-san-juu-hachi" },
    { label: "Milliers avec mutations", expl: "sen = 1000. 3000 = sanzen. 8000 = hassen.", ex: "1245 = sen-ni-hyaku-yon-juu-go" },
    { label: "man = 10 000", expl: "Le japonais regroupe par 10 000.", ex: "45873 = yon-man-go-sen-happyaku-nana-juu-san" },
  ]},
  7: { title: "Lire les nombres japonais", rules: [
    { label: "Lire de gauche a droite", expl: "man (x10000) → sen (x1000) → hyaku (x100) → juu (x10) → unite.", ex: "Sanzen yon hyaku = 3400" },
    { label: "man = 10 000", expl: "Yon man = 40 000. Le chiffre avant man est le multiplicateur.", ex: "Yon man nana sen happyaku kyuu juu = 47890" },
  ]},
  8: { title: "Nani vs Nan", rules: [
    { label: "Nan devant consonne ou desu", expl: "On utilise nan quand le mot suivant commence par une consonne.", ex: "Nan desu ka ? / Nan ji desu ka ? / Nan youbi ?" },
    { label: "Nani devant une particule", expl: "On utilise nani suivi des particules o, ga, wa...", ex: "Nani o tabemasu ka ? / Nani o nomimasu ka ?" },
    { label: "Nan no + nom", expl: "Nan no exprime de quel type de...", ex: "Nan no eiga ga suki desu ka ?" },
  ]},
  9: { title: "Kono / Sono / Ano — demonstratifs", rules: [
    { label: "Kono — proche du locuteur", expl: "Designe quelque chose pres de celui qui parle.", ex: "Kono inu wa kawaii desu." },
    { label: "Sono — proche de l'interlocuteur", expl: "Designe quelque chose pres de celui qui ecoute.", ex: "Sono neko wa kawaii desu." },
    { label: "Ano — loin des deux", expl: "Designe quelque chose eloigne des deux.", ex: "Ano hashi wa akai desu." },
    { label: "Koko / Soko / Asoko", expl: "koko = ici, soko = la (pres de toi), asoko = la-bas.", ex: "Koko wa nigiyaka desu." },
  ]},
  10: { title: "L'heure en japonais", rules: [
    { label: "Structure : [heure] ji [minutes] fun/pun", expl: "ji = heure, fun/pun = minutes.", ex: "7h12 = shichi ji juu ni fun" },
    { label: "Mutations de fun/pun", expl: "fun → pun apres 1 (ippun), 3 (sanpun), 4 (yonpun), 6 (roppun), 8 (happun), 10 (juppun).", ex: "4h03 = yo ji san pun / 11h58 = juu ichi ji go juu happun" },
    { label: "Cas particuliers", expl: "30 min = han. Minuit = rei ji.", ex: "9h30 = ku ji han / 00h45 = rei ji yon juu go fun" },
    { label: "4h = yo ji, 9h = ku ji, 14h = juu yo ji", expl: "Ces heures ont des lectures speciales.", ex: "4h03 = yo ji san pun / 14h09 = juu yo ji kyuu fun" },
  ]},
  11: { title: "Arimasu vs Imasu", rules: [
    { label: "Arimasu — objets inanimes", expl: "Pour les choses qui ne se deplacent pas seules.", ex: "Hon ga arimasu. / Kuruma ga arimasu." },
    { label: "Imasu — etres vivants", expl: "Pour les personnes et animaux.", ex: "Neko ga imasu. / Kodomo ga imasu." },
    { label: "Astuce", expl: "Si ca respire et se deplace → imasu. Sinon → arimasu.", ex: "Pen ga arimasu / Sensei ga imasu" },
  ]},
  12: { title: "Particules de position", rules: [
    { label: "Structure : [ref] no [position] ni", expl: "Indique la position relative d'un objet.", ex: "Hon no ue ni pen ga arimasu." },
    { label: "Positions", expl: "ue (dessus), shita (dessous), mae (devant), ushiro (derriere), hidari (gauche), migi (droite), naka (interieur), mukou (autre cote)", ex: "Kiyoka no ushiro ni teeburu ga arimasu." },
  ]},
  13: { title: "Particule de (lieu et moyen)", rules: [
    { label: "de = lieu d'action", expl: "Indique ou se deroule l'action.", ex: "Kouen de tabemasu. / Ie de mimasu." },
    { label: "de = moyen de transport ou instrument", expl: "Indique le moyen utilise.", ex: "Basu de ikimasu. / Pen de kakimasu." },
    { label: "de vs ni", expl: "ni = destination ou localisation statique. de = lieu d'action.", ex: "Tokyo ni ikimasu vs Tokyo de tabemasu" },
  ]},
  14: { title: "Les particules essentielles", rules: [
    { label: "wa — theme", expl: "Ce dont parle la phrase.", ex: "Watashi wa anime o mimasu." },
    { label: "o — objet direct", expl: "Ce que l'action affecte directement.", ex: "Ramen o tabemasu." },
    { label: "ni — destination / localisation / destinataire", expl: "Aller vers, se trouver, donner a quelqu'un.", ex: "Tokyo ni ikimasu / Tomodachi ni tegami o kakimasu." },
    { label: "de — lieu d'action ou moyen", expl: "Action qui se deroule la, ou moyen utilise.", ex: "Ie de yomimasu / Pen de kakimasu." },
    { label: "no — possession", expl: "Relie deux noms comme une apostrophe.", ex: "Watashi no kaban. / Neko no me." },
  ]},
  15: { title: "Verbes courants", rules: [
    { label: "Groupe 1 (godan) — verbes en -u", expl: "La voyelle -u → -i + masu. Attention : matsu → machimasu, kaku → kakimasu.", ex: "nomu → nomimasu / kau → kaimasu / yomu → yomimasu" },
    { label: "Groupe 2 (ichidan) — verbes en -iru/-eru", expl: "On retire -ru et on ajoute -masu directement.", ex: "miru → mimasu / taberu → tabemasu / neru → nemasu" },
    { label: "Irreguliers : suru et kuru", expl: "A memoriser. Tous les composes de suru (benkyou suru...) suivent la meme conjugaison.", ex: "suru → shimasu | kuru → kimasu" },
    { label: "Negation : -masu → -masen", expl: "Universel pour tous les groupes.", ex: "tabemasu → tabemasen / shimasu → shimasen" },
  ]},
  16: { title: "Couleurs en japonais", rules: [
    { label: "5 couleurs adjectifs-i", expl: "Se placent directement avant le nom, se nient en -kunai.", ex: "akai (rouge), aoi (bleu), shiroi (blanc), kuroi (noir), kiiroi (jaune)" },
    { label: "Autres couleurs : noms / adj-na", expl: "Devant un nom, il faut ajouter no.", ex: "midori no ki (arbre vert) / pinku no hana (fleur rose) / murasaki no kaban (sac violet)" },
    { label: "Dans une phrase avec desu", expl: "Toutes les couleurs s'utilisent avec desu.", ex: "Sora wa aoi desu. / Kono hana wa pinku desu." },
  ]},
};

function buildTranslationList(secId) {
  if (secId === 15) return buildTranslationListQCM(VERBS, 'fr', 'masu', 'groupe');
  if (secId === 16) return buildTranslationListQCM(COLORS, 'fr', 'jp', 'note');
  const d = DATA[secId];
  if (!d || !Array.isArray(d) || !d.length) return "";
  const hasTr = d.some(function(it) { return it.fr || it.note || it.word || it.time || it.jp || it.num; });
  if (!hasTr) return "";
  var html = "<div style='margin-top:1.5rem;border-top:1px solid #2e2516;padding-top:1.25rem;'>" +
    "<div style='font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#a0957f;margin-bottom:0.75rem;'>Traductions et analyses</div>";
  d.forEach(function(it) {
    var left = "", right = "", note = it.note || "";
    if (secId === 1 || secId === 14) {
      left = (it.sentence || "").replace(/___/g, "___"); right = it.fr || "";
    } else if (secId === 2) {
      left = it.word + " → " + it.answer; right = it.fr || "";
    } else if (secId === 3) {
      var ans = Array.isArray(it.answer) ? it.answer.join(" / ") : it.answer;
      left = (it.sentence || "").replace("______", ans); right = it.fr || "";
    } else if (secId === 4) {
      left = it.verb + " (" + it.fr + ")<br>" +
        "<span style='color:#c8a42a;'>" + it.polite + "</span> <span style='font-size:0.72rem;color:#6a5e4e;'>" + it.hiragana_polite + "</span>" +
        " &nbsp;/&nbsp; " +
        "<span style='color:#c8572a;'>" + it.negative + "</span> <span style='font-size:0.72rem;color:#6a5e4e;'>" + it.hiragana_neg + "</span>";
      right = "";
    } else if (secId === 5 || secId === 9 || secId === 12 || secId === 13) {
      left = it.fr; right = it.answer;
    } else if (secId === 6) {
      left = "" + it.num; right = it.answer;
    } else if (secId === 7) {
      left = it.jp; right = it.answer;
    } else if (secId === 10) {
      left = it.time; right = it.answer;
    } else if (secId === 11) {
      left = (it.sentence || "").replace("______", it.answer); right = it.fr || "";
    }
    html += "<div style='display:flex;gap:12px;padding:6px 0;border-bottom:1px solid #2a2010;font-size:0.78rem;line-height:1.5;'>" +
      "<div style='flex:1;font-family:Shippori Mincho,serif;color:#d4cfc5;'>" + left + "</div>" +
      "<div style='flex:1;color:#8a7e6e;font-style:italic;'>" + right + (note ? "<br><span style='font-size:0.72rem;color:#6a5e4e;'>" + note + "</span>" : "") + "</div>" +
      "</div>";
  });
  html += "</div>";
  return html;
}

function buildTranslationListNani() {
  var html = "<div style='margin-top:1.5rem;border-top:1px solid #2e2516;padding-top:1.25rem;'>" +
    "<div style='font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#a0957f;margin-bottom:0.75rem;'>Traductions</div>" +
    "<div style='font-size:0.75rem;color:#8a7e6e;margin-bottom:8px;font-weight:600;'>A) Traductions</div>";
  DATA[8].translate.forEach(function(it) {
    html += "<div style='display:flex;gap:12px;padding:5px 0;border-bottom:1px solid #2a2010;font-size:0.78rem;'>" +
      "<div style='flex:1;color:#d4cfc5;font-style:italic;'>" + it.fr + "</div>" +
      "<div style='flex:1;color:#c8a42a;font-family:Shippori Mincho,serif;'>" + it.answer + "</div>" +
      "</div>";
  });
  html += "<div style='font-size:0.75rem;color:#8a7e6e;margin:12px 0 8px;font-weight:600;'>B) Nani / Nan</div>";
  DATA[8].choose.forEach(function(it) {
    var filled = it.sentence.replace("______", "<strong style='color:#c8a42a;'>" + it.answer + "</strong>");
    html += "<div style='padding:5px 0;border-bottom:1px solid #2a2010;font-size:0.78rem;font-family:Shippori Mincho,serif;color:#d4cfc5;'>" + filled + "</div>";
  });
  html += "</div>";
  return html;
}

function showResult(secId, correct, total) {
  var panel = document.getElementById("result" + secId);
  var score = document.getElementById("score" + secId);
  var pct = Math.round((correct / total) * 100);
  panel.classList.add("visible");
  var rules = RULES[secId];
  var html = "<div class='result-score'>" + correct + "/" + total + "</div>" +
    "<div style='margin-top:4px;font-size:0.8rem;color:#a0957f;'>" + pct + "% de reussite</div>";
  if (correct === total) {
    html += "<div style='margin-top:8px;font-size:0.8rem;color:#6fcf6f;'>Parfait !</div>";
  }
  if (secId === 8) html += buildTranslationListNani();
  else html += buildTranslationList(secId);
  if (rules) {
    html += "<div style='margin-top:1.5rem;border-top:1px solid #2e2516;padding-top:1.25rem;'>" +
      "<div style='font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#a0957f;margin-bottom:0.75rem;'>Regles de grammaire</div>" +
      "<div style='font-family:Shippori Mincho,serif;font-size:1rem;font-weight:600;margin-bottom:1rem;color:#f5f0e8;'>" + rules.title + "</div>";
    rules.rules.forEach(function(r) {
      html += "<div style='margin-bottom:1rem;padding:0.75rem 1rem;background:#1e1810;border-left:3px solid #b8860b;border-radius:0 2px 2px 0;'>" +
        "<div style='font-size:0.8rem;font-weight:600;color:#c8a42a;margin-bottom:4px;'>" + r.label + "</div>" +
        "<div style='font-size:0.78rem;color:#c8bfaf;line-height:1.6;margin-bottom:4px;'>" + r.expl + "</div>" +
        "<div style='font-size:0.75rem;color:#8a7e6e;font-style:italic;'>" + r.ex + "</div>" +
        "</div>";
    });
    html += "</div>";
  }
  panel.innerHTML = html;
  score.innerHTML = "Score : <strong>" + correct + "/" + total + "</strong>";
  sectionScores[secId] = { correct: correct, total: total };
  if (correct === total) {
    completedSections.add(secId);
    document.getElementById("nav" + secId).classList.add("done");
  }
  updateProgress();
}
