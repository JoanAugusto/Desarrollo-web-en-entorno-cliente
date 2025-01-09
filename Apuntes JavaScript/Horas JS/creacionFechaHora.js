// Para crear un nuevo objeto Date se debe instanciar con New Date()

//New date() sin Argumentos

let now=new Date();//Sin argumentos crear un Objeto Date con fecha y hora Actuales.
console.log(now);

//New Date() para poner el primer dia y mes de 1970

let Jan1970= new Date(0);
console.log(Jan1970);
//Se le agregan un dia mas o 24 horas mas

let Jan1970Mas= new Date(24*3600*1000);
console.log("-----------------------------------");
console.log(Jan1970Mas);

//Se le puede poner fechas anteriores del 1970

let Jan1969= new Date(-24*3600*1000);
console.log("-------------");
console.log(Jan1969);

let date = new Date("2017-01-26");
alert(date);
// La hora no está definida, por lo que se asume que es la medianoche GMT (0 hs. de la fecha) y
// se ajusta de acuerdo al huso horario de la zona geográfica en la que está ejecutándose el código.
// Por consiguiente, el resultado podría ser
// Thu Jan 26 2017 11:00:00 GMT+1100 (Hora Estándar del Este de Australia)
// o
// Wed Jan 25 2017 16:00:00 GMT-0800 (Hora Estándar del Pacífico)

// Otra Froma de crear Fechas New Date(año,mes,fecha,horas,minutos,segundos,ms);

/*
    Año deberia tener 4 digitos
    mes comienza desde Ener y termina en 11 Diciembre.
    fecha es el dia del mes , si no se pone nada se cuernta com 1
    y lo demas no tienen nada o no se ponen se asumen que son 0.
*/

    let prover=new Date(2019,3,20,0,0,0,0);
    console.log("---------------------------");
    console.log(prover);

    // La precisión máxima es de 1 ms (1/1000 de segundo):

let date1 = new Date(2011, 0, 1, 2, 3, 4, 1);
console.log( date1 ); // 1.01.2011, 02:03:04.567