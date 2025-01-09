const coches=[
    {marca:"Seat",modelo:"panda"},
    {marca:"Renault",modelo:"Laguna"},
    {marca:"Ford",modelo:"Fiesta"},
    {marca:"Audi",modelo:"R8"},
    {marca:"Opel",modelo:"Corsa"}
    
];
//vamos a mostrar en la página el contenido de "coches"
//DOMContentLoaded --> Significa que ejecutes la funcion cunado se haya cargado los elementos html antes no
document.addEventListener('DOMContentLoaded',principal);

// Función que se ejecuta al cargar los elementos de la página (los tags)
function principal(){//$ signifca que es parte del DOM
    const $contenido = document.getElementById('contenido');

    // let plantilla="<ul>";
    // //...
    //     for(let coche of coches){
    //         plantilla += '<li>' +coche.marca + ' '+coche.modelo + '</li>';
    //     }
    // plantilla+= "</ul>";

    let listadoCoches= coches.map(c=> `<li> ${c.marca} ${c.modelo}</li>`).join('');
    let plantilla=`<ul> ${listadoCoches}</ul>`;
    

    $contenido.innerHTML=plantilla;//esto hra inyectar la plantilla dentro del tag con id contenido
}