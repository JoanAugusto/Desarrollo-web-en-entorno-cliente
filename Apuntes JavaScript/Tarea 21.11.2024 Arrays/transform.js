'use strict'

function camelize(str){
   let arr=str.split("-");
//    console.log(arr);
//    let coso= String(arr[1]);*
//    let demas=coso.slice(1);
//    let letra =coso.slice(0,1).toUpperCase();
//    console.log(demas);
//    console.log(arr);
//    console.log(letra)
  
   
//    let junte=letra+demas;
//    arr[1]=junte;
//    console.log(arr);
//    console.log(junte);
  
   for(let i=0;i<=arr.length;i++){
        let text="";
        
        if(i+1 <arr.length){// VERIFICAMOS SI HAY SIGUIENTE ELEMENTO
            let pos=String(arr[i+1]); //Lo que  hace en vez de inicar todo en el primer elemento qyue mepieze en el siguiente
            
            let newStr=pos.slice(0,1).toUpperCase()+pos.slice(1);//Obtenemos la primera letra (trasnormado mayus) y obtenemos los demas y lo unimos
            // console.log(newStr);
            arr[i+1]=newStr;//sustituiimos el valor original de arr y ponemos el nuevo
           let newArr=String(arr);
          
           let arr2=newArr.split(',');//new array
           for(let newWords of arr2 ){//valores del array2
                text += newWords
           }
        }else{
            console.error("Error");
            
        }
        console.log(text);
       
       
        
   }
}
camelize('background-color-pepe-jeico');

