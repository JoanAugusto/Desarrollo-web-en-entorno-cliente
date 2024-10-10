'use strict'

const edad=prompt('¿Que edad tienes?');

function comprobarEdadDentro(edad){
    if ( edad>=14 && edad<=90){
        alert('Dentro del rango');
    }
    
}
comprobarEdadDentro(edad); 