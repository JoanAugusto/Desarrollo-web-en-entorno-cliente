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

/*3.Si la contraseña es correcta también, entonces se pedirá la edad. La de "josico" es 34, la de "admin" es 23 
y la de "miguelón" es 103 (todo un veterano). Si no se introduce la edad correcta debe mostrarse el mensaje 
"pensaba que tenías más años" si la edad introducida es menor de lo esperado, o bien se muestra el mensaje 
"pues no aparentas tanto" si la edad introducida es mayor y terminar. Si se pulsa Escape o Cancelar debe
 mostrarse el mensaje "programa cancelado por el usuario" y terminar.*/

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
    
    
