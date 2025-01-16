//Usando setTimeout anidado

'use strict'

//sintaxis let timerId = setTimeout(func|código, [retraso], [arg1], [arg2], ...)

function printNumbers(from,to){//estudiar
    let inicio=from;
    let id=setTimeout( function run(){
        console.log(inicio);
        if(inicio<to){
            setTimeout(run,1000);  
        }
            
        inicio++;
        
    },1000);
}
printNumbers(5,10);