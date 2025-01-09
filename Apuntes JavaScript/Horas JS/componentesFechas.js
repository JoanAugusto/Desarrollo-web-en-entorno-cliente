// Acceso a los comoponentes de la fecha

//Hay metodos para obtener año,mes y demas componentesa partir de un objeto de tipo Date

/*
    getFullYear() --> Devuelve el año (4 dígitos)
    getMonth() --> Devuelve el mes , de 0 a 11 como el conteo de los Arrays
    getDate() --> Devuelve el dia del mes del 1 al 31.
    getHours(),getMinutes(),getSeconds(),getMilliseconds() Devuelve las partes de los horario.
    getday() --> Devuelve el dia de la semana (Domingo 0 y Sabado 6)
    todo esto se puede poner despues del get UTC


*/

const date = new Date();

console.log(date.getHours() + ":"+date.getMinutes() + "," + date.getSeconds()+":"+date.getMilliseconds());
console.log(date.getUTCHours());

/*
Mas metodos 

getTime() --> devuelve timestamp para una fecha predetermindada en milisegundos desde 1970 hasta ahora.

getTimezoneOffset() --> devuelve la diferencia entre el huso horario de UTC y la zona actual pero en minutos

*/
console.log(date.getTime());
console.log(date.getTimezoneOffset());