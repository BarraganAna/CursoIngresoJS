function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let vNota;
	let vMaximo=10;
	let vMinimo=1;
	vNota=Math.round(Math.random()*(vMaximo-vMinimo)+vMinimo);
	if(vNota==9 || vNota==10) 
	{
		alert(vNota + " EXCELENTE");
	}
	else if (vNota>=4)
	{
		alert(vNota + " APROBÓ")
	}
	else
	{
		alert(vNota + " Vamos, la proxima se puede");
	}
	



}//FIN DE LA FUNCIÓN