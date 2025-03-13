'use strict'

const $buttonShort=document.querySelectorAll('button');
const $div=document.getElementById('content');


$buttonShort.forEach(function($button){
    $button.addEventListener('mouseover',(evento)=>{
        
        let beforeButton=$div.firstElementChild.nextElementSibling;
       
        const newDiv=document.createElement('div');
        let valueButton=evento.target.dataset.tooltip;
        // newDiv.appendChild(valueButton);
       
        
        // console.dir(evento.target.dataset.tooltip);
        beforeButton.before(newDiv);
        newDiv.outerHTML=`<div id=tool> <p> ${valueButton}</p> </div>`;
        
        
       
        console.dir(beforeButton);
        const $CaptureNewDiv=document.getElementById('tool');
        $CaptureNewDiv.style=" position:absolute; border:1px solid black; border-radius:1rem; ";
        if($button.innerHTML==="One more button"){
         
                $CaptureNewDiv.style="margin-left:25%; position:absolute; border:1px solid black; border-radius:1rem;" ;
          
        }
        


    });
    $button.addEventListener('mouseout',(evento)=>{
      
            const $newDiv=document.getElementById('content');
            console.dir($newDiv.lastElementChild.previousElementSibling.previousElementSibling);
           const $pTool=$newDiv.lastElementChild.previousElementSibling.previousElementSibling;
           if($newDiv.contains($pTool)){
                $pTool.remove();
           }

    });
});



