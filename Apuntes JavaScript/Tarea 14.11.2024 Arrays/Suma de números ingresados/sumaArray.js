/*Escribe una función sumInput() que:

Pida al usuario valores usando prompt y los almacene en el array.
Termine de pedirlos cuando el usuario ingrese un valor no numérico, una cadena vacía, o presione “Escape”.
Calcule y devuelva la suma de los items del arrayP.D. Un cero 0 es un número válido, por favor no detengas los ingresos con el cero.*/
'use strict'

function sumInput() {
    const arr = []; // Declarar el array dentro de la función
    let sum = 0;    // Declarar e inicializar sum

    while (true) {
        // Pedir al usuario un número
        let inputUser = prompt("Introduce numbers:");// debemops de tener cuidado a alhora de hacer casting al priuncipio ya que 
        //las comparaciones de === null o ===NaN , sera imposbile ya que a la hora de forzzar el casting dara null=0 y Nan = flase CUIDADO
        if(inputUser === null){
            break;
        }else if(inputUser=== NaN){
            break;
        }else{
            arr.push(Number(inputUser));
        }
      
    }

    // Sumar los números del array
    for (let number of arr) {
        sum += number;
    }

    console.log(arr);
    console.log("Suma total:", sum);
}

sumInput();





/*let inputData="";
        if (!isNaN(inputData) || !isFinite(inputData)){
            let inputData=Number(prompt("put a number:"));
            arr.push(inputData);
        
        }else if (inputData == null || inputData == undefined){
            return;
        }

        console.log(arr);*/