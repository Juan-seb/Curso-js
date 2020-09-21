// JSON

/* const json = {
    cadena : "Juan",
    numero : 18,
    booleano : false,
    arreglo : ["correr","programar","cocinar"],
    objeto : {
        face : "juanSebastian"
    },
    nulo : null
}

console.log(JSON);

console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse(`
{
    "cadena":"Juan",
    "numero":18,
    "booleano":false,
    "arreglo":["correr","programar","cocinar"],
    "objeto":{"face":"juanSebastian"},
    "nulo":null
}
`));

console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify({}));
console.log(JSON.stringify(null));
console.log(JSON.stringify(json)); */

// WEB API´s

/* console.log(window.navigator);
console.log(document);

let texto = "No molestes mas";

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */

// DOM : Introducción

/* console.log("ELEMENTOS DEL DOM");
console.log(window);
console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.link__domconsole.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola desde el DOM </h2>") */

// DOM : Nodos, elementos y selectores.

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));

document.querySelectorAll("a").forEach(element => {
    console.log(element)
});

console.log(document.querySelectorAll(".card:nth-child(4)"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */

//ATRIBUTOS Y DATA - ATRIBUTES

/* console.log(document.documentElement.getAttribute("lang"));
console.log(document.documentElement.lang);

console.log(document.querySelector(".link__dom").getAttribute("href"));
console.log(document.querySelector(".link__dom").href);

console.log(document.documentElement.lang = "en");
console.log(document.documentElement.setAttribute("lang","es-CO"));

const $linkDOM = document.querySelector(".link__dom");
$linkDOM.setAttribute("data-description","Cambiamos descripcion");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); */

// Para los data - atributes

/* console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","DOM 2");
$linkDOM.dataset.description = "Cambio de nuevo";
console.log($linkDOM.dataset.description);
*/



// ESTILOS Y VARIABLES CSS

/* const $linkDOM = document.querySelector(".link__dom");

console.log($linkDOM.style.backgroundColor = "red");
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);

console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%"
$linkDOM.style.margin = "0 auto";
$linkDOM.style.textAlign = "center";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style")); */

// VARIABLES CSS - CUSTOM PROPERTIES

/* const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","pink");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor); */




// CLASES CSS

/* const $card = document.querySelector(".card");
const $html = document.documentElement;

console.log($card);
console.log($card.className);
console.log($card.classList);
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

console.log($card.classList);
$card.classList.remove("rotate-45");

setTimeout(() => {
    $card.classList.remove("rotate-45");
    console.log($card.classList);
}, 5000);

$card.classList.toggle("rotate-45");
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");

$card.classList.add("opacity","sepia");

$card.classList.remove("opacity","sepia");
 */



// DOM: TEXTO Y HTML

/* const $whatISDOM = document.getElementById("que-es");
let text = `<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>`;

$whatISDOM.innerText = text;
$whatISDOM.textContent = text;
$whatISDOM.innerHTML = text;
$whatISDOM.outerHTML = text; */




// DOM TRAVERSING : RECORRIENDO EL DOM.

/* const $cards = document.querySelector(".cards");
const $cuerpo = document.body;

const agregar = document.createElement("p");
agregar.textContent="Hola amigos"

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.children[3].closest("section"));
console.log($cards.appendChild(agregar));
console.log($cards.removeChild(agregar)); */




// DOM : CREANDO ELEMENTOS Y FRAGMENTOS

//FORMA 1 DE AGREGAR DINAMICAMENTE
/* const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figtext = document.createTextNode("Animals"),
    $prueba = document.createElement("figure"),
    $cards = document.querySelector(".cards");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figtext);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); */

//FORMA 2 DE AGREGAR DINAMICAMENTE
/* $prueba.classList.add("card");
$prueba.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$cards.appendChild($prueba);

const estaciones = ["Primavera","Otoño","Verano","Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $ul.appendChild($li);
});

const continentes = ["Africa","America","Asia","Europa","Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML="";
continentes.forEach(element => $ul2.innerHTML += `<li>${element}</li>`); */

// INSERCION AL DOM CON FRAGMENTOS PARA AHORRO DE RECURSOS, UNA SOLA INSERCION

/* const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Junio",
    "Julio"
], 
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.body.appendChild($ul3); */




// DOM : TEMPLATES HTML

/* const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $frag = document.createDocumentFragment();
const cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
];

cardsContent.forEach(element => {
    $template.querySelector("img").setAttribute("src",element.img);
    $template.querySelector("img").setAttribute("alt",element.title);
    $template.querySelector("figcaption").textContent = element.title;

    let $clone  = document.importNode($template,true);
    $frag.appendChild($clone);
}); 

$cards.appendChild($frag); */





// DOM : MODIFICANDO ELEMENTOS (OLD STYLE)

/* const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");
const $cloneCards = $cards.cloneNode(true);


$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Aleatoria">
<figcaption>Aleatoria</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard,$cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard,$cards.firstElementChild);

document.body.appendChild($cloneCards); */




// DOM : MODIFICANDO ELEMENTOS (COOL STYLE)

/* const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Aleatoria">
    <figcaption></figcaption>
`;

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Aleatoria">
    <figcaption>Aleatoria</figcaption>
`;


$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Aleatorio")
//$cards.insertAdjacentElement("afterbegin",$newCard);

//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard);
$cards.after($newCard);
*/






// DOM : MANEJADORES DE EVENTOS

/* const holaMundo = () =>{
    alert("Hola mundo");
    console.log(event);
}

const saludar = (nombre = "Desconocido (a)") => {
    alert(`Hola ${nombre}`)
}

// MANEJADORES SEMANTICOS

const $button = document.getElementById("evento-semantico");
$button.onclick = holaMundo;
$button.onclick = (e) => {
    alert("Manejador de eventos semanticos");
    console.log(e)
};

// MANEJADORES MULTIPLES

const $buttonMultiple = document.getElementById("evento-multiple");

$buttonMultiple.addEventListener('click',holaMundo);
$buttonMultiple.addEventListener('click', (e) =>{
    alert("Hola mundo desde otra funcion y con addEventListener");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});


// DOM: EVENTOS CON PARAMETROS Y REMOVER EVENTOS

const $buttonRemover = document.getElementById("evento-remover");

$buttonMultiple.addEventListener('click', saludar);
$buttonMultiple.addEventListener('click', () => saludar("Juan"));

const removerDobleClick = (e) => {
    alert("Removiendo el evento");
    console.log(e);
    $buttonRemover.removeEventListener("dblclick",removerDobleClick);
    $buttonRemover.setAttribute("disabled","true");
}

$buttonRemover.addEventListener('dblclick', removerDobleClick); */









// DOM: FLUJO DE EVENTOS (BURBUJA Y CAPTURA)

/* const $divEventos = document.querySelectorAll(".eventos__flujo div"); */

/* function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}

console.log($divEventos); */
/* $divEventos.forEach(div => {
    div.addEventListener('click',(e)=>{
        console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    })
}); */

/* $divEventos.forEach(div => {
    //Fase de burbuja
    //div.addEventListener('click',flujoEventos,false);
    //Fase de captura
    //div.addEventListener('click',flujoEventos,true);
    div.addEventListener('click',flujoEventos,{
        capture:false,
        
    });

}); */







// DOM : stopPropagation & preventDefault


/* const $divEventos2 = document.querySelectorAll(".eventos__flujo div");
const $linkEventos = document.querySelector(".eventos__flujo a")

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation(); // Se encarga de que no se propague el evento por las divs
}

$divEventos2.forEach(div => {
    //Fase de burbuja
    div.addEventListener('click',flujoEventos);
    //Fase de captura
    //div.addEventListener('click',flujoEventos,true);
    div.addEventListener('click',flujoEventos,{
        capture:false, 
    });

});

$linkEventos.addEventListener('click',(e)=>{
    alert("Hola aprendiendo JS");
    e.preventDefault();
    e.stopPropagation(); // Se encarga que no se propague el evento con el enlace, es decir que no se imprima el mensaje
    // El evento del enlace se propaga a los eventos del click en el div
}) */









// DOM : DELEGACION DE EVENTOS

/* function flujoEventos(e){

    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}

document.addEventListener('click',(e)=>{
    console.log("Click en", e.target);

    if (e.target.matches(".eventos__flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos__flujo a")) {
        alert("Hola aprendiendo JS");
        e.preventDefault();
    }
}) */











// BOM : PROPIEDADES Y EVENTOS

/* window.addEventListener('resize',(e)=>{
    console.clear()
    console.log("Evento resize")
    console.log(e)
    console.log(window.innerWidth);
    console.log(window.outerWidth);
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log("");

    
})

window.addEventListener('scroll',(e) => {
    console.clear()
    console.log("Evento scroll")
    console.log(e)
    console.log(window.scrollX)
    console.log(window.scrollY)
});

window.addEventListener('load',(e)=>{
    
    console.log("Evento load de la ventana")
    console.log(e)
    console.log(window.screenX)
    console.log(window.screenY)
})

document.addEventListener('DOMContentLoaded', e => {
    
    console.log("Evento DOM Content Loaded")
    console.log(e)
    console.log(window.screenX)
    console.log(window.screenY)
}) */








// BOM: METODOS

/* const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener('click',(e) =>{
    ventana = window.open("https://jonmircha.com");
    console.log(ventana);
});
$btnCerrar.addEventListener('click',(e) =>{
    
    ventana.close();
});
$btnImprimir.addEventListener('click',(e) =>{
    window.print();
}); */










// BOM: Objetos: URL, Historial y Navegador

/* console.log("***** Objeto location o URL");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
*/

/* console.log("******Objeto History (Historial)");
console.log(history);
console.log(history.back(2));
console.log(history.forward(2));
console.log(history.go(5)); */

/* console.log("********Objeto navigator");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */


// AQUI TERMINA TODA LA EXPLICACION DEL DOM, CSSOM, BOM