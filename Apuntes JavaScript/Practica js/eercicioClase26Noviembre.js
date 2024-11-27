'use strict'
let total=0;//acumulador
document.getElementsByTagName("button")[0].addEventListener("click",sumaNumerosIntroducidos)


function suma (a,b){
    if(!isFinite(a)){
        muestraError(`El vaor de ${a} no es un numero valido`);
        return 0;
    }
    if(!isFinite(b)){
        muestraError(`El vaor de ${b} no es un numero valido`);
       return 0;
    }
    return +a + +b;
}

function muestraError(mensaje){
    document.getElementById('errores').innerHTML=mensaje;
}
alert(suma(3,5));
alert(suma('3','5'));
alert(suma('3f','gt5'));
alert(suma({},[33,44]));


function concatena(a1,a2){
    if(!Array.isArray(a1)){//verificamos si no es una array , que deje de esta en la validacion del if
        muestraError(`El valor de ${a1} no es un array`);
        return[];
    }
    if(!Array.isArray(a2)){//verificamos si no es una array , que deje de esta en la validacion del if
        muestraError(`El valor de ${a2} no es un array`);
        return[];
    }//termina el las validaciones del if 
    //despues lo guardamos todo en un array si fuera un array los valors si no , no;
    // return [...a1,...a2];

    const aux=[];

    for (let valor of a1){
        aux.push(valor);
    }
    for (let valor of a2){
        aux.push(valor);
    }
    return aux;

}

function sumaNumerosIntroducidos(){
   
    let a=0;
    //do{
        
     a=document.getElementById('sumando').value;
     muestraError('');
    if(!isFinite(a)){
        total=suma(a,total);
    }else{
        muestraError(`${a} no es u número`);

    }
    actualidadResultado(total);
    //}while(a!==null);//null da porque si hacems scape o cancelar el valor del propmt es null

    
}
function actualidadResultado(resultado){
    document.getElementsByTagName('h2')[0].innerHTML=`Resultado:${resultado}`;
}
sumaNumerosIntroducidos();




//otro ejercicio 

function mySplit(cadena,separador){
    if( typeof cadena !=='string'){//evaluamos los parametros con validaciones
        return undefined;
    }
    if( typeof separador !== 'string'){
        return undefined;
    }
    if(separador ===""){// cuando no se le pone ningun separador//Esto es una salida anticipada en le caso que pasara eso
        for(let character of arr){
            arr.push(splice(character));

        }
        return arr;
    }
    let posicionInicial=0;
    let posicionFinal;
    const arr=[];   

    while(posicionFinal!=-1);{
        posicionFinal=cadena.indexOf(separador,posicionInicial);
        if(posicionFinal===-1){//una cosa es que la posicion final lleva indexof te devuelve -1 si no lo encuentra o la posocion de lo encontraod a desear 
            arr.push(cadena.slice(posicionInicial));
        }else{
            arr.push(cadena.slice(posicionInicial,posicionFinal));
            posicionFinal=posicionInicial +separador.length;// este es para que cunado llegue al la posicion del separador recordemos que solo pasa 1 vez 
            //ya que indexof te encuentra solo una vez , pero y si hay mas? , de ahi viene esto
            //entonces seria que lo encuentra que haga un push al array y que siga biuscando por si hay mas .
        
        }
        
    }
   
}