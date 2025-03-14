'use strict'

document.addEventListener('DOMContentLoaded',()=>{
    const $ul=document.getElementById('thumbs');
    $ul.addEventListener('click',changeImages);
    $ul.addEventListener('click',prevent)
})

function prevent(evento){
    // evento.preventDefault();
    // console.dir(evento.target.closest('a'));
    //Lo usamos para que no estorbe la a que nos mandaba a ver una imagen 
    // He preferido hacerlo aparte ya que no me gusta tenerlo todo junto
    if(evento.target.closest('a').nodeName=='A'){
        evento.preventDefault();
    }
}
function changeImages(evento){
    const $primaryImage=document.getElementById('largeImg');

    console.dir(evento.target.getAttribute('src'));//Para comprobar que si cogia el src de las imagens pequeñas

    const $imagesMini=evento.target.getAttribute('src');

    console.dir($primaryImage.getAttribute('src'));// para comprobar que capturaba la imgaen grande para poder hacerlo mejor

    $primaryImage.setAttribute('src',$imagesMini);//cambiamos la imagen grande por la haya hecho click y lo sustituye en el src de la imagen grande
}