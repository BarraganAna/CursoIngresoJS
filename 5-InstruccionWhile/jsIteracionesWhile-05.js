/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexoIngresado;
	let sexo;
	do {
		sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	} while (!(sexoIngresado == "m" || sexoIngresado == "f"));

	if (sexoIngresado == "m") {
		sexo = "Masculino";
	}
	else {
		sexo = "Femenino";
	}
	txtIdSexo.value = sexo;
}//FIN DE LA FUNCIÓN