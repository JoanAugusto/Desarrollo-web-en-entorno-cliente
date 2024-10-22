'use strict'

const number1=prompt('Introduzca un numero:');
const number2=prompt('Introduzca un segundo numero:');
const number3=prompt('Introduzca un tercer numero:');

function OrderedNumbers(){
    if(number1>number2 && number1>number3 && number2>number3){
        console.log(`Numeros en orden:${number1},${number2}, ${number3}`);

    }else if(number1>number2 && number1>number3 && number2<number3){

        console.log(`Numeros en orden:${number1},${number3}, ${number2}`);

    }else if(number2>number1 && number2>number3 && number1 > number3){

        console.log(`Numeros en orden:${number2},${number1}, ${number3}`);

    }else if(number2>number1 && number2>number3 && number1 < number3){
        console.log(`Numeros en orden:${number2},${number3}, ${number1}`);
    } else if(number3>number1 && number3>number2 && number1>number2){

        console.log(`Numeros en orden:${number3},${number1}, ${number2}`);
    }else if(number3>number1 && number3>number2 && number1<number2){
        console.log(`Numeros en orden:${number3},${number2}, ${number1}`); 
    }
}

OrderedNumbers();