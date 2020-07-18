/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var vDividendo;
	var vDivisor;
	
	vDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	vDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	alert ("El resto es " + vDividendo % vDivisor);
	/*var vNumDividendo;
	var vNumDivisor;
	var vResto;

	vNumDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	vNumDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	vResto = vNumDividendo % vNumDivisor
	
	alert("El resto es "+vResto);*/

}
