'use strict'

function filterRange(arr=[],a,b){
    
    const arr1=[]
    
    for (let i=0;i<=arr.length;i++){
        
        if( arr[i] <= b && arr[i] >= a){
            
            arr1.push(arr[i]);
            //ArrayAux[arrayAux.length]=arr[i];
            //debemos pensar en bajo y buscar lo sencillo 
            
        
        }
       
       
        
    }
    // const arr2=arr.filter(item=> item>=a && item<=b); con filter 
    
   console.log(arr1);
}
filterRange([9,5,6,7,1,0,2],1,3);

