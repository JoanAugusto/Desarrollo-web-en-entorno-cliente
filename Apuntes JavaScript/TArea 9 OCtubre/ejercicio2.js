'use strict'
function azulHtml(){
    const azulHtml=document.getElementById("cambiarParrafo");
    azulHtml.innerHTML="BIENVENIDO";
    azulHtml.style.fontSize="100px";
    azulHtml.style.color="blue";
}
function rojoHtml(){
        const rojoHtml=document.getElementById("cambiarParrafo");
        rojoHtml.innerHTML="ERROR EN IDENTIDAD DE USUARIO";
        rojoHtml.style.fontSize="100px";
        rojoHtml.style.color="red";
}

/*2º.- Si el usuario es correcto entonces se debe comprobar la contraseña. La de "josico" es "jarl,12", la de "admin" es "mira:m3" y
la de miguelón es "diga33". Si no se introduce la contraseña correcta debe mostrarse 
el mensaje "contraseña incorrecta" y terminar. Si se pulsa Escape o Cancelar debe mostrarse el mensaje
 "programa cancelado por el usuario" y terminar. */

 const input=prompt('Por favor introduzca tu nombre de usuario:\t');
//funcion de identidad usuario


    if (input=='josico' ||input== 'admin' || input=='miguelon' ){
        const contraseñaUsuario=prompt('Por favor introduzca su contraseña:\t');
        // console.log(`Hola ${input} , su contraseña es ${contraseñaUsuario}`);

        if(contraseñaUsuario===null){
            console.log("Programa cancelado por el usuario");
                

        
        }else if(input=='josico' && contraseñaUsuario=='jarl,12'){
                console.log(`BIENVENIDO ${input} HAS ACCEDIDO CORRECTAMENTE`);
                    azulHtml();

        }else if(input== 'admin' && contraseñaUsuario=='mira:m3'){
            console.log(`BIENVENIDO ${input} HAS ACCEDIDO CORRECTAMENTE`);
                    azulHtml();

        }else if(input=='miguelon' && contraseñaUsuario=='diga333'){
            console.log(`BIENVENIDO ${input} HAS ACCEDIDO CORRECTAMENTE`);
                    azulHtml();

        }else{
            console.log("Contraseña de usuario desconocido:");
        }

       
       

    }else if (input===null){
        console.log("Programa cancelado por el usuario.");

    }else if (input !== 'josico' || input !=='admin' || input !=='miguelon'){
        console.log(' No eres un usuario autorizado..');
            rojoHtml();
        
    }else{
        console.log('Error en codigo');
    }
    
    
