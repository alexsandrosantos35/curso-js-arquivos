function exibir(num) {
    console.log("Cálculo realizado, o resultado é " + num);
}

function soma(a, b, callback) {
    let soma = a + b;
    callback(soma);
}

function multiplicacao(a, b, cb) {
    let op = a * b;
    cb(op);
}

soma(2,2, exibir);
multiplicacao(2, 4, exibir);