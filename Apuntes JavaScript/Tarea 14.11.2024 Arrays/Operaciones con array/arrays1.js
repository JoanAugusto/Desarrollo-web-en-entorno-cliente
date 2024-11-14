'use strict'
/*Tratemos 5 operaciones de array.

Crear un array styles con los items “Jazz” y “Blues”.
Agregar “Rock-n-Roll” al final.
Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
Quitar el primer valor del array y mostrarlo.
Anteponer Rap y Reggae al array.*/

let styles=["Jazz","Blues"];

styles.push("Rock-n-Roll");
console.log(styles);
// Remplazar el valor del medio
let sizeArray= styles.length / 2 ;
let roundArray= Math.round(sizeArray) -1;
console.log(roundArray);
styles[roundArray]="Classics";
console.log(styles);

//Quitar valor primero

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap","Reggae");
console.log(styles);


