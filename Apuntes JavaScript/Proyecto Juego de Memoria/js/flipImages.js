document.addEventListener('DOMContentLoaded',principal);

function principal(){
    const $containerOfImages=document.getElementById('containerBoard');
    
    //hacemos una funcion para capturar el DOM de imagenes

    $containerOfImages.addEventListener('click',containerImages);
}

function containerImages(evento){
    console.dir(evento.srcElement.tagName);
    const divOfImages=evento.srcElement.tagName;
    console.log(divOfImages);
    let styleOnContainerImages= document.getElementById('pieceOfboard');
    if(divOfImages=='DIV'){
       
        styleOnContainerImages.style.backgroundColor="none";
    }
}   