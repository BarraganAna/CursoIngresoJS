function mostrar() {

	let vDestino = document.getElementById("txtIdDestino").value;
	let vTemperatura;
	switch (vDestino) {
		case "Bariloche":
		case "Ushuaia":
			vTemperatura = "Frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			vTemperatura = "Calor";
			break;
		default:
			alert("Esta provincia no esta contemplada");
			break;
	}

	alert("En esta provincia hace " + vTemperatura);

	/*let vDestino = document.getElementById("txtIdDestino").value;
	let vTemperatura
	if (vDestino == "Bariloche" || vDestino == "Ushuaia") {
		vTemperatura = "Hace frío";
	}
	else {
		vTemperatura = "Hace calor";
	}

	alert(vTemperatura)*/




}//FIN DE LA FUNCIÓN