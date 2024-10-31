
'use strict';

// function numberRandom(number) {
//   let random = Math.random() * number;
//   console.log(random);
// }

// numberRandom(1); 

function numberRandomAleatorio(min , max){
    let random= min +Math.random()* (max-min);
    console.log(random);
}
numberRandomAleatorio(2,5);