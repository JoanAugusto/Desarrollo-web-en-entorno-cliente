'use strict'
/*
    - Hacer una función llamada "rombo" que muestre un rombo dado el tamaño de su parte creciente. Ejemplo, para tamaño 4 se mostrará:

   *
  ***
 *****
*******
 *****
  ***
   *
*/
function rombo2(tamaño){
    for(let i=1;i<=tamaño;i++){
        let linea=" ";
        for(let k=1;k<=tamaño-i;k++){
            linea+=" ";
        }
        for(let j=1;j<=i*2-1;j++){
            linea+="*";

        }
        console.log(linea);
    }
    for( let n=tamaño-1;n>=0;n--){
        let linea1="";
        for(let p=1;p<=tamaño-n+2;p++){
            linea1+=" ";
        }
        for(let l=tamaño-1;l<=n*2-1;l++){
            linea1+="*";
        }
        console.log(linea1);
    }
}
rombo2(4 );