'use strict'

let typeNumber=(inputNumber)=>{
    inputNumber=prompt("Input an any number");
    let castingStringtoNumber=Number(inputNumber);
       return (castingStringtoNumber<0)? "Este numero e negativo":
                (castingStringtoNumber==0)?"Este numero es un cero":
                    "Este numero es positivo";

};

console.log(typeNumber());