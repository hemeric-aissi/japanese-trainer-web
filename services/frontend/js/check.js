/**
 * check.js — Correction des exercices et sauvegarde de la progression
 * Après chaque checkSection(), le score est envoyé à l'API PHP.
 */

function normalize(s) {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

function checkAnswer(val, answer) {
  const v = normalize(val);
  if (Array.isArray(answer)) return answer.map(a => normalize(a)).includes(v);
  return v === normalize(answer);
}

// ── Affichage du résultat ─────────────────────────────────────────────────────
function showResult(secId, correct, total) {
  var panel = document.getElementById('result' + secId);
  var score = document.getElementById('score' + secId);
  var pct = Math.round((correct / total) * 100);
  panel.classList.add('visible');
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
    document.getElementById('nav' + secId).classList.add('done');
  }
  updateProgress();

  // Sauvegarder en base via l'API
  saveProgress(secId, correct, total);
}

// ── Fill-in-blank (sections 1 et 14) ─────────────────────────────────────────
function checkFillBlanks(secId, items) {
  let correct = 0, total = 0;
  items.forEach((item, i) => {
    const parts = item.sentence.split('___');
    parts.forEach((_, pi) => {
      if (pi < parts.length - 1) {
        const input = document.getElementById('s' + secId + '_' + i + '_' + pi);
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
        const input = document.getElementById('s' + secId + '_' + i + '_' + pi);
        if (!input) return;
        input.value = '';
        input.className = 'inline-input';
        input.placeholder = '___';
      }
    });
  });
}

// ── QCM générique ─────────────────────────────────────────────────────────────
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
  return { correct, total };
}

// ── checkSection principal ────────────────────────────────────────────────────
function checkSection(n) {
  let correct = 0, total = 0;

  if (n === 1) { const r = checkFillBlanks(1, DATA[1]); correct = r.correct; total = r.total; }
  else if (n === 2) {
    DATA[2].forEach((item, i) => {
      const input = document.getElementById('s2_' + i);
      const cor = document.getElementById('cor2_' + i);
      total++;
      const ok = checkAnswer(input.value, item.answer);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 3) {
    DATA[3].forEach((item, i) => {
      const hidden = document.getElementById('s3_' + i);
      const cor = document.getElementById('cor3_' + i);
      total++;
      const correct_ans = Array.isArray(item.answer) ? item.answer : [item.answer];
      const val = hidden ? hidden.value : '';
      const ok = correct_ans.map(a => normalize(a)).includes(normalize(val));
      document.querySelectorAll('#qcm3_grid_' + i + ' .qcm-btn').forEach(function(btn) {
        const isCorrect = correct_ans.map(a => normalize(a)).includes(normalize(btn.dataset.val));
        if (btn.classList.contains('qcm-selected')) { btn.classList.add(ok ? 'qcm-correct' : 'qcm-wrong'); btn.classList.remove('qcm-selected'); }
        else if (isCorrect && !ok) btn.classList.add('qcm-reveal');
        btn.disabled = true;
      });
      if (!ok) { cor.textContent = '→ ' + correct_ans.join(' / '); cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 4) {
    DATA[4].forEach((item, i) => {
      const ip = document.getElementById('s4_' + i + '_p');
      const inn = document.getElementById('s4_' + i + '_n');
      const hp = document.getElementById('h4_' + i + '_p');
      const hn = document.getElementById('h4_' + i + '_n');
      total += 2;
      const okP = checkAnswer(ip.value, item.polite);
      const okN = checkAnswer(inn.value, item.negative);
      ip.classList.toggle('correct', okP); ip.classList.toggle('wrong', !okP);
      inn.classList.toggle('correct', okN); inn.classList.toggle('wrong', !okN);
      if (!okP) ip.placeholder = item.polite;
      if (!okN) inn.placeholder = item.negative;
      if (hp) hp.textContent = item.hiragana_polite;
      if (hn) hn.textContent = item.hiragana_neg;
      if (okP) correct++;
      if (okN) correct++;
    });
  }
  else if (n === 5 || n === 9 || n === 12 || n === 13) {
    DATA[n].forEach((item, i) => {
      const input = document.getElementById('s' + n + '_' + i);
      const cor = document.getElementById('cor' + n + '_' + i);
      total++;
      const ok = checkAnswer(input.value, item.answer);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 6) {
    DATA[6].forEach((item, i) => {
      const input = document.getElementById('s6_' + i);
      total++;
      const ok = checkAnswer(input.value, item.answer);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (!ok) input.placeholder = item.answer;
      if (ok) correct++;
    });
  }
  else if (n === 7) {
    DATA[7].forEach((item, i) => {
      const input = document.getElementById('s7_' + i);
      const cor = document.getElementById('cor7_' + i);
      total++;
      const ok = normalize(input.value) === normalize(item.answer);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 8) {
    DATA[8].translate.forEach((item, i) => {
      const input = document.getElementById('s8t_' + i);
      const cor = document.getElementById('cor8t_' + i);
      total++;
      const ok = checkAnswer(input.value, item.answer);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
    DATA[8].choose.forEach((item, i) => {
      const sel = document.getElementById('s8c_' + i);
      const cor = document.getElementById('cor8c_' + i);
      total++;
      const ok = sel.value === item.answer;
      sel.classList.toggle('correct', ok);
      sel.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 10) {
    DATA[10].forEach((item, i) => {
      const input = document.getElementById('s10_' + i);
      const cor = document.getElementById('cor10_' + i);
      total++;
      const ok = checkAnswer(input.value, item.answer);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 11) {
    DATA[11].forEach((item, i) => {
      const sel = document.getElementById('s11_' + i);
      const cor = document.getElementById('cor11_' + i);
      total++;
      const ok = checkAnswer(sel.value, item.answer);
      sel.classList.toggle('correct', ok);
      sel.classList.toggle('wrong', !ok);
      if (!ok) { cor.textContent = '→ ' + item.answer; cor.className = 'correction visible wrong-hint'; }
      else cor.className = 'correction';
      if (ok) correct++;
    });
  }
  else if (n === 14) { const r = checkFillBlanks(14, DATA[14]); correct = r.correct; total = r.total; }
  else if (n === 15) { const r = checkQCMSection(15, VERBS, 'masu'); correct = r.correct; total = r.total; }
  else if (n === 16) { const r = checkQCMSection(16, COLORS, 'jp'); correct = r.correct; total = r.total; }

  showResult(n, correct, total);
}

// ── Reset ─────────────────────────────────────────────────────────────────────
function resetSection(n) {
  document.getElementById('result' + n).classList.remove('visible');
  document.getElementById('score' + n).innerHTML = '';
  if (n === 1) resetFillBlanks(1, DATA[1]);
  else if (n === 3) renderAdjVocab();
  else if (n === 14) resetFillBlanks(14, DATA[14]);
  else if (n === 15) renderQCMSection(15, VERBS, 'fr', 'masu', 'groupe');
  else if (n === 16) renderQCMSection(16, COLORS, 'fr', 'jp', 'note');
  else {
    document.querySelectorAll('#ex' + n + ' input, #ex' + n + ' select').forEach(function(el) {
      el.value = '';
      el.className = el.tagName === 'SELECT' ? 'answer-select' : (el.classList.contains('inline-input') ? 'inline-input' : 'answer-input');
    });
    document.querySelectorAll('#ex' + n + ' .correction').forEach(function(c) { c.className = 'correction'; });
  }
}
