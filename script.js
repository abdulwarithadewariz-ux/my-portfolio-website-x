/* =========================================================================
   Adewariz — portfolio behaviour
   Renders from data.js, handles nav, reveal, counters, form.
   ========================================================================= */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- inline icon set ---------- */
  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.7.62.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.4.25-.7.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 0 1 6.66 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.4 9.4ZM20.5 3.49A11.8 11.8 0 0 0 12.04 0C5.5 0 .18 5.32.17 11.86c0 2.09.55 4.13 1.6 5.93L.07 24l6.35-1.66a11.85 11.85 0 0 0 5.62 1.43h.01c6.54 0 11.87-5.32 11.87-11.86 0-3.16-1.24-6.14-3.42-8.32Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.69 5.69 0 1 0 4.87 5.63V9.73a7.35 7.35 0 0 0 4.3 1.38V8.02a4.29 4.29 0 0 1-3.2-2.2Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>',
  };
  const ICN = { code: ICON.code, layers: ICON.layers, brain: ICON.brain, users: ICON.users, briefcase: ICON.briefcase, globe: ICON.globe };

  /* ================= HERO NAME ================= */
  const nameEl = $("#heroName");
  if (nameEl) {
    const nm = PROFILE.name;
    nameEl.innerHTML = nm
      .split("")
      .map((ch, i) => `<span style="--i:${i}">${ch === " " ? "&nbsp;" : esc(ch)}</span>`)
      .join("");
  }
  const av = $("#availText");
  if (av) av.textContent = PROFILE.available;
  const locChip = $("#locChip");
  if (locChip) {
    const tail = locChip.lastChild && locChip.lastChild.nodeType === 3 ? locChip.lastChild : locChip.appendChild(document.createTextNode(""));
    tail.nodeValue = " " + PROFILE.locationFull;
  }

  /* ================= SHOWCASE (hero) ================= */
  const sc = $("#scBody");
  if (sc) {
    const top = PROJECTS.filter((p) => p.featured).slice(0, 2);
    const rest = PROJECTS.filter((p) => !p.featured);
    sc.innerHTML =
      top
        .map(
          (p) => `<a class="sc-proj" href="${esc(p.caseRef)}" style="--pa:${esc(p.accent)}">
        <div class="sp-h"><b>${esc(p.title)}</b><span class="dot"><i></i>${esc(p.statusNote)}</span></div>
        <p>${esc(p.tagline)}</p>
        <div class="sp-tags">${p.stack.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </a>`
        )
        .join("") +
      `<a class="sc-more" href="#work">+ ${rest.length} more projects below</a>`;
  }

  /* ================= MARQUEE ================= */
  const mq = $("#mq");
  if (mq) {
    const items = MARQUEE.concat(MARQUEE);
    mq.innerHTML = items.map((t, i) => `<span class="${i % 2 ? "od" : ""}">${i % 2 ? "✦" : esc(t)}</span>`).join("");
  }

  /* ================= STATS ================= */
  // Real counts derived from the data — never arbitrary.
  const liveCount = PROJECTS.filter((p) => p.status === "live").length;
  const skillCount = SKILLS.reduce((n, g) => n + g.items.length, 0);
  const shippedCount = SKILLS.reduce((n, g) => n + g.items.filter((i) => i.level === "shipped").length, 0);
  const reachCount = CONTACTS.length;
  const STATS = [
    { v: PROJECTS.length, l: "projects documented" },
    { v: liveCount, l: "products live &amp; in dev" },
    { v: shippedCount, l: "technologies shipped" },
    { v: reachCount, l: "ways to reach me" },
  ];
  const statsRow = $("#statsRow");
  if (statsRow) {
    statsRow.innerHTML = STATS.map(
      (s) => `<div class="stat rv"><b class="cnt" data-to="${s.v}">0</b><span>${s.l}</span></div>`
    ).join("");
  }

  /* ================= PROJECT CARDS ================= */
  const STATUS_CLASS = { live: "st-live", "in-progress": "st-progress", "in-development": "st-dev", prototype: "st-prototype", concept: "st-concept", paused: "st-paused" };
  function cardHTML(p) {
    const live = p.status === "live";
    const media = p.img
      ? `<div class="pc-img"><span class="pc-badge ${STATUS_CLASS[p.status] || ""}"><i></i>${esc(p.statusNote)}</span><img src="${esc(p.img)}" alt="${esc(p.imgAlt)}" loading="lazy" width="1400" height="791"></div>`
      : `<div class="pc-img"><span class="pc-badge ${STATUS_CLASS[p.status] || ""}"><i></i>${esc(p.statusNote)}</span><div class="fallback"><span class="fg">${esc(p.title.split(" ")[0])}<i>.</i></span></div></div>`;
    const actions = [
      `<a class="plink" href="${esc(p.caseRef)}">Read case study ${ICON.arrow}</a>`,
      p.live ? `<a class="plink mut" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Visit live site ${ICON.ext}</a>` : "",
      p.repo ? `<a class="plink mut" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">${p.live ? "Source" : "View on GitHub"} ${ICON.github}</a>` : "",
    ]
      .filter(Boolean)
      .join("");
    const tags = p.stack.concat(p.data).slice(0, 6);
    return `<article class="pcard rv${live ? " is-live" : ""}" style="--pa:${esc(p.accent)}">
      ${media}
      <div class="pc-body">
        <span class="mono">${esc(p.category)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.blurb)}</p>
        <div class="pc-tags">${tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="pc-act">${actions}</div>
      </div>
    </article>`;
  }
  const feat = $("#featGrid");
  if (feat) feat.innerHTML = PROJECTS.filter((p) => p.featured).map(cardHTML).join("");
  const pgrid = $("#projGrid");
  if (pgrid) pgrid.innerHTML = PROJECTS.filter((p) => !p.featured).map(cardHTML).join("");

  /* ================= MORE WORK ================= */
  const moreBody = $("#moreBody");
  if (moreBody) {
    moreBody.innerHTML = MORE_WORK.map(
      (m) => `<div class="mitem">
      <div class="mk">${esc(m.kind)}</div>
      <div>
        <h4>${esc(m.title)}</h4>
        <p>${esc(m.d)}</p>
        <div class="mt">${m.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
    </div>`
    ).join("");
  }

  /* ================= SKILLS ================= */
  const skillsGrid = $("#skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILLS.map(
      (g) => `<div class="skgrp rv">
      <h3><i aria-hidden="true"></i>${esc(g.group)}</h3>
      <div class="sklist">
        ${g.items
          .map(
            (it) => `<div class="sk">
            <span class="sk-n">${esc(it.n)}<em>${esc(it.note)}</em></span>
            <span class="lv ${esc(it.level)}">${esc(it.level)}</span>
          </div>`
          )
          .join("")}
      </div>
    </div>`
    ).join("");
  }

  /* ================= APPROACH ================= */
  const apprGrid = $("#apprGrid");
  if (apprGrid) {
    apprGrid.innerHTML = APPROACH.map(
      (a) => `<div class="appr rv"><span class="ak">${esc(a.k)}</span><h3>${esc(a.t)}</h3><p>${esc(a.d)}</p></div>`
    ).join("");
  }

  /* ================= EDUCATION ================= */
  const eduGrid = $("#eduGrid");
  if (eduGrid) {
    eduGrid.innerHTML = EDUCATION.map(
      (e, i) => `<div class="edu rv${i === 0 ? " now" : ""}"><span class="mono">${esc(e.stage)}</span><h3>${esc(e.school)}</h3><p>${esc(e.detail)}</p></div>`
    ).join("");
  }

  /* ================= INTERESTS ================= */
  const intrGrid = $("#intrGrid");
  if (intrGrid) {
    const icons = [ICON.briefcase, ICON.users, ICON.brain, ICON.globe];
    intrGrid.innerHTML = INTERESTS.map(
      (it, i) => `<div class="intr rv"><span class="ii">${icons[i] || ICON.code}</span><div><h3>${esc(it.t)}</h3><p>${esc(it.d)}</p></div></div>`
    ).join("");
  }

  /* ================= CONTACT SOCIALS ================= */
  const cSocials = $("#cSocials");
  if (cSocials) {
    cSocials.innerHTML = CONTACTS.map(
      (c) => `<a href="${esc(c.u)}" target="_blank" rel="noopener noreferrer" style="--sc:${esc(c.c)}" aria-label="${esc(c.n)} — ${esc(c.h)}">${ICON[c.i] || ICON.globe}${esc(c.n)}</a>`
    ).join("");
  }

  /* ================= YEAR ================= */
  const yr = $("#yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ================= SCROLL REVEAL + COUNTERS ================= */
  // Reveal any .rv as it enters. Threshold kept low so nothing stays hidden.
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
  /* cascade grid children in as a row, not all at once */
  ["#statsRow", "#featGrid", "#projGrid", "#skillsGrid", "#apprGrid", "#eduGrid", "#intrGrid"].forEach((sel) => {
    const box = $(sel);
    if (!box) return;
    Array.from(box.children).forEach((c, i) => c.style.setProperty("--d", (Math.min(i, 8) * 0.07).toFixed(3) + "s"));
  });
  $$(".rv").forEach((el) => revealIO.observe(el));

  // Counters: fire when the stat is anywhere near view, and always resolve.
  function countUp(el) {
    const to = parseInt(el.getAttribute("data-to"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    const dur = 1100, t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(eased * to);
      if (k < 1) requestAnimationFrame(step);
      else el.textContent = to;
    })(t0);
  }
  const counters = $$(".cnt");
  if (counters.length) {
    const cIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { countUp(e.target); cIO.unobserve(e.target); }
        });
      },
      { threshold: 0.3 }
    );
    counters.forEach((c) => cIO.observe(c));
    // Safety: if any counter is still 0 after 2.5s and is on-screen, resolve it.
    setTimeout(() => {
      counters.forEach((c) => {
        const r = c.getBoundingClientRect();
        if (c.textContent === "0" && r.top < innerHeight && r.bottom > 0) countUp(c);
      });
    }, 2500);
  }

  /* ================= HEADER / SCROLL SPY / PROGRESS ================= */
  const hd = $("#hd"), bar = $("#bar");
  const sections = $$("main section[id]");
  const navLinks = $$('#topnav a[href^="#"], #bn a[href^="#"]');
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    if (hd) hd.classList.toggle("s", y > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.width = max > 0 ? (y / max) * 100 + "%" : "0";
    let cur = "home";
    sections.forEach((s) => {
      if (y >= s.offsetTop - innerHeight * 0.35) cur = s.id;
    });
    navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
    ticking = false;
  }
  addEventListener(
    "scroll",
    () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } },
    { passive: true }
  );
  onScroll();

  /* ================= MOBILE DRAWER ================= */
  const burger = $("#burger"), drawer = $("#drawer");
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    burger && burger.classList.remove("x");
    burger && burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("lock");
  }
  if (burger && drawer) {
    burger.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      burger.classList.toggle("x", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("lock", open);
    });
    $$("#drawer a").forEach((a) => a.addEventListener("click", closeDrawer));
    addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
  }

  /* ================= POINTER FX: spotlight, card glow/tilt, magnetic ========= */
  if (!reduce && matchMedia("(pointer:fine)").matches) {
    /* soft spotlight that trails the cursor */
    const spot = $("#spot");
    if (spot) {
      let tx = innerWidth / 2, ty = innerHeight / 3, cx = tx, cy = ty, started = false;
      addEventListener(
        "mousemove",
        (e) => {
          tx = e.clientX; ty = e.clientY;
          if (!started) { started = true; cx = tx; cy = ty; spot.classList.add("on"); }
        },
        { passive: true }
      );
      (function trail() {
        cx += (tx - cx) * 0.09;
        cy += (ty - cy) * 0.09;
        spot.style.transform = `translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0)`;
        requestAnimationFrame(trail);
      })();
    }

    /* per-card glow + gentle 3D tilt */
    const hot = $$(".pcard, .sc-proj");
    hot.forEach((card) => {
      const tilt = card.classList.contains("pcard");
      card.addEventListener(
        "mousemove",
        (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--mx", e.clientX - r.left + "px");
          card.style.setProperty("--my", e.clientY - r.top + "px");
          if (tilt) {
            card.style.setProperty("--ry", ((px - 0.5) * 7).toFixed(2) + "deg");
            card.style.setProperty("--rx", ((0.5 - py) * 6).toFixed(2) + "deg");
          }
        },
        { passive: true }
      );
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });

    /* magnetic pull on primary actions */
    $$(".btn, .hire, .wa-cta").forEach((el) => {
      el.addEventListener(
        "mousemove",
        (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          el.style.setProperty("--mag-x", (dx * 0.16).toFixed(1) + "px");
          el.style.setProperty("--mag-y", (dy * 0.22).toFixed(1) + "px");
        },
        { passive: true }
      );
      const clear = () => { el.style.setProperty("--mag-x", "0px"); el.style.setProperty("--mag-y", "0px"); };
      el.addEventListener("mouseleave", clear);
      el.addEventListener("blur", clear);
    });
  }

  /* ================= TOAST ================= */
  const toast = $("#toast");
  let toastT;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  /* ================= CONTACT FORM ================= */
  const form = $("#cform");
  if (form) {
    const setErr = (id, on) => { const f = $(id); if (f) f.classList.toggle("err", on); };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#i-name").value.trim();
      const email = $("#i-email").value.trim();
      const type = $("#i-type").value;
      const msg = $("#i-msg").value.trim();
      const emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      let ok = true;
      setErr("#f-name", !name); if (!name) ok = false;
      setErr("#f-email", !emailOk); if (!emailOk) ok = false;
      setErr("#f-msg", !msg); if (!msg) ok = false;
      if (!ok) { showToast("Please check the highlighted fields"); return; }

      const lines = [`Hello Adewariz, my name is ${name}.`, `Enquiry: ${type}`, "", msg];
      if (email) lines.push("", `You can reply to me at: ${email}`);
      const text = encodeURIComponent(lines.join("\n"));
      showToast("Opening WhatsApp…");
      window.open(`https://wa.me/2349134245070?text=${text}`, "_blank", "noopener");
    });
    // clear error as the user types
    ["#i-name", "#i-email", "#i-msg"].forEach((sel) => {
      const el = $(sel);
      if (el) el.addEventListener("input", () => el.closest(".field").classList.remove("err"));
    });
  }

  /* ================= COPY EMAIL ================= */
  const mailCard = $("#mailCard");
  if (mailCard) {
    // secondary click copies instead of navigating
    mailCard.addEventListener("contextmenu", async (e) => {
      e.preventDefault();
      try { await navigator.clipboard.writeText(PROFILE.email); showToast("Email copied"); }
      catch (_) { showToast(PROFILE.email); }
    });
  }

  /* ================= CV DOWNLOAD =========================================== */
  // The PDF lives in this repo — verify the server actually serves it.
  const cvLinks = $$("a[download]").filter((a) => /\.pdf(\?|#|$)/i.test(a.getAttribute("href") || ""));
  let cvState = "unknown";
  cvLinks.forEach((a) => {
    fetch(a.href, { method: "HEAD" })
      .then((r) => { cvState = r.ok || r.status === 405 ? "ok" : "missing"; })
      .catch(() => { cvState = "missing"; });
    a.addEventListener("click", (e) => {
      if (cvState === "missing") {
        e.preventDefault();
        showToast("The CV file isn't being served yet — please tell me");
      } else {
        showToast("Opening your CV…");
      }
    });
  });

  /* ================= ENTRY: preloader → curtain → hero entrance ============= */
  const root = document.documentElement;
  const pre = $("#pre");
  let lifted = false;
  function lift() {
    if (lifted) return;
    lifted = true;
    if (pre) pre.classList.add("gone");
    root.classList.add("ready");
    // let the hero showcase drift once its entrance has finished
    const sc = $(".showcase");
    if (sc && !reduce) setTimeout(() => sc.classList.add("floaty"), 2300);
  }
  if (reduce || !pre) {
    lift();
  } else {
    const pct = $("#pPct");
    if (pct) {
      const t0 = performance.now(), dur = 1150;
      (function tick(t) {
        const k = Math.min(1, (t - t0) / dur);
        pct.textContent = Math.round((1 - Math.pow(1 - k, 2)) * 100);
        if (k < 1) requestAnimationFrame(tick);
        else pct.textContent = "100";
      })(t0);
    }
    // arriving from another page: the wipe is already covering, so lift at once
    if (root.classList.contains("arriving")) setTimeout(lift, 160);
    else {
      addEventListener("load", () => setTimeout(lift, 550));
      setTimeout(lift, 2600); // hard fallback — never block the page
    }
  }

  /* ================= PAGE TRANSITIONS ====================================== */
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    if (a.hasAttribute("download")) return;                 // CV: hand over to the browser
    if (a.target && a.target !== "_self") return;           // new-tab links
    if (a.getAttribute("href").indexOf("#") === 0) return;  // same-page anchors
    let url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    if (url.origin !== location.origin) return;             // external sites
    if (url.pathname === location.pathname) return;         // hash-only navigation
    e.preventDefault();
    try { sessionStorage.setItem("adz-wipe", "1"); } catch (_) {}
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = url.href; }, 640);
  });
  // returning via browser back/forward must never leave the curtain stuck
  addEventListener("pageshow", (e) => {
    if (e.persisted) { document.body.classList.remove("leaving"); root.classList.add("ready"); }
  });
})();
