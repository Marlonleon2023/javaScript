function mostrar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opcion = parseInt(document.getElementById("operacion").value);
    
    let res = document.getElementById("result");

    switch (opcion) {
        case 1:
            resultado = division(n1, n2);
            break;
        case 2:
            resultado = suma(n1, n2);
            break;
        case 3:
            resultado = resta(n1, n2);
            break;
        case 4:
            resultado = multiplicar(n1, n2);
            break;
        case 5:
            resultado = potencia(n1, n2);
            break;
        default:
            res.innerHTML = 'Seleccione una opción valida';
            return;
    }
    res.innerHTML = `Total: ${resultado}`;
}

function suma(n1, n2) {
    return n1 + n2;
}

function division(n1, n2) {
    if (n2 === 0) {
        return 'No se puede dividir por cero';
    }
    return n1 / n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function potencia(n1, n2) {
    return Math.pow(n1, n2);
}