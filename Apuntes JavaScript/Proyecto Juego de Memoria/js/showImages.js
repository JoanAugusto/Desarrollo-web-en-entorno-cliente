'use strict'

const imagesforShow=[
     

    
         "https://loremflickr.com/cache/resized/65535_54105389942_f4a89205f3_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_54252928854_2bcd11437c_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_53710624574_18d7009567_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/41_94057158_d2a80d3277_t_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_54230639383_8129664440_t_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_54277292666_d8ef896164_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_53720246758_270b9193b2_q_100_100_nofilter.jpg",
         "https://loremflickr.com/cache/resized/65535_54038342779_4772a78116_t_100_100_nofilter.jpg",
    

];

//la carga de los scripts primero despues las etiquetas html

document.addEventListener('DOMContentLoaded',principal);

function principal(){
    const $containerBoard =document.getElementById('dificulty');
    //añadimos contenido al contenedor
    $containerBoard.addEventListener('click',contentOfBoard);

   const $containerImages=document.getElementById('containerBoard');
   $containerImages.addEventListener('click',changeColour);
}

function changeColour(evento){
   console.dir(evento.target);
    const $div=evento.target;
    
    if($div){
        $div.cla
    }
}

function contentOfBoard(evento){

const valueSelect=evento.target.value;


    if(valueSelect=='4x4'){
       const $board=document.getElementById('containerBoard');
       for(let i=0;i<imagesforShow.length;i++){
           
            const newDiv=
            `
                 <div class="pieceOfboard" id="containerImages"><img src=${imagesforShow[i]}></div>
                 <div class="pieceOfboard" id="containerImages"><img src=${imagesforShow[i]}></div>
            `;

           

            $board.innerHTML+=newDiv;
       }
    }

}   