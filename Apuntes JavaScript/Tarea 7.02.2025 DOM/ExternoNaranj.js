'use strict'

const iterableA=document.querySelectorAll('a');


for(let a of iterableA){
    let getHref=a.getAttribute('href');
    
   if(getHref.includes('://') || getHref.startsWith('://')){
        a.style.color = 'orange';
   }else{
    a.style.color='red';
   }
}