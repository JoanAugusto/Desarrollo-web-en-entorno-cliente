'use strict'
function filterRangePlace(arr,a,b){
    
    for(let i=0;i<=arr.length;i++){// la i++ no debe usarse cunaod buscvamo otros valores que no cumpla la funcion , si cumple seria i++ , en este queremos a los que no cumple
       
        if( arr[i] < a || arr[i] > b ){//nuestra intencion es eliminar valores dentro del array , por lo que si queremos hacer esto , debemos recorrer el bucle desde el final 
            arr.splice(i,1) //queremos que recorra todo el array vaa eliminado todo el array que cumpla esa condicion y vaya borramndo uno a uno.
            i--;//reajustamos el indice , el for iterará todo el array hacie delante pero cuinaod llegue eñl if ; a la hora de hace splice , ira desde el final
        }
    }
   console.log(arr);
}   
filterRangePlace([2,4,6,7,8,1,2],2,4);


