'use strict'

let operations=(number1,number2)=>{
    number1=prompt("put a number:",0);
    number2=prompt("put a number:",0);

    let plus=Number(number1)+Number(number2);
    let rest=Number(number1)-Number(number2);
    let mult=Number(number1)*Number(number2);
    let div=Number(number1)/Number(number2);
    console.log(`suma:${plus}`+`\n`+ `resta:${rest}`+`\n`+ `multplicacion:${mult}`+`\n` +
                `division:${div}`+`\n`
    );
};

operations();