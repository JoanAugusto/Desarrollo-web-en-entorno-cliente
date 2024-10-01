'use strict'
 const $botonESP=document.getElementById('español');

 const $botonEN=document.getElementById('ingles');
const $botonRS=document.getElementById('ruso');


function bienvenidoEspañol(){

    $parrafoESP=document.getElementById('parrafoEspañol').innerHTML="Hola,Bienvenido Usuario!!!";
}
function bienvenidoIngles(){
    $parrafoEN=document.getElementById('parrafoIngles').innerHTML="Hello, I hope that you will have a good welcome!!";
}
function bienvenidoRuso(){
    $botonRUSO=document.getElementById('parrafoRuso').innerHTML="Привет, добро пожаловать";
}


$botonESP.addEventListener('click',bienvenidoEspañol);
$botonEN.addEventListener('click',bienvenidoIngles);
$botonRS.addEventListener('click',bienvenidoRuso);