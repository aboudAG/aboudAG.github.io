/* =========================================================
   TRADUCTION FR / EN
   Le français est lu directement dans index.html.
   Pour modifier l'anglais, change les textes du dictionnaire EN ci-dessous
   (la clé correspond à l'attribut data-i18n dans index.html).
   ========================================================= */
(function () {
  const EN = {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact me",
    "hero.status": "Available for a 6-month final-year internship from February 2027",
    "hero.hello": "Hi, I'm",
    "hero.tagline": "I design, secure and automate infrastructure, from Cisco configuration to DevSecOps pipelines and Kubernetes deployments.",
    "hero.cta": "View my projects",
    "hero.cv": "Download my resume",
    "hero.stat1": "published projects",
    "hero.stat2": "Fortinet certified",
    "hero.stat3": "in progress",
    "about.kicker": "01 — About",
    "about.title": "From network cable to Kubernetes cluster",
    "about.p1": "I'm a <strong>Master's student in Computer Science (RSA track)</strong> at Université Paris Cité, specialising in networking, system administration, Cloud and cybersecurity. <strong>Fortinet FCF</strong> certified, I'm currently preparing for the <strong>CCNA</strong>.",
    "about.p2": "My projects range from orchestrating microservices on Kubernetes to Machine Learning intrusion detection and securing CI/CD pipelines. My approach: automate what can be automated, build security in from the start, and document every decision.",
    "about.f1": "Master's in Computer Science (RSA) — Université Paris Cité, 2025 – 2027",
    "about.f2": "Fortinet Certified Fundamentals (FCF) · CCNA in progress",
    "about.f4": "Arabic · French · English",
    "skills.kicker": "03 — Skills",
    "skills.title": "My toolbox",
    "skills.net": "Networking",
    "skills.sec": "Cybersecurity",
    "skills.sys": "Systems & virtualisation",
    "skills.dev": "Development",
    "skills.data": "Data & AI",
    "b.cisco": "Cisco switches & routers (Catalyst)",
    "b.intervlan": "Inter-VLAN routing",
    "b.troubleshoot": "Network troubleshooting",
    "b.netsec": "Network security",
    "b.firewall": "Firewalls",
    "b.siem": "SIEM basics",
    "b.soc": "SOC basics",
    "b.pgmpy": "pgmpy (Bayesian networks)",
    "proj.kicker": "04 — Projects",
    "proj.title": "What I've built",
    "f.all": "All",
    "f.ia": "AI & Data",
    "p.personal": "Personal project",
    "p.pair": "Master's project · pair work",
    "p.academic": "Academic project",
    "p.ter": "Master's research project",
    "p1.t": "DevSecOps pipeline",
    "p1.d": "GitHub Actions CI/CD pipeline for a Flask API: linting and tests, code and secret scanning, then a non-root Docker image that is scanned and published to GHCR only on pushes to main.",
    "p2.t": "Inventory management — Kubernetes & gRPC",
    "p2.d": "Inventory management app built as Spring Boot microservices talking over gRPC, deployed on Minikube behind an Nginx Ingress, with persistent PostgreSQL, least-privilege RBAC and Kubernetes Secrets.",
    "p3.t": "Machine Learning intrusion detection",
    "p3.d": "Network intrusion detection on CIC-IDS2017, comparing Random Forest, SVM and a neural network. Random Forest reaches 99.76% accuracy with a 0.21% false-positive rate on 504,473 test flows.",
    "p4.t": "GPS spoofing detection on drones",
    "p4.d": "Simulation of a UAV (GPS, IMU, altimeter) under progressive, sudden and intermittent attacks. A Bayesian network estimates the probability of spoofing from the consistency between sensors.",
    "tag.bayes": "Bayesian network",
    "tag.uav": "UAV security",
    "p5.t": "AI-driven 5G optimisation",
    "p5.d": "Analysis of 14,456 5G flows across eMBB, mMTC and URLLC slices: anomaly detection, TCP latency prediction and QoS optimisation recommendations.",
    "p6.t": "Leave management",
    "p6.d": "Leave request app with a hierarchical approval workflow, organisational structures, annual balances, public holidays, role delegation, notifications and PDF generation.",
    "btn.code": "View code",
    "btn.pipeline": "View pipeline",
    "btn.demo": "Demo",
    "btn.live": "Live demo",
    "btn.results": "View results",
    "btn.allrepos": "All my GitHub repositories",
    "contact.kicker": "05 — Contact",
    "contact.title": "Let's work together",
    "contact.p": "An internship offer, a question about a project, or just want to talk? Write to me and I'll get back to you quickly.",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send message",
    "footer": "Designed and hand-coded.",
    "ph.name": "Your name",
    "ph.email": "you@email.com",
    "ph.message": "Your message...",
    "nav.path": "Background",
    "path.kicker": "02 — Background",
    "path.title": "Education & experience",
    "path.m.date": "2025 – 2027",
    "path.m.title": "Master's in Computer Science — Networks and Autonomous Systems (RSA)",
    "path.m.desc": "Networking, distributed systems and microservices, security, Cloud, Machine Learning and Business Intelligence. Looking for a 6-month final-year internship starting February 2027.",
    "path.e.date": "January – June 2024",
    "path.e.title": "Web Developer Intern",
    "path.e.place": "E.P.A.L. (Port of Algiers) · Algiers, Algeria",
    "path.e.desc": "Gathered user requirements and built a leave management web application, then handled testing and technical documentation.",
    "b.rest": "REST API",
    "p.epal": "Internship · E.P.A.L., 2024"
};

  // Phrases de l'effet "machine à écrire" du Hero
  const ROLES = {
    fr: ["Réseaux · Systèmes · Cloud · Cybersécurité", "kubectl apply -f infrastructure.yaml", "show ip ospf neighbor"],
    en: ["Networking · Systems · Cloud · Cybersecurity", "kubectl apply -f infrastructure.yaml", "show ip ospf neighbor"],
  };

  // Messages affichés par le script (formulaire)
  const MSG = {
    fr: {
      errName: "Merci d'indiquer votre nom.",
      errEmail: "Adresse e-mail invalide.",
      errMessage: "Votre message doit contenir au moins 10 caractères.",
      notConfigured: "Formulaire pas encore configuré : ajoutez l'ID Formspree dans index.html.",
      sending: "Envoi en cours…",
      sent: "Merci ! Votre message a bien été envoyé.",
      failed: "L'envoi a échoué. Réessayez ou écrivez-moi directement par e-mail.",
      send: "Envoyer le message",
      menu: "Ouvrir le menu",
      title: "Abdenour Agag — Réseaux, Systèmes, Cloud & Cybersécurité",
    },
    en: {
      errName: "Please enter your name.",
      errEmail: "Invalid email address.",
      errMessage: "Your message must be at least 10 characters long.",
      notConfigured: "Form not configured yet: add the Formspree ID in index.html.",
      sending: "Sending…",
      sent: "Thank you! Your message has been sent.",
      failed: "Sending failed. Please try again or email me directly.",
      send: "Send message",
      menu: "Open menu",
      title: "Abdenour Agag — Networking, Systems, Cloud & Cybersecurity",
    },
  };

  // Mémorise le texte français d'origine de chaque élément
  const textNodes = [...document.querySelectorAll("[data-i18n]")];
  const phNodes = [...document.querySelectorAll("[data-i18n-ph]")];
  textNodes.forEach((el) => (el.dataset.fr = el.innerHTML));
  phNodes.forEach((el) => (el.dataset.frPh = el.placeholder));

  const listeners = [];
  const I18N = {
    lang: "fr",
    t: (key) => MSG[I18N.lang][key],
    roles: () => ROLES[I18N.lang],
    onChange: (fn) => listeners.push(fn),
    set(lang) {
      I18N.lang = lang;
      const en = lang === "en";
      textNodes.forEach((el) => {
        const k = el.dataset.i18n;
        el.innerHTML = en && EN[k] ? EN[k] : el.dataset.fr;
      });
      phNodes.forEach((el) => {
        const k = el.dataset.i18nPh;
        el.placeholder = en && EN[k] ? EN[k] : el.dataset.frPh;
      });
      document.documentElement.lang = lang;
      document.title = MSG[lang].title;

      // Le bouton affiche la langue vers laquelle on peut basculer
      const label = document.getElementById("langLabel");
      const btn = document.getElementById("langToggle");
      if (label) label.textContent = en ? "FR" : "EN";
      if (btn) btn.setAttribute("aria-label", en ? "Passer en français" : "Switch to English");
      const menu = document.getElementById("navToggle");
      if (menu) menu.setAttribute("aria-label", MSG[lang].menu);

      try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* stockage indisponible */ }
      listeners.forEach((fn) => fn(lang));
    },
  };
  window.I18N = I18N;

  // Langue enregistrée lors d'une visite précédente (français par défaut)
  let saved = null;
  try { saved = localStorage.getItem("portfolio-lang"); } catch (e) { /* stockage indisponible */ }
  if (saved === "en") I18N.set("en");

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", () => I18N.set(I18N.lang === "fr" ? "en" : "fr"));
})();
