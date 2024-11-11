// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  //Visualizacion por propiedades
  console.log(person.name+"\t" + person.age +"\t" + person.city);
  // por bucle
  let text="";
  for (let x in person){
    text+= person[x] + "";
   
  };
  console.log(text);
  //Por OBject.values();

  const myArray=Object.values(person);
  console.log(myArray); //lo guarda en un array 

  //por Object.entries();
  const fruits = {Bananas:300, Oranges:200, Apples:500};
  let text2="";
  for (let[fruit,value] of Object.entries(fruits)){
    text2 += fruit+ ":"+value+"\n";
  }
  console.log(text2);

  //por JSON.stringify();

  let myString2=JSON.stringify(person);
  console.log(person);