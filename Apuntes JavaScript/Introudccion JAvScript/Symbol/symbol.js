'use strict'
let id = Symbol('id_User');// se pone el  njombre de la variuabl ya que el "id_User " es la key

const User={
    firstName:"pepe",
    lastName:"Ladrillo",
    age:30,
    [id]:123,
};
    let text="";
for(let x in User){ // no se imprime el Symbol lo Oculta
    text+= User[x] + `\t`;

}
console.log(text);

const showData= Object.assign(User); //Visualiza todo junto el symbol

console.log(showData);