

// Funktio navigaation piilottamiseen
function toggleNav() {
  // Piilota togglenavi, jos se on avoinna
  $('.navbar-collapse').collapse('hide');
}

// Napin hakeminen
let mybutton = document.getElementById("btn-back-to-top");

// Kun käyttäjä vierittää 20 pikseliä alaspäin sivulla, näytä nappi
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

// document.getElementById('contact-form').addEventListener('submit', function(event) {
  


  // Haetaan lomakkeen tiedot
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Tulostetaan tiedot konsoliin
  console.log('Nimi:', name);
  console.log('Sähköposti:', email);
  console.log('Viesti:', message);

//});


