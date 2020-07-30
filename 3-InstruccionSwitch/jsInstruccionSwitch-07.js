function mostrar() {
	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);
	let vDestino = document.getElementById("txtIdDestino").value;
	let vPuntoCardinal;

	switch (vDestino) {
		case "Bariloche":
			vPuntoCardinal = "Oeste";
			break;
		case "Cataratas":
			vPuntoCardinal = "Norte";
			break;
		case "Mar del plata":
			vPuntoCardinal = "Este";
			break;
		case "Ushuaia":
			vPuntoCardinal = "Sur";
			break;
		default:
			alert("Esta provincia no esta contemplada");
			break;

	}
	alert("Se encuentra en el " + vPuntoCardinal);
}//FIN DE LA FUNCIÓN