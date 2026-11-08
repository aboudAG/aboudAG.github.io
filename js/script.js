/* =========================================================
   PORTFOLIO — Interactions
   ========================================================= */
document.documentElement.classList.add("js-ready"); // active les animations d'apparition seulement si le JS tourne

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  /* ---------- 1. Navbar : fond flouté au défilement ---------- */
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Menu burger (mobile) ---------- */
  const closeMenu = () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
    navbar.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navbar.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  // Ferme le menu quand on clique sur un lien
  links.forEach((link) => link.addEventListener("click", closeMenu));

  /* ---------- 3. Lien actif selon la section visible ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- 4. Apparition des éléments au défilement ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // une seule fois
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.1}s`; // léger décalage en cascade
    revealObserver.observe(el);
  });

  /* ---------- 5. Effet "machine à écrire" dans le Hero ---------- */
  // Les phrases sont dans js/i18n.js (une liste par langue)
  const getRoles = () => (window.I18N ? window.I18N.roles() : ["Réseaux · Systèmes · Cloud · Cybersécurité"]);
  const typed = document.getElementById("typed");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typed && !reduceMotion) {
    let roleIndex = 0;
    let charIndex = getRoles()[0].length;
    let deleting = true;
    typed.textContent = getRoles()[0];

    // Changement de langue : on repart de la première phrase
    if (window.I18N) window.I18N.onChange(() => {
      roleIndex = 0;
      charIndex = getRoles()[0].length;
      deleting = true;
      typed.textContent = getRoles()[0];
    });

    const type = () => {
      const roles = getRoles();
      roleIndex %= roles.length;
      const current = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      typed.textContent = current.slice(0, charIndex);

      let delay = deleting ? 35 : 70;
      if (!deleting && charIndex === current.length) {
        delay = 2200; // pause sur la phrase complète
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
      }
      setTimeout(type, delay);
    };
    setTimeout(type, 2500);
  } else if (typed) {
    typed.textContent = getRoles()[0];
    if (window.I18N) window.I18N.onChange(() => (typed.textContent = getRoles()[0]));
  }

  /* ---------- 6. Formulaire de contact : validation + envoi ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const t = (key) => (window.I18N ? window.I18N.t(key) : key);

  const setError = (input, message) => {
    const field = input.closest(".field");
    field.classList.toggle("invalid", Boolean(message));
    field.querySelector(".error-msg").textContent = message;
  };

  const validate = () => {
    let ok = true;
    const { name, email, message } = form.elements;

    if (name.value.trim().length < 2) { setError(name, t("errName")); ok = false; }
    else setError(name, "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, t("errEmail")); ok = false; }
    else setError(email, "");

    if (message.value.trim().length < 10) { setError(message, t("errMessage")); ok = false; }
    else setError(message, "");

    return ok;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";
    if (!validate()) return;

    // Tant que l'ID Formspree n'est pas renseigné, on prévient au lieu d'envoyer
    if (form.action.includes("TON_ID_FORMSPREE")) {
      status.classList.add("error");
      status.textContent = t("notConfigured");
      return;
    }

    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.innerHTML = `${t("sending")} <i class="fa-solid fa-spinner fa-spin"></i>`;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      status.classList.add("success");
      status.textContent = t("sent");
    } catch {
      status.classList.add("error");
      status.textContent = t("failed");
    } finally {
      button.disabled = false;
      button.innerHTML = `<span data-i18n="form.send">${t("send")}</span> <i class="fa-solid fa-paper-plane"></i>`;
    }
  });

  /* ---------- 6 bis. Filtres des projets ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
      cards.forEach((card) => {
        const match = filter === "tous" || card.dataset.category.split(" ").includes(filter);
        card.classList.toggle("hidden", !match);
        if (match) card.classList.add("visible"); // reste visible même si pas encore animée
      });
    });
  });

  /* ---------- 7. Année automatique dans le pied de page ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
