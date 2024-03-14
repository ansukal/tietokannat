function toggleNav() {
  // Piilota togglenavi, jos se on avoinna
  $('.navbar-collapse').collapse('hide');
}

$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) { // Näytä ylös-nappi, kun sivua on vieritetty 100px alaspäin
          $('.back-to-top').addClass('show');
      } else {
          $('.back-to-top').removeClass('show');
      }
  });

  $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},800); // Animaatio vierittää sivun ylös
      return false;
  });
});