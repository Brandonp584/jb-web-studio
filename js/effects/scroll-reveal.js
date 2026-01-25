if (window.innerWidth > 767) {
  const serviceItems = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 350}ms`;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  // Observe each service item
  serviceItems.forEach(item => observer.observe(item));
}