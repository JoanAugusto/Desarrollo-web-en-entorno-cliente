'use strict'

const edad=prompt('¿Comprobación edad?');

    function comprobacionEdadFuera(edad){
        if(edad !=14 && edad !=90 ){
            alert('Fuera del rango');
        }else{
            alert('dentro del rango');
        }
        
        
    }
    comprobacionEdadFuera(edad);