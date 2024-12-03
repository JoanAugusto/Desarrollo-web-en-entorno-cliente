'use strict'    

/**
 * 2.- Haz una función llamada miSplice, se trata de hacer nuestra propia versión del método splice de los arrays. La función tendrá 3 parámetros: el array, principio y ElementosAEliminar. Modifica el  array eliminando tantos elementos como indique ElementosAEliminar desde la posición principio. No podéis usar el método splice de los arrays para solucionar este ejercicio. Prueba su funcionamiento con los siguientes ejemplos de uso:

const a = [7, 9, 14, 18, 14, 23, 1];

miSplice(a, 2, 3); 

console.log(a); // Muestra [7, 9, 23, 1];
 * 
 */

function mySplice(arr=[],principio,ElementosAEliminar){
    const copyArr=[...arr];

    for(let i=principio ; i<=ElementosAEliminar+principio-1;i++){
       
       for(let j=i;j<=copyArr.length-1;j++){//se encargara de envir los elementos a la izquierda
            copyArr[j]=copyArr[j+1];//ira hacuiendo la sustitucxion de cada elemtno para a trerlo a la izquierda,
           
       }
     copyArr.length=copyArr.length-1;//por los elementos duplicados , los que eliminamos estan en un espaci que el array no cocupa 
}
console.log(copyArr);
}

mySplice([7, 9, 14, 18, 14, 23, 1],2, 3);