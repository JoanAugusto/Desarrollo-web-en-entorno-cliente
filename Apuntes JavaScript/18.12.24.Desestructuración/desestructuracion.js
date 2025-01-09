let user = { name: "John", years: 30 };

// tu código al lado izquierdo:
let {
    name,
    years:age,
    isAdmin=false,
}=user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false