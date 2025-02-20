let $allDiv=document.querySelectorAll('.pane');//itetrable
let $fatherDiv=document.getElementById('fatherDIV');

    
    
for( let divs of $allDiv){
    
   
    divs.insertAdjacentHTML('afterbegin','<button class="remove-button" id="remove-button">[x]</button>');
    
   
    divs.firstChild.addEventListener('click',function (){
        divs.innerHTML="";
        divs.remove();
    });
    

       
} 

