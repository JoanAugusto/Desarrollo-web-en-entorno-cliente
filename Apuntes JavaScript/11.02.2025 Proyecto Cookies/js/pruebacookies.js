const $oscuro = document.querySelectorAll("input")[0];
$oscuro.addEventListener("click", myFunction1);

const $white = document.querySelectorAll("input")[1];
$white.addEventListener('click', myFunction2);

const $aceptar = document.querySelectorAll("button")[1];
$aceptar.addEventListener('click', botonClick);

//check idioma
const $en = document.querySelectorAll("input")[3];
$en.addEventListener("click", functionEnglish);

const $es = document.querySelectorAll("input")[2];
$es.addEventListener("click", functionSpanish);


//Zona cambio de idioma
const $iterTexto=document.querySelectorAll("p")[0];
const $iterTexto1=document.querySelectorAll("p")[1];
const $iterTexto2=document.querySelectorAll("p")[2];
const $iterTexto3=document.querySelectorAll("p")[3];
const $iterTexto4=document.querySelectorAll("p")[4];
const $iterTexto5=document.querySelectorAll("p")[5];
const $iterTexto6=document.querySelectorAll("p")[6];
console.dir($iterTexto);



let modCookieDark = "";
let modCookieWhite = "";
let modCookieEn="";
let $tagHtml = document.documentElement;

// Función que se ejecuta cuando se hace clic en el checkbox oscuro
function myFunction1(evento) {
  console.dir(evento.target.value);
  const detectCheck = evento.target.checked;

  if (detectCheck === true && evento.target.value === 'oscuro') {
    modCookieDark = "background-color: black;";
    document.cookie = "background-color=black; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Guardamos la cookie
    console.log(modCookieDark);
  }
}

// Función que se ejecuta cuando se hace clic en el checkbox claro
function myFunction2(evento) {
  const detectCheck = evento.target.checked;

  if (detectCheck === true && evento.target.value === 'claro') {
    modCookieWhite = "background-color: white;";
    document.cookie = "background-color=white; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Guardamos la cookie
    console.log(modCookieWhite);
  }
}

// Función que se ejecuta cuando se hace clic en el botón de aceptar
function botonClick() {
  // Aplicamos el valor de la variable global al estilo del documento
  if (modCookieDark) {
    $tagHtml.style = modCookieDark; // Cambiamos el fondo a negro
  } else if (modCookieWhite) {
    $tagHtml.style = modCookieWhite; // Cambiamos el fondo a blanco
  }else if(modCookieEn){
      $iterTexto.lang="ingles";
  }
}

// Función que lee la cookie y aplica el color guardado
function aplicarColorGuardado() {
  const colorGuardado = document.cookie.split(';').find(cookie => cookie.includes('background-color'));
  
  if (colorGuardado) {
    const color = colorGuardado.split('=')[1];
    if (color === 'black') {
      $tagHtml.style = "background-color: black;";
    } else if (color === 'white') {
      $tagHtml.style = "background-color: white;";
    }
  }
  const idiomaGuardado = document.cookie.split(';').find(cookie => cookie.includes('idioma'));
  if(idiomaGuardado){
    const idioma=idiomaGuardado.split("=")[1];
    if(idioma==='ingles') {
      
      $iterTexto.textContent="Site of configuration of the cookies ";
      $iterTexto1.textContent="Select types of cookie that you want to allow install in your website";
      $iterTexto2.textContent="This site web use a cookies for improve your experience of navegation, custom the conent and check the traffic.You can accept all cookies , custom if you want or not accepts.When you continue surfWeb, allow our Cookies of the Politicy";
      $iterTexto3.textContent="Cookies necesary o tecnics(ever actives)";
      $iterTexto4.textContent="Options:";
      $iterTexto5.textContent="Appareance of page:";
      $iterTexto6.textContent="Select Languages:";
  }
  
  if(idiomaGuardado){
    const idioma=idiomaGuardado.split("=")[1];
    if(idioma==='español') {
      
      $iterTexto.textContent="Zona de Configuración de las cookies ";
      $iterTexto1.textContent="Selecciona los tipos de cookie que permitas instalar en tu navegador";
      $iterTexto2.textContent="Este sitio web utiliza cookies para mejorar tu experiencia de navegación, personalizar el contenido y analizar el tráfico. Puedes aceptar todas las cookies, configurarlas según tus preferencias o rechazarlas. Al continuar navegando, aceptas nuestra [Política de Cookies].";
      $iterTexto3.textContent="Cookies necesarias o técnicas (siempre activas)";
      $iterTexto4.textContent="Opciones:";
     $iterTexto5.textContent="Aspecto de la Página:";
     $iterTexto6.textContent="Preferencias de Idioma:";
    }
  }

}
}





  //Cmabio de es a en
  function functionEnglish(evento){
    console.dir(evento.target.value);

    if(evento.target.tagName!='INPUT'){//salida prematura
        return;
    }

      if(evento.target.tagName==='INPUT' && evento.target.value==='en') {

          modCookieEn="idioma=ingles";
          document.cookie="idioma=ingles";
      }
      
  }
  function functionSpanish(evento){
    console.dir(evento.target.value);

    if(evento.target.tagName!='INPUT'){//salida prematura
        return;
    }

      if(evento.target.tagName==='INPUT' && evento.target.value==='es') {

          modCookieEn="idioma=español";
          document.cookie="idioma=español";
      }
  }


// Aplica el color guardado al cargar la página
window.onload =aplicarColorGuardado;




