// ============================================
// EXERCIȚII - Sprechen B2: Familie & Beziehungen
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'die Patchworkfamilie', correct: 'familie reconstituită (cu copii dintr-o relație anterioară)', accept: ['familie reconstituită', 'familie reconstituita', 'familie patchwork', 'patchworkfamilie', 'familie cu copii vitregi'] },
    { id: 'b', de: 'die Vereinbarkeit Familie-Beruf', correct: 'concilierea familie-muncă', accept: ['concilierea familie-muncă', 'concilierea familie munca', 'compatibilitate familie-muncă', 'compatibilitate familie munca', 'echilibru familie-muncă'] },
    { id: 'c', de: 'die Scheidung', correct: 'divorțul', accept: ['divorțul', 'divortul', 'divorț', 'divort'] },
    { id: 'd', de: 'der/die Alleinerziehende', correct: 'părintele singur', accept: ['părintele singur', 'parintele singur', 'părinte singur', 'parinte singur', 'mamă singură', 'mama singura', 'tată singur', 'tata singur'] },
    { id: 'e', de: 'die Doppelbelastung', correct: 'dubla sarcină (muncă + familie)', accept: ['dubla sarcină', 'dubla sarcina', 'dublă încărcare', 'dubla incarcare', 'doppelbelastung'] },
    { id: 'f', de: 'das Mehrgenerationenhaus', correct: 'casa cu mai multe generații', accept: ['casa cu mai multe generații', 'casa cu mai multe generatii', 'casa multi-generații', 'casa multi-generatii', 'mehrgenerationenhaus'] },
    { id: 'g', de: 'die Fernbeziehung', correct: 'relație la distanță', accept: ['relație la distanță', 'relatie la distanta', 'relație distanță', 'relatie distanta', 'fernbeziehung'] },
    { id: 'h', de: 'die Pflege der Eltern', correct: 'îngrijirea părinților', accept: ['îngrijirea părinților', 'ingrijirea parintilor', 'îngrijire părinți', 'ingrijire parinti', 'pflege der eltern'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'familia mea', correct: 'meine Familie', accept: ['meine familie'] },
    { id: 'b', ro: 'a fi căsătorit', correct: 'verheiratet sein', accept: ['verheiratet sein'] },
    { id: 'c', ro: 'părinții mei locuiesc în Berlin', correct: 'meine Eltern wohnen in Berlin', accept: ['meine eltern wohnen in berlin', 'meine eltern leben in berlin'] },
    { id: 'd', ro: 'a divorța', correct: 'sich scheiden lassen', accept: ['sich scheiden lassen', 'sich scheiden zu lassen'] },
    { id: 'e', ro: 'a avea grijă de bunici', correct: 'sich um die Großeltern kümmern', accept: ['sich um die großeltern kümmern', 'sich um die grosseltern kuemmern', 'sich um die großeltern kuemmern', 'die großeltern pflegen', 'die grosseltern pflegen'] },
    { id: 'f', ro: 'a împărți treaba în casă', correct: 'die Hausarbeit teilen', accept: ['die hausarbeit teilen', 'die hausarbeit aufteilen'] },
    { id: 'g', ro: 'concediul parental', correct: 'die Elternzeit', accept: ['die elternzeit', 'elternzeit'] },
    { id: 'h', ro: 'cuplu de același sex', correct: 'gleichgeschlechtliches Paar', accept: ['gleichgeschlechtliches paar', 'ein gleichgeschlechtliches paar'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#6b7280; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția cu substantivul potrivit
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Meine ______ wohnen seit 30 Jahren zusammen. (părinți, NUR plural)', correct: 'Eltern', accept: ['eltern'] },
    { id: 'b', sentence: 'Eine glückliche ______ braucht viel Kompromiss. (căsătorie)', correct: 'Ehe', accept: ['ehe'] },
    { id: 'c', sentence: 'Im ______ leben Boomers, Mütter und Kinder zusammen. (casă multi-generații)', correct: 'Mehrgenerationenhaus', accept: ['mehrgenerationenhaus'] },
    { id: 'd', sentence: 'Die ______ ist eine moderne Familienform: ein Partner mit Kindern aus früherer Beziehung. (familie reconstituită)', correct: 'Patchworkfamilie', accept: ['patchworkfamilie'] },
    { id: 'e', sentence: 'Junge Frauen leiden oft unter dem ______ . (presiune familială)', correct: 'Familiendruck', accept: ['familiendruck'] },
    { id: 'f', sentence: 'Auch Väter nehmen heute ______ . (concediu parental)', correct: 'Elternzeit', accept: ['elternzeit'] },
    { id: 'g', sentence: 'Die ______ Familie-Beruf ist für viele Mütter schwer. (concilierea)', correct: 'Vereinbarkeit', accept: ['vereinbarkeit'] },
    { id: 'h', sentence: 'Bei einem Sorgerechtsstreit kämpfen die Eltern um das ______ für die Kinder. (drept de custodie)', correct: 'Sorgerecht', accept: ['sorgerecht'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu substantivul potrivit din vocabular.</strong><br>
            Sugestia română între paranteze. Scrie EXACT cu majusculă (substantivele se scriu cu majusculă în germană!).
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex3-${item.id}" placeholder="substantiv...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Conectori argumentativi pentru Sprechen Teil 2
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Im ______ zu früher gibt es heute mehr Familienformen. (comparație cu)', correct: 'Vergleich', accept: ['vergleich', 'gegensatz'] },
    { id: 'b', sentence: '______ Statistisches Bundesamt leben 30% der Erwachsenen als Single. (potrivit lui)', correct: 'Laut', accept: ['laut', 'nach'] },
    { id: 'c', sentence: '______ akzeptiert man alle Familienformen. (azi / nowadays)', correct: 'Heute', accept: ['heute', 'heutzutage'] },
    { id: 'd', sentence: 'Es ______ darauf an, dass die Kinder geliebt werden. (depinde de)', correct: 'kommt', accept: ['kommt'] },
    { id: 'e', sentence: '______ einer Seite ist die Kernfamilie traditionell, auf der anderen modern wirkt sie veraltet. (pe o parte)', correct: 'Auf der', accept: ['auf der', 'auf'] },
    { id: 'f', sentence: '______ die Scheidungsrate hoch ist, heiraten viele Menschen. (deși)', correct: 'Obwohl', accept: ['obwohl', 'auch wenn'] },
    { id: 'g', sentence: 'Meiner ______ nach ist Liebe wichtiger als Familienform. (părere)', correct: 'Meinung', accept: ['meinung'] },
    { id: 'h', sentence: '______ der Trennung wohnen sie weiterhin zusammen. (în pofida)', correct: 'Trotz', accept: ['trotz'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🗣️ Completează cu conectorul argumentativ potrivit.</strong><br>
            Aceste structuri sunt esențiale pentru proba orală B2 — pentru comparație, citare studii, opinie, contrast.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex4-${item.id}" placeholder="conector...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Schreibwerkstatt — argument scurt cu Google Form (regula 18)
// ============================================
function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>✍️ Schreibwerkstatt — exersează un argument scurt</strong><br>
            Scrie 4-6 propoziții (60-100 cuvinte) în germană pentru una dintre situațiile de mai jos. Sunt situații tipice pentru <strong>Sprechen Teil 2</strong> (dialog pe perechi cu argumente).
        </div>

        <div class="theory-box" style="background:#fef3c7; border-color:#f59e0b;">
            <h4>📋 Alege UNA dintre cele 3 teme:</h4>
            <ol>
                <li><strong>„Kernfamilie vs. moderne Familienmodelle — was ist besser?"</strong> Argumentează ce model îți place mai mult cu minim 2 motive concrete + un exemplu personal sau cunoscut.</li>
                <li><strong>„Sollten Eltern und Kinder die Hausarbeit gerecht teilen?"</strong> Prezintă 2 perspective (tradițional vs. modern) cu structurile <em>„Auf der einen Seite ... auf der anderen Seite ..."</em>.</li>
                <li><strong>„Wer sollte sich um die alten Eltern kümmern — Familie oder Pflegeheim?"</strong> Dă 3 argumente pro/contra folosind <em>„Es kommt darauf an, dass ..."</em> + <em>„Man sollte ..."</em>.</li>
            </ol>
        </div>

        <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
            <h4>💡 Structuri utile (le poți copia)</h4>
            <ul>
                <li><strong>Meiner Meinung nach</strong> + verb pe poz. 2: „Meiner Meinung nach sind alle Familienformen gleichwertig."</li>
                <li><strong>Im Vergleich zu früher</strong>: „Im Vergleich zu früher haben Frauen mehr Karrierechancen."</li>
                <li><strong>Heute akzeptiert man</strong>: „Heute akzeptiert man auch gleichgeschlechtliche Paare."</li>
                <li><strong>Laut Statistisches Bundesamt</strong>: „Laut Statistisches Bundesamt leben 30% der Erwachsenen als Single."</li>
                <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong></li>
            </ul>
        </div>

        <p style="margin: 14px 0;">📝 Scrie textul tău în câmpul de mai jos (doar pentru proba personală — nu se verifică automat). Pentru corectură de la Annette → folosește formularul:</p>

        <textarea id="ex5-text" rows="8" style="width:100%; padding:14px; border:2px solid #d1fae5; border-radius:8px; font-family:inherit; font-size:1rem; line-height:1.6;" placeholder="Schreib hier deinen Text (4-6 Sätze, 60-100 Wörter)..."></textarea>

        <div style="margin: 14px 0; padding: 16px 20px; background:#ecfdf5; border: 2px solid #10b981; border-radius:10px; text-align:center;">
            <p style="margin: 0 0 10px; color:#065f46; font-weight:600;">📨 Trimite textul tău spre corectură (Annette îți răspunde personal cu feedback)</p>
            <a href="https://forms.gle/ABw53fADhhfDTYJH9" target="_blank" rel="noopener" style="display:inline-block; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:white; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:700; font-size:1rem;">📨 Trimite spre corectură</a>
            <p style="margin: 8px 0 0; color:#6b7280; font-size:0.85rem; font-style:italic;">(formularul deschis în tab nou — în el alegi „Sprechen B2 — Familie & Beziehungen")</p>
        </div>
    `;
}

function checkEx5() {
    const textarea = document.getElementById('ex5-text');
    const userText = (textarea?.value || '').trim();
    const wordCount = userText ? userText.split(/\s+/).length : 0;

    if (wordCount < 30) {
        return { correct: 0, total: 1, message: 'Scrie cel puțin 30 de cuvinte ca să poți trimite textul spre corectură.' };
    }
    return { correct: 1, total: 1, message: `Ai scris ${wordCount} cuvinte. Acum trimite textul prin Google Form pentru corectură personală.` };
}

document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
