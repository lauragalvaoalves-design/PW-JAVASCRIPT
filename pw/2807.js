let frutas = ["maçã", "banana", "uva"];
console.log("Array:", frutas);
console.log("Primeira fruta:", frutas[0]);


let listaSimples = ["Ana", "João", "Maria"];
console.log("Lista simples:", listaSimples);

let listaDupla = ["A", "B", "C"];
console.log("Lista dupla:", listaDupla);

let listaCircular = ["1", "2", "3"];
console.log("Lista circular:");
for (let i = 0; i < 6; i++) {
    console.log(listaCircular[i % listaCircular.length]);
}

let pilha = [];
pilha.push("Livro 1");
pilha.push("Livro 2");
console.log("Pilha:", pilha);
console.log("Removido:", pilha.pop());

let fila = [];
fila.push("Cliente 1");
fila.push("Cliente 2");
console.log("Fila:", fila);
console.log("Atendido:", fila.shift());

let numeros = [];
for (let i = 1; i <= 5; i++) {
    numeros.push(i);
}
console.log("Alocação dinâmica:", numeros);

function fatorial(n) {
    if (n === 1) return 1;
    return n * fatorial(n - 1);
}
console.log("Fatorial de 5:", fatorial(5));

let listaEncadeada = ["Pedro", "Lucas", "Carlos"];
console.log("Lista encadeada:", listaEncadeada);

let alunos = {
    Ana: 10,
    João: 8,
    Maria: 9
};
console.log("Nota da Ana:", alunos.Ana);

let arvore = {
    valor: "Raiz",
    esquerda: { valor: "Filho Esquerdo" },
    direita: { valor: "Filho Direito" }
};
console.log(arvore);

let valores = [8, 3, 5, 1, 9];
valores.sort((a, b) => a - b);
console.log("Ordenado:", valores);

let busca = [10, 20, 30, 40];
let numero = 30;

if (busca.includes(numero)) {
    console.log("Número encontrado!");
} else {
    console.log("Número não encontrado.");
}