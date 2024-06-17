//toUpperCase toLowerCase

let frase = "Esta é a frase que iremos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

//trim

var nome = "      Matheus     ";
var nomeTrim = nome.trim();

console.log(nomeTrim);

//split 

console.log(frase.split(" "));

var tags = "html, react, css, javascript";

console.log(tags.split(", "));

//lastIndexOf

var fraseDois = "Eu quero a última palavra teste deste teste";

console.log(fraseDois.indexOf("teste"))//para no primeiro.
console.log(fraseDois.lastIndexOf("teste"))



