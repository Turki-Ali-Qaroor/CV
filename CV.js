document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header, section, footer");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
