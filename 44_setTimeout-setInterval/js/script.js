console.log("Altes do setTimeout");

setTimeout( function () {
    console.log("Testando setTimeout");
}, 3000);

console.log("Depois do stTimeout");

setInterval( function () {
    console.log("Testando setInterval");
}, 1000);