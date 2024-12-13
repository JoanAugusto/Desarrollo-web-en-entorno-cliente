/*
Ejercicios de esta prueba:

1.- Haz una función llamada separa, será nuestra versión del método split de los strings. Tendrá 2 parámetros de entrada: el primero, será una cadena de texto; el segundo, será también una cadena de texto y será el separador con el que dividiremos el primer parámetro. La función separa devolverá un array de cadenas. Ejemplos de funcionamiento:

 console.log( separa("Hola Don Pepito, hola", " ") );  // (el segundo parámetro es un espacio) devuelve el array ["Hola", "Don", "Pepito,", "hola"] 
 console.log( separa("sal-pimienta-limón-", "-") );  // devuelve el array ["sal", "pimienta", "limón", ""] 
 console.log( separa("hoy") );  // (cuando no hay segundo parámetro o es null o cadena vacía se separan todas las letras) devuelve el array ["h", "o", "y"] 
 console.log( separa("alegre<->contento<->feliz","<->") );  // (el separador puede ser de más de un carácter) devuelve el array ["alegre", "contento", "feliz"] 
Para resolver este ejercicio no puedes usar el método split de los strings.

2.- Haz una función llamada junta, se trata de hacer nuestra propia versión del método join de los arrays. La función tendrá 20 parámetros: unosarrays de cadenas y una cadena de unión. Devuelve un string copiando los elementos del array desde principio hasta final e intercalando la cadena de unión .  Prueba su funcionamiento con los siguientes ejemplos de uso:

console.log( junta(["Hola", "Don", "Pepito,", "hola"] , " ") ); // (el segundo parámetro es un espacio) Devuelve la cadena "Hola Don Pepito, hola"
console.log( junta(["sal", "pimienta", "limón", ""], "-") ); // Devuelve la cadena "sal-pimienta-limón-"
console.log( junta(["h", "o", "y"], "") ); // (el segundo parámetro es cadena vacía) Devuelve la cadena "hoy"
console.log( junta(["alegre", "contento", "feliz"], "<->") ); //  Devuelve la cadena "alegre<->contento<->feliz"
No podéis usar ningún método de los strings ni el método join de los arrays para solucionar este ejercicio.

 

3.- Hacer una función flecha llamada romboNumerico que dibujará en la consola  un rombo con números, dado como parámetro el tamaño de su lado. Ejemplos de uso (pongo . en lugar de espacio para que se aprecien mejor los espacios):

cuadradoNumerico(4 ); // mostrará por consola el siguiente cuadrado:

...1
..212
.32123
4321234
.32123
..212
...1
cuadradoNumerico(5); // mostrará por consola el siguiente cuadrado:

....1
...212
..32123
.4321234
543212345
.4321234
..32123
...212
....1
 
Hacer las 3 funciones y ejemplos de uso en un archivo llamado controlTema2recu.js
Subir controlTema2recu.js a vuestro repositorio en github antes de la finalización de esta prueba y poner enlace al archivo en github en el texto en línea*/


//Ejercicio 3

// let romboNumerico=(tamaño)=>{
//     for(let i=0;i<=tamaño;i++){
//       let linea="";
//       for(let j=0;j<=tamaño-i;j){
//         linea  += "";
//       }
//       for(let n=0;n<=tamaño-i-j;n++){
//          linea+="*";
//       }
//       console.log(linea);
//     }
//   };
  
//   romboNumerico(4);



  //Ejeerccio 1
// function separa(cadena,separador){
//     let array1=[]//array auxiliar para guiardar solo por casos raros en separador
    
//     if(!separador){//en caso de que el separador este vacio 
        
//        for(let i=0;i<cadena.length;i++){
//             array1.push(cadena[i]);
//        }

//         return array1;
//     }

//     let array2=[];
//     let parte="";
//     //Ahora en caso de que el separador este por eso busvamos con la lent
//         for( let j=0;j<cadena.length;j++){
//             //tratamos de buscar el separador en cadena
//             if(cadena.slice(j,j+separador.length)===separador){
                
//                 array2.push(parte);//si lo encuntra lo guarda
//                 parte=""; //reinicimaos cadena
//                 j+= separador.length-1 //slatamos al lrgo del separador
//             }else{
//                 // agragamo el caracter a la parte acumuada en si al string vavio que hucimos
//                 parte+=cadena[j];
//             }

//         }
//         array2.push(parte);
//         return array2 ; 
        
// }

// console.log( separa("Hola Don Pepito, hola", " ") );  // (el segundo parámetro es un espacio) devuelve el array ["Hola", "Don", "Pepito,", "hola"] 
// console.log( separa("sal-pimienta-limón-", "-") );  // devuelve el array ["sal", "pimienta", "limón", ""] 
// console.log( separa("hoy") );  // (cuando no hay segundo parámetro o es null o cadena vacía se separan todas las letras) devuelve el array ["h", "o", "y"] 
// console.log( separa("alegre<->contento<->feliz","<->") );  // (el separador puede ser de más de un carácter) devuelve el array ["alegre", "contento", "feliz"] 

