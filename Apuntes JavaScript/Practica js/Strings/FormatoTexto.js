'use strict'

function titleCase(sentence=""){
    let words=sentence.split(" "); //lo pasamaos como un array , le quitamos lo espacios
    console.log(words);
    for( let i=0;i<=words.length -1;i++){ //recorremos el array
        let word=words[i];//guaradmos cada palabra en word.
        console.log(word);

        let transform=word[0].toUpperCase()+word.slice(1).toLowerCase();// en cada palabra le decimos que la rimeraletra sea mayuscula y los demas que sean minuscuiila
        words[i]=transform;// esto se debe porque hemos cambiado de cada palabra ciertas cosas y debemos guardarla
    }
    let newSentence=words.join(" "); //Hace la nueva oracon co todo pero , lo hara con ele sapcio que emos quityado
    console.log(newSentence);

}

titleCase("hola mundo soy pepe jose");