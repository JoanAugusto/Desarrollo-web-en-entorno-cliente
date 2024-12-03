'use strict'
//Buscar en array: Escribe una función que reciba un array de números y devuelva true si un número específico está en el array, o false si no.

function buscar(arr=[],busca=""){
    for(let values of arr){
        
        if( values===busca || values===busca|| values===busca){
            return true;
        }else{
            return false
        }
    }
}
console.log(buscar(["hola","joal","jons"],"h"));