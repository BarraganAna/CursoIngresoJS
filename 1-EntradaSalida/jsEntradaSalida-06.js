/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   var vNUm1;
	var vNum2;
	var VRes;

	vNUm1 = document.getElementById("txtIdNumeroUno").value; 
	vNum2 = document.getElementById("txtIdNumeroDos").value; 
	vNUm1= parseInt(vNUm1);
	vNum2= parseInt(vNum2);
    vRes= vNUm1 + vNum2;
	alert("La suma es " + vRes);
	/*otra opcion 
	var num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La suma es "+ (num1+num2));
	 otra forma de concatenar alert("La suma es " + (Res1 + Res2));
	 alert ("la suma.." + (pasreint (num1) + parseint(numb2)))
	*/


	
}

