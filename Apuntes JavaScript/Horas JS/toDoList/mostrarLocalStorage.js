
//vamos a mostrar en la página el contenido de "coches"
//DOMContentLoaded --> Significa que ejecutes la funcion cunado se haya cargado los elementos html antes no
document.addEventListener('DOMContentLoaded',principal);

// Función que se ejecuta al cargar los elementos de la página (los tags)
function principal(){//$ signifca que es parte del DOM
    const $boton = document.getElementsByTagName('button')[0];
    $boton.addEventListener('click',pueblaLocalStorage);
    //primero localizamos el formulario
    const $Formulario=document.getElementById('Añadecoche');
    $Formulario.addEventListener('submit',altaCoche);//Dbeemos de añadir al DOM y al LocalStorage

    //Mostrmos el conenido en LocalStorage
    const $contenido=document.getElementById('contenido');
    const coches= JSON.parse(localStorage.getItem('coches'));//Cuando llamamos al LocalStorage debemos de trasnformarlo dennuevo a un Array de Objetos
    //elimina
    $contenido.addEventListener('click',eliminaCoche);
    let listadoCoches= coches.map(c=> `<li data-id="${c.id}"> ${c.marca} ${c.modelo} <button type="button">Eliminar</button></li>`).join('');
    let plantilla=`<ul> ${listadoCoches}</ul>`;
    

    $contenido.innerHTML=plantilla;//esto es para inyectar la plantilla dentro del tag con id contenido
}
function pueblaLocalStorage(){
    const coches=[
        {id:100,marca:"Seat",modelo:"panda"},
        {id:101,marca:"Renault",modelo:"Laguna"},
        {id:102,marca:"Ford",modelo:"Fiesta"},
        {id:103,marca:"Audi",modelo:"R8"},
        {id:104,marca:"Opel",modelo:"Corsa"}
        
    ];
    

    localStorage.setItem('coches',JSON.stringify(coches));//transformamos el contenido del array de objetos a JSON(String)
}

function eliminaCoche(evento){
    console.log(evento.target.tagname);
    if(evento.target.tagName!=='BUTTON' || evento.target.textContent !== "ELIMINAR")return 
    console.log(evento.target.parentElement);//el LI que queriamos eliminar
    console.log(evento.target.parentElement.dataset);//el LI que queriamos eliminar
    evento.target.parentElement.remove();
    
}
function altaCoche(evento){
    evento.preventDefaul(); //Signifca que la accion que hace cualquier formulario u otra cosa que no lo haga
    console.dir(evento);
}