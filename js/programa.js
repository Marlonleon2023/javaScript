
var seguir = "si";

while (seguir == "si") {
    var numero = parseInt(prompt("Escriba 1 para sumar los valores o 2 para salir: "));
    
    if (numero == 1) {
        var cantidad = parseInt(prompt("Ingresa el número de sumandos: "));
        let suma = 0; 

        for (var i = 1; i <= cantidad; i++) {
            var valor = parseFloat(prompt("Ingresa el valor " + i + ": "));
            suma += valor;
        }

        document.write("La suma de los valores es: " + suma + "<br>");
    } else  {
        seguir = "no";
    }
}

