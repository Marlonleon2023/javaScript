document.write("hola mundo 💖");

var nombre=prompt("ingrese su nombre : ")
var apellido=prompt("ingrese tu apellido: ")
var nacimiento=parseInt(prompt("ingrese el año de naciemiemto: "))

/**  var nombre="Marlon"
var apellido="Leon"  
const nacimmiento="2001"*/
let sueldo=120000
const fecha=new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento

document.write("Hola " + nombre + ". Su apellido es " + apellido + ". Nació en el año  " + nacimiento + ".  y tiene  " + edad + ". años de edad.  Su sueldo es de  " + sueldo);
document.write(". tiene "+ edad +". años de edad")





console.log(typeof(nombre))
console.log(typeof(nacimiento))