'use strict'
//Concatenación de arrays: Crea una función que reciba dos arrays y los combine en uno solo sin usar métodos integrados de concatenación.

function sinConcat(arr1=[],arr2=[]){
    

    for(let value of arr2){
        arr1.push(value);
    }
    console.log(arr1);
}
sinConcat([1,2,3,4,5],["hola","opepe"]);


//Reto adicional (sin usar bucles): Dado un array de números, encuentra el valor más alto y el más bajo.

// function sinBucles(arr3=[]){
//     console.log(arr3.reduce((a,b) => (a>b)?a:b));
//     console.log(arr3.reduce((a,b) => (a<b)?a:b ));
// }

// sinBucles([2,4,5,6,4,5,20]);