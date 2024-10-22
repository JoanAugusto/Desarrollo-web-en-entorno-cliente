'use Strict'

const inputRadio=prompt('Introduzca el valor del radio deseado:');
const numberPI=Math.PI;
let resolve='';

function circleArea(){
    
 resolve= numberPI*Number(inputRadio)**2;   
console.log(resolve);
}

circleArea();