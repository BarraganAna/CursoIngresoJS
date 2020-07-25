function mostrar()
{
	//tomo el mes
	let vMes
	vMes=document.getElementById("txtIdMes").value;
	
	switch(vMes)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		 alert("Falta para el invierno");
		 break;
		case "Julio":
		case "Agosto":
		 alert("Abrigate que hace frio");
		 break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":	
		 alert("Ya pasamos el frio, ahora hace calor");
		 


	}
	
	
	
	
	
	
	
	
	
	/*var mesDelAño =txtIdMes.value;
	alert(mesDelAño);*/




}//FIN DE LA FUNCIÓN