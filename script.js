/* ===== YOUR INFO (edit these) ===== */
const EMAIL = "abdulwarithadewariz@gmail.com";
const WA_NUMBER = "2349134245070"; // number the message form sends to
const SOCIALS = [
  { n: "WhatsApp", h: "chat with me", u: "https://wa.link/xkqug4", i: "fa-brands fa-whatsapp", c: "#25d366" },
  { n: "Instagram", h: "@adewarizx18", u: "https://www.instagram.com/adewarizx18/", i: "fa-brands fa-instagram", c: "#e1306c" },
  { n: "TikTok", h: "@adewarizx", u: "https://www.tiktok.com/@adewarizx", i: "fa-brands fa-tiktok", c: "#69c9d0" },
  { n: "X", h: "@adewarizjersey", u: "https://x.com/adewarizjersey", i: "fa-brands fa-x-twitter", c: "#ffffff" },
  { n: "Snapchat", h: "add me", u: "https://snapchat.com/t/iLMx5u75", i: "fa-brands fa-snapchat", c: "#fffc00" },
  { n: "Call", h: "0913 424 5070", u: "tel:+2349134245070", i: "fa-solid fa-phone", c: "#4f8cff" },
  { n: "Call", h: "0904 745 5122", u: "tel:+2349047455122", i: "fa-solid fa-phone", c: "#4f8cff" },
];
// p = bar length and the % shown, l = the label
const SKILLS = [
  { n: "Python", p: 90, l: "Excellent" },
  { n: "Game Development", p: 80, l: "Very Good" },
  { n: "Web Development", p: 82, l: "Very Good" },
  { n: "AI Apps", p: 70, l: "Good" },
  { n: "APIs", p: 72, l: "Good" },
  { n: "Debugging", p: 80, l: "Very Good" },
  { n: "Content Creation", p: 78, l: "Very Good" },
];
const PROJECTS = [
  { t: "NEXTLEVEL TECH Store", e: "🛒", k: "web · store", d: "The online store for my tech business. People can send inquiries and buy gaming gear, PCs, laptops and accessories.", g: ["Python", "Flask", "Payments"], c: "web app python", f: 1 },
  { t: "Muslim App", e: "🕌", k: "app", d: "A Muslim app in the style of Muslim Pro, something Muslims can use every day.", g: ["App", "Python"], c: "app python" },
  { t: "Student Study App", e: "📚", k: "app · ai", d: "A study app for students. AI help, study plans, notes, quizzes and file uploads.", g: ["Python", "AI"], c: "app ai python" },
  { t: "Car Racing & Simulation", e: "🏎️", k: "3d game", d: "A 3D car racing and driving simulation game. WASD or arrow keys, boost, and a settings menu.", g: ["Python", "3D"], c: "game python" },
  { t: "Company Website", e: "🏢", k: "web", d: "A company-style website with sign up, login and OTP verification.", g: ["Python", "HTML", "CSS"], c: "web python" },
  { t: "API & Integrations", e: "🔌", k: "api · backend", d: "I connect my apps to other services and AI APIs so they can send and get data.", g: ["Python", "APIs"], c: "api python ai" },
  { t: "AI Apps", e: "🤖", k: "ai", d: "AI app experiments like storytelling, characters and video generation.", g: ["AI", "Python"], c: "app ai" },
  { t: "Content Creation", e: "🎥", k: "content", d: "I make content for social media. You can find it on my TikTok, Instagram, X and Snapchat.", g: ["Video", "Social"], c: "content" },
  { t: "3D Ball Sort", e: "🧩", k: "puzzle · 3d game", d: "A 3D puzzle game with levels, menus, settings and stats.", g: ["Panda3D", "Python"], c: "game python" },
  { t: "3D Football Game", e: "⚽", k: "3d game", d: "My own 3D football game with its own name, design and assets.", g: ["Python", "3D"], c: "game python" },
  { t: "Space Shooter", e: "🚀", k: "2d game", d: "A 2D shooter with enemies, collisions, harder levels and a game-over screen.", g: ["Python", "Pygame"], c: "game python" },
];
const FILTERS = [["all", "All"], ["app", "Apps"], ["ai", "AI"], ["game", "Games"], ["web", "Web"], ["api", "API"], ["content", "Content"], ["python", "Python"]];
const PATH = [
  ["primary", "Hallmark International School", "Primary 1 to 5"],
  ["secondary", "Great Panaf School", "JSS1 to SS1 · Kaduna"],
  ["senior sec.", "Iqra College", "SS2 to SS3 · Ilorin"],
  ["now", "Al-Hikmah University", "B.Sc. Computer Science · Ilorin"],
];
const ROLES = ["Python developer", "game developer", "web developer", "CS student"];

/* ===== BUILD THE PAGE ===== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const pad = (n) => String(n).padStart(2, "0");
const lnk = (s) => `href="${s.u}" ${s.u.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}`;

$("#name").innerHTML = [...$("#name").dataset.t].map((c, i) => `<span style="--i:${i}">${c}</span>`).join("");
$("#heroSocials").innerHTML = SOCIALS.slice(1, 5).map((s) => `<a ${lnk(s)}><i class="${s.i}" style="color:${s.c}"></i>${s.n}</a>`).join("");
$("#mq").innerHTML = [...SKILLS, ...SKILLS].map((s) => `<span>${s.n}</span><span>✦</span>`).join("");
$("#rail").innerHTML = PROJECTS.map((p, i) =>
  `<article class="card ${p.f ? "f" : ""}" data-c="${p.c}"><span class="n">${pad(i + 1)}</span><div class="e">${p.e}</div>
   <small>${p.k}</small><h3>${p.t}</h3><p>${p.d}</p><div class="tg">${p.g.map((t) => `<span>${t}</span>`).join("")}</div></article>`).join("");
$("#chips").innerHTML = FILTERS.map((f, i) => `<button class="chip ${i ? "" : "on"}" data-f="${f[0]}">${f[1]}</button>`).join("");
$("#sgrid").innerHTML = SKILLS.map((s) =>
  `<div class="sk rv"><div class="t">${s.n}</div><span class="l">${s.l} · ${s.p}%</span><div class="br"><i style="--w:${s.p}%"></i></div></div>`).join("");
$("#steps").innerHTML = PATH.map((s) => `<div class="st rv"><small>${s[0]}</small><div><b>${s[1]}</b><span>${s[2]}</span></div></div>`).join("");
$("#tiles").innerHTML = SOCIALS.slice(1).map((s) =>
  `<a class="tile rv" ${lnk(s)} style="--c:${s.c}"><i class="${s.i}"></i><b>${s.n}</b><span>${s.h}</span></a>`).join("");
$("#yr").textContent = new Date().getFullYear();
$("#rc").textContent = "1 / " + PROJECTS.length;

/* headings: split into words that slide up */
$$("h2").forEach((h) => {
  let k = 0; const out = [];
  h.childNodes.forEach((n) => {
    const em = n.nodeName === "EM";
    n.textContent.split(/\s+/).filter(Boolean).forEach((w) =>
      out.push(`<span class="w"><span style="--k:${k++}">${em ? `<em>${w}</em>` : w}</span></span>`));
  });
  h.innerHTML = out.join(" ");
});

/* ===== LOADING SCREEN ===== */
document.body.classList.add("lock");
let booted = false;
function boot() {
  if (booted) return; booted = true;
  document.body.classList.add("ready"); document.body.classList.remove("lock");
  $("#pre").classList.add("go");
  setTimeout(initLetters, 3500);
}
let pc = 0;
const piv = setInterval(() => {
  pc = Math.min(100, pc + Math.ceil(Math.random() * 6));
  $("#pct").textContent = pc;
  if (pc >= 100) { clearInterval(piv); setTimeout(boot, 350); }
}, 60);
setTimeout(boot, 5000);

/* ===== SCROLL-DRIVEN TRANSITIONS ===== */
const secs = [...$$("main section")], mq = $("#mq"), ghosts = secs;
let lastY = scrollY, vel = 0, mx = 0, lastHd = scrollY;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

function frame() {
  const H = innerHeight, d = scrollY - lastY;
  lastY = scrollY; vel += (d - vel) * 0.1;
  secs.forEach((s) => {
    const r = s.getBoundingClientRect();
    if (r.bottom < -H * 0.5 || r.top > H * 1.5) return;
    const enter = clamp(r.top / H, 0, 1);                        // 1 = just arriving, 0 = in place
    const leave = r.top < 0 ? clamp((H * 0.9 - r.bottom) / (H * 0.9), 0, 1) : 0; // 1 = almost gone
    const inn = s.firstElementChild;
    if (!still) {
      inn.style.transform = `perspective(1300px) translateY(${enter * 80 - leave * 50}px) rotateX(${enter * 22 - leave * 12}deg) scale(${1 - enter * 0.08 - leave * 0.1})`;
      inn.style.opacity = 1 - enter * 0.85 - leave * 0.75;
    }
    s.style.setProperty("--py", (-r.top * 0.18).toFixed(1) + "px");
  });
  mx -= 0.7 + vel * 0.6;                                         // skills strip speeds up and reverses with scroll
  const half = mq.scrollWidth / 2;
  if (mx <= -half) mx += half;
  if (mx > 0) mx -= half;
  mq.style.transform = `translateX(${mx}px)`;
  requestAnimationFrame(frame);
}
frame();

addEventListener("scroll", () => {
  const y = scrollY, hd = $("#hd");
  hd.classList.toggle("s", y > 40);
  hd.classList.toggle("hid", y > lastHd && y > 200);
  lastHd = y;
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#bar").style.width = max > 0 ? (y / max) * 100 + "%" : "0";
  let cur = "home";
  secs.forEach((s) => { if (y >= s.offsetTop - innerHeight * 0.4) cur = s.id; });
  $$("#dn a, #bn a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
  $(".b1").style.transform = `translateY(${y * 0.15}px)`;
  $(".b2").style.transform = `translateY(${-y * 0.1}px)`;
}, { passive: true });

/* elements fade, blur and slide in as you reach them */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in2"); io.unobserve(e.target); }
}), { threshold: 0.12 });
$$(".rv, h2").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 0.08 + "s"; io.observe(el); });
$$(".sk").forEach((el) => io.observe(el));

/* counters */
function countUp(sel, t) { const el = $(sel); let n = 0; const id = setInterval(() => { el.textContent = ++n; if (n >= t) clearInterval(id); }, 90); }
const co = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  countUp("#s1", PROJECTS.length); countUp("#s2", SKILLS.length); countUp("#s3", SOCIALS.length + 1);
  co.disconnect();
}), { threshold: 0.5 });
co.observe($(".stats"));

/* ===== CURTAIN WIPE when you jump to a section ===== */
const wipe = $("#wipe"), wl = $("#wl");
let busy = false;
$$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
  const tg = $(a.getAttribute("href"));
  if (!tg) return;
  e.preventDefault();
  if (busy) return;
  busy = true;
  wl.textContent = a.getAttribute("href").slice(1);
  wipe.className = "in";
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "auto";
    tg.scrollIntoView({ block: "start" });
    document.documentElement.style.scrollBehavior = "";
    wipe.className = "out";
    setTimeout(() => { wipe.className = ""; busy = false; }, 900);
  }, 850);
}));

/* ===== PROJECTS: swipe sideways, filter, counter ===== */
const rail = $("#rail");
$$(".chip").forEach((b) => b.addEventListener("click", () => {
  $$(".chip").forEach((x) => x.classList.remove("on"));
  b.classList.add("on");
  $$(".card").forEach((c) => c.classList.toggle("hide", b.dataset.f !== "all" && !c.dataset.c.split(" ").includes(b.dataset.f)));
  rail.scrollTo({ left: 0 });
  $("#rc").textContent = "1 / " + $$(".card:not(.hide)").length;
}));
rail.addEventListener("scroll", () => {
  const cards = [...$$(".card:not(.hide)")], w = cards[0] ? cards[0].offsetWidth + 14 : 1;
  $("#rc").textContent = clamp(Math.round(rail.scrollLeft / w) + 1, 1, cards.length) + " / " + cards.length;
}, { passive: true });
if (matchMedia("(pointer:fine)").matches) {
  $$(".card").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect(), a = (e.clientX - r.left) / r.width - 0.5, b = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform .1s";
      el.style.setProperty("--mx", e.clientX - r.left + "px"); el.style.setProperty("--my", e.clientY - r.top + "px");
      el.style.transform = `perspective(900px) rotateY(${a * 9}deg) rotateX(${-b * 9}deg) translateY(-5px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transition = ""; el.style.transform = ""; });
  });
}

/* ===== BIG NAME: letters react to your finger / cursor ===== */
function initLetters() {
  const L = [...$$("#name span")];
  L.forEach((s) => s.classList.add("live2"));
  addEventListener("pointermove", (e) => L.forEach((s) => {
    const r = s.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy), k = d < 200 ? 1 - d / 200 : 0;
    s.style.transform = k ? `translate(${-dx * 0.18 * k}px,${-dy * 0.28 * k}px) scale(${1 + 0.3 * k}) rotate(${dx * 0.04 * k}deg)` : "";
    s.style.color = k > 0.45 ? "#fff" : "";
  }));
}

/* ===== TYPING ===== */
(function () {
  let r = 0, c = 0, d = false;
  const el = $("#typed");
  (function t() {
    const w = ROLES[r];
    el.textContent = w.slice(0, c);
    if (!d && c < w.length) { c++; setTimeout(t, 90); }
    else if (!d) { d = true; setTimeout(t, 1400); }
    else if (c > 0) { c--; setTimeout(t, 45); }
    else { d = false; r = (r + 1) % ROLES.length; setTimeout(t, 300); }
  })();
})();

/* ===== COPY EMAIL ===== */
$("#copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(EMAIL); }
  catch (e) {
    const t = document.createElement("textarea");
    t.value = EMAIL; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove();
  }
  $("#copy").textContent = "Copied ✓";
  setTimeout(() => ($("#copy").textContent = "Copy"), 1800);
});

/* ===== PARTICLES ===== */
(function () {
  const cv = $("#fx"), x = cv.getContext("2d"), m = { x: -999, y: -999 };
  let W, H;
  const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
  rs(); addEventListener("resize", rs);
  addEventListener("pointermove", (e) => { m.x = e.clientX; m.y = e.clientY; });
  const P = Array.from({ length: Math.min(50, Math.floor(innerWidth / 20)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 }));
  (function f() {
    x.clearRect(0, 0, W, H);
    P.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      x.beginPath(); x.arc(p.x, p.y, 1.5, 0, 6.283); x.fillStyle = "rgba(79,140,255,.7)"; x.fill();
      for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(p.x - P[j].x, p.y - P[j].y);
        if (d < 110) { x.strokeStyle = `rgba(79,140,255,${0.15 * (1 - d / 110)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(P[j].x, P[j].y); x.stroke(); }
      }
      const dm = Math.hypot(p.x - m.x, p.y - m.y);
      if (dm < 140) { x.strokeStyle = `rgba(158,193,255,${0.4 * (1 - dm / 140)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(m.x, m.y); x.stroke(); }
    });
    requestAnimationFrame(f);
  })();
})();

/* ===== TAP SPARKS + WHATSAPP FORM ===== */
function burst(x, y, n = 10) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"), a = Math.random() * 6.283, d = 30 + Math.random() * 60;
    s.className = "sp"; s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(a) * d + "px"); s.style.setProperty("--dy", Math.sin(a) * d + "px");
    document.body.appendChild(s); setTimeout(() => s.remove(), 850);
  }
}
document.addEventListener("click", (e) => burst(e.clientX, e.clientY));
$("#wf").addEventListener("submit", (e) => {
  e.preventDefault();
  const t = encodeURIComponent(`Hello Adewariz, I'm ${$("#wn").value.trim()}. ${$("#wm").value.trim()}`);
  burst(innerWidth / 2, innerHeight / 2, 40);
  window.open(`https://wa.me/${WA_NUMBER}?text=${t}`, "_blank", "noopener");
});