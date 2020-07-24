function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	let vMaximo=10;
	let vMinimo=1;
	let vNum;
	vNum= Math.round(Math.random()*(vMaximo-vMinimo)+vMinimo );

	alert(vNum);	

}//FIN DE LA FUNCIÓN