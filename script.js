const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = reducedMotion ? "0ms" : `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

const revealPassedElements = () => {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 1.08) {
      element.classList.add("is-visible");
      revealObserver.unobserve(element);
    }
  });
};

window.addEventListener("scroll", revealPassedElements, { passive: true });
revealPassedElements();

const formatNumber = (value, decimal) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: decimal ? 1 : 0,
    maximumFractionDigits: decimal ? 1 : 0,
  }).format(value);

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      const suffix = element.dataset.suffix ?? "";
      const decimal = !Number.isInteger(target);
      const duration = reducedMotion ? 0 : 1300;
      const start = performance.now();

      const tick = (now) => {
        const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${formatNumber(target * eased, decimal)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(element);
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll("[data-count]").forEach((element) => countObserver.observe(element));
