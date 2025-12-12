document.addEventListener('DOMContentLoaded', function () {
  console.log('Zoe Leung — Interactive Media portfolio ready.');

  var heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.classList.add('hero-title--visible');
  }

  var cards = document.querySelectorAll('.card');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('card--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(function (card) {
    observer.observe(card);
  });
});
