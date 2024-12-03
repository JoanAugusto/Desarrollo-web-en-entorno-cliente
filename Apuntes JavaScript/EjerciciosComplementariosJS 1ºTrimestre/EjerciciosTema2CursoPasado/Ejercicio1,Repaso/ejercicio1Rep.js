'use strict'
/**
 * 1.- Haz una función llamada mezclaArrays, tendrá 2 parámetros de entrada: son 2 arrays ordenados. Esta función no modifica los arrays de entrada y devuelve un array nuevo ordenado con todos los elementos de los arrays. No podéis usar ningún método de los arrays. Prueba su funcionamiento con los siguientes ejemplos de uso:

mezclaArrays([2, 2, 30, 64], [1, 10];  // devuelve un array nuevo ordenado numéricamente [1, 2, 2, 10, 30, 64] 
 * 
 */
function mezclaArrays( arr1=[],arr2=[]){
    //creamos el nuevo array que guardaremos el array

    const newArray=[];
    //guardamos los valores del array 
    for(let i=0;i<=arr1.length-1;i++){
        newArray[newArray.length]=arr1[i];
        
    }
    for(let j=0;j<=arr2.length-1;j++){
        newArray[newArray.length]=arr2[j];
    }
   

        //metodo burbuja
    for(let n=0;n<=newArray.length;n++){//nos ayuda a recorrer todo el arrya
        for(let k=0;k<=newArray-n-1;k++){//noas ayuda iterar los elemnto de adentro
            if(newArray[k]>newArray[k+1]){//comnparacion con el primero y el siguiente
                let aux=newArray[k];//guardamos el prmero en el aux
                newArray[k]=newArray[k+1];//
                newArray[k+1]=aux
            }
        }
    }
    console.log(newArray);
}

mezclaArrays([2,2,30,64],[1,10]);