/* =========================================================
   BALABOOM — script.js
   Menu responsivo, scroll reveal, time e player de vídeo
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Configuração central (edite aqui) ---------- */

  // Link do jogo hospedado (Itch.io, servidor próprio, etc.)
  const LINK_DO_JOGO = "#"; // <-- substitua pelo link real do jogo

  // Vídeo de gameplay (mp4 direto ou embed). Deixe vazio para manter só a thumbnail.
  const VIDEO_GAMEPLAY_SRC = ""; // <-- ex: "assets/gameplay.mp4"

  // Os 8 integrantes do Grupo 19
  const EQUIPE = [
    { nome: "Ana Julia Julião", funcao: "Arte e comunicação", desc: "1º JOD", cor: "pink" },
    { nome: "Sophia Guidi", funcao: "Game Artist", desc: "2º JOD", cor: "purple" },
    { nome: "Nicolas Henrique", funcao: "Game Artist", desc: "2º JOD", cor: "blue" },
    { nome: "Matheus", funcao: "Programação", desc: "3º JOD", cor: "green" },
    { nome: "Josué", funcao: "Programação", desc: "3º JOD", cor: "green" },
    { nome: "Ana Beatriz C.", funcao: "Arte e comunicação", desc: "1º JOD", cor: "pink" },
    { nome: "Raul Galdino", funcao: "Desenvolvedor Web", desc: "3º DES", cor: "gold" },
    { nome: "Pedro Augusto", funcao: "Desenvolvedor Web", desc: "3º DES", cor: "gold" },
  ];

  const CORES = {
    purple: { accent: "#7C4DFF", deep: "#5B2FD9" },
    green:  { accent: "#35C46A", deep: "#219150" },
    pink:   { accent: "#FF5FA2", deep: "#E23D82" },
    gold:   { accent: "#FFC93C", deep: "#8A5F00" },
    blue:   { accent: "#3E8EF5", deep: "#1E68D6" },
  };

  /* ---------- Links do jogo ---------- */
  document.querySelectorAll("#jogarBtn, .nav__link--cta").forEach(el => {
    el.setAttribute("href", LINK_DO_JOGO);
    if (LINK_DO_JOGO.startsWith("http")) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  /* ---------- Menu responsivo ---------- */
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

  /* ---------- Scroll reveal ---------- */
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

  /* ---------- Monta a seção "Nosso Time" ---------- */
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
        li.textContent = `${pessoa.nome} — ${pessoa.funcao}`;
        footerCredits.appendChild(li);
      }
    });

    // Observa os cards recém-criados para o efeito de reveal
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

  /* ---------- Player de vídeo (thumbnail -> vídeo) ---------- */
  const playBtn = document.getElementById("playBtn");
  const playerThumb = document.getElementById("playerThumb");
  const video = document.getElementById("gameVideo");
  const playerWrap = playerThumb ? playerThumb.closest(".player") : null;

  if (playBtn && video && playerWrap) {
    playBtn.addEventListener("click", () => {
      if (VIDEO_GAMEPLAY_SRC) {
        video.querySelector("source").setAttribute("src", VIDEO_GAMEPLAY_SRC);
        video.load();
        playerWrap.classList.add("is-playing");
        video.play().catch(() => {});
      } else {
        // Sem vídeo configurado ainda: apenas um retorno visual amigável.
        playBtn.animate(
          [{ transform: "translate(-50%, -50%) scale(1)" }, { transform: "translate(-50%, -50%) scale(0.9)" }, { transform: "translate(-50%, -50%) scale(1)" }],
          { duration: 260, easing: "ease-out" }
        );
      }
    });
  }

  /* ---------- Header: leve sombra ao rolar ---------- */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 12 ? "0 8px 24px rgba(42,33,54,0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

});
