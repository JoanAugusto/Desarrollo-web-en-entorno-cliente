'use strict'
const $ul=document.getElementById('tree');

const $li=document.querySelectorAll('li');
    for(let li of $li){
       let texto= li.firstChild;
       let span=document.createElement('span');
       span.append(texto);
       li.prepend(span);
    }


$ul.addEventListener('click',function (event){
    console.dir(event.target.parentNode);
    if (event.target.tagName != 'SPAN') {//salida orwmtura
        return;
      }

      let childrenContainer = event.target.parentNode.querySelector('ul');
      if (!childrenContainer) return; // sin hijos
      childrenContainer.hidden = !childrenContainer.hidden;
   


   

});

