(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var siteNav = document.getElementById("site-nav");
  var mobileBar = document.getElementById("mobile-bar");
  var offerSection = document.getElementById("preco") || document.getElementById("oferta");
  var faqItems = document.querySelectorAll(".faq-list details");

  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      siteNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    if (mobileBar && offerSection && window.innerWidth < 768) {
      var offerRect = offerSection.getBoundingClientRect();
      var offerVisible = offerRect.top < window.innerHeight * 0.6 && offerRect.bottom > 0;
      mobileBar.classList.toggle("is-hidden", offerVisible);
      mobileBar.setAttribute("aria-hidden", String(offerVisible));
    }
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      var target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      var offset = header ? header.offsetHeight + 12 : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
