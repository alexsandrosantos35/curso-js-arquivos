var idade = 17;
var nome = "João";

if(nome === "João" && idade === 16) {
    console.log("O João pode entre na aula de esgrima.");
}
else {
    console.log("Este não é o João.");
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 2) && true) {
    console.log("Passou");
}
if(nome === "João" && idade >= 14) {
    console.log("Aqui passa.");
} // deu um defeito no else if