const $divFather=document.getElementById('container');
$divFather.addEventListener('click',function (evento){
    
    if(evento.target.tagName!= 'BUTTON'){
        return;

    }
   console.dir(evento.target.parentNode);
//    evento.target.parentElement

    if(evento.target.tagName==='BUTTON'){
        evento.target.parentNode.remove();
    }
});