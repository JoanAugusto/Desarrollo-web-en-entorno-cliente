'use strict'

const imagesforShow=[
     

    
         "https://loremflickr.com/cache/resized/6100_6296841591_530620299b_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/7167_6779915429_0c98dd214a_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_54225762871_06e1694060_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/7167_6779915429_0c98dd214a_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_53199085160_0258e67992_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_53699628860_1ae8a9313c_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_54225672890_71c27a05a8_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_53614266136_b9cae98982_q_100_100_nofilter.jpg",
    

];

//la carga de los scripts primero despues las etiquetas html

document.addEventListener('DOMContentLoaded',principal);

function principal(){
    const $containerBoard =document.getElementById('dificulty');
    //añadimos contenido al contenedor
    $containerBoard.addEventListener('click',contentOfBoard);

   
}

function contentOfBoard(evento){

const valueSelect=evento.target.value;


    if(valueSelect=='4x4'){
       const $board=document.getElementById('containerBoard');
       for(let i =0;i<=imagesforShow.length;i++){
           
            const newDiv=
            `
                 <div class="pieceOfboard"><img src=${imagesforShow[i]}></div>
                 <div class="pieceOfboard"><img src=${imagesforShow[i]}></div>
            `;

           

            $board.innerHTML+=newDiv;
       }
    }
}   