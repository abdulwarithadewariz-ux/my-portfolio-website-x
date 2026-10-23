/* Shared behaviour for case-study pages: header, reveal, preloader. */
(function () {
  "use strict";
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // reveal
  // cascade siblings so a row of cards enters in sequence
  const groups = new Map();
  $$(".rv").forEach((el) => {
    const p = el.parentElement;
    if (!p) return;
    const n = groups.get(p) || 0;
    el.style.setProperty("--d", (Math.min(n, 8) * 0.07).toFixed(3) + "s");
    groups.set(p, n + 1);
  });

  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
  $$(".rv").forEach((el) => io.observe(el));

  // header state + progress
  const hd = $("#hd"), bar = $("#bar");
  function onScroll() {
    const y = scrollY;
    if (hd) hd.classList.toggle("s", y > 30);
    if (bar) {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = max > 0 ? (y / max) * 100 + "%" : "0";
    }
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // mobile drawer
  const burger = $("#burger"), drawer = $("#drawer");
  function close() { drawer && drawer.classList.remove("open"); burger && burger.classList.remove("x"); burger && burger.setAttribute("aria-expanded", "false"); document.body.classList.remove("lock"); }
  if (burger && drawer) {
    burger.addEventListener("click", () => {
      const o = drawer.classList.toggle("open");
      burger.classList.toggle("x", o);
      burger.setAttribute("aria-expanded", String(o));
      document.body.classList.toggle("lock", o);
    });
    $$("#drawer a").forEach((a) => a.addEventListener("click", close));
    addEventListener("keydown", (e) => e.key === "Escape" && close());
  }

  // year
  const yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();

  // entry curtain → page entrance
  const root = document.documentElement;
  const pre = $("#pre");
  let lifted = false;
  function lift() {
    if (lifted) return;
    lifted = true;
    if (pre) pre.classList.add("gone");
    root.classList.add("ready");
  }
  if (reduce || !pre) lift();
  else if (root.classList.contains("arriving")) setTimeout(lift, 160);
  else { addEventListener("load", () => setTimeout(lift, 450)); setTimeout(lift, 2400); }

  // page-to-page wipe for internal navigation (case study ↔ home)
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    if (a.hasAttribute("download")) return;
    if (a.target && a.target !== "_self") return;
    const raw = a.getAttribute("href") || "";
    if (raw.charAt(0) === "#") return;
    let url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname) return;
    e.preventDefault();
    try { sessionStorage.setItem("adz-wipe", "1"); } catch (_) {}
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = url.href; }, 640);
  });
  addEventListener("pageshow", (e) => {
    if (e.persisted) { document.body.classList.remove("leaving"); root.classList.add("ready"); }
  });
})();
