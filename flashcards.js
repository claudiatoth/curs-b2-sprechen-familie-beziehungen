// ============================================
// FLASHCARDS — Sprechen B2: Familie & Beziehungen
// Claudia Toth · 32 carduri · audio Hedda WAV pregenerat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== Familienformen (6) =====
    { de: "die Familie · die Familien", ro: "familia · familiile (f)", audio: "audio/cards/01-familie.wav" },
    { de: "die Kernfamilie", ro: "familia nucleară (mamă + tată + copii)", audio: "audio/cards/02-kernfamilie.wav" },
    { de: "die Patchworkfamilie", ro: "familia reconstituită (anglicism, f)", audio: "audio/cards/03-patchworkfamilie.wav" },
    { de: "der/die Alleinerziehende", ro: "părintele singur (adj. substantivat)", audio: "audio/cards/04-alleinerziehende.wav" },
    { de: "die Großfamilie", ro: "familia extinsă (cu bunici, mătuși)", audio: "audio/cards/05-grossfamilie.wav" },
    { de: "die Adoptivfamilie", ro: "familia adoptivă (f)", audio: "audio/cards/06-adoptivfamilie.wav" },

    // ===== Beziehungstypen (6) =====
    { de: "die Ehe · die Ehen", ro: "căsătoria · căsătoriile (f, oficial)", audio: "audio/cards/07-ehe.wav" },
    { de: "die wilde Ehe", ro: "concubinaj (a trăi împreună neoficial)", audio: "audio/cards/08-wilde-ehe.wav" },
    { de: "die Partnerschaft", ro: "parteneriatul (f)", audio: "audio/cards/09-partnerschaft.wav" },
    { de: "die Fernbeziehung", ro: "relația la distanță (f)", audio: "audio/cards/10-fernbeziehung.wav" },
    { de: "verheiratet sein", ro: "a fi căsătorit (+ MIT + Dativ)", audio: "audio/cards/11-verheiratet.wav" },
    { de: "Single sein", ro: "a fi singur (anglicism)", audio: "audio/cards/12-single.wav" },

    // ===== Familienleben (5) =====
    { de: "die Eltern (NUR Plural)", ro: "părinții (NUR Plural — fără singular!)", audio: "audio/cards/13-eltern.wav" },
    { de: "die Erziehung", ro: "educația / creșterea copiilor (f, nur Sg)", audio: "audio/cards/14-erziehung.wav" },
    { de: "die Hausarbeit teilen", ro: "a împărți treaba în casă", audio: "audio/cards/15-hausarbeit-teilen.wav" },
    { de: "die Großeltern (NUR Plural)", ro: "bunicii (NUR Plural — fără singular!)", audio: "audio/cards/16-grosseltern.wav" },
    { de: "die Kinderbetreuung", ro: "îngrijirea copilului (f, nur Sg)", audio: "audio/cards/17-kinderbetreuung.wav" },

    // ===== Generationen (4) =====
    { de: "die Generation · die Generationen", ro: "generația · generațiile (f)", audio: "audio/cards/18-generation.wav" },
    { de: "der Generationenkonflikt", ro: "conflictul între generații (m)", audio: "audio/cards/19-generationenkonflikt.wav" },
    { de: "sich um + Akk kümmern", ro: "a avea grijă de (+ Akkusativ)", audio: "audio/cards/20-sich-kuemmern-um.wav" },
    { de: "das Pflegeheim · die Pflegeheime", ro: "căminul de bătrâni · căminele (n)", audio: "audio/cards/21-pflegeheim.wav" },

    // ===== Probleme moderne (5) =====
    { de: "die Scheidung", ro: "divorțul (f)", audio: "audio/cards/22-scheidung.wav" },
    { de: "sich scheiden lassen", ro: "a divorța (reflexiv!)", audio: "audio/cards/23-sich-scheiden-lassen.wav" },
    { de: "die Vereinsamung", ro: "însingurarea (f, nur Sg, abstract)", audio: "audio/cards/24-vereinsamung.wav" },
    { de: "die Vereinbarkeit Familie-Beruf", ro: "concilierea familie-muncă (cheie B2!)", audio: "audio/cards/25-vereinbarkeit.wav" },
    { de: "die Doppelbelastung", ro: "dubla sarcină (muncă + familie)", audio: "audio/cards/26-doppelbelastung.wav" },

    // ===== Trends 2025-2026 (4) =====
    { de: "das Co-Parenting", ro: "co-parenting (anglicism, n, nur Sg)", audio: "audio/cards/27-co-parenting.wav" },
    { de: "DINK (Double Income No Kids)", ro: "cupluri fără copii cu venituri duble", audio: "audio/cards/28-dink.wav" },
    { de: "das Mehrgenerationenhaus", ro: "casa cu mai multe generații (n)", audio: "audio/cards/29-mehrgenerationenhaus.wav" },
    { de: "die Elternzeit", ro: "concediul parental (f, nur Sg)", audio: "audio/cards/30-elternzeit.wav" },

    // ===== Conectori argumentativi cheie (2) =====
    { de: "Im Vergleich zu früher", ro: "în comparație cu trecutul (Sprechen Teil 2!)", audio: "audio/cards/31-im-vergleich-zu-frueher.wav" },
    { de: "Laut Statistisches Bundesamt", ro: "potrivit Biroului Statistic Federal (citare formală)", audio: "audio/cards/32-laut-statistisches-bundesamt.wav" }
];

let currentCardIndex = 0;
let currentFlashAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Sprechen B2 — Familie & Beziehungen</strong> — 6 Familienformen + 6 Beziehungstypen + 5 Familienleben + 4 Generationen + 5 Probleme moderne + 4 Trends + 2 conectori cheie.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentFlashAudio) {
        currentFlashAudio.pause();
        currentFlashAudio.currentTime = 0;
    }
    if (card.audio) {
        currentFlashAudio = new Audio(card.audio);
        currentFlashAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
