/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador = 0;
	let acumulador = 0;
	let respuesta;
	let num;
	respuesta = 'si';
	do {
		num = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador + num;
		contador = contador + 1;
		respuesta = prompt("Ingresa otro? si/no");
	} while (respuesta == "si");
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
	//txtIdSuma.value=acumulador;

	//txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN