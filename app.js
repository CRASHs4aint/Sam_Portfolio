const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // observer.unobserve(entry.target); // optional: only run once
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
