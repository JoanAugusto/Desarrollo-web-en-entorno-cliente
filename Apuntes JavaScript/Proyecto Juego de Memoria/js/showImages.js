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

let anteriorCarta=null;
let posteriorCarta=null;
//la carga de los scripts primero despues las etiquetas html

document.addEventListener('DOMContentLoaded',principal);

function principal(){
    const $containerBoard =document.getElementById('dificulty');
    //añadimos contenido al contenedor
    $containerBoard.addEventListener('click',contentOfBoard);

  const $listImg=document.getElementById('containerBoard');
  $listImg.addEventListener('click',changeColour);

  //Capturación de la primera carta seleccionada

     //const $img1 =document.getElementById('containerBoard');
  $listImg.addEventListener('click',capture1);
  //Hacemo slo mismo para capturar el segundo
  //const $img2 =document.getElementById('containerBoard');
   $listImg.addEventListener('click',capture2);
}


    function capture1(evento){
        console.dir(evento.target.firstChild.currentSrc);//Capturacion de la url del primera carta
        const domImg1=evento.target.firstChild.currentSrc;
        if(anteriorCarta===null && domImg1){
            anteriorCarta=domImg1;
           console.log(`funcion 1 ${anteriorCarta}`);
        }
        
        

      
   
    }
    function capture2(evento){
        const domImg2=evento.target.firstChild.currentSrc;
        if( anteriorCarta!==null && posteriorCarta===null && domImg2){
            posteriorCarta=domImg2;
              console.log(`funcion 2 ${posteriorCarta}`);
            
        }

        // if( posteriorCarta===null){
        //     posteriorCarta=evento.target.firstChild.currentSrc;
        //     console.log(`funcion 2 ${posteriorCarta}`);
        // }

        
    }
   
    
    
   


function changeColour(evento){
    console.dir(evento.srcElement.className=='pieceOfboard');
    

        if( evento.srcElement.className=='pieceOfboard' ){
            const divList=evento.target.id;
            const $div=document.getElementById(divList);
            $div.classList.add('quitColour');
        }else{
            return;
        }
   

}

function contentOfBoard(evento){

const valueSelect=evento.target.value;


    if(valueSelect=='4x4'){
       const $board=document.getElementById('containerBoard');
       for(let i=0;i<imagesforShow.length;i++){
           
            const newDiv=
            `
                 <div class="pieceOfboard" id=${i}><img data-id=${i} src=${imagesforShow[i]}></div>
                  <div class="pieceOfboard" id=${i+17}><img   data-id=${i} src=${imagesforShow[i]}></div>
                
            `;

           

            $board.innerHTML+=newDiv;
       }
    }

}   