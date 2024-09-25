"use strict";
let i=0;


 document.getElementById('prueba').innerHTML='CAMBIANDO EL CONTENIDO!!'+ i++; //No cambia nada en el boton solo contenido
 const $boton= document.getElementsByTagName('button')[0];//esto es para acceder al boton que nosotros necesitamos y el [0] cdedemos al primero , vamo un array
 //docuemnt es un objeto y el getelemntsByTagName son las libreiras de esa coleccion
 const $encabezado= document.getElementById('h1');


 function cambiarContenido(){
    document.getElementById('prueba').innerHTML='CAMBIANDO EL CONTENIDO!!'+ i++;
 
  }

 $boton.addEventListener('click',cambiarContenido);//cambiarContenido() significa los () que te ejecutes
 $boton.addEventListener("",cambiarContenido);
 $encabezado.addEventListener('click',cambiarContenido);

 

 const bot= document.getElementById('prueba').innerHTML='CAMBIANDO EL CONTENIDO!!'+ i++;

//  function cambiarContenido(){
    

//     document.getElementById('prueba').innerHTML='CAMBIANDO EL CONTENIDO!!'+ i++;
//     return 7 
//   }

//Se debe a que se espera un object no un 2 .



