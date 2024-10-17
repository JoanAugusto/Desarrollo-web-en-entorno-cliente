'use strict'

function segundoDAW(numero){
   
        if(numero%15===0)return 'Segundo DAW';
        else if(numero%3===0) return'Segundo';
        else if (numero%5==0) return 'DAW'; 
        else return '';
}

console.log(segundoDAW(15));