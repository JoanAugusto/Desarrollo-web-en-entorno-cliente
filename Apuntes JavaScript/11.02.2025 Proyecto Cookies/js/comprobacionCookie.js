// configuracion.js
'use strict'
// Función para obtener el valor de una cookie por su nombre
function obtenerCookie(nombre) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === nombre) {
            return value;
        }
    }
    return null;
}


// Función para aplicar el color de fondo guardado en las cookies
function aplicarColorDesdeCookies() {
    let colorGuardado = obtenerCookie('background-color');
    
    if (colorGuardado) {
        document.documentElement.style.backgroundColor = colorGuardado;
        document.body.style.backgroundColor=colorGuardado;

    } else {
        // Si no hay cookie de color, redirigir a config.html
        window.location.href = './config.html';
    }
}

// Ejecutar la función al cargar la página
window.onload = aplicarColorDesdeCookies;