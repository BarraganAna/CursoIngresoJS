
function mostrar() {
    let tipo;
    let precio;
    let marca;
    let fabricante;
    let cantidad;
    let cantmin;
    let cantmax=0;
    let cantmaxjabon;
    let cantjabon;
    let cantalchol;
    let cantbarbijo;
    let flagal = 0;

    for (i = 0; i < 5; i++) {
        do {
            tipo = prompt("Ingrese el tipo: ");


        } while (tipo != "jabon" && tipo != "alcohol" && tipo != "barbijo");
        marca = prompt("Ingrese una marca");
        fabricante = prompt("Ingrese el fabricante");
        do {
            cantidad = parseInt(prompt("Ingrese la cantidad"));

        } while (cantidad < 100 || cantidad > 300);
        do {
            precio = parseInt(prompt("Ingrese el precio"));
        } while (precio < 0 || precio > 1000);
        
        switch (tipo) {
            case "alcohol":
                if(flagal==0 || cantidad>cantalchol)
                {
                    cantalchol=cantidad;
                    flagal=1;
                }
            case "barbijo":
    
            case "jabon":
    
        }
    
    }
  
    

    

}
