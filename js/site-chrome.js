(function () {
  "use strict";

  var NAV_ITEMS = [
    { id: "what-is", href: "what-is-a-combi-boiler.html", label: "What is a combi?" },
    { id: "choosing", href: "choosing-a-combi-boiler.html", label: "New combi boiler" },
    { id: "sizing", href: "sizing-and-efficiency.html", label: "Sizing" }
  ];

  var FOOTER_GUIDES = [
    { href: "index.html", label: "All guides" },
    { href: "what-is-a-combi-boiler.html", label: "What is a combi?" },
    { href: "choosing-a-combi-boiler.html", label: "New combi boiler" },
    { href: "sizing-and-efficiency.html", label: "Sizing" },
    { href: "combi-boiler-pressure.html", label: "Boiler pressure" },
    { href: "combi-hot-water-problems.html", label: "Hot water problems" }
  ];

  var FOOTER_SITES = [
    { href: "https://myboiler.com", label: "MyBoiler.com", external: true },
    { href: "https://boilermanuals.com", label: "BoilerManuals.com", external: true },
    { href: "https://boilerservice.com", label: "BoilerService.com", external: true }
  ];

  function renderHeader(activeNav, logoSrc) {
    var navItems = NAV_ITEMS.map(function (item) {
      var current = item.id === activeNav ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
    }).join("");

    return (
      '<header class="site-header">' +
      '<nav class="navbar" aria-label="Main">' +
      '<a href="index.html" class="navbar-brand">' +
      '<img src="' + logoSrc + '" class="logo-mark navbar-logo" width="40" height="40" alt="">' +
      '<span class="navbar-title">CombiBoiler<span class="logo-tld">.com</span></span>' +
      "</a>" +
      '<div class="navbar-actions">' +
      '<button class="navbar-toggle" type="button" onclick="toggleMenu()" aria-label="Open menu" aria-expanded="false" aria-controls="navbar-menu">' +
      '<span class="navbar-toggle-icon" aria-hidden="true"><span class="navbar-toggle-bar"></span></span>' +
      "</button>" +
      '<ul id="navbar-menu" class="navbar-menu">' +
      navItems +
      "</ul>" +
      "</div>" +
      "</nav>" +
      "</header>"
    );
  }

  function renderFooterLinks(items) {
    return items
      .map(function (item) {
        var external = item.external ? ' rel="noopener"' : "";
        return '<a href="' + item.href + '"' + external + ">" + item.label + "</a>";
      })
      .join("");
  }

  function renderFooter() {
    return (
      '<footer class="site-footer">' +
      '<div class="container footer-grid">' +
      '<div class="footer-brand">' +
      '<p class="footer-logo">CombiBoiler.com</p>' +
      '<p class="footer-tagline">Practical combi boiler guides for homeowners and heating engineers.</p>' +
      "</div>" +
      '<div class="footer-col">' +
      '<p class="footer-heading">Guides</p>' +
      '<nav class="footer-links" aria-label="Guides">' +
      renderFooterLinks(FOOTER_GUIDES) +
      "</nav>" +
      "</div>" +
      '<div class="footer-col">' +
      '<p class="footer-heading">Related sites</p>' +
      '<nav class="footer-links" aria-label="Related sites">' +
      renderFooterLinks(FOOTER_SITES) +
      "</nav>" +
      "</div>" +
      "</div>" +
      '<div class="container footer-bottom">' +
      '<p>&copy; <span id="year"></span> CombiBoiler.com — part of the <a href="https://myboiler.com" rel="noopener">MyBoiler.com</a> family</p>' +
      "</div>" +
      "</footer>"
    );
  }

  function toggleMenu() {
    var menu = document.querySelector(".navbar-menu");
    var toggle = document.querySelector(".navbar-toggle");
    if (!menu || !toggle) {
      return;
    }

    var open = !menu.classList.contains("active");
    menu.classList.toggle("active", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function closeMenu() {
    var menu = document.querySelector(".navbar-menu");
    var toggle = document.querySelector(".navbar-toggle");
    if (!menu || !toggle || !menu.classList.contains("active")) {
      return;
    }

    menu.classList.remove("active");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  function initNavbar() {
    document.querySelectorAll(".navbar-menu a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".site-header")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function init() {
    var body = document.body;
    var activeNav = body.getAttribute("data-active-nav") || "";
    var logoSrc = body.getAttribute("data-logo") === "svg" ? "img/combiboiler.svg" : "img/combiboiler.jpg";

    var headerMount = document.getElementById("site-header");
    if (headerMount) {
      headerMount.outerHTML = renderHeader(activeNav, logoSrc);
    }

    var footerMount = document.getElementById("site-footer");
    if (footerMount) {
      footerMount.outerHTML = renderFooter();
    }

    var year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }

    initNavbar();
  }

  window.toggleMenu = toggleMenu;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
