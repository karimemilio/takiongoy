/** @format */

$(document).ready(function () {
	/* Aca ponemos el codigo js que usa jquery (para programar eventos) */
	configurarInicio();
	$(".menu-hamburguesa").click(function (e) {
		$("#navbar ul").toggleClass("lista-sm");
	});

	function configurarInicio() {
		var urlPath = window.location.pathname; /* Obtengo el path */
		console.log(urlPath);
		$("nav a").each(function () {
			var href = $(this).attr(
				"href"
			); /* obtengo el atributo href de cada a del nav */
			console.log(href);
			var indice =
				urlPath.length -
				href.length; /* me quedo con la parte que me interesa */
			if (urlPath.substring(indice) === href) {
				/* si ambas partes son iguales */
				$(this)
					.closest("li")
					.addClass("active"); /* agrego la clase que implemente en css */
			}
		});
	}
});
