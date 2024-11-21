'use strict'

const person={ // creamos el objeto persona que trendrá las keys (nombre,edad,ciudad)
    nombre:"Luis",
    edad:20,
    ciudad:"Madrid",
};

const getValues=()=>{
    let text="";
    for (let [keys,value] of Object.entries(person)){ //Entrieds devueove un array por lo que las propiedades del objeto seran devueltos en array
        text += `${keys}:${value}`+'\n';
        
    }
    console.log( text); 

}
getValues();