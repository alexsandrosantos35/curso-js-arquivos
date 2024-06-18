//legth

var vetor = [1, 2, 3, 4, 5];

console.log(vetor.length);

//push

vetor.push(6);
vetor.push("Qualquer coisa");

console.log(vetor);

//pop

vetor.pop();

console.log(vetor);

//unshift

vetor.unshift(0);
vetor.unshift("teste");

console.log(vetor);

//shift

vetor.shift()

console.log(vetor);

//acessar o último elemento

console.log(vetor[vetor.length-1]);

//isArray

console.log(Array.isArray(5));
console.log(Array.isArray(vetor));