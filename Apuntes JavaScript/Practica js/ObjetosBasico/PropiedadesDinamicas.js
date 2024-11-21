'Use strict'

//Creamos el constructor para poderr hacer ingresos de valores dinamicas

function Coche (marca,tipo,nRuedas,año){
    this.marca=marca,
    this.tipo=tipo,
    this.nRuedas=nRuedas,
    this.año=año
};
//Creamos la instanciua del nuevo objeto e añadimos valores
const coche=new Coche("Renault","Turismo",4,2020);//Simepre valore en el new 
//imprimimos
console.log(coche.año);
//Propuesta de mejora segun ChatGPT
'use strict';

// Crear una clase para el objeto Coche
// class Coche {
//     constructor(marca, tipo, nRuedas, año) {
//         this.marca = marca;
//         this.tipo = tipo;
//         this.nRuedas = nRuedas;
//         this.año = año;
//     }
// }

// // Crear una instancia del objeto con valores dinámicos
// const coche = new Coche("Renault", "Turismo", 4, 2020);

// // Imprimir una propiedad
// console.log(coche.año); // 2020

// // Añadir propiedades dinámicamente
// coche.color = "Rojo";
// coche.kilometraje = 50000;

// // Imprimir todas las propiedades del objeto
// console.log(coche);
