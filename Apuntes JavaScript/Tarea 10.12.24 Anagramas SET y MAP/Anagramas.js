/*
Anagramas son palabras que tienen el mismo número de letras, pero en diferente orden.

Por ejemplo:

nap - pan
ear - are - era
cheaters - hectares - teachers
Escriba una función aclean(arr) que devuelva un array limpio de anagramas.

Por ejemplo:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" o "PAN,cheaters,era"
Es decir, de cada grupo de anagramas debe quedar solo una palabra, sin importar cual.*/

let arr=["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr){
    let value="";
    const copyArr=[...arr];
    for( let values of arr){
            value +=values
    }
    console.log(value);
    

    //Cambiamos a minusculas ambas cadenas
    
}
aclean(arr);