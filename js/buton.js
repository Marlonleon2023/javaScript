function mostrar(){
   
    seguir="si"
    contador=0

    while(seguir=="si"){
        
        let cupos=parseInt(prompt("ingresa el numero de cupos a comprar: "))
        contador+=cupos

        if(contador==50){
            seguir="no"
        }
        document.write("cupos comprados "+cupos+"<br>"+"total: "+contador+"<br>")
    }
}