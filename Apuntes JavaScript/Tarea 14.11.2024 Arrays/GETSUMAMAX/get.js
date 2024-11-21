'use strict'


// function getMaxSubSum(arr=[]){
    
//     let maxsum=0;
//     let suma=0;
//     for ( let value of arr){
//         suma += value; // si lo hago asi =+ solo digo que busqye el maximo de los umeros , pero quiero sumarlo deberia ser ai +=
//         maxsum=Math.max(maxsum,suma);
//         if (suma < 0 ){
//             suma=0;
//         }
//     }
//     return maxsum;
// }

//  console.log(getMaxSubSum([0,1,2,3,4,5]));

 //Otra forma de hacerlo

function getMaxSubSum(arr){
    let maxsum=0; 
   
    for(let i=0;i<arr.length;i++){
        let acumulador = 0;//para que me acumule las sumas y despues compararlas.
       
        for(let j=i;j<arr.length;j++){//el i es por que necesitamos recorrer no desde el prinicpio para evitar suma lo que ya se sumó.
            acumulador += arr[j];
            maxsum= acumulador > maxsum ? acumulador:maxsum;
        }
        
    }
   console.log(maxsum);
}
getMaxSubSum([-1, 2, 3, -9]);
 