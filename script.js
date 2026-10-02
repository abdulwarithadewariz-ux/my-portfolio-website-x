/* ===== DATA (edit these to change the site) ===== */
const WA_NUMBER = "2349134245070"; // number the message form sends to
const SOCIALS = [
  { n: "WhatsApp", h: "Message me directly", u: "https://wa.link/xkqug4", i: "fa-brands fa-whatsapp", c: "#25d366" },
  { n: "Instagram", h: "@adewarizx18", u: "https://www.instagram.com/adewarizx18/", i: "fa-brands fa-instagram", c: "#e1306c" },
  { n: "TikTok", h: "@adewarizx", u: "https://www.tiktok.com/@adewarizx", i: "fa-brands fa-tiktok", c: "#69c9d0" },
  { n: "X (Twitter)", h: "@adewarizjersey", u: "https://x.com/adewarizjersey", i: "fa-brands fa-x-twitter", c: "#ffffff" },
  { n: "Snapchat", h: "Add me on Snapchat", u: "https://snapchat.com/t/iLMx5u75", i: "fa-brands fa-snapchat", c: "#fffc00" },
  { n: "Call", h: "0913 424 5070", u: "tel:+2349134245070", i: "fa-solid fa-phone", c: "#4f8cff" },
  { n: "Call", h: "0904 745 5122", u: "tel:+2349047455122", i: "fa-solid fa-phone", c: "#4f8cff" },
];
const SKILLS = [
  { n: "Python Development", e: "🐍", p: 90, d: "Application logic, automation, authentication, APIs, games and software projects." },
  { n: "AI Engineering", e: "🤖", p: 80, d: "AI applications, API integration and creative AI workflows." },
  { n: "Web Development", e: "🌐", p: 78, d: "HTML, CSS, JavaScript and Python-based backend development." },
  { n: "Game Development", e: "🎮", p: 72, d: "2D and 3D game prototypes using Python game technologies." },
  { n: "APIs & Integration", e: "🔌", p: 75, d: "Connecting applications to services, APIs and AI-powered systems." },
  { n: "Problem Solving", e: "🧠", p: 88, d: "Breaking problems down, debugging and continuously improving." },
];
const PROJECTS = [
  { t: "Space Shooter", e: "🚀", k: "PYTHON / PYGAME", d: "2D shooter with player movement, enemies, collisions, difficulty progression and game-over logic.", g: ["Python", "Pygame"], c: "python game" },
  { t: "AI Study Platform", e: "🧠", k: "AI / EDUCATION", d: "Student platform concept with AI help, study plans, quizzes, notes, file uploads and voice tools.", g: ["AI", "Python"], c: "python ai", f: 1 },
  { t: "Authentication System", e: "🔐", k: "PYTHON / BACKEND", d: "Registration, login, validation, duplicate-user handling and OTP concepts.", g: ["Python", "Auth"], c: "python" },
  { t: "3D Ball Sort", e: "🎮", k: "PANDA3D / PYTHON", d: "3D puzzle game with multiple levels, menus, settings, statistics and controls.", g: ["Panda3D", "Python"], c: "python game" },
  { t: "Developer Portfolio", e: "💻", k: "WEB DEVELOPMENT", d: "This interactive portfolio presenting my skills, projects and direction.", g: ["HTML", "CSS", "JavaScript"], c: "web" },
  { t: "AI Creative Projects", e: "🎬", k: "AI / CREATIVE TECH", d: "AI storytelling, character development and video generation workflows.", g: ["AI", "Automation"], c: "ai" },
];
const JOURNEY = [
  ["PRIMARY EDUCATION", "Hallmark International School", "Primary 1 - Primary 5"],
  ["SECONDARY EDUCATION", "Great Panaf School", "JSS1 - SS1 • Kaduna"],
  ["SENIOR SECONDARY", "Iqra College", "SS2 - SS3 • Ilorin"],
  ["CURRENT", "Al-Hikmah University", "B.Sc. Computer Science • Ilorin"],
];
const ROLES = ["Software Developer", "Python Developer", "AI Engineer", "Game Developer"];

/* ===== RENDER ===== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const link = (s) => `href="${s.u}" ${s.u.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}`;

$("#heroSocials").innerHTML = SOCIALS.slice(0, 5).map((s) =>
  `<a class="pill" ${link(s)} style="--c:${s.c}"><i class="${s.i}"></i>${s.n}</a>`).join("");
$("#footSocials").innerHTML = SOCIALS.slice(0, 5).map((s) =>
  `<a ${link(s)} aria-label="${s.n}" style="--c:${s.c}"><i class="${s.i}"></i></a>`).join("");
$("#contactGrid").innerHTML = SOCIALS.map((s, i) =>
  `<a class="card contact tilt reveal" ${link(s)} style="--c:${s.c};--d:${i * 0.07}s">
     <i class="${s.i} big-i"></i>
     <div><small>${s.n === "Call" ? "CALL" : "CONNECT"}</small><h3>${s.n}</h3><p>${s.h}</p></div></a>`).join("");
$("#skillGrid").innerHTML = SKILLS.map((s, i) =>
  `<div class="card skill reveal" style="--d:${i * 0.08}s">
     <div class="row"><span>${s.e} ${s.n}</span><b>${s.p}%</b></div><p>${s.d}</p>
     <div class="bar2"><span style="--w:${s.p}%"></span></div></div>`).join("");
$("#projGrid").innerHTML = PROJECTS.map((p, i) =>
  `<article class="card proj tilt reveal ${p.f ? "feat" : ""}" data-c="${p.c}" style="--d:${i * 0.08}s">
     <div class="ic">${p.e}</div><small>${p.k}</small><h3>${p.t}</h3><p>${p.d}</p>
     <div class="tags">${p.g.map((t) => `<span>${t}</span>`).join("")}</div></article>`).join("");
$("#timeline").innerHTML = JOURNEY.map((j, i) =>
  `<div class="tl reveal" style="--d:${i * 0.1}s"><small>${j[0]}</small><h3>${j[1]}</h3><p>${j[2]}</p></div>`).join("");
$("#year").textContent = new Date().getFullYear();

/* ===== PRELOADER ===== */
document.body.classList.add("lock");
const hide = () => { $("#preloader").classList.add("hide"); document.body.classList.remove("lock"); };
addEventListener("load", () => setTimeout(hide, 1300));
setTimeout(hide, 3500);

/* ===== NAV ===== */
addEventListener("scroll", () => {
  $("#nav").classList.toggle("scrolled", scrollY > 60);
  $("#top").classList.toggle("show", scrollY > 700);
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#bar").style.width = max > 0 ? (scrollY / max) * 100 + "%" : "0";
  let cur = "";
  $$("section[id]").forEach((s) => { if (scrollY >= s.offsetTop - 220) cur = s.id; });
  $$("#links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
});
$("#burger").addEventListener("click", () => $("#links").classList.toggle("open"));
$$("#links a").forEach((a) => a.addEventListener("click", () => $("#links").classList.remove("open")));
$("#top").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* ===== TYPING EFFECT ===== */
(function () {
  let r = 0, c = 0, del = false;
  const el = $("#typed");
  (function tick() {
    const w = ROLES[r];
    el.textContent = w.slice(0, c);
    if (!del && c < w.length) { c++; setTimeout(tick, 90); }
    else if (!del) { del = true; setTimeout(tick, 1400); }
    else if (c > 0) { c--; setTimeout(tick, 45); }
    else { del = false; r = (r + 1) % ROLES.length; setTimeout(tick, 300); }
  })();
})();

/* ===== SCROLL REVEAL + COUNTERS ===== */
const rio = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); }
}), { threshold: 0.12 });
$$(".reveal").forEach((el) => rio.observe(el));

const cio = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target, t = +el.dataset.count;
  let n = 0;
  const id = setInterval(() => { n++; el.textContent = n; if (n >= t) clearInterval(id); }, 120);
  cio.unobserve(el);
}), { threshold: 0.5 });
$$("[data-count]").forEach((el) => cio.observe(el));

/* ===== PROJECT FILTER ===== */
$$(".filter").forEach((b) => b.addEventListener("click", () => {
  $$(".filter").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  $$(".proj").forEach((p) =>
    p.classList.toggle("hidden", b.dataset.f !== "all" && !p.dataset.c.split(" ").includes(b.dataset.f)));
}));

/* ===== PARTICLE BACKGROUND ===== */
(function () {
  const cv = $("#fx"), ctx = cv.getContext("2d"), m = { x: -999, y: -999 };
  let W, H;
  const rs = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
  rs(); addEventListener("resize", rs);
  addEventListener("mousemove", (e) => { m.x = e.clientX; m.y = e.clientY; });
  const pts = Array.from({ length: Math.min(70, Math.floor(innerWidth / 18)) }, () => ({
    x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
  }));
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fillStyle = "rgba(79,140,255,.8)"; ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(79,140,255,${0.16 * (1 - d / 120)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
      const dm = Math.hypot(p.x - m.x, p.y - m.y);
      if (dm < 150) {
        ctx.strokeStyle = `rgba(164,200,255,${0.4 * (1 - dm / 150)})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(m.x, m.y); ctx.stroke();
      }
    });
    requestAnimationFrame(draw);
  })();
})();

/* ===== 3D TILT + MAGNETIC BUTTONS ===== */
if (matchMedia("(pointer:fine)").matches) {
  $$(".tilt").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-5px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
  $$(".mag").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}

/* ===== CLICK SPARKS + RIPPLES ===== */
function burst(x, y, n = 12) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"), a = Math.random() * 6.283, d = 35 + Math.random() * 70;
    s.className = "spark";
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(a) * d + "px");
    s.style.setProperty("--dy", Math.sin(a) * d + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 850);
  }
}
document.addEventListener("click", (e) => burst(e.clientX, e.clientY));
$$(".btn, .filter").forEach((el) => el.addEventListener("click", (e) => {
  const r = el.getBoundingClientRect(), size = Math.max(r.width, r.height), rip = document.createElement("span");
  rip.className = "ripple";
  rip.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  el.appendChild(rip);
  setTimeout(() => rip.remove(), 600);
}));

/* ===== MESSAGE FORM -> WHATSAPP ===== */
$("#waForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = encodeURIComponent(`Hello Adewariz, I'm ${$("#waName").value.trim()}. ${$("#waMsg").value.trim()}`);
  burst(innerWidth / 2, innerHeight / 2, 50);
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener");
});