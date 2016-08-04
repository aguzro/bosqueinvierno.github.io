
/*===== Cambiar color de nav ===== //http://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".nav-top").css("background-color", "#00796B"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".nav-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });
    });
*/


/*===== Smooth Scrolling =====*/
$(document).ready(function(){
  $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});   
});
