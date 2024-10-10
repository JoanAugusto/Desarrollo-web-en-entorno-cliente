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

/*4º.- Si la edad es correcta también entonces muestras el mensaje 
"Bienvenido josico, ¿cómo llevas tus 34 primaveras?" o "Bienvenido 
admin, ¿cómo llevas tus 23 primaveras?" o "Bienvenido miguelón,
 ¿cómo llevas tus 103 primaveras?" según el caso y terminar.*/

 const input=prompt('Por favor introduzca tu nombre de usuario:\t');
//funcion de identidad usuario


    if (input=='josico' ||input== 'admin' || input=='miguelon' ){
        const contraseñaUsuario=prompt('Por favor introduzca su contraseña:\t');
        // console.log(`Hola ${input} , su contraseña es ${contraseñaUsuario}`);




        if(contraseñaUsuario===null){
            console.log("Programa cancelado por el usuario");
                

        
        }else if(input=='josico' && contraseñaUsuario=='jarl,12'){
                console.log(`BIENVENIDO ${input} HAS ACCEDIDO CORRECTAMENTE`);
                    
                    const edad=prompt("Introduce la edad:");
                        if(edad===null){
                            console.log("Programa cancelado por el usuario.");
                        }else if(edad>34){
                            
                        }else if(edad<34){
                            console.log("Pues no aparentas tanto");
                            
                        }else if(edad==34){
                            console.log("Verificacion correcta");
                            console.log("Bienvenido josico, ¿cómo llevas tus 34 primaveras?")
                            azulHtml();
                            
                        }

        }else if(input== 'admin' && contraseñaUsuario=='mira:m3'){
            console.log(`BIENVENIDO ${input} HAS ACCEDIDO CORRECTAMENTE`);
                
            const edad=prompt("Introduce la edad:");
                if(edad===null){
                    console.log("Programa cancelado por el usuario.");
                }else if(edad>23){
                    
                }else if(edad<23){
                    console.log("Pues no aparentas tanto");
                    
                }else if(edad==23){
                    console.log("Verificacion correcta");
                    azulHtml();
                    console.log("Bienvenido admin, ¿cómo llevas tus 23 primaveras?");
                }

                   

        }else if(input=='miguelon' && contraseñaUsuario=='diga333'){
            console.log(`BIENVENIDO ${input} HAS ACCEDIDO CORRECTAMENTE`);
            const edad=prompt("Introduce la edad:");
            if(edad===null){
                console.log("Programa cancelado por el usuario.");
            }else if(edad>103){
               
            }else if(edad<103){
                console.log("Pues no aparentas tanto");
                
            }else if(edad==103){
                console.log("Verificacion correcta");
                azulHtml();
                console.log("Bienvenido miguelón, ¿cómo llevas tus 103 primaveras?");
            }


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
    
    
