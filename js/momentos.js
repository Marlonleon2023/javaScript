var nacimiento = prompt("Ingresa tu año de nacimiento: ");
var nombre=prompt("ingrese su nombre : ")

const fecha = new Date();
const fechaActual = fecha.getFullYear();


let edad = fechaActual - nacimiento;


if (edad <= 5) {
    document.write("Eres un niño. Tu edad es: " + edad+" tu nombre es ",nombre);
} else if (edad <= 17) { 
    document.write("Eres un joven. Tu edad es: " + edad+" tu nombre es ",nombre);
} else {
    document.write("Eres un adulto. Tu edad es: " + edad+" tu nombre es ",nombre);
}