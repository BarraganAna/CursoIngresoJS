/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let respuesta="si";
	let suma=0;
	let multiplicacion=1;
	let num;
	do {
		num = parseInt(prompt("Ingrese un número"));
		if(num>0)
		{
			suma = suma + num;
		}
		else{
            multiplicacion= multiplicacion*num;
		}
		
		respuesta = prompt("Ingresa otro? si/no");
	} while (respuesta == "si");
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = multiplicacion;


	//txtIdSuma.value=sumaPositivos;
	//txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN