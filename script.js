/* ===== YOUR INFO (edit these to change the site) ===== */
const WA_NUMBER = "2349134245070"; // the message form sends to this number
const SOCIALS = [
  { n: "WhatsApp", h: "Message me directly", u: "https://wa.link/xkqug4", i: "fa-brands fa-whatsapp", c: "#25d366" },
  { n: "Instagram", h: "@adewarizx18", u: "https://www.instagram.com/adewarizx18/", i: "fa-brands fa-instagram", c: "#e1306c" },
  { n: "TikTok", h: "@adewarizx", u: "https://www.tiktok.com/@adewarizx", i: "fa-brands fa-tiktok", c: "#69c9d0" },
  { n: "X (Twitter)", h: "@adewarizjersey", u: "https://x.com/adewarizjersey", i: "fa-brands fa-x-twitter", c: "#ffffff" },
  { n: "Snapchat", h: "Add me on Snapchat", u: "https://snapchat.com/t/iLMx5u75", i: "fa-brands fa-snapchat", c: "#fffc00" },
  { n: "Email", h: "abdulwarithadewariz@gmail.com", u: "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=abdulwarithadewariz@gmail.com&amp;su=Hello%20Adewariz", i: "fa-solid fa-envelope", c: "#ea4335" },
  { n: "Call", h: "0913 424 5070", u: "tel:+2349134245070", i: "fa-solid fa-phone", c: "#4f8cff" },
  { n: "Call", h: "0904 745 5122", u: "tel:+2349047455122", i: "fa-solid fa-phone", c: "#4f8cff" },
];
// p = bar length (0-100), l = the label shown. Change these to match your real level.
const SKILLS = [
  { n: "Python", e: "🐍", p: 90, l: "Excellent", d: "What I use for most things: games, apps, login systems and small tools." },
  { n: "Game Development", e: "🎮", p: 80, l: "Very Good", d: "Pygame and Panda3D. I've made 2D, 3D and puzzle games." },
  { n: "Web Development", e: "🌐", p: 82, l: "Very Good", d: "HTML, CSS and JavaScript. This website is one of mine." },
  { n: "AI Apps", e: "🤖", p: 70, l: "Good", d: "Building apps that use AI, and using AI tools for creative work." },
  { n: "APIs", e: "🔌", p: 72, l: "Good", d: "Connecting my apps to other services and AI APIs." },
  { n: "Debugging", e: "🧠", p: 80, l: "Very Good", d: "Most of programming is fixing what broke, and I've got decent at it." },
  { n: "Content Creation", e: "🎥", p: 78, l: "Very Good", d: "Making videos and posts for social media." },
];
const PROJECTS = [
  { t: "NEXTLEVEL TECH Store", e: "🛒", k: "WEB · STORE · PYTHON", d: "An online store for my tech business where customers can make inquiries and buy gaming gear, PCs, laptops and accessories.", g: ["Python", "Flask", "Payments"], c: "web app python", f: 1 },
  { t: "Muslim App", e: "🕌", k: "APP · MUSLIM LIFESTYLE", d: "A Muslim app project in the style of Muslim Pro, made for Muslims to use every day.", g: ["App", "Python"], c: "app python" },
  { t: "Student Study App", e: "📚", k: "APP · AI · EDUCATION", d: "A study app for students with AI help, study plans, notes, quizzes and file uploads.", g: ["Python", "AI"], c: "app ai python" },
  { t: "Car Racing & Simulation Game", e: "🏎️", k: "3D GAME · SIMULATION", d: "A 3D car racing and driving simulation game with WASD or arrow key controls, a boost and a settings menu.", g: ["Python", "3D"], c: "game python" },
  { t: "Company Website", e: "🏢", k: "WEB · PYTHON", d: "A professional company-style website with registration, login and OTP verification.", g: ["Python", "HTML", "CSS"], c: "web python" },
  { t: "API & Integrations", e: "🔌", k: "API · BACKEND", d: "Connecting my apps to other services and AI APIs so they can send and receive data.", g: ["Python", "APIs"], c: "api python ai" },
  { t: "AI Apps", e: "🤖", k: "AI · APPS", d: "Experiments with AI apps: storytelling, characters and video generation.", g: ["AI", "Python"], c: "app ai" },
  { t: "Content Creation", e: "🎥", k: "CONTENT · SOCIAL MEDIA", d: "I create content for social media. You can see it on my TikTok, Instagram, X and Snapchat.", g: ["Video", "Social Media"], c: "content" },
  { t: "3D Ball Sort", e: "🧩", k: "PUZZLE · 3D GAME", d: "A 3D puzzle game with levels, menus, settings and stats.", g: ["Panda3D", "Python"], c: "game python" },
  { t: "3D Football Game", e: "⚽", k: "3D GAME", d: "My own 3D football game with its own name, design and assets.", g: ["Python", "3D"], c: "game python" },
  { t: "Space Shooter", e: "🚀", k: "2D GAME", d: "A 2D shooter with enemies, collisions, rising difficulty and a game-over screen.", g: ["Python", "Pygame"], c: "game python" },
];
const FILTERS = [["all", "All"], ["app", "Apps"], ["ai", "AI"], ["game", "Games"], ["web", "Web"], ["api", "API"], ["content", "Content"], ["python", "Python"]];
const JOURNEY = [
  ["PRIMARY SCHOOL", "Hallmark International School", "Primary 1 to Primary 5"],
  ["SECONDARY SCHOOL", "Great Panaf School", "JSS1 to SS1 • Kaduna"],
  ["SENIOR SECONDARY", "Iqra College", "SS2 to SS3 • Ilorin"],
  ["NOW", "Al-Hikmah University", "B.Sc. Computer Science • Ilorin"],
];
const ROLES = ["Python developer", "Game developer", "Web developer", "CS student"];

/* ===== BUILD THE PAGE ===== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const link = (s) => `href="${s.u}" ${s.u.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}`;

$("#heroSocials").innerHTML = SOCIALS.filter((s) => s.n !== "Call").map((s) =>
  `<a class="pill" ${link(s)} style="--c:${s.c}"><i class="${s.i}"></i>${s.n}</a>`).join("");
$("#footSocials").innerHTML = SOCIALS.filter((s) => s.n !== "Call").map((s) =>
  `<a ${link(s)} aria-label="${s.n}" style="--c:${s.c}"><i class="${s.i}"></i></a>`).join("");
$("#contactGrid").innerHTML = SOCIALS.map((s, i) =>
  `<a class="card contact tilt reveal" ${link(s)} style="--c:${s.c};--d:${i * 0.07}s">
     <i class="${s.i} big-i"></i>
     <div><small>${s.n === "Call" ? "CALL" : s.n === "Email" ? "EMAIL ME" : "CONNECT"}</small><h3>${s.n}</h3><p>${s.h}</p></div></a>`).join("");
$("#skillGrid").innerHTML = SKILLS.map((s, i) =>
  `<div class="card skill reveal" style="--d:${i * 0.08}s">
     <div class="row"><span>${s.e} ${s.n}</span><b>${s.l} · ${s.p}%</b></div><p>${s.d}</p>
     <div class="bar2"><span style="--w:${s.p}%"></span></div></div>`).join("");
$("#projGrid").innerHTML = PROJECTS.map((p, i) =>
  `<article class="card proj tilt reveal ${p.f ? "feat" : ""}" data-c="${p.c}" style="--d:${i * 0.08}s">
     <div class="ic">${p.e}</div><small>${p.k}</small><h3>${p.t}</h3><p>${p.d}</p>
     <div class="tags">${p.g.map((t) => `<span>${t}</span>`).join("")}</div></article>`).join("");
$(".filters").innerHTML = FILTERS.map((f, i) =>
  `<button class="filter ${i === 0 ? "active" : ""}" data-f="${f[0]}">${f[1]}</button>`).join("");
$("#timeline").innerHTML = JOURNEY.map((j, i) =>
  `<div class="tl reveal" style="--d:${i * 0.1}s"><small>${j[0]}</small><h3>${j[1]}</h3><p>${j[2]}</p></div>`).join("");
$$(".stats b")[0].dataset.count = PROJECTS.length;
$$(".stats b")[1].dataset.count = SKILLS.length;
$("#year").textContent = new Date().getFullYear();

/* ===== PRELOADER ===== */
document.body.classList.add("lock");
const hide = () => { $("#preloader").classList.add("hide"); document.body.classList.remove("lock"); };
addEventListener("load", () => setTimeout(hide, 1300));
setTimeout(hide, 3500);

/* ===== NAV + SCROLL ===== */
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

/* ===== REVEAL ON SCROLL + COUNTERS ===== */
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

/* ===== CLICK SPARKS + BUTTON RIPPLES ===== */
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

/* ===== MESSAGE FORM -> OPENS WHATSAPP ===== */
$("#waForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = encodeURIComponent(`Hello Adewariz, I'm ${$("#waName").value.trim()}. ${$("#waMsg").value.trim()}`);
  burst(innerWidth / 2, innerHeight / 2, 50);
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener");
});

/* ===== MESSAGE FORM -> OPENS YOUR EMAIL APP ===== */
$("#mailBtn").addEventListener("click", () => {
  const name = $("#waName").value.trim(), msg = $("#waMsg").value.trim();
  if (!name || !msg) { alert("Please type your name and message first."); return; }
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=abdulwarithadewariz@gmail.com&su=${encodeURIComponent("Message from " + name)}&body=${encodeURIComponent(msg)}`, "_blank", "noopener");
});