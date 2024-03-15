function toggleNav() {
  // Piilota togglenavi, jos se on avoinna
  $('.navbar-collapse').collapse('hide');
}

let mybutton = document.getElementById("scrollToTopBtn");

// Kun käyttäjä vierittää 50 pikseliä alaspäin sivulla, näytä nappi
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Kun käyttäjä klikkaa nappia, vieritä ylös
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
