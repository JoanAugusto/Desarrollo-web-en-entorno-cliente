'use strict'

const message="mensaje";


let text="";
for(let i of message){
    text=i+`\t` //No poner += ya que lo que hara es que de cada letra que tendra que recorrer lo asgnara pero los demas los concatenará   
    console.log(text); 
}
