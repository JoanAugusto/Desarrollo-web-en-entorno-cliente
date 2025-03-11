'use strict'
const $buttonShort=document.querySelectorAll('button');
const $div=document.getElementById('content');
$buttonShort.forEach(function($button){
    $button.addEventListener('mouseenter',(evento)=>{
        

        let beforeButton=$div.firstElementChild.nextElementSibling;
        const newDiv=document.createElement('div');
        let valueButton=evento.target.dataset.tooltip;
        newDiv.appendChild(valueButton);
        newDiv.outerHTML=`<p>${valueButton}</p>`;
        console.dir($div.firstElementChild.nextElementSibling);
        // console.dir(evento.target.dataset.tooltip);
        beforeButton.append(newDiv,beforeButton);
        

    });
    $button.addEventListener('mouseleave',(evento)=>{
        
            const $newDiv=document.getElementById('tool');
            $newDiv.style.visibility='hidden';

    });
});



