'use strict'
/*
- Hacer una función llamada "cuadrado" que muestre un cuadrado dado el tamaño de su lado, como en el ejemplo siguiente usando tamaño 3:

***
***
***
*/

function cuadrado(num){
    for(let i=1;i<=num;i++){
        let linea=""; // crea linea vacia
      
        for(let j=1;j<=num;j++){
            linea+="*";//agregamos asteriscos en la linea vacia
          
      }
         
        console.log(linea);
    }
   
}
cuadrado(3);