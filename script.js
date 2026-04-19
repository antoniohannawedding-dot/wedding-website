const translations = {
    en: {
        subtitle: "Are getting married",
        locTitle: "The Day",
        churchTitle: "The Ceremony",
        churchDesc: "Santa Maria della Pietà. Starting at 4:00 PM.",
        churchHistory: "The Church of Santa Maria della Pietà is located in the heart of the Kalsa district in Palermo, along the historic Via Alloro. Built between the late 17th and early 18th centuries and designed by the architect Giacomo Amato, it is a splendid example of Baroque architecture. The church is notable for its majestic two-tier facade, adorned with imposing columns and statues. Inside, the spacious single nave houses precious frescoes, elegant stuccoes, and rich marble decorations typical of the Sicilian Baroque style.",
        venueTitle: "The Venue",
        venueDesc: "Baglio Culluzia, Via Funnuta 9.",
        venueHistory: "Baglio Culluzia is an 18th-century noble residence located just outside Palermo. The estate is part of the heritage of historic villas in the Conca d'Oro. The indoor hall was converted from an ancient stable, and the spaces have been restored while preserving the original features of the era in which it was built.",
        giftsTitle: "Gifts & Registry",
        giftsDesc: "Your presence is the greatest gift. If you wish to contribute to our honeymoon, use the details below:",
        rsvpTitle: "RSVP",
        labelName: "Full Name",
        labelAttending: "Will you join us?",
        optYes: "Yes, I'll be there!",
        optNo: "No, I can't make it",
        btnSubmit: "Confirm RSVP",
        btnHist: "View History",
        btnCopy: "Copy",
        copied: "Copied!",
        qrMatch: "Welcome, "
    },
    it: {
        subtitle: "Si sposano",
        locTitle: "Il Grande Giorno",
        churchTitle: "La Cerimonia",
        churchDesc: "Santa Maria della Pietà. Inizio ore 16:00.",
        churchHistory: "La Chiesa di Santa Maria della Pietà si trova nel cuore del quartiere Kalsa a Palermo, lungo la storica Via Alloro. Costruita tra la fine del XVII e l'inizio del XVIII secolo su progetto dell'architetto Giacomo Amato, è uno splendido esempio di architettura barocca. La chiesa si distingue per la sua maestosa facciata a due ordini, arricchita da imponenti colonne e statue. All'interno, l'ampia navata unica custodisce preziosi affreschi, eleganti stucchi e ricche decorazioni marmoree tipiche del barocco siciliano.",
        venueTitle: "Il Ricevimento",
        venueDesc: "Baglio Culluzia, Via Funnuta 9.",
        venueHistory: "Baglio Culluzia è una dimora nobiliare del 1700 situata alle porte di Palermo. La tenuta fa parte del patrimonio di ville storiche della Conca D’oro. La sala interna è stata ricavata da un’antica scuderia, gli spazi sono stati",
        giftsTitle: "Lista Nozze",
        giftsDesc: "La vostra presenza è il dono più grande. Se desiderate contribuire alla luna di miele:",
        rsvpTitle: "Conferma Presenza",
        labelName: "Nome Completo",
        labelAttending: "Ci sarai?",
        optYes: "Sì, ci sarò!",
        optNo: "No, non potrò esserci",
        btnSubmit: "Conferma",
        btnHist: "Vedi Storia",
        btnCopy: "Copia",
        copied: "Copiato!",
        qrMatch: "Benvenuto/a, "
    },
    pl: {
        subtitle: "Biorą ślub",
        locTitle: "Nasz Dzień",
        churchTitle: "Ceremonia",
        churchDesc: "Santa Maria della Pietà. Początek o 16:00.",
        churchHistory: "Kościół Santa Maria della Pietà znajduje się w samym sercu dzielnicy Kalsa w Palermo, przy historycznej ulicy Via Alloro. Zbudowany na przełomie XVII i XVIII wieku według projektu architekta Giacomo Amato, jest wspaniałym przykładem architektury barokowej. Kościół wyróżnia się majestatyczną, dwukondygnacyjną fasadą ozdobioną potężnymi kolumnami i posągami. W jego przestronnym, jednonawowym wnętrzu kryją się cenne freski, eleganckie sztukaterie oraz bogate marmurowe dekoracje, które są charakterystyczne dla sycylijskiego baroku.",
        venueTitle: "Przyjęcie Wesele",
        venueDesc: "Baglio Culluzia, ul. Funnuta 9.",
        venueHistory: "Baglio Culluzia to XVIII-wieczna rezydencja szlachecka położona na obrzeżach Palermo. Posiadłość jest częścią dziedzictwa historycznych willi w dolinie Conca d'Oro. Wewnętrzna sala została zaadaptowana z dawnej stajni, a przestrzenie odrestaurowano, zachowując w niezmienionej formie oryginalne cechy z epoki, w której budynek został wzniesiony.",
        giftsTitle: "Prezenty",
        giftsDesc: "Wasza obecność jest najważniejsza. Jeśli chcecie wesprzeć naszą podróż:",
        rsvpTitle: "RSVP",
        labelName: "Imię i Nazwisko",
        labelAttending: "Czy będziesz z nami?",
        optYes: "Tak, będę!",
        optNo: "Niestety nie mogę",
        btnSubmit: "Potwierdź",
        btnHist: "Zobacz historię",
        btnCopy: "Kopiuj",
        copied: "Skopiowano!",
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
    document.getElementById('btn-copy').innerText = t.btnCopy;
    document.getElementById('copy-confirm').innerText = t.copied;

    const urlParams = new URLSearchParams(window.location.search);
    const guestId = urlParams.get('guestId');
    if (guestId) {
        document.getElementById('qr-welcome').innerText = t.qrMatch + guestId.replace(/_/g, ' ') + "!";
    }
}

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
    if (count <= 1) return;

    clearInterval(sliders[id].int);
    sliders[id].int = setInterval(() => {
        sliders[id].idx = (sliders[id].idx + 1) % count;
        el.scrollTo({ left: el.clientWidth * sliders[id].idx, behavior: 'smooth' });
    }, 5000);
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
        document.getElementById('qr-welcome').style.display = 'block';
    }
    setLang('en');
    startSlider('church');
    startSlider('venue');
});

document.getElementById('rsvp-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('btn-submit');
    btn.innerText = "Sending...";
    btn.disabled = true;
    fetch('YOUR_SCRIPT_URL', { method: 'POST', body: new FormData(e.target) })
        .then(() => {
            document.getElementById('form-message').innerText = "Sent! Thank you.";
            btn.style.display = 'none';
        })
        .catch(() => {
            document.getElementById('form-message').innerText = "Error. Please try again.";
            btn.disabled = false;
        });
});