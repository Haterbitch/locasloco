// ==========================================
// KUNDENS INDSTILLINGER: ÅBNINGSTIDER
// Her kan kunden NEMT ændre, hvornår logikken siger "Åben" eller "Lukket".
// Skriv i hele timer (f.eks. 12 for kl. 12:00, og 20 for kl. 20:00).
// ==========================================
const aabnerKl = 12;
const lukkerKl = 20;


// ==========================================
// SYSTEMKODE (Bør ikke ændres af kunden)
// ==========================================
function tjekAabningstid() {
    const nu = new Date();
    const nuvaerendeTime = nu.getHours(); // Henter klokkeslættet lige nu (et tal mellem 0 og 23)

    // Finder det HTML-element, vi skal skrive i
    const statusTekst = document.getElementById("aabnings-status");

    // Logikken: Hvis klokken er større end/lig med åbningstid, OG mindre end lukketid...
    if (nuvaerendeTime >= aabnerKl && nuvaerendeTime < lukkerKl) {
        statusTekst.innerText = "LIGE NU : ÅBEN";
        statusTekst.style.color = "var(--blodappelsin)"; // Sætter farven til orange
    } else {
        statusTekst.innerText = "LIGE NU : LUKKET";
        statusTekst.style.color = "var(--jordbaer)"; // Bruger din jordbærfarve, når der er lukket
    }
}

// Kør funktionen én gang med det samme, når siden åbnes
tjekAabningstid();

// Tjek automatisk hvert minut (60.000 millisekunder), så status skifter, hvis kunden lader siden stå åben.
setInterval(tjekAabningstid, 60000);