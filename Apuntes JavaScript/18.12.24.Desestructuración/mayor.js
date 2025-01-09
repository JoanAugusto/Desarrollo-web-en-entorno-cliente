'use strict'
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salarios){
    let mayor=-Infinity;// supongamos que este es el mayor
    let nombre=null;// en caso de no haber ningún tipo de valores en el obj , devolverá null

    for(let [nombreArray,valor] of Object.entries(salarios)){//Object.entries() devuelve un vector
        if( mayor< valor){
            [nombre,mayor]=[nombreArray,valor ];//esto lo que hara en con el for irá recorriedno todo el 
                                                //objeto hasta encontrar el mayor de todos , ya que irá guardando e ira actualizandose.
        }
        
    }
    return nombre;
  }
 console.log(topSalary(salaries));