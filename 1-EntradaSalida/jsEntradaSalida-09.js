/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{var sueldo;
	var aumento;
	
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	aumento = (sueldo * 10) / 100;
	document.getElementById("txtIdResultado").value=aumento;
	
    alert("El resultado es " + aumento);
}
