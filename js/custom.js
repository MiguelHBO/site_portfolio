
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });


    document.addEventListener("DOMContentLoaded", function() {
      var navbar = document.getElementById("completNav");
    
      window.onscroll = function() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
          navbar.style.backgroundColor = "#333"; // Cor desejada quando rolar para baixo
        } else {
          navbar.style.backgroundColor = "transparent"; // Cor transparente quando no topo
        }
      };
    });
    

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);
