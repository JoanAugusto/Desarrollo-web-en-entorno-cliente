// Estableciendo los componentes de la fecha

/*
Esto permite establecer los componentes de fecha y hora

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (Establece la cantidad de segundos transcurridos desde 01.01.1970 GMT+0)
A excepción de setTime(), todos los demás métodos poseen una variante UTC, por ejemplo: setUTCHours().
*/

let today = new Date();

today.setHours(0,0,0,0); // Sigue siendo el día de hoy, pero con la hora cambiada a 0. o si pojnemos mas ceros pues la hora sera y lo demas será 0
console.log(today);

// Existe en las fechas el autoCorrecion en las fechas en objetos Date
// Podemos fijar valores fuera de rango que se autocorregirá

let fakeDate = new Date(2013,0,32);
//sumamos dias 
fakeDate.setDate(fakeDate.getDate() + 3);
console.log(fakeDate);

