'use strict'

function numberRandomAleatorio(min , max){
    let random= Math.round(min +Math.random()*(max-min));
    console.log(random);
}
numberRandomAleatorio(2,5);


