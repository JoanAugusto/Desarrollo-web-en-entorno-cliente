const $oscuro=document.querySelectorAll("input")[0];
$oscuro.addEventListener("click", myFunction1);




function myFunction1 (evento){
    console.dir(evento.target.value);
   
    let nameOscuro='';
    const detectCheck=evento.target.checked;

    if( detectCheck===true && evento.target.value==='oscuro'){
        document.cookie="background-color=black";
        
         nameOscuro=getCookie(document.cookie);
        
    }
   return nameOscuro;
    
}
function getCookie(name) {
    
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    console.log(matches);

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

