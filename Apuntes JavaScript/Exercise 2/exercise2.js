/*Elabora una secuencia de imagenes con al menos 4 fotogramas.Según el usuario vaya haciendo click sobre las imagenes, la secuencia se irá reproduciendo */

'use strict'


const $image=document.getElementById('imagen');
const $boton=document.getElementById('button');




function manyImages(){

   if($image.src.match('green') ){
    $image.src='https://www.prensalibre.com/wp-content/uploads/2019/06/FBL-EUR-NATIONS-POR-NED_45213397.jpg?quality=82';


   }else if($image.src.match('green')){
    $image.src='https://th.bing.com/th/id/OIP.KvnZQy9Gneq7dTsKaDT12wHaE8?rs=1&pid=ImgDetMain';
   }else if($image.src.match('green')){
    $image.src='https://www.mancity.com/meta/media/jcxpfuu1/gettyimages-1335418526.png';

   }else{
    $image.src='https://www.prensalibre.com/wp-content/uploads/2019/06/FBL-EUR-NATIONS-POR-NED_45213397.jpg?quality=82';
   }
    
}

$image.addEventListener('click',manyImages)
$boton.addEventListener("mouseleave",manyImages)