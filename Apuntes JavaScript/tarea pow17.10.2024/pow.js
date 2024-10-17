'use strict'

function pow(x,n){//cuando vaya a comparar , primieros comparamos antes de dr el resultado

    let resultx=x;
    if(n===0) return 1;
    if(n<0) return x/-n;

    for(let i=1;i<n;i++){//recorrido del n solicitado
                        
       
         resultx*=x; //multiplicara el resultado=x tanta veces como n solicitado
                    //x*=x o mejor x=x*x;.
    }
  return resultx;//el return debe estar fuera del for siempre;
}


console.log(pow(2,4));