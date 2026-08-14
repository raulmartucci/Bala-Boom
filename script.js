document.addEventListener("DOMContentLoaded", () => {

  const LINK_DO_JOGO = "#";

  // adicionar mp4 aqui
  const VIDEO_GAMEPLAY_SRC = "assets/videogameplay.mp4";

  const VIDEO_THUMB_SRC = "";

  const EQUIPE = [
    { nome: "Ana Julia Julião", funcao: "Arte e comunicação", desc: "1º JOD", cor: "pink", instagram: "theylove_anajuu" },
    { nome: "Sophia Guidi", funcao: "Game Artist", desc: "2º JOD", cor: "purple", instagram: "s_guidz" },
    { nome: "Nicolas Henrique", funcao: "Game Artist", desc: "2º JOD", cor: "blue", instagram: "" },
    { nome: "Matheus", funcao: "Programação", desc: "3º JOD", cor: "green", instagram: "o_thawnee" },
    { nome: "Josué", funcao: "Programação", desc: "3º JOD", cor: "green", instagram: "" },
    { nome: "Ana Beatriz C.", funcao: "Arte e comunicação", desc: "1º JOD", cor: "pink", instagram: "beatrizlwy" },
    { nome: "Raul Galdino", funcao: "Desenvolvedor Web", desc: "3º DES", cor: "gold", instagram: "raulmartucci28" },
    { nome: "Pedro Augusto", funcao: "Desenvolvedor Web", desc: "3º DES", cor: "gold", instagram: "aug.pedro_" },
  ];

  const CORES = {
    purple: { accent: "#7C4DFF", deep: "#5B2FD9" },
    green:  { accent: "#35C46A", deep: "#219150" },
    pink:   { accent: "#FF5FA2", deep: "#E23D82" },
    gold:   { accent: "#FFC93C", deep: "#8A5F00" },
    blue:   { accent: "#3E8EF5", deep: "#1E68D6" },
  };

  document.querySelectorAll("#jogarBtn, .nav__link--cta").forEach(el => {
    el.setAttribute("href", LINK_DO_JOGO);
    if (LINK_DO_JOGO.startsWith("http")) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      burger.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  const teamGrid = document.getElementById("teamGrid");
  const footerCredits = document.getElementById("footerCredits");

  if (teamGrid) {
    EQUIPE.forEach(pessoa => {
      const cor = CORES[pessoa.cor] || CORES.purple;
      const iniciais = pessoa.nome
        .split(" ")
        .map(p => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      const card = document.createElement("article");
      card.className = "team-card reveal";
      card.style.setProperty("--accent", cor.accent);
      card.style.setProperty("--accent-deep", cor.deep);

      card.innerHTML = `
        <div class="team-card__avatar">${iniciais}</div>
        <h3 class="team-card__name">${pessoa.nome}</h3>
        <p class="team-card__role">${pessoa.funcao}</p>
        <p class="team-card__desc">${pessoa.desc}</p>
      `;
      teamGrid.appendChild(card);

      if (footerCredits) {
        const li = document.createElement("li");
        const handle = (pessoa.instagram || "").trim().replace(/^@/, "");

        if (handle) {
          const link = document.createElement("a");
          link.className = "footer__credit-link";
          link.href = `https://instagram.com/${handle}`;
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = `${pessoa.nome} — ${pessoa.funcao}`;
          li.appendChild(link);
        } else {
          li.textContent = `${pessoa.nome} — ${pessoa.funcao}`;
        }

        footerCredits.appendChild(li);
      }
    });

    if ("IntersectionObserver" in window) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      teamGrid.querySelectorAll(".reveal").forEach(el => cardObserver.observe(el));
    } else {
      teamGrid.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    }
  }

  const playBtn = document.getElementById("playBtn");
  const playerThumb = document.getElementById("playerThumb");
  const video = document.getElementById("gameVideo");
  const playerWrap = playerThumb ? playerThumb.closest(".player") : null;
  const thumbBg = document.querySelector(".player__thumb-bg");

  if (thumbBg && VIDEO_THUMB_SRC) {
    thumbBg.style.backgroundImage = `url("${VIDEO_THUMB_SRC}")`;
    thumbBg.style.backgroundSize = "cover";
    thumbBg.style.backgroundPosition = "center";
  }

  const isEmbedLink = /youtube\.com|youtu\.be|vimeo\.com/.test(VIDEO_GAMEPLAY_SRC);

  if (playBtn && video && playerWrap) {
    playBtn.addEventListener("click", () => {
      if (!VIDEO_GAMEPLAY_SRC) {
        playBtn.animate(
          [{ transform: "translate(-50%, -50%) scale(1)" }, { transform: "translate(-50%, -50%) scale(0.9)" }, { transform: "translate(-50%, -50%) scale(1)" }],
          { duration: 260, easing: "ease-out" }
        );
        return;
      }

      if (isEmbedLink) {
        const iframe = document.createElement("iframe");
        iframe.className = "player__video player__video--embed";
        iframe.src = VIDEO_GAMEPLAY_SRC + (VIDEO_GAMEPLAY_SRC.includes("?") ? "&" : "?") + "autoplay=1";
        iframe.allow = "autoplay; fullscreen; picture-in-picture";
        iframe.allowFullscreen = true;
        video.replaceWith(iframe);
      } else {
        video.querySelector("source").setAttribute("src", VIDEO_GAMEPLAY_SRC);
        video.load();
        video.play().catch(() => {});
      }

      playerWrap.classList.add("is-playing");
    });
  }

  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 12 ? "0 8px 24px rgba(42,33,54,0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

});
                          
