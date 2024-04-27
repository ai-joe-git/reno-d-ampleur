// script.js
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var scrollPosition = window.pageYOffset;
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop - window.innerHeight / 2;
      var sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
  
  window.addEventListener('load', function() {
    var form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Ajouter ici le code pour envoyer le formulaire
      alert('Formulaire envoyé avec succès !');
    });
  });