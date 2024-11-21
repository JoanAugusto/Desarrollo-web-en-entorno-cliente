'use strict'

function convertir(value,type){
    value= +prompt("input an number");
    if (type==="string"){
        let numbertoString=String(value);
        console.log(numbertoString);
        console.log(typeof(numbertoString));
    }else if(type=="boolean"){
        let numbertoBool=Boolean(value);
        console.log(numbertoBool);
        console.log(typeof(numbertoBool));
    }   
}
convertir("","boolean");