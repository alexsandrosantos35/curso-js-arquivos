let pessoa = {
    nome: "Alexsandro",
    idade: 46,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    somar: function(a, b) {
        return a + b;
    }
}

console.log(pessoa.nome);

pessoa.falar();

pessoa.somar(2, 2);
console.log(pessoa.somar(2, 2));
