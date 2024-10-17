'use strict'

function segundoDAW(numero){
   
        if(numero%15===0)return 'Segundo DAW';
         if(numero%3===0) return'Segundo';
         if (numero%5===0) return 'DAW'; 
         return '';
}

console.log(segundoDAW(15));