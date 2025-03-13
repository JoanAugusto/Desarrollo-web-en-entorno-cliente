'use strict'
const $buttonShort=document.querySelectorAll('button');
const $div=document.getElementById('content');


$buttonShort.forEach(function($button){
    $button.addEventListener('mouseover',(evento)=>{
        
        
        let beforeButton=$div.firstElementChild;
        const newDiv=document.createElement('div');
        let valueButton=evento.target.dataset.tooltip;
        // newDiv.appendChild(valueButton);
       
        
        // console.dir(evento.target.dataset.tooltip);
        beforeButton.appendChild(newDiv,beforeButton);
        newDiv.outerHTML=`<p id=tool>${valueButton}</p>`;

        // console.dir($buttonShort);
        


    });
    $button.addEventListener('mouseout',(evento)=>{
           
            const $newDiv=document.getElementById('content');
            console.dir($newDiv.lastElementChild.previousElementSibling.previousElementSibling.lastChild);
           const $pTool=$newDiv.lastElementChild.previousElementSibling.previousElementSibling.lastChild;
           if($newDiv.contains($pTool)){
                $pTool.remove();
           }

    });
});



