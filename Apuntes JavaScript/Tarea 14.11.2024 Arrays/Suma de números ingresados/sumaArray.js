'use strict'
let contador=0;
const sum=[];
function sumInput(){
    // let inputUser= Number(prompt("Introduce numbers:"));
    // console.log(inputUser);
    // const sum=[];
    // sum.unshift(inputUser);
    // console.log(sum);
   
        while(true){
           
            let inputUser=+ Number(prompt("Introduce numbers:"));
        
            if(inputUser==null){
                return;
            }else if(!inputUser){
                return;
            }else if (inputUser==NaN){
                return;
            }else{
                sum.unshift(inputUser);
            }

            console.log(sum);
            //operacion sumamos todos lo valores
                 
        }
        
     
       
}
    

    
    


sumInput();