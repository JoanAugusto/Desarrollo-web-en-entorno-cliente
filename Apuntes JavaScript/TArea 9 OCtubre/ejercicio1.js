'use strict'

/*1º.- Pida al usuario su nombre y si es "josico" o "admin" o "miguelón" entonces debe solicitar la contraseña. Si no se introduce uno de estos usuarios debe mostrarse el mensaje "no eres un usuario autorizado" y terminar. 
Si se pulsa Escape o Cancelar debe mostrarse el mensaje "programa cancelado por el usuario" y terminar.*/

const input=prompt('Por favor introduzca tu nombre de usuario:\t');
//funcion de identidad usuario


    if (input=='josico' ||input== 'admin' || input=='miguelon' ){
        const contraseñaUsuario=prompt('Por favor introduzca su contraseña:\t');
        
            //Escribimos en texto el parrafo deseado junto con el cambio.
               

            
        console.log(`Hola ${input} , su contraseña es ${contraseñaUsuario}`);
        
        const azulHtml=document.getElementById("cambiarParrafo");
        azulHtml.innerHTML="BIENVENIDO";
        azulHtml.style.fontSize="100px";
        azulHtml.style.color="blue";

    }else if (input===null){
        console.log("Programa cancelado por el usuario.");

    }else if (input !== 'josico' || input !=='admin' || input !=='miguelon'){
        console.log(' No eres un usuario autorizado..');

        const rojoHtml=document.getElementById("cambiarParrafo");
        rojoHtml.innerHTML="ERROR EN IDENTIDAD DE USUARIO";
        rojoHtml.style.fontSize="100px";
        rojoHtml.style.color="red";
    }else{
        console.log('Error en codigo');
    }
    
    
