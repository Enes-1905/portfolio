// ================= BURGER MENU =================

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      nav.classList.remove("open");
      nav.classList.remove("active");
    });
  });
}

// ================= TRANSLATIONS =================

const translations = {
  en: {
    navAbout: "About me",
    navSkills: "Skills",
    navPortfolio: "Portfolio",

    heroIam: "I am",
    heroJob: "FRONTEND DEVELOPER",
    heroButton: "Let’s talk!",

    skillsTitle: "My skills",
    skillsText1:
      "Show that you have used a variety of front-end technologies in your projects.",
    skillsHeadline: "Looking for",
    skillsSpan: "another skill?",
    skillsText2:
      "Reveal enthusiasm for learning new technologies and frameworks.",
    skillsButton: "Get in touch",

    joinTech: "Angular | TypeScript | HTML | CSS | Firebase",
    joinDescription:
      "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",

    polloTech: "JavaScript | HTML | CSS",
    polloDescription:
      "A simple Jump-and-Run game based on an object-oriented approach. Help El Pollo Loco to find coins and poison bottles to fight against the killer chicken.",

    liveTest: "Live test",
    github: "Github",

    contactTitle: "Contact",
    contactHeadline: "Got a problem to solve?",
    contactText1: "Encourage people to contact you.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    privacy:
      "I've read the privacy policy and agree to the processing of my data.",
    sendButton: "Send message :)",
    legalNotice: "Legal Notice",

    sending: "Message is being sent...",
    success: "Message sent successfully!",
    serverError: "Server error."
  },

  de: {
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navPortfolio: "Portfolio",

    heroIam: "Ich bin",
    heroJob: "FRONTEND ENTWICKLER",
    heroButton: "Schreib mir!",

    skillsTitle: "Meine Skills",
    skillsText1:
      "Ich habe mit verschiedenen Frontend-Technologien gearbeitet.",
    skillsHeadline: "Suchst du nach",
    skillsSpan: "einem weiteren Skill?",
    skillsText2:
      "Ich bin offen dafür, neue Technologien und Frameworks zu lernen.",
    skillsButton: "Kontakt aufnehmen",

    joinTech: "Angular | TypeScript | HTML | CSS | Firebase",
    joinDescription:
      "Task Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.",

    polloTech: "JavaScript | HTML | CSS",
    polloDescription:
      "Ein Jump-and-Run-Spiel auf Basis objektorientierter Programmierung. Hilf El Pollo Loco dabei, Münzen und Giftflaschen zu sammeln und gegen das Killer-Huhn zu kämpfen.",

    liveTest: "Live testen",
    github: "Github",

    contactTitle: "Kontakt",
    contactHeadline: "Hast du ein Problem zu lösen?",
    contactText1: "Kontaktiere mich.",
    namePlaceholder: "Dein Name",
    emailPlaceholder: "Deine E-Mail",
    messagePlaceholder: "Deine Nachricht",
    privacy:
      "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.",
    sendButton: "Nachricht senden :)",
    legalNotice: "Impressum",

    sending: "Nachricht wird gesendet...",
    success: "Nachricht erfolgreich gesendet!",
    serverError: "Serverfehler."
  }
};

// ================= LANGUAGE FUNCTION =================

function setLanguage(lang) {
  const t = translations[lang];

  if (!t) return;

  document.documentElement.lang = lang;

  // NAV
  const navLinks = document.querySelectorAll(".nav-list a");

  if (navLinks[0]) navLinks[0].textContent = t.navAbout;
  if (navLinks[1]) navLinks[1].textContent = t.navSkills;
  if (navLinks[2]) navLinks[2].textContent = t.navPortfolio;

  // HERO
  const heroIam = document.querySelector(".iam");
  const heroJob = document.querySelector(".hero-text h2");
  const heroButton = document.querySelector(".hero-text .cta");

  if (heroIam) heroIam.textContent = t.heroIam;
  if (heroJob) heroJob.textContent = t.heroJob;
  if (heroButton) heroButton.textContent = t.heroButton;

  // SKILLS
  const skillsTitle =
    document.querySelector(".skills-heading h2") ||
    document.querySelector(".skills-title-row h2");

  const skillsDescription = document.querySelector(".skills-description");
  const skillsHeadline = document.querySelector(".skills-question h3");
  const skillsLearning = document.querySelector(".skills-question p");
  const skillsButton =
    document.querySelector(".skills-btn") ||
    document.querySelector(".skills-cta");

  if (skillsTitle) skillsTitle.textContent = t.skillsTitle;

  if (skillsDescription) {
    skillsDescription.textContent = t.skillsText1;
  }

  if (skillsHeadline) {
    skillsHeadline.innerHTML = `${t.skillsHeadline} <span>${t.skillsSpan}</span>`;
  }

  if (skillsLearning) {
    skillsLearning.textContent = t.skillsText2;
  }

  if (skillsButton) {
    skillsButton.textContent = t.skillsButton;
  }

  // PORTFOLIO
  const projectTechs = document.querySelectorAll(".project-tech");
  const projectDescriptions = document.querySelectorAll(".project-description");

  if (projectTechs[0]) {
    projectTechs[0].textContent = t.joinTech;
  }

  if (projectDescriptions[0]) {
    projectDescriptions[0].textContent = t.joinDescription;
  }

  if (projectTechs[1]) {
    projectTechs[1].textContent = t.polloTech;
  }

  if (projectDescriptions[1]) {
    projectDescriptions[1].textContent = t.polloDescription;
  }

  // BUTTONS
  const liveButtons = document.querySelectorAll(".live-btn");
  const githubButtons = document.querySelectorAll(".github-btn");

  liveButtons.forEach((button) => {
    button.textContent = t.liveTest;
  });

  githubButtons.forEach((button) => {
    button.textContent = t.github;
  });

  // CONTACT
  const contactTitle =
    document.querySelector(".contact-header h2") ||
    document.querySelector(".contact-left h2");

  const contactHeadline = document.querySelector(".contact-left h3");
  const contactParagraph = document.querySelector(".contact-description");

  if (contactTitle) {
    contactTitle.textContent = t.contactTitle;
  }

  if (contactHeadline) {
    contactHeadline.textContent = t.contactHeadline;
  }

  if (contactParagraph) {
    contactParagraph.textContent = t.contactText1;
  }

  // PLACEHOLDERS
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  if (nameInput) nameInput.placeholder = t.namePlaceholder;
  if (emailInput) emailInput.placeholder = t.emailPlaceholder;
  if (messageInput) messageInput.placeholder = t.messagePlaceholder;

  // PRIVACY
  const privacyText = document.querySelector(".privacy-text");
if (privacyText) {
  if (lang === "de") {
    privacyText.innerHTML = `
      Ich habe die
      <a href="./datenschutz.html" class="privacy-link">Datenschutzerklärung</a>
      gelesen und stimme der Verarbeitung meiner Daten zu.
    `;
  } else {
    privacyText.innerHTML = `
      I've read the
      <a href="./datenschutz-en.html" class="privacy-link">privacy policy</a>
      and agree to the processing of my data as outlined.
    `;
  }
}
  // CONTACT BUTTON
  const contactButton = document.querySelector(".contact-btn");

  if (contactButton) {
    contactButton.textContent = t.sendButton;
  }

  // FOOTER
  const imprintLink =
    document.getElementById("imprintLink") ||
    document.querySelector(".footer-legal");

  if (imprintLink) {
    imprintLink.textContent = t.legalNotice;
  }

  // ACTIVE BUTTONS
  const btnDe = document.getElementById("btn-de");
  const btnEn = document.getElementById("btn-en");

  if (btnDe && btnEn) {
    btnDe.classList.toggle("active", lang === "de");
    btnEn.classList.toggle("active", lang === "en");
  }

  localStorage.setItem("language", lang);
}

// ================= BUTTON EVENTS =================

const btnDe = document.getElementById("btn-de");
const btnEn = document.getElementById("btn-en");

if (btnDe) {
  btnDe.addEventListener("click", () => {
    setLanguage("de");
  });
}

if (btnEn) {
  btnEn.addEventListener("click", () => {
    setLanguage("en");
  });
}

// ================= LOAD SAVED LANGUAGE =================

const savedLanguage = localStorage.getItem("language") || "en";

setLanguage(savedLanguage);

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const lang = localStorage.getItem("language") || "en";
    const t = translations[lang];

    const submitButton = contactForm.querySelector(".contact-btn");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = t.sending;
    }

    try {
      alert(t.success);
      contactForm.reset();
    } catch (error) {
      console.error(error);
      alert(t.serverError);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = t.sendButton;
      }
    }
  });
}

// ================= SCROLL TOP =================

const scrollTopBtn =
  document.getElementById("scrollTopBtn") ||
  document.querySelector(".scroll-top");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ================= RESIZE =================

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && burger && nav) {
    burger.classList.remove("open");
    nav.classList.remove("open");
    nav.classList.remove("active");
  }
});