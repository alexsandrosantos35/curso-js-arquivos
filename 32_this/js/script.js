console.log(this);

let pessoa = {
    nome: "Alexsandro",
    idade: 46,
    falar: function() {
        console.log("Olá, tudo bem?");
    }, 
    dizerNome: function() {
        console.log("Meu nome é " + this.nome)
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr " + this.nome;
    } 
}

pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);

let sdc = pessoa.saudacao();
console.log("Olá " + sdc)


