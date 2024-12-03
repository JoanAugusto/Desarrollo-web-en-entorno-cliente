'use strict'

/**
 * - Hacer una función llamada "cuadradoHueco" que muestre un cuadrado dado el tamaño de su lado, como en el ejemplo siguiente usando tamaño 4:

****
*  *
*  *
****
 */

function cuadradoHueco(tamaño){//hay que verlo como una matriz 
    for(let  i=1;i<=tamaño;i++){//hara las lineas del cuadrado segubn el tamaño eligido
        let linea=" ";
        for( let j=1;j<=tamaño;j++){//segubnfo for pintrá pero ojo segun la condicion repito pensar com una matriz
           if(i===1 || i===tamaño || j===1 || j===tamaño){
            linea+="*";
           }else{
            linea+=" ";
           }
        }
        console.log(linea);
    }
}
cuadradoHueco(4);