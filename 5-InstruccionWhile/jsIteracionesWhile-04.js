/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let num

	do {
		num = parseInt(prompt("ingrese un número entre 0 y 10."));
		/*if (isNaN(num)) {
			num = -1;
		}*/

	} while (num < 0 || num > 9||isNaN(num));

	txtIdNumero.value = num;

}/*if(isNaN(num))
{
   num=-1
}*/
//FIN DE LA FUNCIÓN
//document.getElementById("txtIdNumero").value=num;