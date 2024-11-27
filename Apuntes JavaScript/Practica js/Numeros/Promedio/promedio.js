'use strict'

function promedio(num1,num2,num3,num4){
    let calculated=0;
    let media=0;
    
    const arr=[];
    num1=Number(prompt("Introduce un numero"));
    num2=Number(prompt("Introduce otro numero"));
    num3=Number(prompt("Introduce otro numero"));
    num4=Number(prompt("Introduce otro numero"));

    arr.push(num1,num2,num3,num4);
    console.log(arr);

    for(let i=0;i<=arr.length;i++){
        calculated += arr[i];
        if(!isNaN(calculated)){
            media=calculated/arr.length;
            
        }
    }
    console.log(`La media es:${media}`);
    

}
promedio();