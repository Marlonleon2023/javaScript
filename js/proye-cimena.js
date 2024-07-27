//crear una aplicacion para un cinema con son 50 cupos

contador=0
seguir="si"


while(seguir=="si"){

    let cupos=parseInt(prompt("ingresa el numero de cupos a comprar: "))
    contador+=cupos

    if(contador==50){
        seguir="no"
    }
    document.write("cupos llenos "+cupos)
}









