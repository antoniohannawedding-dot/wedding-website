const translations = {
    en: {
        subtitle: "Are getting married",
        locTitle: "The Day",
        churchTitle: "The Ceremony",
        churchDesc: "Santa Maria della Pietà. Starting at 4:00 PM.",
        churchHistory: "A 17th-century Sicilian Baroque masterpiece in the Kalsa district, designed by Giacomo Amato.",
        venueTitle: "The Party",
        venueDesc: "Baglio Culluzia, Via Funnuta 9. Dinner and dancing to follow.",
        venueHistory: "An 18th-century noble estate in the Conca d'Oro. Its halls are restored historic stables.",
        giftsTitle: "Gifts & Registry",
        giftsDesc: "Your presence is the greatest gift. If you wish to contribute to our honeymoon, use the details below:",
        rsvpTitle: "RSVP",
        labelName: "Full Name",
        labelAttending: "Will you join us?",
        optYes: "Yes, I'll be there!",
        optNo: "No, I can't make it",
        btnSubmit: "Confirm RSVP",
        btnHist: "View History",
        qrMatch: "Welcome, "
    },
    it: {
        subtitle: "Si sposano",
        locTitle: "Il Grande Giorno",
        churchTitle: "La Cerimonia",
        churchDesc: "Santa Maria della Pietà. Inizio ore 16:00.",
        churchHistory: "Capolavoro del barocco siciliano del XVII secolo nel quartiere Kalsa, progettato da Giacomo Amato.",
        venueTitle: "Il Ricevimento",
        venueDesc: "Baglio Culluzia, Via Funnuta 9. Seguiranno cena e balli.",
        venueHistory: "Dimora nobiliare del 1700 situata nella Conca d'Oro con antiche scuderie ristrutturate.",
        giftsTitle: "Lista Nozze",
        giftsDesc: "La vostra presenza è il dono più grande. Se desiderate contribuire alla luna di miele:",
        rsvpTitle: "Conferma Presenza",
        labelName: "Nome Completo",
        labelAttending: "Ci sarai?",
        optYes: "Sì, ci sarò!",
        optNo: "No, non potrò esserci",
        btnSubmit: "Conferma",
        btnHist: "Vedi Storia",
        qrMatch: "Benvenuto/a, "
    },
    pl: {
        subtitle: "Biorą ślub",
        locTitle: "Nasz Dzień",
        churchTitle: "Ceremonia",
        churchDesc: "Santa Maria della Pietà. Początek o 16:00.",
        churchHistory: "XVII-wieczne arcydzieło sycylijskiego baroku w dzielnicy Kalsa.",
        venueTitle: "Wesele",
        venueDesc: "Baglio Culluzia, ul. Funnuta 9. Zapraszamy na kolację i tańce.",
        venueHistory: "XVIII-wieczna szlachecka posiadłość w Conca d'Oro.",
        giftsTitle: "Prezenty",
        giftsDesc: "Wasza obecność jest najważniejsza. Jeśli chcecie wesprzeć naszą podróż:",
        rsvpTitle: "RSVP",
        labelName: "Imię i Nazwisko",
        labelAttending: "Czy będziesz z nami?",
        optYes: "Tak, będę!",
        optNo: "Niestety nie mogę",
        btnSubmit: "Potwierdź",
        btnHist: "Zobacz historię",
        qrMatch: "Witaj, "
    }
};

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];
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
    document.getElementById('label-name').innerText = t.labelName;
    document.getElementById('label-attending').innerText = t.labelAttending;
    document.getElementById('opt-yes').innerText = t.optYes;
    document.getElementById('opt-no').innerText = t.optNo;
    document.getElementById('btn-submit').innerText = t.btnSubmit;
    document.getElementById('btn-hist-church').innerText = t.btnHist;
    document.getElementById('btn-hist-venue').innerText = t.btnHist;
}

function toggleHistory(id) {
    const div = document.getElementById('history-' + id);
    div.style.display = (div.style.display === 'block') ? 'none' : 'block';
}

// ROBUST SLIDER LOGIC
let sliders = {
    church: { int: null, idx: 0 },
    venue: { int: null, idx: 0 }
};

function startSlider(id) {
    const el = document.getElementById('gallery-' + id);
    if (!el) return;
    const count = el.querySelectorAll('img').length;
    if (count <= 1) return;

    clearInterval(sliders[id].int);
    sliders[id].int = setInterval(() => {
        sliders[id].idx = (sliders[id].idx + 1) % count;
        el.scrollTo({ left: el.clientWidth * sliders[id].idx, behavior: 'smooth' });
    }, 6000);
}

function stopSlider(id) { clearInterval(sliders[id].int); }

window.addEventListener('resize', () => {
    ['church', 'venue'].forEach(id => {
        const el = document.getElementById('gallery-' + id);
        if (el) el.scrollTo({ left: el.clientWidth * sliders[id].idx });
    });
});

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestId = urlParams.get('guestId');
    if (guestId) {
        document.getElementById('guest-id').value = guestId;
        document.getElementById('name').value = guestId.replace(/_/g, ' ');
        document.getElementById('qr-welcome').innerText = translations[currentLang].qrMatch + guestId.replace(/_/g, ' ') + "!";
        document.getElementById('qr-welcome').style.display = 'block';
    }
    startSlider('church');
    startSlider('venue');
    setLang('en');
});

document.getElementById('rsvp-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('btn-submit');
    btn.innerText = "Sending...";
    btn.disabled = true;
    fetch('YOUR_SCRIPT_URL', { method: 'POST', body: new FormData(e.target) })
        .then(() => { document.getElementById('form-message').innerText = "Sent!"; btn.style.display = 'none'; })
        .catch(() => { document.getElementById('form-message').innerText = "Error!"; btn.disabled = false; });
});