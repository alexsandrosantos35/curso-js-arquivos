function primeiraFuncao() {
    console.log("Hello world das funções.");
}

primeiraFuncao();

function dizendoNome(nome) {
    console.log("O nome é " + nome);
}
dizendoNome();
dizendoNome("Alexsandro");
dizendoNome("Pedro");
dizendoNome("Xavier");

var nomedoBancoDeDados = "João";

dizendoNome(nomedoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var soma1 = soma(2, 3);

console.log(soma1);

var soma2 = soma(5, 5);

console.log(soma2);
console.log(soma(4, 5));