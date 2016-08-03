
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


/* ===== Modal ===== */

// Llama al modal
//var modal = document.getElementById('myModal');

// Llama al botón que abre el modal
//var btn = document.getElementById("myBtn");

// Llama al span que cierra el modal
//var span = document.getElementsByClassName("close")[0];

// Cuando hace click en el botón, se abre el modal 
//btn.onclick = function() {
//    modal.style.display = "block";
//}

// cuando se hace click en el span (x), cierra el modal
//span.onclick = function() {
//    modal.style.display = "none";
//}

// Cuando se hace click en cualquier parte fuera del modal, lo cierra
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}