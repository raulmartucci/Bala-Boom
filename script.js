:root{
  --purple: #7C4DFF;
  --purple-deep: #5B2FD9;
  --green: #35C46A;
  --green-deep: #219150;
  --pink: #FF5FA2;
  --pink-deep: #E23D82;
  --gold: #FFC93C;
  --gold-deep: #F2A400;
  --blue: #3E8EF5;
  --blue-deep: #1E68D6;

  --paper: #FFFDF7;
  --paper-dim: #FBF6EC;
  --ink: #2A2136;
  --ink-soft: #5B5468;
  --line: #EDE6D8;

  --font-display: "Baloo 2", ui-rounded, "Segoe UI", sans-serif;
  --font-body: "Nunito Sans", "Segoe UI", sans-serif;

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --shadow-soft: 0 12px 30px rgba(42, 33, 54, 0.08);
  --shadow-strong: 0 20px 45px rgba(42, 33, 54, 0.16);
}

*, *::before, *::after{ box-sizing: border-box; }

html{
  scroll-behavior: smooth;
}

body{
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img, svg{ display:block; max-width: 100%; }

a{ color: inherit; text-decoration: none; }

h1, h2, h3{
  font-family: var(--font-display);
  margin: 0;
  color: var(--ink);
}

p{ margin: 0; }

ul{ list-style: none; margin: 0; padding: 0; }

::selection{
  background: var(--gold);
  color: var(--ink);
}

.eyebrow{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.eyebrow::before{
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}
.eyebrow--pink{ background: rgba(255, 95, 162, 0.12); color: var(--pink-deep); }
.eyebrow--blue{ background: rgba(62, 142, 245, 0.12); color: var(--blue-deep); }
.eyebrow--purple{ background: rgba(124, 77, 255, 0.12); color: var(--purple-deep); }
.eyebrow--yellow{ background: rgba(255, 201, 60, 0.18); color: #8A5F00; }

.section-title{
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 18px;
}
.section-title--center{ text-align: center; }

.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  padding: 15px 30px;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease, border-color .25s ease;
  white-space: nowrap;
}
.btn--primary{
  background: linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%);
  color: #fff;
  box-shadow: 0 10px 24px rgba(124, 77, 255, 0.35);
}
.btn--primary:hover{
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(124, 77, 255, 0.45);
}
.btn--ghost{
  background: transparent;
  color: var(--purple-deep);
  border-color: var(--purple);
}
.btn--ghost:hover{
  background: var(--purple);
  color: #fff;
  transform: translateY(-3px);
}
.btn--big{
  font-size: 1.15rem;
  padding: 20px 46px;
  background: linear-gradient(135deg, var(--gold) 0%, var(--pink) 55%, var(--purple) 100%);
  color: #fff;
  box-shadow: 0 16px 34px rgba(255, 95, 162, 0.4);
}
.btn--big:hover{
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 22px 44px rgba(255, 95, 162, 0.5);
}
.btn:focus-visible{
  outline: 3px solid var(--blue);
  outline-offset: 3px;
}

.reveal{
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s ease, transform .7s ease;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce){
  *{ animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
  .reveal{ opacity: 1; transform: none; }
}

.topbar-strip{
  height: 6px;
  width: 100%;
  background: linear-gradient(90deg, var(--gold), var(--pink), var(--purple), var(--blue), var(--green));
  position: sticky;
  top: 0;
  z-index: 60;
}

.nav{
  position: sticky;
  top: 6px;
  z-index: 50;
  background: rgba(255, 253, 247, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.nav__inner{
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.nav__brand{
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--purple-deep);
}
.nav__brand-mark{
  width: 30px;
  height: auto;
}
.nav__links{
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav__link{
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink-soft);
  padding: 9px 16px;
  border-radius: 999px;
  transition: color .2s ease, background .2s ease;
  position: relative;
}
.nav__link:hover{
  color: var(--purple-deep);
  background: rgba(124, 77, 255, 0.08);
}
.nav__link--cta{
  background: var(--ink);
  color: #fff;
  padding: 9px 22px;
}
.nav__link--cta:hover{
  background: var(--purple-deep);
  color: #fff;
}
.nav__burger{
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
}
.nav__burger span{
  height: 3px;
  border-radius: 3px;
  background: var(--ink);
  transition: transform .3s ease, opacity .3s ease;
}
.nav__burger.is-open span:nth-child(1){ transform: translateY(8px) rotate(45deg); }
.nav__burger.is-open span:nth-child(2){ opacity: 0; }
.nav__burger.is-open span:nth-child(3){ transform: translateY(-8px) rotate(-45deg); }

.hero{
  position: relative;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 90px 24px 60px;
  overflow: hidden;
}

.hero__blob{
  position: absolute;
  border-radius: 50% 45% 55% 50% / 50% 55% 45% 50%;
  filter: blur(2px);
  opacity: 0.55;
  z-index: 0;
}
.hero__blob--yellow{
  width: 340px; height: 340px;
  top: -110px; left: -120px;
  background: radial-gradient(circle at 35% 30%, var(--gold), transparent 70%);
}
.hero__blob--pink{
  width: 380px; height: 380px;
  top: -90px; right: -140px;
  background: radial-gradient(circle at 60% 40%, var(--pink), transparent 70%);
}
.hero__blob--purple{
  width: 300px; height: 300px;
  bottom: -120px; left: -100px;
  background: radial-gradient(circle at 40% 60%, var(--purple), transparent 70%);
}
.hero__blob--green{
  width: 320px; height: 320px;
  bottom: -130px; right: -110px;
  background: radial-gradient(circle at 55% 55%, var(--green), transparent 70%);
}

.hero__content{
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 760px;
}

.hero__logo{
  width: min(88vw, 480px);
  height: auto;
  margin-bottom: 26px;
  filter: drop-shadow(0 16px 30px rgba(42,33,54,0.14));
}

.hero__tagline{
  font-size: 1.15rem;
  color: var(--ink-soft);
  margin-bottom: 34px;
}
.hero__tagline strong{ color: var(--purple-deep); }

.hero__actions{
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.hero__scroll{
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 42px;
  border: 2px solid var(--ink-soft);
  border-radius: 999px;
  z-index: 2;
}
.hero__scroll span{
  position: absolute;
  top: 8px;
  left: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--purple);
  transform: translateX(-50%);
  animation: scrollDot 1.8s ease infinite;
}
@keyframes scrollDot{
  0%{ opacity: 1; top: 8px; }
  70%{ opacity: 0; top: 24px; }
  100%{ opacity: 0; top: 8px; }
}

.sobre{
  padding: 110px 24px;
  background: var(--paper);
}
.sobre__inner{
  max-width: 760px;
  margin: 0 auto;
}
.sobre__lead{
  font-size: 1.08rem;
  color: var(--ink-soft);
  margin-bottom: 20px;
}
.sobre__lead:last-of-type{ margin-bottom: 34px; }

.sobre__subtitle{
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 16px;
}

.pill-list{
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.pill-list__item{
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.98rem;
  padding: 15px 22px;
  border-radius: 999px;
  color: var(--ink);
  letter-spacing: 0.01em;
}
.pill-list__item--pink{ background: var(--pink); color: #fff; }
.pill-list__item--blue{ background: var(--blue); color: #fff; }
.pill-list__item--gold{ background: var(--gold); color: #5C3E00; }

.mecanicas{
  padding: 100px 24px;
  background: var(--paper);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.mecanicas__inner{
  max-width: 880px;
  margin: 0 auto;
}
.mecanicas .section-title{ margin-bottom: 44px; }

.mech-list{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
.mech-list__item{
  display: flex;
  align-items: baseline;
  gap: 22px;
  padding: 18px 4px;
  border-bottom: 1px solid var(--line);
}
.mech-list__item:last-child{ border-bottom: none; }
.mech-list__key{
  flex-shrink: 0;
  width: 84px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--purple-deep);
}
.mech-list__item p{
  color: var(--ink-soft);
  font-size: 0.98rem;
}
.mech-list__item p strong{ color: var(--ink); }
.mech-list__item:nth-child(6n+1) .mech-list__key{ color: var(--pink-deep); }
.mech-list__item:nth-child(6n+2) .mech-list__key{ color: var(--blue-deep); }
.mech-list__item:nth-child(6n+3) .mech-list__key{ color: var(--green-deep); }
.mech-list__item:nth-child(6n+4) .mech-list__key{ color: var(--gold-deep); }
.mech-list__item:nth-child(6n+5) .mech-list__key{ color: var(--purple-deep); }
.mech-list__item:nth-child(6n+6) .mech-list__key{ color: var(--pink-deep); }

.gameplay{
  padding: 110px 24px;
  background: var(--paper-dim);
  text-align: center;
}
.gameplay__inner{ max-width: 900px; margin: 0 auto; }
.gameplay__sub{
  color: var(--ink-soft);
  margin-bottom: 50px;
  font-size: 1.05rem;
}

.player{
  position: relative;
  padding: 26px;
}
.player__dot{
  position: absolute;
  border-radius: 50%;
  opacity: 0.85;
}
.player__dot--yellow{ width: 26px; height: 26px; background: var(--gold); top: 6px; left: 8%; }
.player__dot--pink{ width: 18px; height: 18px; background: var(--pink); top: 30px; right: 10%; }
.player__dot--green{ width: 22px; height: 22px; background: var(--green); bottom: 10px; left: 14%; }
.player__dot--purple{ width: 30px; height: 30px; background: var(--purple); bottom: -6px; right: 6%; }

.player__frame{
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-strong);
  border: 5px solid #fff;
  outline: 3px solid var(--line);
}
.player__thumb{
  position: relative;
  aspect-ratio: 16/9;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 22px;
  cursor: pointer;
}
.player__thumb-bg{
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 45%),
    linear-gradient(135deg, var(--purple) 0%, var(--pink) 55%, var(--gold) 100%);
}
.player__caption{
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-weight: 700;
  color: #fff;
  font-size: 0.95rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.25);
}
.player__play{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 78px;
  height: 78px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.92);
  color: var(--purple-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  transition: transform .25s ease, background .25s ease;
}
.player__play:hover{
  transform: translate(-50%, -50%) scale(1.08);
  background: #fff;
}
.player__play svg{ margin-left: 4px; }

.player__video{
  display: none;
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border: none;
}
.player.is-playing .player__thumb{ display: none; }
.player.is-playing .player__video{ display: block; }

.equipe{
  padding: 110px 24px;
  background: var(--paper);
  text-align: center;
}
.equipe__inner{ max-width: 1180px; margin: 0 auto; }
.equipe__sub{
  color: var(--ink-soft);
  margin-bottom: 54px;
  font-size: 1.05rem;
}

.team-grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  text-align: left;
}
.team-card{
  position: relative;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 26px 22px 24px;
  box-shadow: var(--shadow-soft);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  overflow: hidden;
}
.team-card::before{
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 5px;
  background: var(--accent, var(--purple));
}
.team-card:hover{
  transform: translateY(-8px) scale(1.03);
  box-shadow: var(--shadow-strong);
  border-color: transparent;
  z-index: 3;
}
.team-card__avatar{
  width: 66px;
  height: 66px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  background: var(--accent, var(--purple));
  margin-bottom: 16px;
}
.team-card__name{
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 3px;
}
.team-card__role{
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent-deep, var(--purple-deep));
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}
.team-card__desc{
  font-size: 0.88rem;
  color: var(--ink-soft);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height .35s ease, opacity .35s ease, margin-top .35s ease;
}
.team-card:hover .team-card__desc{
  max-height: 120px;
  opacity: 1;
  margin-top: 4px;
}

.jogar{
  position: relative;
  padding: 130px 24px;
  background: linear-gradient(160deg, #F4EEFF 0%, #FFF3F8 55%, #FFF9E8 100%);
  text-align: center;
  overflow: hidden;
}
.jogar__blob{
  position: absolute;
  border-radius: 50%;
  filter: blur(6px);
  opacity: 0.5;
}
.jogar__blob--a{
  width: 420px; height: 420px;
  background: radial-gradient(circle, var(--purple), transparent 70%);
  top: -160px; right: -140px;
}
.jogar__blob--b{
  width: 380px; height: 380px;
  background: radial-gradient(circle, var(--green), transparent 70%);
  bottom: -160px; left: -120px;
}
.jogar__inner{
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 0 auto;
}
.jogar__title{ margin-bottom: 18px; }
.jogar__sub{
  color: var(--ink-soft);
  font-size: 1.08rem;
  margin-bottom: 40px;
}
.jogar__hint{
  margin-top: 18px;
  font-size: 0.85rem;
  color: var(--ink-soft);
}

.footer{
  background: var(--ink);
  color: rgba(255,255,255,0.82);
  padding: 64px 24px 26px;
}
.footer__inner{
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.footer__brand{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer__logo-mark{
  width: 160px;
  height: auto;
  display: block;
  margin: 0 auto;
  padding: 14px 20px;
  border-radius: var(--radius-md);
  background: rgba(255, 253, 247, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 253, 247, 0.1);
}
.footer__brand p{
  margin-top: 12px;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
}
.footer__ig{
  display: inline-block;
  margin-top: 8px;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--gold);
  transition: color .2s ease;
}
.footer__ig:hover{ color: var(--pink); }
.footer__nav{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__nav a{
  font-size: 0.92rem;
  color: rgba(255,255,255,0.75);
  transition: color .2s ease;
  width: fit-content;
}
.footer__nav a:hover{ color: var(--gold); }
.footer__credits p{
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.55);
  margin-bottom: 10px;
}
.footer__credits li{
  font-size: 0.88rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.9;
}
.footer__credit-link{
  color: inherit;
  transition: color .2s ease;
}
.footer__credit-link:hover{
  color: var(--gold);
}
.footer__bottom{
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 22px;
  text-align: center;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
}

@media (max-width: 980px){
  .team-grid{ grid-template-columns: repeat(2, 1fr); }
  .footer__inner{ grid-template-columns: 1fr 1fr; }
  .footer__brand{ grid-column: 1 / -1; }
}

@media (max-width: 760px){
  .nav__links{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--paper);
    flex-direction: column;
    align-items: stretch;
    padding: 14px 20px 22px;
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-soft);
    display: none;
    gap: 4px;
  }
  .nav__links.is-open{ display: flex; }
  .nav__link{ text-align: center; padding: 12px 16px; }
  .nav__burger{ display: flex; }

  .sobre__grid{ grid-template-columns: 1fr; }
  .team-grid{ grid-template-columns: 1fr; }
  .footer__inner{ grid-template-columns: 1fr; text-align: center; }
  .footer__brand{ align-items: center; }
  .footer__nav{ align-items: center; }
  .footer__nav a{ width: auto; }
}

@media (max-width: 480px){
  .hero{ padding-top: 70px; }
  .btn--big{ width: 100%; }
  .hero__actions{ flex-direction: column; width: 100%; }
  .hero__actions .btn{ width: 100%; }
}
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
