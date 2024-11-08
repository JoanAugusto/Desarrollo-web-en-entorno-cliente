'use strict'
let a =0;
let b=0;
let calculator = {
    
    read:function(){
        this.a=+prompt("Introduce el primer valor:");
        this.b=+prompt("Introduce el segundo valor:");
        
    },
    sum:function(){

        let sumRead= this.a +this.b;
        console.log(sumRead);  
    },
    mul:function(){
        let mulRead=this.a * this.b;
        console.log(mulRead);
    }
   
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );