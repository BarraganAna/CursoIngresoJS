/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.si
4-Cantidad de negativos.si
5-Cantidad de ceros.si
6-Cantidad de números pares.si
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numIngre
	let respuesta="si"
	let positivo;
	let negativo;
	let par=0;
	let cantpositivo=0;
	let cantnegativo=0;
	let cantceros=0;
	let sumanegativo=0;
	let sumapositivo=0;
	
	do 
	{
		numIngre=parseInt(prompt("Ingrese un número "));
		if(numIngre>0)
		{
		 positivo=numIngre;
		 cantpositivo=cantpositivo+1;
		 sumapositivo=sumapositivo+numIngre;
		}
		else if(numIngre==0)
		{
         cantceros=cantceros+1;
		}
		else{
			negativo=numIngre;
			cantnegativo=cantnegativo+1;
			sumanegativo=numIngre+sumanegativo;
		}
		if(numIngre % 2 == 0)
		{
			par= par+1;
		}

     respuesta=prompt("Desea ingresar mas numeros: si/no");

	} while (respuesta=="si");
	

	document.write("La suma de negativos es: "+sumanegativo + "<br>");
	document.write("La suma de positivos es: "+sumapositivo + "<br>");
	document.write("La cantidad de positivos es: "+cantpositivo + "<br>");
	document.write("La cantidad de negativos es: "+cantnegativo + "<br>");
	document.write("La cantidad de ceros es: "+cantceros+ "<br>");
	document.write("La cantidad de numeros pares es: "+par + "<br>");
	document.write("El promedio de los positivos es: "+sumapositivo/cantpositivo + "<br>");
	document.write("El promedio de los negativos es: "+sumanegativo/cantnegativo + "<br>");
	document.write("La diferencia es: "+(sumapositivo +(sumanegativo))+ "<br>");
	/*alert(negativo);
	alert(acumuladorneg + "negativo");
	alert(acumuladorpos + "positivo");
	alert(positivo);*/
	//alert(cantceros);
	
	
	
	
	
	
	
	
	
	
	
	//declarar contadores y variables 
	/*var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);*/
}//FIN DE LA FUNCIÓN