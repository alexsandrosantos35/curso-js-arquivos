var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o texto do paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);

var container = document.getElementById("container");

var texto2 = document.createTextNode("Texto do span.");

var span = document.createElement("span");

span.appendChild(texto2);

container.appendChild(span);