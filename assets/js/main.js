const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const btnDe = document.getElementById("btn-de");
const btnEn = document.getElementById("btn-en");
const contactForm = document.getElementById("contact-form");

const translations = {
  en: {
    navAbout: "About me",
    navSkills: "Skills",
    navPortfolio: "Portfolio",

    heroIam: "I am",
    heroJob: "FRONTEND DEVELOPER",
    heroButton: "Let’s talk!",

    aboutTitle: "About me",
    aboutIntro:
      "Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills?",
    aboutLocation:
      "Where are you located? Are you open to different ways of working, such as working remotely or even relocating?",
    aboutLearning:
      "Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?",
    aboutProblem:
      "A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and collaboration.",

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
    contactText1:
      "Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.",
    contactHighlight: "Need a Frontend developer?",
    contactHighlightSpan: "Contact me!",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    privacyStart: "I've read the",
    privacyLink: "privacy policy",
    privacyEnd: "and agree to the processing of my data as outlined.",
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

    aboutTitle: "Über mich",
    aboutIntro:
      "Schreibe einige Informationen über dich, die IT-bezogen sind. Warum bist du leidenschaftlich am Programmieren interessiert? Was inspiriert dich, deine Programmierfähigkeiten zu verbessern?",
    aboutLocation:
      "Wo befindest du dich? Bist du offen für verschiedene Arbeitsweisen, wie Remote-Arbeit oder sogar einen Umzug?",
    aboutLearning:
      "Zeige, dass du offen bist. Begeisterst du dich dafür, neue Technologien zu lernen und deine Fähigkeiten kontinuierlich zu verbessern?",
    aboutProblem:
      "Eine kurze Beschreibung deines Problemlösungsansatzes. Lernst du aus jeder Herausforderung, während du nach der effizientesten oder elegantesten Lösung suchst? Du kannst Begriffe wie analytisches Denken, Kreativität, Ausdauer und Zusammenarbeit einbauen.",

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
    contactText1:
      "Kontaktiere mich und beschreibe, welche Rolle du suchst. Ich zeige dir, wie ich durch meine Arbeit Mehrwert für dein Projekt schaffen kann.",
    contactHighlight: "Brauchst du einen Frontend Entwickler?",
    contactHighlightSpan: "Kontaktiere mich!",
    namePlaceholder: "Dein Name",
    emailPlaceholder: "Deine E-Mail",
    messagePlaceholder: "Deine Nachricht",
    privacyStart: "Ich habe die",
    privacyLink: "Datenschutzerklärung",
    privacyEnd: "gelesen und stimme der Verarbeitung meiner Daten zu.",
    sendButton: "Nachricht senden :)",
    legalNotice: "Impressum",

    sending: "Nachricht wird gesendet...",
    success: "Nachricht erfolgreich gesendet!",
    serverError: "Serverfehler."
  }
};

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setPlaceholder(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = text;
}

function translateNav(t) {
  const links = document.querySelectorAll(".nav-list a");
  if (links[0]) links[0].textContent = t.navAbout;
  if (links[1]) links[1].textContent = t.navSkills;
  if (links[2]) links[2].textContent = t.navPortfolio;
}

function translateHero(t) {
  setText(".iam", t.heroIam);
  setText(".hero-text h2", t.heroJob);
  setText(".hero-text .cta", t.heroButton);
}

function translateAbout(t) {
  const aboutInfos = document.querySelectorAll(".about-info p");
  setText(".about-text h2", t.aboutTitle);
  setText(".about-intro", t.aboutIntro);
  if (aboutInfos[0]) aboutInfos[0].textContent = t.aboutLocation;
  if (aboutInfos[1]) aboutInfos[1].textContent = t.aboutLearning;
  if (aboutInfos[2]) aboutInfos[2].textContent = t.aboutProblem;
}

function translateSkills(t) {
  setText(".skills-heading h2", t.skillsTitle);
  setText(".skills-description", t.skillsText1);
  setText(".skills-question p", t.skillsText2);
  setText(".skills-btn", t.skillsButton);
  setSkillsHeadline(t);
}

function setSkillsHeadline(t) {
  const headline = document.querySelector(".skills-question h3");
  if (!headline) return;
  headline.innerHTML = `${t.skillsHeadline} <span>${t.skillsSpan}</span>`;
}

function translatePortfolio(t) {
  const techs = document.querySelectorAll(".project-tech");
  const descriptions = document.querySelectorAll(".project-description");
  if (techs[0]) techs[0].textContent = t.joinTech;
  if (techs[1]) techs[1].textContent = t.polloTech;
  if (descriptions[0]) descriptions[0].textContent = t.joinDescription;
  if (descriptions[1]) descriptions[1].textContent = t.polloDescription;
}

function translateProjectButtons(t) {
  document.querySelectorAll(".live-btn").forEach((btn) => {
    btn.textContent = t.liveTest;
  });
  document.querySelectorAll(".github-btn").forEach((btn) => {
    btn.textContent = t.github;
  });
}

function translateContact(t, lang) {
  setText(".contact-left h2", t.contactTitle);
  setText(".contact-left h3", t.contactHeadline);
  setText(".contact-description", t.contactText1);
  translateContactHighlight(t);
  translatePrivacy(t, lang);
}

function translateContactHighlight(t) {
  const element = document.querySelector(".contact-highlight");
  if (!element) return;
  element.innerHTML = `${t.contactHighlight} <span>${t.contactHighlightSpan}</span>`;
}

function translatePlaceholders(t) {
  setPlaceholder('input[name="name"]', t.namePlaceholder);
  setPlaceholder('input[name="email"]', t.emailPlaceholder);
  setPlaceholder('textarea[name="message"]', t.messagePlaceholder);
}

function translatePrivacy(t, lang) {
  const privacyText = document.querySelector(".privacy-text");
  if (!privacyText) return;
  const href = lang === "de" ? "./datenschutz.html" : "./datenschutz-en.html";
  privacyText.innerHTML = `${t.privacyStart} <a href="${href}" class="privacy-link">${t.privacyLink}</a> ${t.privacyEnd}`;
}

function translateFooter(t, lang) {
  const footerLegal = document.querySelector(".footer-legal");
  if (!footerLegal) return;
  footerLegal.textContent = t.legalNotice;
  footerLegal.href = lang === "de" ? "./impressum.html" : "./impressum-en.html";
}

function setActiveLanguageButton(lang) {
  if (!btnDe || !btnEn) return;
  btnDe.classList.toggle("active", lang === "de");
  btnEn.classList.toggle("active", lang === "en");
}

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  translatePage(t, lang);
  localStorage.setItem("language", lang);
}

function translatePage(t, lang) {
  translateNav(t);
  translateHero(t);
  translateAbout(t);
  translateSkills(t);
  translatePortfolio(t);
  translateProjectButtons(t);
  translateContact(t, lang);
  translatePlaceholders(t);
  setText(".contact-btn", t.sendButton);
  translateFooter(t, lang);
  setActiveLanguageButton(lang);
}

function toggleMenu() {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  nav.classList.toggle("active");
}

function closeMenu() {
  burger.classList.remove("open");
  nav.classList.remove("open");
  nav.classList.remove("active");
}

function initBurgerMenu() {
  if (!burger || !nav) return;
  burger.addEventListener("click", toggleMenu);
  nav.querySelectorAll("a").forEach(addCloseEvent);
}

function addCloseEvent(link) {
  link.addEventListener("click", closeMenu);
}

function initLanguageButtons() {
  if (btnDe) btnDe.addEventListener("click", () => setLanguage("de"));
  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));
}

function getCurrentLanguage() {
  return localStorage.getItem("language") || "en";
}

function showToast(message) {
  const toast = createToast(message);
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3000);
}

function createToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  return toast;
}

function setSubmitState(button, text, disabled) {
  if (!button) return;
  button.disabled = disabled;
  button.textContent = text;
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const lang = getCurrentLanguage();
  const t = translations[lang];
  const button = contactForm.querySelector(".contact-btn");
  setSubmitState(button, t.sending, true);
  await fakeSubmit();
  contactForm.reset();
  showToast(t.success);
  setSubmitState(button, t.sendButton, false);
}

function fakeSubmit() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 500);
  });
}

function initContactForm() {
  if (!contactForm) return;
  contactForm.addEventListener("submit", handleFormSubmit);
}

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initScrollTop() {
  const button = document.querySelector(".go-up-button");
  if (button) button.addEventListener("click", scrollToTop);
}

function closeMenuOnDesktop() {
  if (window.innerWidth > 768 && burger && nav) closeMenu();
}

function initResizeHandler() {
  window.addEventListener("resize", closeMenuOnDesktop);
}

function initPage() {
  initBurgerMenu();
  initLanguageButtons();
  initContactForm();
  initScrollTop();
  initResizeHandler();
  setLanguage(getCurrentLanguage());
}

initPage();