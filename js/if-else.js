var nacimiento = prompt("Ingresa tu año de nacimiento: ");


const fecha = new Date();
const fechaActual = fecha.getFullYear();


let edad = fechaActual - nacimiento;



if(edad<18){
    document.write("eres un niño"+" tu edad es: ",edad)
}
else{
    document.write("eres un adulto"+" tu edad es: ",edad)
}

