'use strict'

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

function multiplyNumeric(obj){
    for(let keys in obj){
        if(typeof(obj[keys]==Number)){
            console.log(obj[keys]*2);
        }
    
    }
}

multiplyNumeric(menu);