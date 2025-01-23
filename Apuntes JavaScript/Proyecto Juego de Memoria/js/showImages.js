'use strict';

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

let anteriorCarta = null;
let posteriorCarta = null;
let anteriorElemento = null;

document.addEventListener('DOMContentLoaded', principal);

function principal() {
    const $containerBoard = document.getElementById('elementFather');
    $containerBoard.addEventListener('submit', contentOfBoard);

    const $listImg = document.getElementById('containerBoard');
    $listImg.addEventListener('click', manejarClickCarta);
}

function manejarClickCarta(evento) {
    if (evento.target.className === 'pieceOfboard' || evento.target.parentElement.className === 'pieceOfboard') {
        const cartaClickeada = evento.target.closest('.pieceOfboard');
        const imagen = cartaClickeada.querySelector('img');

        // Si ya está descubierta, no hacemos nada
        if (imagen.style.visibility === 'visible') return;

        cartaClickeada.classList.add('quitColour');
        imagen.style.visibility = 'visible';

        if (!anteriorCarta) {
            anteriorCarta = imagen.src;
            anteriorElemento = cartaClickeada;
        } else {
            posteriorCarta = imagen.src;

            // Comparación de las dos cartas
            if (anteriorCarta === posteriorCarta) {
                // Si son iguales, se quedan visibles
                anteriorCarta = null;
                posteriorCarta = null;
                anteriorElemento = null;
            } else {
                // Si no son iguales, las ocultamos después de un tiempo
                setTimeout(() => {
                    cartaClickeada.classList.remove('quitColour');
                    imagen.style.visibility = 'hidden';

                    anteriorElemento.classList.remove('quitColour');
                    anteriorElemento.querySelector('img').style.visibility = 'hidden';

                    anteriorCarta = null;
                    posteriorCarta = null;
                    anteriorElemento = null;
                }, 1000);
            }
        }
    }
}

function contentOfBoard(evento) {
    evento.preventDefault(); // Evita que recargue la página

    const valueSelect = document.getElementById('dificulty').value; // Selector de dificultad
    const valueTypeCards = document.getElementById('cards').value; // Selector de tipo de cartas
    const contadores= document.getElementById(tiempo);
    if (valueSelect === '4x4' && valueTypeCards === 'dog') {
        console.log('Condición cumplida: 4x4 y tipo dog');
        const $board = document.getElementById('containerBoard');
        $board.innerHTML = '';
        for (let i = 0; i < imagesforShow.length; i++) {
            const newDiv = `
                <div class="pieceOfboard" id="${i}"><img data-id="${i}" src="${imagesforShow[i]}" style="visibility: hidden;"></div>
                <div class="pieceOfboard" id="${i + 17}"><img data-id="${i}" src="${imagesforShow[i]}" style="visibility: hidden;"></div>
            `;
            $board.innerHTML += newDiv;
        }
    
        const contadores = document.getElementById('tiempo'); // Corrige el identificador aquí
        let contador = 0;
        let intervalo;
    
        if (!intervalo) { // Evita iniciar múltiples intervalos
            intervalo = setInterval(() => {
                contador++;
                contadores.textContent = contador; // Actualiza el tiempo
            }, 1000);
        }
    } else {
        console.log('Condición no cumplida');
    }
    
}
