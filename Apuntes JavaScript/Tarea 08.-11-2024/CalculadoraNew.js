'use strict'

function Calculator(){
    this.read= function(){
        this.a=+prompt("input an first number:",0);
        this.b=+prompt("input an Second number",0);
    }
    this.sum=function(){
        
        return this.a + this.b;
    }
    this.mul=function(){
        return this.a * this.b;
    }
}
let calculator=new Calculator();
        calculator.read();


    alert("Sum="+ calculator.sum());
    alert("Mul="+ calculator.mul());