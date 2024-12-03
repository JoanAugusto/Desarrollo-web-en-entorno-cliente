'use strict'

function random(min,max){
    
     let num= min + Math.random() *(max-min);

      let acortar=num.toFixed(3);
        console.log(acortar);
}


random(3,6);