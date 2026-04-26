// 1. CONFIGURATION
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyOPtIHrm8TPNSJzpz78OAoKCwPDaNRsRPHRsPbQQczg2cYSs0jiPyJlFUIK4tmAjDkHg/exec';
const translations = {
    en: {
        subtitle: "Are getting married",
        locTitle: "Our Day",
        churchTitle: "The Ceremony",
        churchDesc: "Santa Maria della Pietà. Starting at 4:00 PM.",
        churchHistory: "The Church of Santa Maria della Pietà is a splendid example of Baroque architecture located in the heart of the Kalsa district in Palermo.",
        venueTitle: "The Venue",
        venueDesc: "Baglio Culluzia, Via Funnuta 9.",
        venueHistory: "Baglio Culluzia is an 18th-century noble residence located just outside Palermo.",
        giftsTitle: "Gifts & Registry",
        giftsDesc: "Your presence is the greatest gift. If you wish to contribute to our honeymoon, use the details below:",
        rsvpTitle: "RSVP",
        contactTitle: "Contact Us",
        addCal: "🗓️ Add to Calendar",
        canNotWait: "We can’t wait to celebrate with you!",
        optYes: "Yes, I'll be there!",
        optNo: "No, I can't make it",
        btnSubmit: "Confirm RSVP",
        btnHist: "View History",
        btnCopy: "Copy",
        copied: "Copied!",
        qrMatch: "Welcome, ",
        loading: "Loading your invitation details...",
        dietLabel: "Dietary Restrictions / Intolerances",
        dietPlaceholder: "e.g., Gluten-free, Peanuts, None",
        sent: "Sent! Thank you.",
        error: "Error. Please try again.",
        noId: "If your QR code didn't work, please enter the ID from your invitation:",
        btnGo: "Go"
    },
    it: {
        subtitle: "Si sposano",
        locTitle: "Il Grande Giorno",
        churchTitle: "La Cerimonia",
        churchDesc: "Santa Maria della Pietà. Inizio ore 16:00.",
        churchHistory: "La Chiesa di Santa Maria della Pietà è uno splendido esempio di architettura barocca nel cuore della Kalsa a Palermo.",
        venueTitle: "Il Ricevimento",
        venueDesc: "Baglio Culluzia, Via Funnuta 9.",
        venueHistory: "Baglio Culluzia è una dimora nobiliare del 1700 situata alle porte di Palermo.",
        giftsTitle: "Lista Nozze",
        giftsDesc: "La vostra presenza è il dono più grande. Se desiderate contribuire alla luna di miele:",
        rsvpTitle: "Conferma Presenza",
        contactTitle: "Contattaci",
        addCal: "🗓️ Aggiungi al Calendario",
        canNotWait: "Non vediamo l'ora di festeggiare con voi!",
        optYes: "Sì, ci sarò!",
        optNo: "No, non potrò esserci",
        btnSubmit: "Conferma",
        btnHist: "Vedi Storia",
        btnCopy: "Copia",
        copied: "Copiato!",
        qrMatch: "Benvenuto/a, ",
        loading: "Caricamento dettagli invito...",
        dietLabel: "Intolleranze / Restrizioni alimentari",
        dietPlaceholder: "es. Glutine, Lattosio, Nessuna",
        sent: "Inviato! Grazie.",
        error: "Errore. Riprova più tardi.",
        noId: "Se il codice QR non funziona, inserisci l'ID del tuo invito:",
        btnGo: "Vai"
    },
    pl: {
        subtitle: "Biorą ślub",
        locTitle: "Nasz Dzień",
        churchTitle: "Ceremonia",
        churchDesc: "Santa Maria della Pietà. Początek o 16:00.",
        churchHistory: "Kościół Santa Maria della Pietà to wspaniały przykład architektury barokowej w sercu dzielnicy Kalsa w Palermo.",
        venueTitle: "Przyjęcie Wesele",
        venueDesc: "Baglio Culluzia, ul. Funnuta 9.",
        venueHistory: "Baglio Culluzia to XVIII-wieczna rezydencja szlachecka położona na obrzeżach Palermo.",
        giftsTitle: "Prezenty",
        giftsDesc: "Wasza obecność jest najważniejsza. Jeśli chcecie wesprzeć naszą podróż:",
        rsvpTitle: "Prosimy o potwierdzenie przybycia",
        contactTitle: "Kontakt",
        addCal: "🗓️ Dodaj do Kalendarza",
        canNotWait: "Nie możemy się doczekać, żeby świętować z Wami!",
        optYes: "Tak, będę!",
        optNo: "Niestety nie mogę",
        btnSubmit: "Potwierdź",
        btnHist: "Zobacz historię",
        btnCopy: "Kopiuj",
        copied: "Skopiowano!",
        qrMatch: "Witaj, ",
        loading: "Ładowanie szczegółów zaproszenia...",
        dietLabel: "Alergie / Intolerancje pokarmowe",
        dietPlaceholder: "np. gluten, orzechy, brak",
        sent: "Wysłano! Dziękujemy.",
        error: "Błąd. Spróbuj ponownie.",
        noId: "Jeśli kod QR nie działa, wpisz numer ID z zaproszenia:",
        btnGo: "OK"
    }
};

let currentLang = 'en';
let currentFamilyData = [];

// 2. LANGUAGE LOGIC
function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Text Content
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('loc-title').innerText = t.locTitle;
    document.getElementById('church-title').innerText = t.churchTitle;
    document.getElementById('church-desc').innerText = t.churchDesc;
    document.getElementById('church-history-text').innerText = t.churchHistory;
    document.getElementById('venue-title').innerText = t.venueTitle;
    document.getElementById('venue-desc').innerText = t.venueDesc;
    document.getElementById('venue-history-text').innerText = t.venueHistory;
    document.getElementById('gifts-title').innerText = t.giftsTitle;
    document.getElementById('gifts-desc').innerText = t.giftsDesc;
    document.getElementById('rsvp-title').innerText = t.rsvpTitle;
    document.getElementById('contact-title').innerText = t.contactTitle;
    document.getElementById('can-not-wait').innerText = t.canNotWait;

    // Buttons & UI
    document.getElementById('btn-submit').innerText = t.btnSubmit;
    document.getElementById('btn-hist-church').innerText = t.btnHist;
    document.getElementById('btn-hist-venue').innerText = t.btnHist;
    document.getElementById('btn-copy').innerText = t.btnCopy;
    document.getElementById('copy-confirm').innerText = t.copied;

    // Add to Calendar translation
    const calText = document.getElementById('add-to-cal-text');
    if (calText) {
        calText.innerText = t.addCal.replace('🗓️ ', '');
    }

    if (document.getElementById('no-id-text')) document.getElementById('no-id-text').innerText = t.noId;
    if (document.getElementById('btn-manual-go')) document.getElementById('btn-manual-go').innerText = t.btnGo;
    if (document.getElementById('loading-message')) document.getElementById('loading-message').innerText = t.loading;

    // Update the success message if the form was already sent
    const msgDiv = document.getElementById('form-message');
    if (msgDiv && msgDiv.classList.contains('submitted')) {
        msgDiv.innerText = t.sent;
    }

    if (currentFamilyData.length > 0) renderFamilyForm(currentFamilyData);
}

// 3. DATA FETCHING
function fetchGuestData(guestId) {
    const loadMsg = document.getElementById('loading-message');
    loadMsg.style.display = 'block';

    fetch(SCRIPT_URL + "?guestId=" + guestId + "&cb=" + new Date().getTime())
        .then(response => response.json())
        .then(data => {
            if (!data.family || data.family.length === 0) {
                loadMsg.innerText = translations[currentLang].error + " (ID not found)";
                document.getElementById('manual-id-entry').style.display = 'block';
                return;
            }
            currentFamilyData = data.family;
            if (data.lang && translations[data.lang]) setLang(data.lang);

            loadMsg.style.display = 'none';
            document.getElementById('manual-id-entry').style.display = 'none';
            document.getElementById('rsvp-form').style.display = 'block';

            document.getElementById('qr-welcome').innerText = translations[currentLang].qrMatch + currentFamilyData[0].name + "!";
            document.getElementById('qr-welcome').style.display = 'block';
            renderFamilyForm(currentFamilyData);
        })
        .catch(() => {
            loadMsg.innerText = translations[currentLang].error;
            document.getElementById('manual-id-entry').style.display = 'block';
        });
}

function handleManualId() {
    const manualId = document.getElementById('manual-id-input').value.trim();
    if (manualId) {
        document.getElementById('manual-id-entry').style.display = 'none';
        fetchGuestData(manualId);
    }
}

// 4. FORM RENDERING
function renderFamilyForm(family) {
    const container = document.getElementById('family-container');
    const t = translations[currentLang];
    container.innerHTML = '';

    family.forEach((person, index) => {
        const isYes = person.attending === true || person.attending === "true" || person.attending === "Yes";
        const isNo = person.attending === false || person.attending === "false" || person.attending === "No";
        const pastIntol = person.intolerances || "";

        const personDiv = document.createElement('div');
        personDiv.className = 'form-group';
        personDiv.style.borderBottom = "1px solid #eee";
        personDiv.style.paddingBottom = "20px";
        personDiv.style.marginBottom = "20px";
        personDiv.innerHTML = `
            <h4 style="font-family:'Playfair Display', serif; margin-bottom: 15px; color: var(--primary-dark);">${person.name}</h4>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                    <input type="radio" name="attend-${index}" id="attend-yes-${index}" value="yes" ${isYes ? 'checked' : ''} required style="width: 18px; height: 18px;">
                    ${t.optYes}
                </label>
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95rem;">
                    <input type="radio" name="attend-${index}" id="attend-no-${index}" value="no" ${isNo ? 'checked' : ''} required style="width: 18px; height: 18px;">
                    ${t.optNo}
                </label>
            </div>
            <label style="font-size: 0.85rem; color: #666; margin-bottom: 8px;">${t.dietLabel}</label>
            <input type="text" id="intol-${index}" placeholder="${t.dietPlaceholder}" value="${pastIntol}">
        `;
        container.appendChild(personDiv);
    });
}

// 5. RSVP SUBMISSION
document.getElementById('rsvp-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('btn-submit');
    const t = translations[currentLang];
    const rsvpForm = document.getElementById('rsvp-form');

    btn.innerText = "...";
    btn.disabled = true;

    const responses = currentFamilyData.map((person, index) => {
        const isAttending = document.getElementById(`attend-yes-${index}`).checked;
        return {
            row: person.row,
            name: person.name,
            attending: isAttending,
            intolerances: document.getElementById(`intol-${index}`).value
        };
    });

    fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ responses: responses })
    })
        .then(() => {
            rsvpForm.style.display = 'none';
            document.getElementById('qr-welcome').style.display = 'none';

            const msgDiv = document.getElementById('form-message');
            msgDiv.classList.add('submitted'); // MARK AS SUBMITTED
            msgDiv.innerText = t.sent;
            msgDiv.style.padding = "20px";
            msgDiv.style.background = "rgba(255,255,255,0.8)";
            msgDiv.style.borderRadius = "10px";
            msgDiv.style.fontSize = "1.2rem";
            msgDiv.style.color = "var(--primary-dark)";
        })
        .catch(() => {
            document.getElementById('form-message').innerText = t.error;
            btn.innerText = t.btnSubmit;
            btn.disabled = false;
        });
});

// 6. UTILS & ANIMATION
function copyIban() {
    const text = document.getElementById('iban-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-confirm');
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 2000);
    });
}

function toggleHistory(id) {
    const div = document.getElementById('history-' + id);
    div.style.display = (div.style.display === 'block') ? 'none' : 'block';
}

let sliders = { church: { int: null, idx: 0 }, venue: { int: null, idx: 0 } };
function startSlider(id) {
    const el = document.getElementById('gallery-' + id);
    if (!el) return;
    const count = el.querySelectorAll('img').length;
    clearInterval(sliders[id].int);
    sliders[id].int = setInterval(() => {
        sliders[id].idx = (sliders[id].idx + 1) % count;
        el.scrollTo({ left: el.clientWidth * sliders[id].idx, behavior: 'smooth' });
    }, 5000);
}
function stopSlider(id) { clearInterval(sliders[id].int); }

// 7. INITIALIZATION
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestId = urlParams.get('guestId');

    setLang('en'); // Default
    startSlider('church');
    startSlider('venue');

    if (guestId) {
        fetchGuestData(guestId);
    } else {
        document.getElementById('manual-id-entry').style.display = 'block';
    }
});