'use strict'
 //Objeto vacio
 const user={};

//'2 Agrega la propiedad name con el valor John.'
 alert(user.name="John");

//'3 Agrega la propiedad surname con el valor Smith.'
 user.surname="Smith";
//'4 Cambia el valor de name a Pete.'
 alert(user.name="Pete");
//'5 Remueve la propiedad name del objeto.'
alert(delete user.name);

for (let keys in user){
    console.log(keys);
}

