Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try { $synth.SelectVoice("Microsoft Hedda Desktop") } catch { Write-Host "Hedda voice not available, using default DE voice" }
$synth.Rate = -2

$ae = [char]0x00E4; $oe = [char]0x00F6; $ue = [char]0x00FC; $ss = [char]0x00DF
$AE = [char]0x00C4; $OE = [char]0x00D6; $UE = [char]0x00DC

$outDir = "$PSScriptRoot\cards"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$cards = @(
    @("01-familie.wav", "die Familie, die Familien"),
    @("02-kernfamilie.wav", "die Kernfamilie"),
    @("03-patchworkfamilie.wav", "die Patchworkfamilie"),
    @("04-alleinerziehende.wav", "der Alleinerziehende, die Alleinerziehende"),
    @("05-grossfamilie.wav", "die Gro${ss}familie"),
    @("06-adoptivfamilie.wav", "die Adoptivfamilie"),
    @("07-ehe.wav", "die Ehe, die Ehen"),
    @("08-wilde-ehe.wav", "die wilde Ehe"),
    @("09-partnerschaft.wav", "die Partnerschaft"),
    @("10-fernbeziehung.wav", "die Fernbeziehung"),
    @("11-verheiratet.wav", "verheiratet sein"),
    @("12-single.wav", "Single sein"),
    @("13-eltern.wav", "die Eltern, nur Plural"),
    @("14-erziehung.wav", "die Erziehung"),
    @("15-hausarbeit-teilen.wav", "die Hausarbeit teilen"),
    @("16-grosseltern.wav", "die Gro${ss}eltern, nur Plural"),
    @("17-kinderbetreuung.wav", "die Kinderbetreuung"),
    @("18-generation.wav", "die Generation, die Generationen"),
    @("19-generationenkonflikt.wav", "der Generationenkonflikt"),
    @("20-sich-kuemmern-um.wav", "sich um jemanden k${ue}mmern"),
    @("21-pflegeheim.wav", "das Pflegeheim, die Pflegeheime"),
    @("22-scheidung.wav", "die Scheidung"),
    @("23-sich-scheiden-lassen.wav", "sich scheiden lassen"),
    @("24-vereinsamung.wav", "die Vereinsamung"),
    @("25-vereinbarkeit.wav", "die Vereinbarkeit Familie und Beruf"),
    @("26-doppelbelastung.wav", "die Doppelbelastung"),
    @("27-co-parenting.wav", "das Co-Parenting"),
    @("28-dink.wav", "DINK, Double Income No Kids"),
    @("29-mehrgenerationenhaus.wav", "das Mehrgenerationenhaus"),
    @("30-elternzeit.wav", "die Elternzeit"),
    @("31-im-vergleich-zu-frueher.wav", "Im Vergleich zu fr${ue}her"),
    @("32-laut-statistisches-bundesamt.wav", "Laut Statistisches Bundesamt")
)

$total = $cards.Count
$ok = 0
foreach ($card in $cards) {
    $filename = $card[0]
    $text = $card[1]
    $outPath = Join-Path $outDir $filename
    try {
        $synth.SetOutputToWaveFile($outPath)
        $synth.Speak($text)
        $synth.SetOutputToNull()
        $ok++
        Write-Host "  [$ok/$total] $filename" -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $filename -- $_" -ForegroundColor Red
    }
}

$synth.Dispose()
Write-Host ""
Write-Host "Generated $ok / $total WAV files in $outDir" -ForegroundColor Cyan
