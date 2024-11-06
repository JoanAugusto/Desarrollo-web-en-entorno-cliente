'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  for(let keys in salaries){
    if(keys in salaries){
        let num=salaries.John + salaries.Ann + salaries.Pete;
        console.log(num);
    }else{
        console.log(0);
    }
  }