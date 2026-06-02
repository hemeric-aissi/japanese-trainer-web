/**
 * main.js — Point d'entrée de l'application
 * Gère la navigation, l'initialisation des sections
 * et la communication avec l'API PHP pour la progression.
 */

// ── Sections complétées (chargées depuis INITIAL_PROGRESS injecté par PHP) ──
const completedSections = new Set();
const sectionScores = {};

// Charger la progression initiale depuis le serveur
Object.entries(INITIAL_PROGRESS).forEach(([secId, data]) => {
  const n = parseInt(secId);
  sectionScores[n] = data;
  if (data.score === data.total && data.total > 0) {
    completedSections.add(n);
  }
});

// ── Navigation ────────────────────────────────────────────────────────────────
function buildNav() {
  const nav = document.getElementById('mainNav');
  const labels = [
    "Particules","Negatif adj.","Vocab adj.","Conjugaison","Traduction",
    "Nb JP","JP Nb","Nani/Nan","Image","Heure","Ari/Ima","Positions",
    "Particule de","Particules mix","Verbes","Couleurs"
  ];
  for (let i = 1; i <= 16; i++) {
    const btn = document.createElement('button');
    btn.id = 'nav' + i;
    btn.textContent = i + '. ' + labels[i - 1];
    btn.onclick = () => showSection(i);
    if (i === 1) btn.classList.add('active');
    if (completedSections.has(i)) btn.classList.add('done');
    nav.appendChild(btn);
  }
}

function showSection(n) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec' + n).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('nav' + n).classList.add('active');
  updateProgress();
}

function updateProgress() {
  const pct = (completedSections.size / 16) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}

// ── Sauvegarde de la progression via l'API ────────────────────────────────────
async function saveProgress(secId, score, total) {
  try {
    const resp = await fetch('/api/save_score.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        section_id: secId,
        score: score,
        total: total,
        csrf_token: CSRF_TOKEN,   // injecté par PHP dans app.php
      }),
    });
    if (!resp.ok) {
      console.warn('Sauvegarde échouée pour la section', secId);
    }
  } catch (e) {
    console.warn('Erreur réseau lors de la sauvegarde :', e);
  }
}

// ── Injection du HTML des sections (généré dynamiquement) ─────────────────────
function buildSectionsHTML() {
  const container = document.getElementById('sections-container');
  const sections = [
    { n: 1,  title: "Particules : o / wa / ka",          desc: "Complète chaque phrase avec la bonne particule" },
    { n: 2,  title: "Forme négative des adjectifs",       desc: "Mets chaque adjectif à la forme négative" },
    { n: 3,  title: "Vocabulaire — adjectifs",            desc: "Choisis le bon adjectif japonais (QCM)" },
    { n: 4,  title: "Conjugaison — formes polies",        desc: "Forme polie et forme négative polie" },
    { n: 5,  title: "Traduction → japonais",              desc: "Traduis chaque phrase en japonais (romaji)" },
    { n: 6,  title: "Nombres → japonais",                 desc: "Écris chaque nombre en romaji japonais" },
    { n: 7,  title: "Nombres japonais → français",        desc: "Traduis chaque nombre en chiffres" },
    { n: 8,  title: "Nani / Nan",                         desc: "Traduction et choix du bon interrogatif" },
    { n: 9,  title: "Décrire une image",                  desc: "Traduis chaque description en japonais" },
    { n: 10, title: "Dire l'heure",                       desc: "Écris l'heure en japonais (romaji)" },
    { n: 11, title: "Arimasu / Imasu",                    desc: "Choisis le bon verbe d'existence" },
    { n: 12, title: "Positions — Miyo et Kiyoka",         desc: "Traduis en japonais" },
    { n: 13, title: "Particule で (de)",                   desc: "Traduis les phrases avec la particule de lieu/moyen" },
    { n: 14, title: "Particules : wa / o / de / ni / no", desc: "Complète avec la bonne particule" },
    { n: 15, title: "Vocabulaire — Verbes",               desc: "QCM : choisis le bon verbe japonais" },
    { n: 16, title: "Vocabulaire — Couleurs",             desc: "QCM : choisis la bonne couleur japonaise" },
  ];

  container.innerHTML = sections.map(s => `
    <div class="section${s.n === 1 ? ' active' : ''}" id="sec${s.n}">
      <div class="section-header">
        <div class="section-num">${String(s.n).padStart(2, '0')}</div>
        <div class="section-info">
          <h2>${s.title}</h2>
          <p>${s.desc}</p>
        </div>
      </div>
      <div id="ex${s.n}"></div>
      <div class="btn-row">
        <button class="btn btn-primary" onclick="checkSection(${s.n})">Corriger</button>
        <button class="btn" onclick="resetSection(${s.n})">Réinitialiser</button>
        <span class="score-badge" id="score${s.n}"></span>
      </div>
      <div class="result-panel" id="result${s.n}"></div>
    </div>
  `).join('');
}

// ── Init ──────────────────────────────────────────────────────────────────────
function init() {
  buildSectionsHTML();
  buildNav();
  renderFillBlanks(1, DATA[1]);
  renderNegation();
  renderAdjVocab();
  renderConjTable();
  renderTranslation(5, DATA[5], 'fr');
  renderNumbers();
  renderJPNumbers();
  renderNaniNan();
  renderTranslation(9, DATA[9], 'fr');
  renderTranslation(10, DATA[10], 'time');
  renderAriIma();
  renderTranslation(12, DATA[12], 'fr');
  renderTranslation(13, DATA[13], 'fr');
  renderFillBlanks(14, DATA[14]);
  renderQCMSection(15, VERBS, 'fr', 'masu', 'groupe');
  renderQCMSection(16, COLORS, 'fr', 'jp', 'note');

  // Restaurer les scores affichés depuis la progression sauvegardée
  Object.entries(sectionScores).forEach(([secId, data]) => {
    const badge = document.getElementById('score' + secId);
    if (badge) badge.innerHTML = 'Score : <strong>' + data.score + '/' + data.total + '</strong>';
  });

  updateProgress();
}

document.addEventListener('DOMContentLoaded', init);
