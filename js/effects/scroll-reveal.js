if (window.innerWidth <= 767) return;

const serviceItems = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 350}ms`;
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.25 });