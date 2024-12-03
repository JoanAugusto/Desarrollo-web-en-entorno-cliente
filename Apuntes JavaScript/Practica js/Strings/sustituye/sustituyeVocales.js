`Sustitución de caracteres: Crea una función que reciba una cadena de texto y sustituya todas las vocales por un símbolo específico (ej., @, #, etc.).`

function sustituyeVocales(sentence = "", cambio = "") {
    // Declaramos una cadena con todas las vocales
    let vocales = "aeiouAEIOU";
    let newSentence = "";

    // Recorremos la cadena carácter por carácter
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Si el carácter actual es una vocal, lo sustituimos
        if (vocales.includes(char)) {
            newSentence += cambio;
        } else {
            // Si no es vocal, lo dejamos igual
            newSentence += char;
        }
    }

    return newSentence;
}



// Ejemplo de uso
console.log(sustituyeVocales("Necesito Balas", "@")); // N@c@s@t@ B@l@s
console.log(sustituyeVocales("Hola Mundo", "#")); // H#l# M#nd#
console.log(sustituyeVocales("PROGRAMACION", "*")); // PR*GR*M*C**N
