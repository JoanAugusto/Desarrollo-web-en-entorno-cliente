let $allDiv=document.querySelectorAll('.pane');//itetrable
let $fatherDiv=document.getElementById('fatherDIV');
let $button=document.getElementById('remove-button');

for( let divs of $allDiv){
    
   
    divs.insertAdjacentHTML('afterbegin','<button class="remove-button" id="remove-button">[x]</button>');
    console.dir(divs.firstElementChild);
       
} 