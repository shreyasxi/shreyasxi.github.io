/* Site behaviour: theme toggle, mobile menu, copy-to-clipboard, "On this page" list and
   tables. Plain JavaScript, no dependencies. The saved theme is applied earlier, by the inline
   script in <head>, so the page never flashes the wrong colours. */
(function () {
  "use strict";

  var root = document.documentElement;

  function onMediaChange(query, handler) {
    if (query.addEventListener) query.addEventListener("change", handler);
    else query.addListener(handler);
  }


  /* Theme */

  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  var themeButtons = document.querySelectorAll("[data-theme-toggle]");

  function savedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function labelThemeButtons() {
    var label = currentTheme() === "dark" ? "Switch to light theme" : "Switch to dark theme";
    themeButtons.forEach(function (button) {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });
  }

  function setTheme(theme, remember) {
    root.setAttribute("data-theme", theme);
    if (remember) {
      try { localStorage.setItem("theme", theme); } catch (e) { /* private browsing */ }
    }
    labelThemeButtons();
    document.dispatchEvent(new CustomEvent("themechange"));
  }

  themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  });

  // Follow the system setting until the visitor chooses a theme themselves.
  onMediaChange(systemDark, function (event) {
    if (!savedTheme()) setTheme(event.matches ? "dark" : "light", false);
  });

  labelThemeButtons();


  /* Mobile menu */

  var header = document.querySelector("[data-site-header]");
  var navToggle = document.querySelector("[data-nav-toggle]");

  if (header && navToggle) {
    var setMenu = function (open) {
      header.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    navToggle.addEventListener("click", function () {
      setMenu(!header.classList.contains("is-open"));
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setMenu(false);
        navToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (header.classList.contains("is-open") && !header.contains(event.target)) setMenu(false);
    });
  }


  /* Copy email address */

  var toast = document.querySelector(".toast");
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    void toast.offsetWidth; // restart the fade-in
    toast.classList.add("is-visible");
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
      toastTimer = setTimeout(function () { toast.hidden = true; }, 250);
    }, 2200);
  }

  function copyWithSelection(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var copied = false;
    try { copied = document.execCommand("copy"); } catch (e) { copied = false; }
    document.body.removeChild(field);
    return copied;
  }

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy");
      var confirm = function () {
        showToast("Email address copied");
        button.classList.add("is-copied");
        setTimeout(function () { button.classList.remove("is-copied"); }, 2000);
      };
      var fallback = function () {
        if (copyWithSelection(text)) confirm();
        else showToast(text);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(confirm, fallback);
      } else {
        fallback();
      }
    });
  });


  /* "On this page": open beside the text on wide screens, and mark the section being read. */

  var toc = document.querySelector("[data-toc]");

  if (toc) {
    var wide = window.matchMedia("(min-width: 75rem)");
    var syncToc = function () { toc.open = wide.matches; };
    syncToc();
    onMediaChange(wide, syncToc);

    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll("a[href^='#']"));
    var headings = tocLinks.map(function (link) {
      return document.getElementById(decodeURIComponent(link.getAttribute("href").slice(1)));
    });
    var activeLink = null;
    var ticking = false;

    var markCurrent = function () {
      ticking = false;
      var offset = (parseFloat(getComputedStyle(root).scrollPaddingTop) || 80) + 8;
      var current = null;
      headings.forEach(function (heading, i) {
        if (heading && heading.getBoundingClientRect().top <= offset) current = tocLinks[i];
      });
      // The last sections can't scroll to the top of the window; at the very end, mark the last one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = tocLinks[tocLinks.length - 1];
      }
      if (current === activeLink) return;
      if (activeLink) activeLink.classList.remove("is-active");
      if (current) current.classList.add("is-active");
      activeLink = current;
    };

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(markCurrent);
      }
    }, { passive: true });
    markCurrent();
  }


  /* Tables: let wide tables scroll sideways on phones, and hide header rows left blank in Markdown. */

  document.querySelectorAll(".prose table").forEach(function (table) {
    if (table.tHead && !table.tHead.textContent.trim()) table.tHead.classList.add("is-empty");
    if (table.parentElement.classList.contains("table-wrap")) return;
    var wrap = document.createElement("div");
    wrap.className = "table-wrap";
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
})();
