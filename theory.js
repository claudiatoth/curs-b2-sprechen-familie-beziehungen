// ============================================
// TEORIE — Sprechen B2: Familie & Beziehungen
// Vocabular bilingv pentru proba orală B2 (Sprechen Teil 1 + Teil 2)
// Claudia Toth · Annettes Deutschkurs · Nivel B2
// Aliniat cu Testul 7 oficial Examen B2 (Familie & Beziehungen)
// ============================================

const theoryHTML = `
    <!-- 1: Familienformen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👨‍👩‍👧‍👦 1. Familienformen — modele de familie (tradiționale vs. moderne)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">La B2 te poți aștepta la întrebări tipice ca: <em>„Wie sieht eine moderne Familie aus?"</em>. Învață diferența între <strong>die Kernfamilie</strong> (familia nucleară: mamă + tată + copii) și <strong>die Patchworkfamilie</strong> (familie reconstituită — un partener cu copii din relație anterioară). Capcană: <em>der/die Alleinerziehende</em> (părinte singur) — adjectiv substantivat, se declină ca un adjectiv! 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Familienformen</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Familie · die Familien</td><td class="ro-text">familia / familiile</td><td><em>Meine Familie ist mir sehr wichtig.</em></td></tr>
                        <tr><td class="verb">die Kernfamilie · die Kernfamilien</td><td class="ro-text">familia nucleară (mamă + tată + copii)</td><td><em>Die Kernfamilie ist nicht mehr die einzige Form.</em></td></tr>
                        <tr><td class="verb">die Patchworkfamilie · -n</td><td class="ro-text">familia reconstituită (partener + copii dintr-o relație anterioară)</td><td><em>In einer Patchworkfamilie leben oft Stiefgeschwister.</em></td></tr>
                        <tr><td class="verb">der/die Alleinerziehende</td><td class="ro-text">părintele singur (adj. substantivat!)</td><td><em>Alleinerziehende haben es oft schwer.</em></td></tr>
                        <tr><td class="verb">die Großfamilie · -n</td><td class="ro-text">familia extinsă (cu bunici, mătuși)</td><td><em>Früher war die Großfamilie üblich.</em></td></tr>
                        <tr><td class="verb">das gleichgeschlechtliche Paar · -e</td><td class="ro-text">cuplul de același sex / cuplurile</td><td><em>Seit 2017 dürfen gleichgeschlechtliche Paare heiraten.</em></td></tr>
                        <tr><td class="verb">die Wahlfamilie · -n</td><td class="ro-text">familia aleasă (prieteni apropiați ca familie)</td><td><em>Für viele ist die Wahlfamilie wichtiger als die Blutsverwandtschaft.</em></td></tr>
                        <tr><td class="verb">die Adoptivfamilie · -n</td><td class="ro-text">familia adoptivă</td><td><em>In einer Adoptivfamilie wachsen Kinder ohne biologische Eltern auf.</em></td></tr>
                        <tr><td class="verb">die Stieffamilie · die Stiefgeschwister (Pl.)</td><td class="ro-text">familia vitregă / frați vitregi</td><td><em>Mein Stiefbruder ist 3 Jahre älter.</em></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Strukturen für die mündliche Prüfung</h4>
                <ul>
                    <li><strong>Ich komme aus</strong> + Dat: <em>Ich komme aus einer kleinen Familie.</em></li>
                    <li><strong>In meiner Familie</strong> + verb pe poz. 2: <em>In meiner Familie sind wir vier.</em></li>
                    <li><strong>Heute akzeptiert man</strong>: <em>Heute akzeptiert man alle Familienformen.</em></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Beziehungstypen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>💑 2. Beziehungstypen — Ehe, Partnerschaft, WG, Single</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Argument B2 frecvent: <em>„Heiraten oder zusammenleben — was ist besser?"</em>. Învață <strong>die Ehe</strong> (căsătoria oficială) vs. <strong>die wilde Ehe</strong> (concubinaj — neoficial) + <strong>die Fernbeziehung</strong> (relație la distanță, foarte des între tineri profesioniști). Capcana cu prepoziție: <em>verheiratet MIT + Dativ</em> (NU „verheiratet zu"!). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Beziehungstypen</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Ehe · die Ehen</td><td class="ro-text">căsătoria / căsătoriile (oficial)</td><td><em>Eine glückliche Ehe braucht viel Kompromiss.</em></td></tr>
                        <tr><td class="verb">die wilde Ehe (nur Sg.)</td><td class="ro-text">concubinaj (a trăi împreună neoficial)</td><td><em>Viele leben heute in wilder Ehe.</em></td></tr>
                        <tr><td class="verb">die Partnerschaft · -en</td><td class="ro-text">parteneriatul / parteneriatele</td><td><em>Eine Partnerschaft basiert auf Vertrauen.</em></td></tr>
                        <tr><td class="verb">die WG (Wohngemeinschaft) · -s</td><td class="ro-text">locuință comună (cu prieteni, NU familie)</td><td><em>Studenten leben oft in einer WG.</em></td></tr>
                        <tr><td class="verb">die Fernbeziehung · -en</td><td class="ro-text">relație la distanță</td><td><em>Eine Fernbeziehung erfordert viel Geduld.</em></td></tr>
                        <tr><td class="verb">Single sein</td><td class="ro-text">a fi singur (anglicism)</td><td><em>Single zu sein ist auch eine Lebensform.</em></td></tr>
                        <tr><td class="verb">verheiratet · ledig · geschieden</td><td class="ro-text">căsătorit · necăsătorit · divorțat</td><td><em>Ich bin seit 5 Jahren verheiratet.</em></td></tr>
                        <tr><td class="verb">verlobt sein</td><td class="ro-text">a fi logodit</td><td><em>Wir sind seit Mai verlobt.</em></td></tr>
                        <tr><td class="verb">der Lebensgefährte / die Lebensgefährtin · -n</td><td class="ro-text">partener/parteneră de viață (formal)</td><td><em>Mein Lebensgefährte und ich wohnen zusammen.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: Familienleben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🏠 3. Familienleben — viața de zi cu zi în familie</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Întrebare B2 clasică: <em>„Wie sollten Eltern und Kinder die Hausarbeit teilen?"</em>. Învață <strong>die Erziehung</strong> (educație/creștere copii) + <strong>die Hausarbeit teilen</strong> (a împărți treaba la casă, gender equality!). Pentru B2 e important să poți argumenta echilibrul familial. Capcana: în germană <em>„Eltern"</em> e doar plural (NUR Plural — NU „eine Eltern"!). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Familienleben</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Eltern (nur Pl.)</td><td class="ro-text">părinții (NUR Plural!)</td><td><em>Meine Eltern wohnen in Berlin.</em></td></tr>
                        <tr><td class="verb">die Erziehung (nur Sg.)</td><td class="ro-text">educația / creșterea copiilor</td><td><em>Eine gute Erziehung braucht Geduld und Liebe.</em></td></tr>
                        <tr><td class="verb">die Hausarbeit (nur Sg.)</td><td class="ro-text">treaba în casă (abstract)</td><td><em>Wir teilen die Hausarbeit fair.</em></td></tr>
                        <tr><td class="verb">die Familienzeit (nur Sg.)</td><td class="ro-text">timpul în familie</td><td><em>Familienzeit ist mir heilig.</em></td></tr>
                        <tr><td class="verb">der Konflikt · die Konflikte</td><td class="ro-text">conflictul / conflictele</td><td><em>Konflikte muss man offen besprechen.</em></td></tr>
                        <tr><td class="verb">die Großeltern (nur Pl.)</td><td class="ro-text">bunicii (NUR Plural!)</td><td><em>Meine Großeltern helfen oft bei der Kinderbetreuung.</em></td></tr>
                        <tr><td class="verb">die Kinderbetreuung (nur Sg.)</td><td class="ro-text">îngrijirea copilului (creșă, bunici)</td><td><em>Kinderbetreuung ist in Deutschland teuer.</em></td></tr>
                        <tr><td class="verb">die Tagespflege · -n</td><td class="ro-text">îngrijirea pe timpul zilei</td><td><em>Großeltern als Tagespflege sind sehr wertvoll.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Generationen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>👵👨‍👧 4. Generationen — relația între generații (părinți-copii, bunici)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Tema clasică B2: <em>„Wer kümmert sich um die alten Eltern?"</em>. În Germania <strong>die Pflege der Eltern</strong> e o discuție serioasă (familie acasă vs. Pflegeheim). Învață și <strong>Generationenkonflikt</strong> (conflictul între Boomers și Gen Z e foarte popular acum). Capcana: <em>sich kümmern UM + Akkusativ</em>, NU „kümmern für". 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Generationen</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Generation · die Generationen</td><td class="ro-text">generația / generațiile</td><td><em>Jede Generation hat ihre Probleme.</em></td></tr>
                        <tr><td class="verb">das Eltern-Kind-Verhältnis (nur Sg.)</td><td class="ro-text">relația părinte-copil</td><td><em>Ein gutes Eltern-Kind-Verhältnis ist wichtig.</em></td></tr>
                        <tr><td class="verb">der Generationenkonflikt · -e</td><td class="ro-text">conflictul între generații</td><td><em>Boomers und Gen Z streiten oft.</em></td></tr>
                        <tr><td class="verb">die Pflege der Eltern (nur Sg.)</td><td class="ro-text">îngrijirea părinților</td><td><em>Die Pflege der Eltern ist eine große Aufgabe.</em></td></tr>
                        <tr><td class="verb">das Pflegeheim · die Pflegeheime</td><td class="ro-text">căminul de bătrâni</td><td><em>Im Pflegeheim wohnen viele Senioren.</em></td></tr>
                        <tr><td class="verb">sich kümmern um + Akk</td><td class="ro-text">a avea grijă de cineva</td><td><em>Ich kümmere mich um meine Großmutter.</em></td></tr>
                        <tr><td class="verb">die Babyboomer (Pl.) / die Gen Z</td><td class="ro-text">Boomers / Gen Z</td><td><em>Babyboomer sind in den 1950er-Jahren geboren.</em></td></tr>
                        <tr><td class="verb">der Senior · die Senioren</td><td class="ro-text">seniorul / seniorii (eufemism pentru bătrâni)</td><td><em>Senioren brauchen besondere Pflege.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Probleme moderne -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Probleme moderne — Scheidung, Vereinsamung, Doppelbelastung</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Examinatorul B2 te poate întreba: <em>„Welche Probleme haben moderne Familien?"</em>. Răspunsuri puternice: <strong>die Scheidung</strong> (divorțul — Germania are ~38% rată!), <strong>die Vereinbarkeit Familie-Beruf</strong> (conciliere muncă-familie — cel mai mare argument pentru femei!), <strong>die Doppelbelastung</strong> (dubla sarcină — mama muncește + casa). Citează: „Laut Statistisches Bundesamt..." 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Probleme moderne</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Scheidung · die Scheidungen</td><td class="ro-text">divorțul / divorțurile</td><td><em>Die Scheidungsrate liegt bei 38%.</em></td></tr>
                        <tr><td class="verb">sich scheiden lassen</td><td class="ro-text">a divorța (reflexiv!)</td><td><em>Sie haben sich nach 10 Jahren scheiden lassen.</em></td></tr>
                        <tr><td class="verb">die Vereinsamung (nur Sg.)</td><td class="ro-text">însingurarea (abstract)</td><td><em>Vereinsamung im Alter ist ein wachsendes Problem.</em></td></tr>
                        <tr><td class="verb">der Familiendruck (nur Sg.)</td><td class="ro-text">presiunea familială</td><td><em>Junge Frauen leiden unter dem Familiendruck.</em></td></tr>
                        <tr><td class="verb">die Vereinbarkeit Familie-Beruf (nur Sg.)</td><td class="ro-text">concilierea familie-muncă (cuvânt cheie!)</td><td><em>Die Vereinbarkeit Familie-Beruf ist schwer.</em></td></tr>
                        <tr><td class="verb">die Doppelbelastung · -en</td><td class="ro-text">dubla sarcină (muncă + familie)</td><td><em>Mütter leiden oft unter Doppelbelastung.</em></td></tr>
                        <tr><td class="verb">die Trennung · die Trennungen</td><td class="ro-text">despărțirea / despărțirile</td><td><em>Nach der Trennung war sie traurig.</em></td></tr>
                        <tr><td class="verb">der Sorgerechtsstreit · -e</td><td class="ro-text">litigiu pentru custodia copilului</td><td><em>Sorgerechtsstreite belasten alle.</em></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Trends 2025-2026 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🌱 6. Trends 2025-2026 — Co-Parenting, DINK, Mehrgenerationenhaus</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Familia se transformă rapid. Trenduri 2026: <strong>Co-Parenting</strong> (părinți divorțați care cresc copiii împreună la 50%), <strong>späte Familiengründung</strong> (primii copii după 35 ani — femei carieră), <strong>DINK</strong> (Double Income No Kids — cupluri bogate, fără copii, BUNĂ țintă pentru turism premium!) și <strong>Mehrgenerationenhaus</strong> (locuit 3 generații împreună — soluție anti-Vereinsamung). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Trends 2025-2026</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">das Co-Parenting (nur Sg.)</td><td class="ro-text">co-parenting (părinți divorțați care cresc împreună)</td><td><em>Co-Parenting funktioniert mit guter Kommunikation.</em></td></tr>
                        <tr><td class="verb">die späte Familiengründung (nur Sg.)</td><td class="ro-text">fondarea târzie a familiei (după 35 ani)</td><td><em>Späte Familiengründung wird immer häufiger.</em></td></tr>
                        <tr><td class="verb">DINK (Double Income No Kids)</td><td class="ro-text">cuplu fără copii (anglicism)</td><td><em>DINKs reisen viel und sparen.</em></td></tr>
                        <tr><td class="verb">das Mehrgenerationenhaus · -häuser</td><td class="ro-text">casa cu mai multe generații (Umlaut!)</td><td><em>Im Mehrgenerationenhaus leben Großeltern, Eltern und Kinder zusammen.</em></td></tr>
                        <tr><td class="verb">die Elternzeit (nur Sg.)</td><td class="ro-text">concediul parental</td><td><em>Auch Väter nehmen heute Elternzeit.</em></td></tr>
                        <tr><td class="verb">die Adoption · -en</td><td class="ro-text">adopția / adopțiile</td><td><em>Auch gleichgeschlechtliche Paare dürfen adoptieren.</em></td></tr>
                        <tr><td class="verb">die Familienpolitik (nur Sg.)</td><td class="ro-text">politica familială (stat)</td><td><em>Die Familienpolitik in Deutschland fördert Kinder.</em></td></tr>
                        <tr><td class="verb">das Vertrauen (nur Sg.)</td><td class="ro-text">încrederea (abstract)</td><td><em>Vertrauen ist die Basis jeder Beziehung.</em></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Strukturen für die Argumentation (für Teil 2)</h4>
                <ul>
                    <li><strong>Im Vergleich zu früher</strong>: <em>Im Vergleich zu früher gibt es heute mehr Familienformen.</em></li>
                    <li><strong>Heute akzeptiert man</strong>: <em>Heute akzeptiert man alle Beziehungsformen.</em></li>
                    <li><strong>Laut Statistisches Bundesamt</strong>: <em>Laut Statistisches Bundesamt leben 30% der Erwachsenen als Single.</em></li>
                    <li><strong>Es kommt darauf an, dass</strong>: <em>Es kommt darauf an, dass die Kinder geliebt werden.</em></li>
                    <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong> (pe de o parte ... pe de alta ...)</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
