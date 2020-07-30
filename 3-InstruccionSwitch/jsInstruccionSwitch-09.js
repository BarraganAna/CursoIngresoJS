function mostrar() {
	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;
	const cTarifa = 15000;
	let vPreciofinal;
	
	switch (vDestino)

	 {
		case "Bariloche":
			if (vEstacion == "Invierno") {
				vPreciofinal = cTarifa * 1.2;
			}
			else if (vEstacion == "Verano") {
				vPreciofinal = cTarifa * 0.8;
			}
			else {
				vPreciofinal = cTarifa * 1.1;
			}
			alert(vPreciofinal);
			
			break;
		/*case "Cataratas":
			if (vEstacion == "Invierno") {
				vPreciofinal = cTarifa * 0.1;
			}
			else {
				vPreciofinal = cTarifa * 1.1;
			}
			
			break;
		case "Mar del plata":
			if (vEstacion == "Invierno") {
				vPreciofinal = cTarifa * 0.2;
			}
			else if (vEstacion == "Verano") {
				vPreciofinal = cTarifa * 1.2;
			}
			else {
				vPreciofinal = cTarifa * 1.1;
			}
			
			break;
		case "Cordoba":
			if (vEstacion == "Invierno") {
				vPreciofinal = cTarifa * 0.1;
			}
			else if (vEstacion == "Verano") {
				vPreciofinal = cTarifa * 1.1;
			}
			else {
				vPreciofinal = cTarifa;
			}
			
			break;*/
			

	}//FIN DE LA FUNCIÓN
