function mostrar() {
	let Destino = document.getElementById("txtIdDestino").value;
	let Estacion = document.getElementById("txtIdEstacion").value;

	switch (Estacion) {
		case "Invierno":
			if (Destino == "Bariloche") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (Destino == "Cataratas" || Destino == "Mar del plata") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;
		case "Primavera":
			if (Destino == "Bariloche") {
				alert("No se viaja");
			}
			else {
				alert("Se viaja");
			}
			break;
		default:
			alert("Se viaja");
			break;

	}

}//FIN DE LA FUNCIÓN