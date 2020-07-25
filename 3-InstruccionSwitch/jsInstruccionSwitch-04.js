function mostrar()
{
	//tomo el mes
	let vMes 
	vMes= document.getElementById("txtIdMes").value;
	switch (vMes)
	{
	 case "Febrero":
	  alert("Este mes tiene 29 o 28 dias");
	  break;
	 case "Abril":
	 case "Junio":
     case "Septiembre":
	 case "Noviembre":
	  alert("Este mes tiene 30 dias");
	  break;
	 default:
	  alert("Este mes tiene 31 dias");
	  break;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	
	



}//FIN DE LA FUNCIÓN