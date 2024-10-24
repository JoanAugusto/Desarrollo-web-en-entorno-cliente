'use strict'

let number=4;
let dibuja='';

for(let i=0 ;i<=number;i++){ //esto lo que hace no es dar espàcios , es solo dejar como huecos hasta abjo solo hace la mitad de un rombo
    let linea='';

    for (let j = 0; j < number - i -0.9; j++) {//esto en cambiosoluciona elproblema de los espavcios ocuadrar
                                                //pero number<i busca el problemade la visulización del ladoizquierdo
                                            // y ya el -0.9 busca losespcios que dar 
        linea += " ";
    }
 
 for (let j = 0; j < i*2-1; j++) {//esto lo que hace es dar los astricops pero claroson 2 lados 
                                //por lo cual debemos de multiplicar por2 pero se haara del doble de tmaño hay restar 1 tamaaño
        linea += "*";

}
console.log(linea);
}
for (let i = number -2; i >= 0; i--) {
    let linea = "";

    // Añadir espacios
    for (let j = 0; j < number - i - 1; j++) {
        linea += " ";
    }

    // Añadir asteriscos
    for (let j = 0; j < 2 * i + 1; j++) {
        linea += "*";
    }

    console.log(linea);
}
