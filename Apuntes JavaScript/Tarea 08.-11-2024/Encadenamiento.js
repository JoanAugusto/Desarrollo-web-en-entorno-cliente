'use strict'
let ladder = {
    step: 0,
    
      up() {
         this.step++;// this es como si fuera una declaracion de variable , es como si fuera let o const, debemos de llamarlo pero con la inicializacion.
         return this;
        },
    
    down() {
       this.step--;
       return this;
    },
    showStep: function() { // muestra el peldaño actual
        alert( this.step );
        return this;
    }
  };
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0