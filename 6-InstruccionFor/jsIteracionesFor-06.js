function mostrar()
{
	let repeticion;
	let par=0;
repeticion =parseInt(prompt("ingrese el número de repeticiones"));
for(i=1;i<=repeticion;i++)
{
	if(i % 2 == 0)
	{
	   par++
	   alert("El numero "+ i +" es par" );
	}
	
}
alert("Se encontraron " + par + " pares");


}//FIN DE LA FUNCIÓN