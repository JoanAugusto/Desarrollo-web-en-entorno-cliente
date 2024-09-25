'use strict '
const image=document.getElementById('imagen');
const parrafo=document.getElementById('cambiar');

function cambiarImagen(){
    

if(image.src.match('green')){
        image.src='https://www.prensalibre.com/wp-content/uploads/2019/06/FBL-EUR-NATIONS-POR-NED_45213397.jpg?quality=82';


    }else{
        image.src='https://th.bing.com/th/id/OIP.CjuJhR9wS4jD9R183-cdDwHaEK?rs=1&pid=ImgDetMain';

    }
}

image.addEventListener('click',cambiarImagen)
parrafo.addEventListener("mouseleave",cambiarImagen)


    
