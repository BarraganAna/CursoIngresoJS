function mostrar()
{

let num
let divisor=0;
num=parseInt(prompt("Ingrese un numero"))

for(i=1;i<=num;i++)
{
  if(num%i==0)
  {
   divisor++
   alert("Se encontraron estos divisores: " + i)
  }
}
alert("Cantidad de divisores: "+ divisor);
}//FIN DE LA FUNCIÓN