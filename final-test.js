// ============================================
// FINAL TEST — Sprechen B2: Familie & Beziehungen
// Claudia Toth · 15 întrebări mixte (vocab + structuri + traducere)
// Pattern wizard preluat din lecțiile Sprechen B2 LIVE
// ============================================

const finalTestData = [
    // === Vocabular — sens DE → RO (5q) ===
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „die Patchworkfamilie"?', options: ['familie tradițională', 'familie reconstituită (cu copii dintr-o relație anterioară)', 'familie monoparentală', 'familie cu mulți copii'], correct: 'familie reconstituită (cu copii dintr-o relație anterioară)', explanation: 'Patchwork = peticit/împletit. Familie reconstituită cu un partener care aduce copii din altă relație. Cuvânt cheie B2 modern.' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „die Vereinbarkeit Familie-Beruf"?', options: ['ruperea familie-carieră', 'concilierea familie-muncă', 'familia înainte de muncă', 'muncă pentru familie'], correct: 'concilierea familie-muncă', explanation: 'Cuvânt CHEIE B2! Argumentul principal când vorbești despre dificultățile femeilor și familiilor moderne.' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „der/die Alleinerziehende"?', options: ['profesor de liceu', 'părintele singur (mamă/tată)', 'copilul singur', 'soldat singur'], correct: 'părintele singur (mamă/tată)', explanation: 'Allein (singur) + erziehend (care educă/crește). Adjectiv substantivat — se declină ca un adjectiv.' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „das Mehrgenerationenhaus"?', options: ['casa veche', 'casa cu mai multe generații (împreună)', 'casa unei familii bogate', 'casa cu mulți copii'], correct: 'casa cu mai multe generații (împreună)', explanation: 'Mehr (mai mult) + Generationen + Haus = casa în care locuiesc 3 generații împreună. Soluție anti-Vereinsamung.' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „die Doppelbelastung"?', options: ['plata dublă', 'dubla sarcină (muncă + familie)', 'asigurare dublă', 'porție dublă'], correct: 'dubla sarcină (muncă + familie)', explanation: 'Doppel (dublu) + Belastung (încărcătură/sarcină). Argument feminist puternic: mama lucrează + face și casa.' },

    // === Structuri argumentative — fill in (5q) ===
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: 'Im ______ zu früher gibt es heute mehr Familienformen. (în comparație cu)', translation: 'în comparație cu', accept: ['vergleich', 'gegensatz'], correct: 'Vergleich', explanation: 'Im Vergleich zu + Dativ. Alternativă: Im Gegensatz zu (în contrast cu).' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: '______ Statistisches Bundesamt leben 30% der Erwachsenen als Single. (potrivit lui)', translation: 'potrivit lui Bundesamt', accept: ['laut', 'nach'], correct: 'Laut', explanation: 'Laut + Nominativ: citare elegantă a unei surse (Bundesamt = Birou Federal).' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: 'Es ______ darauf an, dass die Kinder geliebt werden. (depinde de)', translation: 'depinde de', accept: ['kommt'], correct: 'kommt', explanation: 'Es kommt darauf an, dass + Nebensatz. Structură argumentativă flexibilă B2.' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: '______ die Scheidungsrate hoch ist, heiraten viele Menschen. (deși)', translation: 'deși', accept: ['obwohl', 'auch wenn'], correct: 'Obwohl', explanation: 'Obwohl + Nebensatz (verb la sfârșit). Variantă: Auch wenn.' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: '______ Meinung nach ist Liebe wichtiger als Familienform. (după părerea mea)', translation: 'după părerea mea', accept: ['meiner'], correct: 'Meiner', explanation: 'Meiner Meinung nach (Dat. fem.) + verb pe poziția 2.' },

    // === Traducere RO → DE (5q) ===
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Părinții mei locuiesc în Berlin.', accept: ['meine eltern wohnen in berlin.', 'meine eltern wohnen in berlin', 'meine eltern leben in berlin.', 'meine eltern leben in berlin'], correct: 'Meine Eltern wohnen in Berlin.', explanation: 'die Eltern = NUR Plural în germană (NU „eine Eltern"!). wohnen / leben — ambele OK.' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Sunt căsătorit de 5 ani.', accept: ['ich bin seit 5 jahren verheiratet.', 'ich bin seit 5 jahren verheiratet', 'ich bin seit fünf jahren verheiratet.', 'ich bin seit fünf jahren verheiratet', 'ich bin seit fuenf jahren verheiratet'], correct: 'Ich bin seit 5 Jahren verheiratet.', explanation: 'verheiratet sein + seit + Dat (Zeit). „seit 5 Jahren" — Dativ plural.' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Am grijă de bunica mea.', accept: ['ich kümmere mich um meine großmutter.', 'ich kümmere mich um meine großmutter', 'ich kuemmere mich um meine grossmutter.', 'ich kuemmere mich um meine grossmutter', 'ich kümmere mich um meine oma', 'ich kuemmere mich um meine oma'], correct: 'Ich kümmere mich um meine Großmutter.', explanation: 'sich kümmern UM + Akkusativ (NU „für"!). Sufix masculin Akk: meine (Oma f).' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'O familie fericită necesită compromis.', accept: ['eine glückliche familie braucht kompromiss.', 'eine glückliche familie braucht kompromiss', 'eine glueckliche familie braucht kompromiss.', 'eine glueckliche familie braucht kompromiss', 'eine glückliche familie braucht kompromisse'], correct: 'Eine glückliche Familie braucht Kompromiss.', explanation: 'glücklich = fericit. Adjectiv feminin Nominativ cu articol nedefinit: -e (slab).' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Divorțul a fost greu pentru copii.', accept: ['die scheidung war schwer für die kinder.', 'die scheidung war schwer für die kinder', 'die scheidung war schwer fuer die kinder.', 'die scheidung war schwer fuer die kinder', 'die scheidung war schwierig für die kinder'], correct: 'Die Scheidung war schwer für die Kinder.', explanation: 'die Scheidung = divorț (substantiv). schwer = greu. für + Akkusativ (die Kinder).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți Sprechen B2 — Gesundheit & Sport</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> mixte: vocabular cheie, structuri argumentative (Sprechen Teil 2), traduceri RO→DE.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină (wizard)</li>
                <li>✅ Feedback instant + explicație</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    function normalize(s) {
        if (!s) return '';
        return s.toLowerCase().trim()
            .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
            .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
            .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
            .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
            .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = normalize(userAnswer) === normalize(q.correct);
    } else {
        const userAnswerNorm = normalize(userAnswer);
        isCorrect = q.accept.some(a => normalize(a) === userAnswerNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat!'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
