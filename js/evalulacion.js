/**la empresa buses del tolima tiene 2 tipos de buses 
 * 1 la vansbs con capacidad 15 personas
 * 2 bus grande con capacidad de 40 personas 
 * terminal solo un espacio 
 * escojer con cual bus voy a trabajar
 * verder cupos
*/

seguir='si'
contador=0
ingreso=parseInt(prompt("ingresa 1.vanbs 2.Bus grande 3.salir: "))
while(ingreso===1){
    

        cupos=parseInt(prompt("ingresa tu cupo"))
        
        contador+=cupos
        alert("cupos"+contador)
        if(contador===15){
            alert("cupos llenos")
            break
        }
        
}

while(ingreso===2){
        cupos=parseInt(prompt("ingresa tu cupo"))
        contador+=cupos
        alert("cupos"+contador)

        if(contador===40){
            alert("cupos llenos")
        break
        }
}
        



