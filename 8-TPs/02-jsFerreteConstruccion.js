/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var vLargo
 var vAncho
 var vAlambre
 vLargo= parseInt(document.getElementById("txtIdLargo").value);
 vAncho= parseInt(document.getElementById("txtIdAncho").value);
 vAlambre= ((vLargo + vAncho)*2)*3;
 alert("Cantidad de alambre a comprar " + vAlambre +"mts");  

}
function Circulo () 
{var vRadio
 var vPerimetro
 var vPi=3.14
 vRadio = parseInt(document.getElementById("txtIdRadio").value);
 vPerimetro= vPi * (vRadio * 2 );
 alert("La cantidad de alambre a comprar es " + vPerimetro*3);

}
function Materiales () 
{var vLargo  
  var vAncho
  var vCemento
  var vCal
 vLargo= parseInt(document.getElementById("txtIdLargo").value);
 vAncho= parseInt(document.getElementById("txtIdAncho").value);
 vCemento=(vLargo * vAncho)*2;
 vCal= (vLargo * vAncho)*3;
 alert("Senecesitan "+ vCemento + " bolsas de cemento y "+ vCal + " de cal");
	
}