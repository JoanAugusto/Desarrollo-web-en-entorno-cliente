let message= (login=="Empleado")?"hola"
            :(login="Director")?"Felicidades"
            :(login=="")?"Sin sesion":"";
alert(message);