function mostrar()
{
	//tomo la edad  
	let vEdad
	vEdad=parseInt(document.getElementById("txtIdEdad").value);
if( vEdad <13 )
{
	alert ("Es niño");
}
else if (vEdad <18)

   //if(vEdad >=13 && vEdad<=17)
   {
    alert("Es alolescente");
   }
   else if (vEdad <65)
   {
	 alert("Es mayor");  
   }
   else
   {
	alert("Es adulto mayor");
   }







}//FIN DE LA FUNCIÓN