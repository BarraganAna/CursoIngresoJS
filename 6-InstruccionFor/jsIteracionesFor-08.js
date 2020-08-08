function mostrar() {
	let num
	let contador = 0;

	do {
		num = parseInt(prompt("Ingrese un numero"));

	} while (isNaN(num) || num <= 1);
	for (i = 2; i <= num; i++) {//revisar el num de la iteracion
		if (num % i == 0) {
			contador++
			console.log(i);

		}
	}
	if (contador == 1) {
		alert("El numero " + num + " es primo");

	}
	else {
		alert("El numero " + num + " NO es primo");
	}

}//FIN DE LA FUNCIÓN