/*
Digamos que tenemos un objeto complejo y nos gustaría convertirlo en un string (cadena de caracteres), para enviarlos por la red, o simplemente mostrarlo para fines de registro.

Naturalmente, tal string debe incluir todas las propiedades importantes.

Podríamos implementar la conversión de esta manera:

let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

alert(user); // {name: "John", age: 30}
*/
//Pero hay un metodo en JS que te lo hace más rapido que es el JSON.stringify.

//JS nos ofrece  metodos los prinicpales son
/**
 * JSON.stringify--> nos permite convertir objetos a JSON
 * JSON.parse--> para convertir JSON de vuelta a un objeto
 */

const student={
    name:'Pepe',
    age:40,
    isAdmin:true,
    asignatures:["html","css","js"]
};
let json=JSON.stringify(student);
console.log(typeof(json));//string
console.log(json);

//JSON admitre los siguiente tipos de datos--> Objects,Arrays,strings,numbers,boolean(true or false),null
//Pero a su vez JSON Omite algunas propiedades por ejemplo-->Funciones(métodos) , prpoedades Symbol y Propiedades nque alamacenan undefined

/*
Formas de manipular o transformando el JSON resultante

Sintaxis de JSON.stringify(value[, replacer, space]);

donde value--> es el valor a codificar
donde replacer --> es un array de propiedades para codificar o una función de mapeo function(propiedad, valor)



donde space--> Cantidad de espacio para usar para el formateo
*/

//Ejemplo de Value

let vehicle={
    name:"Audi",
    type:"MotorSport",
    nRuedas:4
};

console.log(JSON.stringify(vehicle , ['type','name']));//Codificará lo que nosotros queramos a nuestro interes
/**
 * Ejemplo de la teoria
 * let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup hace referencia a room
};

room.occupiedBy = meetup; // room hace referencia a meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

// otra forma de iterar todo


let vehicle2={
    name:"Audi",
    type:"MotorSport",
    nRuedas:4,
    vehicle:"Car",
    door:4
};
vehicle.occupieBy = vehicle2;//referencia a vheicle2

console.log( JSON.stringify(vehicle2, function replacer(key,value){
    console.log(`${key} : ${value}`);
   return (key == "occupieBy") ? undefined : value;
}));

//Space o espacio 

alert(JSON.stringify(vehicle2,null,2));

//JSON.parse()--> Para decodificar un string JSON
//Sintaxis JSON.parse(str[, reviver]);
/**
 * en str --> string JSON para analizar
 * en reviver--> una function(key,value) opcional, será llamado cada par y transforma rle valor.
 */
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1