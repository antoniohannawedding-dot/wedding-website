// --- 1. Multi-Language Dictionary ---
const translations = {
    en: {
        title: "Welcome to Our Wedding",
        locTitle: "Locations",
        churchTitle: "The Church",
        churchDesc: "St. Mary's Cathedral, 123 Wedding Ave.",
        venueTitle: "The Venue",
        venueDesc: "Grand Party Hall, 456 Celebration St.",
        giftsTitle: "Gifts & Registry",
        giftsDesc: "Your presence is the greatest gift. If you wish to give...",
        rsvpTitle: "RSVP",
        labelName: "Name:",
        labelAttending: "Will you attend?",
        optYes: "Yes",
        optNo: "No",
        btnSubmit: "Send RSVP",
        qrMatch: "Welcome, "
    },
    it: {
        title: "Benvenuti al nostro Matrimonio",
        locTitle: "Luoghi",
        churchTitle: "La Chiesa",
        churchDesc: "Cattedrale di Santa Maria, Via delle Nozze 123.",
        venueTitle: "Il Ricevimento",
        venueDesc: "Villa Grande, Via dei Festeggiamenti 456.",
        giftsTitle: "Regali",
        giftsDesc: "La vostra presenza è il regalo più grande...",
        rsvpTitle: "Conferma Presenza",
        labelName: "Nome:",
        labelAttending: "Ci sarai?",
        optYes: "Sì",
        optNo: "No",
        btnSubmit: "Invia",
        qrMatch: "Benvenuto, "
    },
    pl: {
        title: "Witamy na naszym ślubie",
        locTitle: "Lokalizacje",
        churchTitle: "Kościół",
        churchDesc: "Katedra Mariacka, ul. Ślubna 123.",
        venueTitle: "Wesele",
        venueDesc: "Wielka Sala, ul. Uroczysta 456.",
        giftsTitle: "Prezenty",
        giftsDesc: "Twoja obecność jest największym prezentem...",
        rsvpTitle: "RSVP",
        labelName: "Imię:",
        labelAttending: "Czy będziesz?",
        optYes: "Tak",
        optNo: "Nie",
        btnSubmit: "Wyślij",
        qrMatch: "Witaj, "
    }
};

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('loc-title').innerText = translations[lang].locTitle;
    document.getElementById('church-title').innerText = translations[lang].churchTitle;
    document.getElementById('church-desc').innerText = translations[lang].churchDesc;
    document.getElementById('venue-title').innerText = translations[lang].venueTitle;
    document.getElementById('venue-desc').innerText = translations[lang].venueDesc;
    document.getElementById('gifts-title').innerText = translations[lang].giftsTitle;
    document.getElementById('gifts-desc').innerText = translations[lang].giftsDesc;
    document.getElementById('rsvp-title').innerText = translations[lang].rsvpTitle;
    document.getElementById('label-name').innerText = translations[lang].labelName;
    document.getElementById('label-attending').innerText = translations[lang].labelAttending;
    document.getElementById('opt-yes').innerText = translations[lang].optYes;
    document.getElementById('opt-no').innerText = translations[lang].optNo;
    document.getElementById('btn-submit').innerText = translations[lang].btnSubmit;
}

// --- 2. QR Code Mechanism ---
// QR codes should link to: https://yourusername.github.io/repo/?guestId=JOHN_DOE
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestId = urlParams.get('guestId');

    if (guestId) {
        // Fill the hidden input and the name input automatically
        document.getElementById('guest-id').value = guestId;
        document.getElementById('name').value = guestId.replace(/_/g, ' ');

        const welcomeText = document.getElementById('qr-welcome');
        welcomeText.style.display = 'block';
        welcomeText.innerText = translations[currentLang].qrMatch + guestId.replace(/_/g, ' ') + "!";
    }
};

// --- 3. RSVP Form Submission to Google Apps Script ---
const form = document.getElementById('rsvp-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('btn-submit').innerText = "Sending...";

    // REPLACE THIS URL with your Google Apps Script Web App URL (Step 2)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxTuLYjlRvPnH-CYdnqk_-_MOtR2YLDi_A1VmJQIzzbSIN2B3szX6IUDwhkPW48iJ_miA/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById('form-message').innerText = "RSVP Saved! Thank you.";
            document.getElementById('btn-submit').style.display = 'none';
        })
        .catch(error => {
            document.getElementById('form-message').innerText = "Error saving RSVP.";
            console.error('Error!', error.message);
        });
}); 