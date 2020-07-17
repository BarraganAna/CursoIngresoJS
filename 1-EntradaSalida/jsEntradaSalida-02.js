/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// declarar una variable
	var vNombre;
	var vApellido; 
    // hacer una asignacion

	vNombre = prompt("Nombre","Ingrese un Nombre"); // Asignardo prompt a vNombre
	alert(vNombre);
	
	// Pisar una varible
	vApellido = prompt("Apellido","Ingrese un Apellido");
	alert(vApellido);
	
}

