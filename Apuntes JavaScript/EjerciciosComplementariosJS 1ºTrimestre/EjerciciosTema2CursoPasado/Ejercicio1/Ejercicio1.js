'use strict'

/*
1.- Haz una función llamada ordena, tendrá 2 parámetros de entrada: el primero, será el array que deseamos ordenar; el segundo, nos indica si usaremos ordenación numérica (true) o alfabética(false). Esta función no modifica el array de entrada y devuelve un array nuevo ordenado de menor a mayor. No podéis usar sort ni cualquier otra función que haga la ordenación por vosotros. Prueba su funcionamiento con los siguientes ejemplos de uso:

 ordena([3, 2, "30", 4], true);  // devuelve un array nuevo ordenado numéricamente [2, 3, 4, "30"] 

 ordena([3, 2, "30", 4], false);  // devuelve un array nuevo ordenado alfabéticamente [2, 3, "30", 4]


*/ 

function ordena(arr=[],a){
    const arr2=[];
    
    for(let i=0;i<arr.length;i++){// se encargará de hacer las pasadas enteras del bucle y la j se encargará de realizzar as comparaciones segun la longitud que tiene y en el otro debemos pensar que debe hacer menospasadas ya que al principio se iran ordenando 
        
        for(let j=0;j<arr.length-i-1;j++){//ponemos arr.lenght-i-1 porque en teoria no es necesario pasar por el finl porque es el valor mayor del array, por eso decimos que decremenetado la longitud del array -i y le restamos el ultimo valor que es el mayor -1
            //no poner varuiable no es necesario da problemas.
            if(a===true && arr[j]>arr[j+1]){
                Number(arr[j]);
                let aux=arr[j];//guardamos el primero y lo llevamos en aux y lo teneoms asi [aux,arr[j+1]] porque debemos pensar en la condicion que hicimos en el if 
                                
                arr[j]=arr[j+1];//ahora esta que asi [aux,arr[j]]y el aux debe salir por lo que diremos que temp=arr [j+1]
                
                arr[j+1]=aux; //ahora ponemos esto asi para que quede asi el array como queremos [arr[j+1],arr[j]];

            } else if(a===false){
                String(arr[j]);
                
            }
            
            
        }
    }
   
    
}

ordena([2,1,5,"7",8,],false);


