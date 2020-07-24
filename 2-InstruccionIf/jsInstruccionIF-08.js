function mostrar()
{
	//tomo la edad  
	let vEdad
	let vEsCi
	vEdad=parseInt(document.getElementById("txtIdEdad").value);
	vEsCi=document.getElementById("estadoCivil").value;
	
	if (vEdad >18 && vEsCi =="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	
/* if(!(Vedad<18|| vEsCi!="soltero")) Lo mismo pero negando*/
	


}//FIN DE LA FUNCIÓN