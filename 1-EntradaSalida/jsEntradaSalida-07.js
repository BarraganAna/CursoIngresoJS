/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
// let es diferente a var
// siempre vamos ausar las variables locales y siempre las vammos a declarar

{	var num1;
	var num2;
    num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	num2= parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La suma es " + (num1 + num2));
}

function restar()
{	var num1;
	var num2;
	num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	num2= parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La resta es " + (num1 - num2));
	
}

function multiplicar()
{ 	var num1;
	var num2;
	num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	num2= parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La multiplicacion es " + (num1 * num2));
	
}

function dividir()
{	var num1;
	var num2;
	var  resul
	num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	num2= parseFloat(document.getElementById("txtIdNumeroDos").value);
	resul= num1 / num2
	alert("La division es " + resul.toFixed(2));
	//revisar para usar la misma formula que arriba
	
}

