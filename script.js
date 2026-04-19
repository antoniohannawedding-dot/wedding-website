// --- 1. Multi-Language Dictionary ---
const translations = {
    en: {
        subtitle: "Are getting married",
        locTitle: "The Day",
        churchTitle: "The Ceremony",
        churchDesc: "St. Mary's Cathedral, 123 Wedding Ave. Starting at 11:00 AM.",
        venueTitle: "The Party",
        venueDesc: "Grand Villa Resort, 456 Celebration St. Dinner and dancing to follow.",
        giftsTitle: "Gifts & Registry",
        giftsDesc: "Your presence is the greatest gift. If you wish to contribute to our honeymoon, you can use the details below:",
        rsvpTitle: "RSVP",
        labelName: "Full Name",
        labelAttending: "Will you join us?",
        optYes: "Yes, I'll be there!",
        optNo: "No, I can't make it",
        btnSubmit: "Confirm RSVP",
        qrMatch: "Welcome, "
    },
    it: {
        subtitle: "Si sposano",
        locTitle: "Il Grande Giorno",
        churchTitle: "La Cerimonia",
        churchDesc: "Cattedrale di Santa Maria, Via delle Nozze 123. Inizio ore 11:00.",
        venueTitle: "Il Ricevimento",
        venueDesc: "Grand Villa Resort, Via dei Festeggiamenti 456. Seguiranno cena e balli.",
        giftsTitle: "Lista Nozze",
        giftsDesc: "La vostra presenza è il dono più bello. Se desiderate contribuire alla nostra luna di miele, potete utilizzare i dati qui sotto:",
        rsvpTitle: "Conferma Presenza",
        labelName: "Nome Completo",
        labelAttending: "Ci sarai?",
        optYes: "Sì, ci sarò!",
        optNo: "No, non potrò esserci",
        btnSubmit: "Conferma",
        qrMatch: "Benvenuto/a, "
    },
    pl: {
        subtitle: "Biorą ślub",
        locTitle: "Nasz Dzień",
        churchTitle: "Ceremonia",
        churchDesc: "Katedra Mariacka, ul. Ślubna 123. Początek o 11:00.",
        venueTitle: "Wesele",
        venueDesc: "Grand Villa Resort, ul. Uroczysta 456. Zapraszamy na obiad i tańce.",
        giftsTitle: "Prezenty",
        giftsDesc: "Wasza obecność jest dla nas najważniejsza. Jeśli chcecie wesprzeć naszą podróż poślubną, poniżej znajdują się dane:",
        rsvpTitle: "RSVP",
        labelName: "Imię i Nazwisko",
        labelAttending: "Czy będziesz z nami?",
        optYes: "Tak, z przyjemnością!",
        optNo: "Niestety nie mogę",
        btnSubmit: "Potwierdź",
        qrMatch: "Witamy, "
    }
};

let currentLang = 'en'; // Default language

function setLang(lang) {
    currentLang = lang;
    document.getElementById('subtitle').innerText = translations[lang].subtitle;
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

// --- 2. QR Code & URL Parameter Mechanism ---
// Example link: https://yourusername.github.io/repo/?guestId=Mario_Rossi
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestId = urlParams.get('guestId');

    if (guestId) {
        const formattedName = guestId.replace(/_/g, ' ');

        // Fill the hidden input and the visible name input automatically
        document.getElementById('guest-id').value = guestId;
        document.getElementById('name').value = formattedName;

        // Show personalized welcome message
        const welcomeText = document.getElementById('qr-welcome');
        welcomeText.style.display = 'block';
        welcomeText.innerText = translations[currentLang].qrMatch + formattedName + "!";
    }
};

// --- 3. RSVP Form Submission to Google Apps Script ---
const form = document.getElementById('rsvp-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const submitBtn = document.getElementById('btn-submit');
    submitBtn.innerText = "Sending...";
    submitBtn.style.backgroundColor = "#aaa";
    submitBtn.disabled = true;

    // REPLACE THIS URL with your Google Apps Script Web App URL from Step 2
    const scriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById('form-message').style.color = "#7d9081";
            document.getElementById('form-message').innerText = "RSVP Saved! Thank you.";
            submitBtn.style.display = 'none';
        })
        .catch(error => {
            document.getElementById('form-message').style.color = "red";
            document.getElementById('form-message').innerText = "Error saving RSVP. Please try again.";
            submitBtn.innerText = translations[currentLang].btnSubmit;
            submitBtn.style.backgroundColor = "var(--primary)";
            submitBtn.disabled = false;
            console.error('Error!', error.message);
        });
});