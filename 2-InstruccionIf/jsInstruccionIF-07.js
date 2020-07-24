function mostrar()
{
	//tomo la edad  
	let vEdad
	let vEsCi
	vEdad=parseInt(document.getElementById("txtIdEdad").value);
	vEsCi=(document.getElementById("estadoCivil").value);
	
	if (vEdad <18 && vEsCi != "Soltero" )
	{
	alert("Es muy pequeño para NO ser soltero");
	}
	/*if (vEsCi != "Soltero")
		{
		alert("Es muy pequeño para NO ser soltero");
	    }*/
	


}//FIN DE LA FUNCIÓN