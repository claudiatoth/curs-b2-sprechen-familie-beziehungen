# 🎙️ Audio pentru Sprechen B2 — Familie & Beziehungen

Acest folder conține:
- **`cards/`** — 32 WAV pre-generate cu Hedda pentru flashcards (incluse automat)

## 📂 cards/ — flashcards (auto, NU edita)

32 WAV-uri Hedda pentru toate cardurile lecției:
- Familienformen (6): familie, kernfamilie, patchworkfamilie, alleinerziehende, grossfamilie, adoptivfamilie
- Beziehungstypen (6): ehe, wilde-ehe, partnerschaft, fernbeziehung, verheiratet, single
- Familienleben (5): eltern, erziehung, hausarbeit-teilen, grosseltern, kinderbetreuung
- Generationen (4): generation, generationenkonflikt, sich-kuemmern-um, pflegeheim
- Probleme moderne (5): scheidung, sich-scheiden-lassen, vereinsamung, vereinbarkeit, doppelbelastung
- Trends 2025-2026 (4): co-parenting, dink, mehrgenerationenhaus, elternzeit
- Conectori cheie Sprechen (2): im-vergleich-zu-frueher, laut-statistisches-bundesamt

Sunt încărcate automat de `flashcards.js`.

## 🔄 Regenerare manuală (Windows PowerShell)

```powershell
powershell.exe -ExecutionPolicy Bypass -File audio/generate-cards.ps1
```

Folosește voicea **Microsoft Hedda Desktop** (Windows TTS) cu rate -2.

## 🎙️ Voci recomandate pentru MP3 teorie suplimentar (opțional)

Dacă vrei să înregistrezi explicații audio pentru fiecare din cele 6 categorii de vocabular:

- **TTSMaker — Sander-DE Germany Female** (voce 290, nelimitat)
- **TTSMaker — Killian-DE Germany Male** (voce 120095, 3000 char/conv)
- **Microsoft Hedda Desktop** (Windows, gratis, calitate decentă)

Salvează MP3-urile cu nume `01-familienformen.mp3`, `02-beziehungstypen.mp3`, etc. și anunță-mă să le integrez cu butoane play/stop (pattern Regula 16).
