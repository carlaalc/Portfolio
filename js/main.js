$(window).on("scroll", function(){
	var distanciaDoTopo = $(window).scrollTop();

	if (distanciaDoTopo > 300) {
		distanciaDoTopo = 300;
	}

	$("#header_shadow").css("top", (distanciaDoTopo / 10) + "px");
})

var opcoesSR = {
	delay: 150,
	duration: 500,
	origin: 'bottom',
	distance: '50px',
	viewOffset: {
        bottom: 300
    }
}
ScrollReveal().reveal('#clientes-box', opcoesSR)
ScrollReveal().reveal('.feature', opcoesSR)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}