/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	/*let num=0;
	let numingre;
	let nummax;
	let nummin;
	let respuesta= "si"

	do
	{
	 numingre=parseInt(prompt("Ingrese un número: "));

	 if(num==0)
	
	 {
		 nummax=numingre;
		 nummin=numingre;
		 
		 num=1;
	 }
	 if(numingre>nummax)
	 {
		nummax=numingre;
	 }
	 else if(numingre<nummin){
      nummin=numingre;
	 }
	 
	 respuesta=prompt("Desea ingresar otro numero? si/no");
	}while(respuesta=="si");
	document.getElementById("txtIdMaximo").value= nummax;
	document.getElementById("txtIdMinimo").value= nummin;
	*/


	let num;
	let max;
	let min;
	let resp;
	let bandera = 0;
	
	do {
		num = parseInt(prompt("Ingrese un numero"));

		if (bandera == 0) {
			max = num
			min = num
			bandera=1;
		}

		if (num > max) { //(bandera==0||num>=max)
			max = num;   
		}
		else if (num < min) {//(bandera==0||num<=min)
			min = num;      //bandera=1
		}
		resp = prompt("Ingresa otro? si/no");
	} while (resp == "si");

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;




















	/*let num;
	let max;
	let min;
	let resp = "si";
	num = parseInt(prompt("Ingrese un numero"));
	max = num;
	min = num;
	resp = prompt("Ingresa otro? si/no");

	while (resp == "si") {
		num = parseInt(prompt("Ingrese un numero"))
		if (num < min) {
			min = num;
		}
		else if (num > max) {
			max = num;
		}
		resp = prompt("Ingresa otro? si/no");
	}
	document.getElementById("txtIdMaximo").value= max;
	document.getElementById("txtIdMinimo").value= min;*/
















	// declarar variables
	/*var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
}//FIN DE LA FUNCIÓN