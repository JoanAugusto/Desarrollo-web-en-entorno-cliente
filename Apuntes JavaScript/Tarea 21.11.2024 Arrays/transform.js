'use strict'

function camelize(str){
     let text="";
    let arr= str.split('-');
  
    
    for (let word of arr){ //esto del array arr
        text += word    
    }
    console.log(text);
    
    let upper=text.slice(10);
    
    console.log(upper);
    
}
camelize('background-color');
