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