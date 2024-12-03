'use strict'
/*
2.- Haz una función llamada tajada, se trata de hacer nuestra propia versión del método slice de los arrays. La función tendrá 3 parámetros: el array, principio y final. Devuelve un nuevo array copiando los elementos desde principio hasta final (sin incluir final). No podéis usar ningún método de los arrays para solucionar este ejercicio. Prueba su funcionamiento con los siguientes ejemplos de uso:

tajada([3, 2, 30, 4], 1, 3); // Devuelve un array nuevo [2, 30];
*/ 
function tajada(arr=[],principio,final){
    
     const arr3=[];

    for(let i =principio;i<=final -1;i++){//esto es una mierda con tomate ,
        // esto se debe por qyue no es necesarionusar ifs, ya que con el propio for , la i = la inmicializamos con el prinicpio y la longitud con el final -1(ya que no debe de incluir ) cuando hagamos el recorrido no saldra el resultado de de el porinpcio hast el final -1
        // console.log(copyArr[i]);
        arr3[arr3.length]=arr[i];
            
        

    }
    console.log(arr3);
}



tajada([3, 2, 30, 4],0,3);