'use strict'

function getSecondsToday(){
    let dateNow= new Date();
    
    //Guardamos la fecha actual

    let today= new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate());
    //Diferencia
    let diff= Math.round((dateNow-today)/1000);

    return diff;
}

console.log(getSecondsToday());