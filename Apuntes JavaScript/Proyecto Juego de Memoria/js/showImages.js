'use strict';

// Array con las URLs de las imágenes que se usarán en el tablero
const imagesforShow = [
    "https://loremflickr.com/cache/resized/65535_54105389942_f4a89205f3_q_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_54252928854_2bcd11437c_q_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_53710624574_18d7009567_q_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/41_94057158_d2a80d3277_t_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_54230639383_8129664440_t_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_54277292666_d8ef896164_q_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_53720246758_270b9193b2_q_100_100_nofilter.jpg",
    "https://loremflickr.com/cache/resized/65535_54038342779_4772a78116_t_100_100_nofilter.jpg",
];

// Mezclar aleatoriamente las imágenes
imagesforShow.sort(() => Math.random() - 0.5);

// Variables para gestionar las cartas seleccionadas
let anteriorCarta = null;
let posteriorCarta = null;
let anteriorElemento = null;

// Espera a que el DOM cargue y llama a la función principal
document.addEventListener('DOMContentLoaded', principal);

function principal() {
    // Obtener el contenedor principal
    const $containerBoard = document.getElementById('elementFather');
    $containerBoard.addEventListener('submit', contentOfBoard); // Detectar el evento de envío del formulario

    // Obtener el tablero de las cartas
    const $listImg = document.getElementById('containerBoard');
    $listImg.addEventListener('click', manejarClickCarta); // Manejar los clics en las cartas
}

// Función para manejar el clic sobre una carta
function manejarClickCarta(evento) {
    // Validar si el clic fue sobre una carta
    if (evento.target.className === 'pieceOfboard' || evento.target.parentElement.className === 'pieceOfboard') {
        const cartaClickeada = evento.target.closest('.pieceOfboard'); // Obtener el elemento de la carta
        const imagen = cartaClickeada.querySelector('img'); // Imagen de la carta

        // Si la carta ya está descubierta, no hacer nada
        if (imagen.style.visibility === 'visible') return;

        // Mostrar la carta seleccionada
        cartaClickeada.classList.add('quitColour');
        imagen.style.visibility = 'visible';

        // Si no hay una carta previa seleccionada
        if (!anteriorCarta) {
            anteriorCarta = imagen.src; // Guardar la imagen de la carta
            anteriorElemento = cartaClickeada; // Guardar el elemento de la carta
        } else {
            // Si hay una carta previa, comparar con la actual
            posteriorCarta = imagen.src;

            if (anteriorCarta === posteriorCarta) {
                // Si coinciden, dejarlas visibles
                anteriorCarta = null;
                posteriorCarta = null;
                anteriorElemento = null;
            } else {
                // Si no coinciden, ocultarlas tras un breve tiempo
                setTimeout(() => {
                    cartaClickeada.classList.remove('quitColour');
                    imagen.style.visibility = 'hidden';

                    anteriorElemento.classList.remove('quitColour');
                    anteriorElemento.querySelector('img').style.visibility = 'hidden';

                    // Reiniciar las variables
                    anteriorCarta = null;
                    posteriorCarta = null;
                    anteriorElemento = null;
                }, 1000);
            }
        }
    }
}

// Función para generar el contenido del tablero según la configuración
function contentOfBoard(evento) {
    evento.preventDefault(); // Evitar la recarga de la página al enviar el formulario

    const valueSelect = document.getElementById('dificulty').value; // Obtener la dificultad seleccionada
    const valueTypeCards = document.getElementById('cards').value; // Obtener el tipo de cartas seleccionadas

    if (valueSelect === '4x4' && valueTypeCards === 'dog') {
        console.log('Condición cumplida: 4x4 y tipo dog');

        const $board = document.getElementById('containerBoard');
        
        // Duplicar y mezclar las imágenes
        const imagesDuplicated = [...imagesforShow, ...imagesforShow];
        imagesDuplicated.sort(() => Math.random() - 0.5);
        
        // Mezclar también el array original (precaución innecesaria, pero está en el código)
        imagesforShow.sort(() => Math.random() - 0.5);

        // Vaciar el contenido del tablero y generar nuevas cartas
        $board.innerHTML = '';
        for (let i = 0; i < imagesforShow.length; i++) {
            const newDiv = `
                <div class="pieceOfboard" id="${i}">
                    <img data-id="${i}" src="${imagesforShow[i]}" style="visibility: hidden;">
                </div>
                <div class="pieceOfboard" id="${i + 17}">
                    <img data-id="${i}" src="${imagesDuplicated[i]}" style="visibility: hidden;">
                </div>
            `;
            $board.innerHTML += newDiv; // Agregar las cartas al tablero
        }
    
        // Manejar el contador de tiempo
        const contadores = document.getElementById('tiempo'); // Contenedor para mostrar el tiempo
        let contador = 0;
        let intervalo;

        if (!intervalo) { // Evitar iniciar múltiples intervalos
            intervalo = setInterval(() => {
                contador++;
                contadores.textContent = contador; // Actualizar el tiempo cada segundo
            }, 1000);
        }
    } else {
        console.log('Condición no cumplida'); // Si no se selecciona 4x4 y tipo dog
    }
}
