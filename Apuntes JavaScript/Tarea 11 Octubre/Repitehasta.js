'use strict'
/*Escribe un bucle que solicite un número mayor que 100. Si el usuario ingresa otro número – pídele que ingrese un valor de nuevo.

El bucle debe pedir un número hasta que el usuario ingrese un número mayor que 100 o bien cancele la entrada/ingrese una linea vacía.

Aquí podemos asumir que el usuario solo ingresará números. No hay necesidad de implementar un manejo especial para entradas no numéricas en esta tarea.*/ 


function checkHighNumber(){
    
    let limitNumber=100;
    while (true){
       
        const inputNumber=prompt('Please write a high number:');

        if (inputNumber > limitNumber || inputNumber===null) break;

        
            
    }


}

checkHighNumber();