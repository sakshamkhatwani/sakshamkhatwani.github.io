(function () {
  // Dark-mode toggle (remembers choice; falls back to OS setting)
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Mobile nav
  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (navBtn && nav) navBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    navBtn.setAttribute("aria-expanded", open);
  });

  // BibTeX show/hide and copy
  document.querySelectorAll(".bib-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = btn.closest(".pub-body").querySelector(".bibtex");
      pre.hidden = !pre.hidden;
      btn.setAttribute("aria-expanded", !pre.hidden);
    });
  });
  document.querySelectorAll(".copy-bib").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.parentElement.querySelector("code").innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "Copied!";
        setTimeout(function () { btn.textContent = "Copy"; }, 1500);
      });
    });
  });
})();
