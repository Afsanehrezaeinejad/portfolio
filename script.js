(() => {
  const navLinks = [...document.querySelectorAll(".section-nav a[data-section]")];
  const sections = navLinks.map((link) => document.getElementById(link.dataset.section)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        if (link.dataset.section === visible.target.id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-20% 0px -62%", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
