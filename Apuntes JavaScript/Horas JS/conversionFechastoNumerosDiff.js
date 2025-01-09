// Si tratamos dew convertir una fecha a numero tomara el timestamp en resumen se lo devuelve en milisegundos.
// Se convierte un objeto Date a numero de la siguiente manera

let date = new Date();
console.log(+date);

//Si nosotros queremos saber medir el tieempo transcurrido , no será necesario usar el objeto Date.Usaremos Date.now() === Date().getTime().
let start = Date.now(); //milisegundois transcurridos a partir del dia 1 de Enero de 1970

//la función realizo su trabajo 

for( let i=0;i<100000;i++){
    let doSomething=i*i*i;
}
let end = Date.now();//listo

console.log(`El bucle tardó ${end-start} ms`);

/*
Si queremos hacer Benchmarking (medicion confiable sin consumir mucho cpu)
estas mediciones son llamadas como benchmarks
*/
// Tenemos date1 y date2. ¿Cuál de las siguientes funciones nos devuelve su diferencia, expresada en ms, más rápido?

// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
  
//   // o
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();//La mas rápida es esta , debido a que nos centramos en pasar el tiempo a numero , pero solo extrayendo el tiempo

//   }

//Ejemplo

function diffSubtract(date1, date2) {
    return date2 - date1;// tarda debido a que tiene que convertir a numero varias cosas a prte del tuiempo 
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();// y aqui nos centramos solo en el tiempo
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  alert("Tiempo de ejecución de diffSubtract: " + bench(diffSubtract) + "ms");
  alert("Tiempo de ejecución de diffGetTime: " + bench(diffGetTime) + "ms");

//Date.parse a partir de un string

/*
Date.parse(str) nos permite leer una fecha desde un string ,
pero ojo para que se pueda parsear , debe de estar la fecha de este patron.

La fecha--> YYYY-MM-DD 
la T--> Es un delimitador
Horas--> HH:mm:ss.ms
La Z--> es la zona horaria
*/

//ejemplo fecha
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");//En caso de tener mal la fecha Devolveria NaaN y el resultado nos da en ms

alert(ms); // 1327611110417  (timestamp)

// Podemos crear un objreto desde el timestamp

let date2 = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));

alert(date2);