'use strict';

let n=+prompt('Please give me a number:');
// let primo=[];


// for(let i=2;i<=num;i++){ //Codigo de chatGPT, pero aun asi no entiendo.
//     let esPrimo=true;
//    for(let j=2;j<i;j++){
//     if(num % j ===0){
//          esPrimo=false;
//         break;

//     }
//    }
//    if(esPrimo){
//     primo.push(i);
//    }
//    console.log('Números primos hasta ' + num + ':', primo);
// }

function esPrimo(numero){
    for(let j = 2;j<=numero/2;j++){
        if(numero % j == 0) return false; //no es primo?, se interrumpe el bucle
    }
    return true; //si llegal al final si se mostrara los primos .
}
const primos=[];

for(let i = 1;i<=n;i++){//Por cada i....
    if (esPrimo(i)){//primo
        primos.push(i);
    }
    
}
alert(primos);