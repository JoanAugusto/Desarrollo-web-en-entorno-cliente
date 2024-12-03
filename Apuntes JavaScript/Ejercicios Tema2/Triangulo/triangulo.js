'use strict'

/*
- Hacer una función llamada "triangulo" que muestre un triángulo dado el tamaño de su lado como en el ejemplo siguiente usando tamaño 4:

*
**
***
****
*/

/*
- Hacer una función llamada "trianguloDerecha" que muestre un triángulo dado el tamaño de su lado, como en el ejemplo siguiente usando tamaño 4:

   *
  **
 ***
****
*/ 

function trianguloIzq(num){
    for(let i=1;i<=num;i++){//primer for para hacer la estructura segun con a cantidad de num , si num es 5 pues habra 5 filas con espacios claro
        let linea=" ";

        for(let k=1;k<=num-i;k++){
         
         linea+=" ";//solucion es concatnarlo con la nueva linea.
        }
        for(let j=1;j<=i;j++){ //Si iniciliazmos desde el 0 
          linea+="*";
          
        }
        console.log(linea);

    }
}

trianguloIzq(5);