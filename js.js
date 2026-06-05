// ==========================================
// KUNDENS INDSTILLINGER: ÅBNINGSTIDER
// ==========================================
const aabnerKl = 12;
const lukkerKl = 21;

// ==========================================
// SYSTEMKODE: ÅBNINGSTIDER (TOP BAR)
// ==========================================
function tjekAabningstid() {
    const nu = new Date();
    const nuvaerendeTime = nu.getHours();

    // Finder det nye HTML-element i top baren
    const statusTekst = document.getElementById("topbar-status");

    // Logikken: Er der åbent?
    if (nuvaerendeTime >= aabnerKl && nuvaerendeTime < lukkerKl) {
        // Sætter teksten og farverne præcis som på dit designbillede
        statusTekst.innerHTML = '<span style="color: var(--mint);">ÅBEN NU!</span> <span style="color: var(--blodappelsin);">VI GLÆDER OS TIL AT SE DIG</span>';
    } else {
        // Teksten når der er lukket (farvet med jeres jordbærfarve)
        statusTekst.innerHTML = '<span style="color: var(--jordbaer);">LUKKET</span>';
    }
}

// Kør funktionen med det samme, og tjek hvert minut
tjekAabningstid();
setInterval(tjekAabningstid, 60000);

// ==========================================
// SYSTEMKODE: SCROLL MENU (SKJUL/VIS)
// ==========================================
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    // Hvis vi scroller OP
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-group").style.top = "0"; // Viser menuen igen
    }
    // Hvis vi scroller NED
    else {
        // Skubber hele kassen (topbar + menu) op ud af syne.
        // -150px er nok til at gemme det hele uanset skærmstørrelse.
        document.getElementById("navbar-group").style.top = "-150px";
    }

    prevScrollpos = currentScrollPos;
}