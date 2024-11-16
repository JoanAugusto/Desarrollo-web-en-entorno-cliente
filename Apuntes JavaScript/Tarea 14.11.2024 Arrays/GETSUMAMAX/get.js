'use strict'


function getMaxSubSum(arr=[]){
    
    let maxsum=0;
    let suma=0;
    for ( let value of arr){
        suma += value; // si lo hago asi =+ solo digo que busqye el maximo de los umeros , pero quiero sumarlo deberia ser ai +=
        maxsum=Math.max(maxsum,suma);
        if (suma < 0 ){
            suma=0;
        }
    }
    return maxsum;
}

 console.log(getMaxSubSum([0,1,2,3,4,5]));