/**
 * render.js — Fonctions de rendu des exercices dans le DOM
 */

// ─── RENDER ──────────────────────────────────────────────────────────────────

function normalize(s) {
  return s.trim().toLowerCase().replace(/\s+/g,' ');
}

function checkAnswer(val, answer) {
  const v = normalize(val);
  if (Array.isArray(answer)) return answer.map(a => normalize(a)).includes(v);
  return v === normalize(answer);
}

// Section 1 & 14: fill-in-blank sentences
function renderFillBlanks(secId, items) {
  const container = document.getElementById(`ex${secId}`);
  container.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    const parts = item.sentence.split('___');
    let html = '<div class="particle-sentence">';
    parts.forEach((part, pi) => {
      html += `<span>${part}</span>`;
      if (pi < parts.length - 1) {
        html += `<input class="inline-input" type="text" id="s${secId}_${i}_${pi}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="___">`;
      }
    });
    html += '</div>';
    card.innerHTML = html;
    container.appendChild(card);
  });
}

function checkFillBlanks(secId, items) {
  let correct = 0, total = 0;
  items.forEach((item, i) => {
    const parts = item.sentence.split('___');
    parts.forEach((_, pi) => {
      if (pi < parts.length - 1) {
        const input = document.getElementById(`s${secId}_${i}_${pi}`);
        if (!input) return;
        total++;
        const ok = checkAnswer(input.value, item.blanks[pi]);
        input.classList.toggle('correct', ok);
        input.classList.toggle('wrong', !ok);
        if (!ok) input.placeholder = item.blanks[pi];
        else correct++;
      }
    });
  });
  return { correct, total };
}

function resetFillBlanks(secId, items) {
  items.forEach((item, i) => {
    const parts = item.sentence.split('___');
    parts.forEach((_, pi) => {
      if (pi < parts.length - 1) {
        const input = document.getElementById(`s${secId}_${i}_${pi}`);
        if (!input) return;
        input.value = '';
        input.className = 'inline-input';
        input.placeholder = '___';
      }
    });
  });
}

// Section 2: negation
function renderNegation() {
  const container = document.getElementById('ex2');
  container.innerHTML = '';
  DATA[2].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    card.innerHTML = `
      <div class="exercise-prompt">${item.word} →</div>
      <input class="answer-input" type="text" id="s2_${i}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="forme négative...">
      <div class="correction" id="cor2_${i}"></div>
    `;
    container.appendChild(card);
  });
}

// Section 3: adjective vocab QCM
function getQCMChoices3(correctIdx) {
  const all = DATA[3].map(function(it) { return Array.isArray(it.answer) ? it.answer[0] : it.answer; });
  const correct = all[correctIdx];
  const wrong = all.filter(function(a, i) { return i !== correctIdx; });
  // shuffle wrong and pick 3
  for (let i = wrong.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wrong[i], wrong[j]] = [wrong[j], wrong[i]];
  }
  const choices = [correct, wrong[0], wrong[1], wrong[2]];
  // shuffle choices
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return choices;
}

function renderAdjVocab() {
  const container = document.getElementById('ex3');
  container.innerHTML = '';
  DATA[3].forEach((item, i) => {
    const choices = getQCMChoices3(i);
    const card = document.createElement('div');
    card.className = 'exercise';
    const sentence = item.sentence.replace('______', `<span style="color:var(--muted);font-style:italic;">?</span>`);
    let choicesHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;" id="qcm3_grid_' + i + '">';
    choices.forEach(function(c) {
      choicesHTML += `<button class="qcm-btn" data-sec="3" data-idx="${i}" data-val="${c}" onclick="selectQCM(this)">${c}</button>`;
    });
    choicesHTML += '</div>';
    card.innerHTML = `
      <div class="particle-sentence">${sentence}</div>
      <div style="font-size:0.75rem;color:var(--muted);margin-top:4px;">(${item.hint})</div>
      ${choicesHTML}
      <input type="hidden" id="s3_${i}" value="">
      <div class="correction" id="cor3_${i}"></div>
    `;
    container.appendChild(card);
  });
}

function selectQCM(btn) {
  const idx = btn.dataset.idx;
  const val = btn.dataset.val;
  // deselect others in same group
  document.querySelectorAll('#qcm3_grid_' + idx + ' .qcm-btn').forEach(function(b) {
    b.classList.remove('qcm-selected');
  });
  btn.classList.add('qcm-selected');
  document.getElementById('s3_' + idx).value = val;
}

// Section 4: conjugation table
function renderConjTable() {
  const container = document.getElementById('ex4');
  let html = `<table class="conj-table">
    <thead><tr><th>Forme neutre</th><th>Traduction</th><th>Forme polie</th><th>Forme négative polie</th></tr></thead>
    <tbody>`;
  DATA[4].forEach((item, i) => {
    html += `<tr>
      <td>
        <div style="font-weight:600;">${item.verb}</div>
        <div style="font-size:0.85rem;color:#a0957f;margin-top:2px;">${item.hiragana_verb}</div>
      </td>
      <td style="font-size:0.8rem;color:var(--muted);font-style:italic;">${item.fr}</td>
      <td>
        <input type="text" id="s4_${i}_p" autocomplete="off" spellcheck="false" placeholder="...masu">
        <div class="hira-hint" id="h4_${i}_p" style="font-size:0.8rem;color:#a0957f;margin-top:3px;min-height:16px;"></div>
      </td>
      <td>
        <input type="text" id="s4_${i}_n" autocomplete="off" spellcheck="false" placeholder="...masen">
        <div class="hira-hint" id="h4_${i}_n" style="font-size:0.8rem;color:#a0957f;margin-top:3px;min-height:16px;"></div>
      </td>
    </tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}

// Generic: translation exercises (answer input per item)
function renderTranslation(secId, items, labelKey) {
  const container = document.getElementById(`ex${secId}`);
  container.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    card.innerHTML = `
      <div class="exercise-prompt">${item[labelKey]}</div>
      <input class="answer-input" type="text" id="s${secId}_${i}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="réponse en romaji...">
      <div class="correction" id="cor${secId}_${i}"></div>
    `;
    container.appendChild(card);
  });
}

// Section 6: numbers to JP
function renderNumbers() {
  const container = document.getElementById('ex6');
  container.innerHTML = '<div class="number-grid" id="numgrid6"></div>';
  const grid = document.getElementById('numgrid6');
  DATA[6].forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'number-item';
    div.innerHTML = `
      <span class="num-label">${item.num}</span>
      <input class="answer-input" type="text" id="s6_${i}" style="flex:1" autocomplete="off" spellcheck="false" placeholder="en japonais...">
    `;
    grid.appendChild(div);
  });
}

// Section 7: JP numbers to digits
function renderJPNumbers() {
  const container = document.getElementById('ex7');
  container.innerHTML = '';
  DATA[7].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    card.innerHTML = `
      <div class="exercise-prompt">${item.jp}</div>
      <input class="answer-input" type="text" id="s7_${i}" autocomplete="off" spellcheck="false" placeholder="en chiffres...">
      <div class="correction" id="cor7_${i}"></div>
    `;
    container.appendChild(card);
  });
}

// Section 8: nani/nan
function renderNaniNan() {
  const container = document.getElementById('ex8');
  container.innerHTML = '<h3 style="font-family:Shippori Mincho,serif;margin-bottom:1rem;">A) Traduire en japonais</h3>';
  DATA[8].translate.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    card.innerHTML = `
      <div class="exercise-prompt">${item.fr}</div>
      <input class="answer-input" type="text" id="s8t_${i}" autocomplete="off" spellcheck="false" placeholder="romaji...">
      <div class="correction" id="cor8t_${i}"></div>
    `;
    container.appendChild(card);
  });

  const sep = document.createElement('h3');
  sep.style.cssText = 'font-family:Shippori Mincho,serif;margin:1.5rem 0 1rem;';
  sep.textContent = 'B) Choisir Nani ou Nan';
  container.appendChild(sep);

  DATA[8].choose.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    const parts = item.sentence.split('______');
    card.innerHTML = `
      <div class="particle-sentence">
        ${parts[0]}
        <select class="answer-select" id="s8c_${i}">
          <option value="">---</option>
          <option value="Nani">Nani</option>
          <option value="Nan">Nan</option>
        </select>
        ${parts[1] || ''}
      </div>
      <div class="correction" id="cor8c_${i}"></div>
    `;
    container.appendChild(card);
  });
}

// Section 11: arimasu/imasu selects
function renderAriIma() {
  const container = document.getElementById('ex11');
  container.innerHTML = '';
  DATA[11].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'exercise';
    const sentence = item.sentence.replace('______', `<select class="answer-select" id="s11_${i}"><option value="">---</option><option value="imasu">imasu</option><option value="arimasu">arimasu</option></select>`);
    card.innerHTML = `
      <div class="particle-sentence">${sentence}</div>
      <div class="correction" id="cor11_${i}"></div>
    `;
    container.appendChild(card);
  });
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  CORRECTION                                                   ║
// ║  RULES : règles grammaticales par section (affichées après)  ║
// ║  buildTranslationList() : tableau récap des réponses         ║
// ║  showResult() : affiche score + traductions + règles         ║
// ║  checkSection(n) : corrige la section n et appelle showResult║
// ║  resetSection(n) : remet à zéro les inputs d'une section     ║
// ╚══════════════════════════════════════════════════════════════╝

// ── QCM générique ────────────────────────────────────────────────────────────
function shuffleArr(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function makeQCMChoices(allItems, correctIdx, key) {
  var correct = allItems[correctIdx][key];
  var others = allItems.filter(function(_, i) { return i !== correctIdx; }).map(function(it) { return it[key]; });
  others = shuffleArr(others).slice(0, 3);
  return shuffleArr([correct].concat(others));
}

function renderQCMSection(secId, items, promptKey, answerKey, noteKey) {
  var container = document.getElementById('ex' + secId);
  container.innerHTML = '';
  items.forEach(function(item, i) {
    var choices = makeQCMChoices(items, i, answerKey);
    var card = document.createElement('div');
    card.className = 'exercise';
    var choicesHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;" id="qcm' + secId + '_grid_' + i + '">';
    choices.forEach(function(c) {
      choicesHTML += '<button class="qcm-btn" data-sec="' + secId + '" data-idx="' + i + '" data-val="' + c + '" onclick="selectQCMGeneric(this)">' + c + '</button>';
    });
    choicesHTML += '</div>';
    var note = noteKey && item[noteKey] ? '<div style="font-size:0.7rem;color:var(--muted);margin-top:6px;">(' + item[noteKey] + ')</div>' : '';
    card.innerHTML = '<div class="exercise-prompt">' + item[promptKey] + '</div>' +
      choicesHTML +
      note +
      '<input type="hidden" id="s' + secId + '_' + i + '" value="">' +
      '<div class="correction" id="cor' + secId + '_' + i + '"></div>';
    container.appendChild(card);
  });
}

function selectQCMGeneric(btn) {
  var secId = btn.dataset.sec;
  var idx = btn.dataset.idx;
  document.querySelectorAll('#qcm' + secId + '_grid_' + idx + ' .qcm-btn').forEach(function(b) {
    b.classList.remove('qcm-selected');
  });
  btn.classList.add('qcm-selected');
  document.getElementById('s' + secId + '_' + idx).value = btn.dataset.val;
}

function checkQCMSection(secId, items, answerKey) {
  var correct = 0, total = 0;
  items.forEach(function(item, i) {
    var hidden = document.getElementById('s' + secId + '_' + i);
    var cor = document.getElementById('cor' + secId + '_' + i);
    total++;
    var val = hidden ? hidden.value : '';
    var ok = normalize(val) === normalize(item[answerKey]);
    document.querySelectorAll('#qcm' + secId + '_grid_' + i + ' .qcm-btn').forEach(function(btn) {
      var isCorrect = normalize(btn.dataset.val) === normalize(item[answerKey]);
      if (btn.classList.contains('qcm-selected')) {
        btn.classList.add(ok ? 'qcm-correct' : 'qcm-wrong');
        btn.classList.remove('qcm-selected');
      } else if (isCorrect && !ok) {
        btn.classList.add('qcm-reveal');
      }
      btn.disabled = true;
    });
    if (!ok) { cor.textContent = 'Reponse : ' + item[answerKey]; cor.className = 'correction visible wrong-hint'; }
    else cor.className = 'correction';
    if (ok) correct++;
  });
  return { correct: correct, total: total };
}

function buildTranslationListQCM(items, promptKey, answerKey, noteKey) {
  var html = "<div style='margin-top:1.5rem;border-top:1px solid #2e2516;padding-top:1.25rem;'>" +
    "<div style='font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#a0957f;margin-bottom:0.75rem;'>Vocabulaire complet</div>";
  items.forEach(function(it) {
    html += "<div style='display:flex;gap:12px;padding:6px 0;border-bottom:1px solid #2a2010;font-size:0.78rem;line-height:1.5;'>" +
      "<div style='flex:1;color:#d4cfc5;font-style:italic;'>" + it[promptKey] + "</div>" +
      "<div style='flex:1;color:#c8a42a;font-family:Shippori Mincho,serif;'>" + it[answerKey] +
      (noteKey && it[noteKey] ? "<span style='color:#6a5e4e;font-size:0.72rem;margin-left:8px;'>(" + it[noteKey] + ")</span>" : "") +
      "</div></div>";
  });
  html += "</div>";
  return html;
}
