'use strict'


function printNumbers(from , to){
    //sintaxis let timerId = setInterval(func|código, [retraso], [arg1], [arg2], ...);
       let inicio =from
   
   
      let timerId=setInterval(function(){
        for(let i=inicio;i<=to;i++){
           
            if(inicio==i){
                clearInterval(timerId);
            }else{
                console.log(i);
            }
            
        }
      },1000)
   }

printNumbers(5,10);