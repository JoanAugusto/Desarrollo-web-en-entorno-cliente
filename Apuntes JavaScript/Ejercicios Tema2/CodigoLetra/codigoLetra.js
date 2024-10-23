'use strict'
let primerNumero='a'.charCodeAt();
let ultimoNumero='g'.charCodeAt();

for(let i=primerNumero;i<=ultimoNumero;i++){
    let recorridoASCII=i;
    let numeroChar=String.fromCharCode(recorridoASCII);
    console.log(numeroChar);
}


