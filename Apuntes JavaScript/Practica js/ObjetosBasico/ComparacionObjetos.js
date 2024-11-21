'use strict'

function Compared(arr,arr2){
    let arrKey=""; //Creamos variables de scope local para almacenar datos.
    let arrKey2="";
    //Y tambien para value
    let value1="";
    let value2="";
    //Utilizamos un solo for in
    for (let key1 in arr){
        arrKey += key1;
        value1 += arr[key1];
    }
    for (let key2 in arr2){
        arrKey2 += key2;
        value2 += arr2[key2];
    }
    //Comparación con keys 
    if(arrKey !== arrKey2){
        console.log("No son iguales");
    }else{
        console.log( "son iguales las keys");
    }
    //Haremos lo mismo para la sección del los values
    if(value1 !== value2){
        console.log('No son las values iguales ');
    } else{
        console.log("Si son iguales las values");
    }
}

Compared({nombre:'Joan',edad:1,nacionalidad:"Francia"},{nombre:'Joan',edad:1,nacionalidad:"Francia"});



//Codig mejoprdo sehun ChatGPT
// 'use strict';

// function compararObjetos(obj1, obj2) {
//     // Obtener claves y valores de ambos objetos
//     const claves1 = Object.keys(obj1);
//     const claves2 = Object.keys(obj2);
//     const valores1 = Object.values(obj1);
//     const valores2 = Object.values(obj2);

//     // Comparar claves
//     if (claves1.length !== claves2.length || !claves1.every((clave) => claves2.includes(clave))) {
//         console.log("Las claves de los objetos no son iguales.");
//         return;
//     } else {
//         console.log("Las claves de los objetos son iguales.");
//     }

//     // Comparar valores
//     if (valores1.length !== valores2.length || !valores1.every((valor, index) => valor === valores2[index])) {
//         console.log("Los valores de los objetos no son iguales.");
//     } else {
//         console.log("Los valores de los objetos son iguales.");
//     }
// }

// // Prueba:
// const obj1 = { nombre: 'Joan', edad: 1, nacionalidad: "Francia" };
// const obj2 = { nombre: 'Joan', edad: 1, nacionalidad: "Francia" };
// const obj3 = { nombre: 'Joan', edad: 2, nacionalidad: "España" };

// compararObjetos(obj1, obj2); // Claves y valores iguales
// compararObjetos(obj1, obj3); // Valores diferentes
