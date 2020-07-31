/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	/*
	let Clave = prompt("Ingrese la clave");
	
	let i = 0;
	while (i < 1) {
		 
		i++;

		if (Clave == "utn750") {
			alert("La clave es correcta");
		}
		else {
			alert("La clave es incorrecta, intente nuevamente");
		}

	}*/

	/*let clave;
		clave = prompt("Ingrese la clave");//variable de control
	
		while (clave != "utn750") {
			clave = prompt("Ingrese la clave");
	
		}*/
	let clave;
	do {
		clave = prompt("Ingrese la clave");
	} while (clave != "utn750");
	alert("La clave es correcta");

}//FIN DE LA FUNCIÓN
