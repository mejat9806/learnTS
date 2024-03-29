document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        /*  if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        } */
      });
    },
    { rootMargin: "-100px" },
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
