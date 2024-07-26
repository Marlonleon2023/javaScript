
// for normalito para  numeros
for (let x=0; x<11; x++){
    console.log(x);
}

// white normal
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}



//do - while


let d=0;

do{
    console.log(d)
    d++

}while(d<5)


//for of  iterar objetos array y listas 
const array = ['a','b','c','d']
for (const element of array){
    console.log(element)
}

//for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.


const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`${key}: ${object[key]}`);
    }
}



const productos=['producto1','productos2','producto3','producto4'];

for(const product of productos){
    console.log(product)
}


const detallesProductos = {
    nombre: 'Producto 1',
    precio: 100,
    disponibilidad: 'En stock'
};

for (const key in detallesProductos) {
    if (detallesProductos.hasOwnProperty(key)) {
        console.log(`${key}: ${detallesProductos[key]}`);
    }
}
