'use strict'

function extractCurrencyValue(str){
    let extract=str.substr(1);

     let parserToNumber=Number(extract);

    console.log(parserToNumber);
   
    
}
extractCurrencyValue('$120');