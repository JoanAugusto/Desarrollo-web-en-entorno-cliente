//Contador de palabras: Escribe una función que reciba una frase y cuente el número de palabras en ella.

function contadorPalabras(sentence=""){
    let cutSentence=sentence.split(" ");
    
    console.log(cutSentence.length);
}

contadorPalabras("Hola soy jonas como estas");





/*
    codigo Mejorado


    function contadorPalabras(sentence = "") {
    // Eliminar espacios al inicio y final y manejar casos de cadenas vacías
    let trimmedSentence = sentence.trim();
    if (trimmedSentence === "") {
        console.log(0); // No hay palabras en una cadena vacía o solo espacios
        return;
    }

    let cutSentence = trimmedSentence.split(/\s+/); // Dividir usando espacios múltiples como delimitador
    console.log(cutSentence.length);
}

// Prueba del código
contadorPalabras("   Hola   soy Jonas,    ¿cómo   estás?    "); // Debería imprimir 6
contadorPalabras("     "); // Debería imprimir 0
contadorPalabras(""); // Debería imprimir 0

*/