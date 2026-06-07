// ==========================================
// 1. VARIABLER FOR ÅBNINGSTIDER
// ==========================================
// Her definerer jeg butikkens åbningstider som konstanter.
// Det gør det utrolig nemt at vedligeholde, fordi jeg (eller butiksejeren)
// kun skal rette tiderne ét centralt sted, hvis de ændrer sig.
const aabnerKl = 12;
const lukkerKl = 21;

// ==========================================
// 2. FUNKTION: DYNAMISK TOP-BAR
// ==========================================
// Dette er min hovedfunktion, der tjekker, om butikken har åbent lige nu,
// og opdaterer tekst og farver oppe i min top-bar derefter.
function tjekAabningstid() {

    // Jeg bruger 'new Date()' til at hente brugerens aktuelle tidspunkt.
    // Derefter trækker jeg kun timetallet ud med '.getHours()', da jeg ikke har brug for minutter.
    const nu = new Date();
    const nuvaerendeTime = nu.getHours();

    // Her 'griber' jeg fat i det specifikke HTML-element via dets ID,
    // så jeg har et sted at sætte min dynamiske tekst ind.
    const statusTekst = document.getElementById("topbar-status");

    // Min if/else logik. Jeg spørger computeren: "Er klokken over/lig med åbningstiden OG under lukketiden?"
    if (nuvaerendeTime >= aabnerKl && nuvaerendeTime < lukkerKl) {

        // Hvis betingelsen er sand (butikken er åben), bruger jeg innerHTML til at indsætte teksten.
        // Det smarte ved innerHTML er, at jeg kan indsætte <span> tags og derved style teksten
        // med mine CSS-variabler direkte her fra JavaScriptet.
        statusTekst.innerHTML = '<span style="color: var(--mint);">ÅBEN NU!</span> <span style="color: var(--blodappelsin);">VI GLÆDER OS TIL AT SE DIG</span>';

    } else {

        // Hvis betingelsen er falsk (butikken er lukket), hopper koden herned og
        // indsætter i stedet denne tekst, stylet med min røde jordbærfarve.
        statusTekst.innerHTML = '<span style="color: var(--jordbaer);">LUKKET</span>';
    }
}

// For at kunden ikke skal vente på at se åbningstiden, kalder jeg funktionen én gang med det samme.
tjekAabningstid();

// Derefter bruger jeg setInterval til at lade funktionen køre igen hvert eneste minut (60.000 millisekunder).
// Det sikrer, at siden opdaterer sig selv live, hvis en kunde lader fanebladet stå åbent længe.
setInterval(tjekAabningstid, 60000);


// ==========================================
// 3. FUNKTION: HIDE-ON-SCROLL NAVIGATION
// ==========================================
// For at skabe en bedre brugeroplevelse (især på mobil), har jeg kodet en menu,
// der forsvinder, når man scroller ned (så man kan se indholdet), og kommer frem igen, når man scroller op.

// Først gemmer jeg brugerens aktuelle scroll-position på skærmen i en variabel.
let prevScrollpos = window.pageYOffset;

// 'window.onscroll' betyder, at denne funktion affyres hver eneste gang, musen/skærmen scroller.
window.onscroll = function() {

    // Jeg finder ud af, hvor brugeren er scrollet hen lige nu i dette øjeblik.
    let currentScrollPos = window.pageYOffset;

    // Hvis den forrige position er STØRRE end den nuværende, betyder det, at brugeren er på vej OP ad siden.
    if (prevScrollpos > currentScrollPos) {
        // Menuen vises igen ved at sætte kassens CSS 'top' position til 0 (helt i toppen af skærmen).
        document.getElementById("navbar-group").style.top = "0";
    }
    // Hvis den nuværende position er større, er kunden på vej NED ad siden.
    else {
        // Her skubber jeg hele menu-kassen 150px opad. Det trækker den uden for skærmens kant,
        // så den er helt skjult, hvilket frigiver plads til at læse hjemmesidens indhold.
        document.getElementById("navbar-group").style.top = "-150px";
    }

    // Til sidst gemmer jeg den nye position, så scriptet har et nyt startpunkt at sammenligne med ved næste scroll.
    prevScrollpos = currentScrollPos;
}