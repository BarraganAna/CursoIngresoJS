/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var vPrecio1
 var vPrecio2
 var vPrecio3
 vPrecio1=parseInt(document.getElementById("txtIdPrecioUno").value);
 vPrecio2=parseInt(document.getElementById("txtIdPrecioDos").value);
 vPrecio3=parseInt(document.getElementById("txtIdPrecioTres").value);
 alert("La suma es " + (vPrecio1 + vPrecio2 + vPrecio3));
	
}
function Promedio () 
{var vPrecio1;
 var vPrecio2;
 var vPrecio3;
 var vPromedio;
 vPrecio1=parseInt(document.getElementById("txtIdPrecioUno").value);
 vPrecio2=parseInt(document.getElementById("txtIdPrecioDos").value);
 vPrecio3=parseInt(document.getElementById("txtIdPrecioTres").value);
 vPromedio= (vPrecio3 + vPrecio2 + vPrecio1)/3;
 alert("El promedio es "+ vPromedio);  
	
}
function PrecioFinal () 
{var vPrecio1
var vPrecio2
var vPrecio3
var vPreciofinal
 vPrecio1=parseInt(document.getElementById("txtIdPrecioUno").value);
 vPrecio2=parseInt(document.getElementById("txtIdPrecioDos").value);
 vPrecio3=parseInt(document.getElementById("txtIdPrecioTres").value);
 vPreciofinal= (vPrecio1 + vPrecio2 + vPrecio3)*1.21;
 alert("El precio final es " + vPreciofinal);
}