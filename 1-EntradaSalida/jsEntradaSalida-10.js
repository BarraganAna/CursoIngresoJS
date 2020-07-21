/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ var vimporte
  var vdescuento
  var vresultado
  vimporte = parseInt(document.getElementById("txtIdImporte").value);
  vdescuento = (vimporte*0.25);
  vresultado = vimporte - vdescuento
  document.getElementById("txtIdResultado").value= vresultado;
	alert("Resultado " + vresultado);
}
