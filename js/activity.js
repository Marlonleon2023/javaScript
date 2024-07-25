//capture el nombre de un estudiaste e ingrese 3 notas y calcular el promedio
//si el pomerdio de 0 a 3 no aprobo
//promedio 3.1 a 3,5 recuperacion
//promedio 3.6 a 5 aprobo

var estudiante=prompt("ingresa tu nombre estudiante: ")
var nota1=parseFloat(prompt("ingresa tu primer nota"))
var nota2=parseFloat(prompt("ingresa tu segunda nota"))
var nota3=parseFloat(prompt("ingresa tu tercera nota"))

let promedio=(nota1+nota2+nota3)/3

if (promedio<=3) {
    document.write(" no aprobo"+" el estudiante "+ estudiante + " con un promedio de : " + promedio )
}else if  (promedio<=3.5){
    document.write(" recuperacion "+" el estudiante "+ estudiante + " con un promedio de : " + promedio )
}else if(promedio>=3.6){
    document.write("aprobo "+" el estudiante "+ estudiante + " con un promedio de : " + promedio)
}