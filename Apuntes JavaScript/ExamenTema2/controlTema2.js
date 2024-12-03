'use strict'

/*
    2.- Crea una función llamada miMap que reciba dos parámetros: un array y una función de callback (función transformadora). La función miMap debe devolver un nuevo array que contenga el resultado de aplicar el callback a cada elemento del array original. No puedes usar el método map ni reduce para resolver este ejercicio.

Ejemplo de uso:

const numeros = [1, 2, 3, 4, 5];

const dobles = miMap(numeros, x => x * 2);

console.log(dobles); // Muestra: [2, 4, 6, 8, 10]
*/



function miMap(arr, callback) {
    // Creamos un nuevo array para almacenar los *2 de cada elemento del array
    const result = [];
    
    // Recorrer el array original
    for (let i = 0; i < arr.length; i++) {
       
        result.push(callback(arr[i]));//esto es porque lo llamaremos despues
    }

   
   console.log(result);
}




const dobles = miMap([1, 2, 3, 4, 5], x => x * 2);

console.log(dobles); //comprobamos con el jemeplo del gitbuj que esta abaja  del todo del ejercicio







/**
 * 1.- Crea una función llamada contarVocalesYConsonantes que reciba una cadena de texto y devuelva un objeto con dos propiedades: vocales y consonantes, que indiquen cuántas vocales y consonantes hay en la cadena.

Ejemplo de uso:

const resultado = contarVocalesYConsonantes("Desarrollo de aplicaciones web");

console.log(resultado); // Muestra: { vocales: 12, consonantes: 15 }

Indicaciones:

Ignora mayúsculas y minúsculas (usa toLowerCase()).
Los espacios, números y signos de puntuación no se cuentan.
Considera vocales: a, e, i, o, u.
Considera también la ñ.
 * 
 */



function contarVocalesYConsonantes(cadena){
    const Muestra={//creamos objeto Muestra
        vocales:function(){
            let vocales="aeiouAEIOU" //en este caso no utilizamos ascii
            for(let i=0;i<=cadena.length;i++){
                let char=cadena[i];//guardamos el recorrido para usarlo mas tarde
                if(vocales.includes(char)){//si las vocales de la variable estan en char hacemos count
                    let countVocales=char;
                    for(let values of countVocales ){
                        console.log(values.length);

                    }
                   
                   
                   
                }
                    
            }
        },

        consonantes:function(){
            let vocales1="aeiouAEIOU"
            for( let j=0;j<=cadena.length;j++){
                let char2=cadena[j];
                if(vocales1!=vocales1.includes(char2)){
                    let countConsonantes=char2;
                    let longitudConsonantes=countConsonantes;
                    console.log(longitudConsonantes); 
                }

                }

            },
        resultado:function(){
            console.log(`Muestra:{ Vocales:${this.vocales()}}`);
        }
        
    };
    console.log(Muestra.resultado());
}

contarVocalesYConsonantes("Desarrollo de aplicaciones web");


/**
 * 3.- Hacer una función flecha llamada marcoNumerico que dibujará en la consola  un cuadrado hueco con números en los bordes, dado como parámetro el tamaño de su lado. Ejemplos de uso (pongo . en lugar de espacio para que se aprecien mejor los espacios):

marcoNumerico(4 ); // mostrará por consola el siguiente cuadrado:

1234
5..6
7..8
9012

marcoNumerico(5); // mostrará por consola el siguiente cuadrado:

12345
6...7
8...9
0...1
23456
 
 * 
 */

let marcoNumerico= (tamaño)=>{
    for(let i=1;i<=tamaño;i++){//recorre las filas y añade filas
        let linea=" ";
        for(let j=1;j<=tamaño;j++){//pintamos dentro de las filas creadas numeros 
            if(i===1 || i===tamaño || j===1 || j===tamaño ){//if para hacer el espacio en medio
                linea+=`${j}`;
            }else{
                linea+=" ";
            }
        }
        console.log(linea);
    }
}
marcoNumerico(5);

