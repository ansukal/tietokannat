function toggleNav() {
  // Piilota togglenavi, jos se on avoinna
  $('.navbar-collapse').collapse('hide');
}

$(document).ready(function () {
  // Näytä tai piilota ylös-nappi sen mukaan, onko käyttäjä jo ylhäällä vai ei
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) { // Jos käyttäjä on vierittänyt yli 100 pikseliä
          $('#scrollToTopBtn').fadeIn();
      } else {
          $('#scrollToTopBtn').fadeOut();
      }
  });

  // Kun käyttäjä klikkaa ylös-nappia, vieritä ylös
  function scrollToTop() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
  }
});