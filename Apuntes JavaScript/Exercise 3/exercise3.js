'use strict'

/*Getelementbtid*/ 

const $acierto1=document.getElementById('acierto1');
const $acierto2=document.getElementById('acierto2');
const $acierto3=document.getElementById('acierto3');
const $fallo1=document.getElementById('fallo1');
const $fallo2=document.getElementById('fallo2');
const $fallo3=document.getElementById('fallo3');

/* Funciones para acierto.*/ 

function cambiarVerde1(){
    
    let verde1=document.getElementById("pregunta1");
    verde1.style.color="green";

}

function cambiarVerde2(){
    let verde2=document.getElementById("pregunta2");
    verde2.style.color="green";
}
function cambiarVerde3(){
    let verde3=document.getElementById("pregunta3");
    verde3.style.color="green"
}


$acierto1.addEventListener('click',cambiarVerde1);
$acierto2.addEventListener('click',cambiarVerde2);
$acierto3.addEventListener('click',cambiarVerde3);

