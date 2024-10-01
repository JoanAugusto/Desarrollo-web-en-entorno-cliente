'use strict';

const $image = document.getElementById('imagen');
const $boton = document.getElementById('button');

// Array de URLs de las imágenes
const imagenes = [
  'https://th.bing.com/th/id/OIP.CjuJhR9wS4jD9R183-cdDwHaEK?rs=1&pid=ImgDetMain',
  'https://www.mancity.com/meta/media/jcxpfuu1/gettyimages-1335418526.png',
  'https://www.20minutos.es/uploads/imagenes/2022/09/07/robert-lewandowski.jpeg',
  'https://www.prensalibre.com/wp-content/uploads/2019/06/FBL-EUR-NATIONS-POR-NED_45213397.jpg?quality=82' // Agregamos la imagen inicial
];

// Índice de la imagen actual (comienza en 0)
let indiceActual = 0;

function manyImages() {
  // Incrementa el índice actual
  indiceActual = (indiceActual + 1) % imagenes.length;

  

    switch (indiceActual) {
      case 0:
        $image.src = imagenes[0];
        break;
      case 1:
        $image.src = imagenes[1];
        break;
      case 2:
        $image.src = imagenes[2];
        break;
      case 3:
        $image.src = imagenes[3];
        break;
      default:
        
    }

  }

  
  


$image.addEventListener('click', manyImages);
$boton.addEventListener('click', manyImages);
