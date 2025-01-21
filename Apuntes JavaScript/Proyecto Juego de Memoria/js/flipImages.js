document.addEventListener('DOMContentLoaded',principal);

function principal(){
    const $containerOfImages=document.getElementById("containerImages");
   
    //hacemos una funcion para capturar el DOM de imagenes

    $containerOfImages.addEventListener('click',containerImages);
}

function containerImages(evento){
    console.dir(evento.target);

        if(evento.target.id=='containerImages'){
            const $divImages=document.getElementById('containerImages');
            $divImages.style.backgroundColor='red';
        }
   
}   