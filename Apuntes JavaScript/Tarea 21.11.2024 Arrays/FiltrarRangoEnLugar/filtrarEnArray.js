'use strict'

function filterRange(arr=[],a,b){
    
    let arr2=[];
    let values="";
    for (let i=0;i<=arr.length;i++){
        
        if( arr[i] <= b && arr[i] >= a){
           
            values=arr[i];
            arr2.push(values)
            console.log(arr2);

            
            


            
        }if(arr[i]!== a && arr[i]!==b){
            arr.shift(arr[i]);
            
        }//hacer en casa 
       
       
        
    }
    
    
   console.log();
}
filterRange([9,5,6,7,1,0,2],1,3);

