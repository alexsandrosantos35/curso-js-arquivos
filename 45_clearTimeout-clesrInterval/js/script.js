//clesrTimeout na prática
let x = 0;

let myClear = setTimeout( function() {
    console.log("O X é igual a 0");
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myClear);
    console.log("X é maior que 0");
}

//clearInterval na prática

let myInterval = setInterval( function() {
    console.log("Imprimindo intervalo");
}, 500);

setTimeout(function () {
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500);