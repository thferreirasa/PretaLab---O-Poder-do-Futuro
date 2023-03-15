/* for (let contador = 0; contador < 9; contador++ ) {
    console.log(contador);
}


// contar de 5 a 10
for (let contador = 5; contador <= 10; contador++) {
    console.log(contador);
}


// Escreva um código JavaScript para exibir os números de 0 a 1000
for (let contador = 0; contador <= 1000; contador++) {
    console.log(contador);
}


//Encontre e exiba no console todos os números pares entre 1 e 200
// forma 1:
for (let contador = 0; contador <= 200; contador+=2) {
    if (contador > 0) {
        console.log(contador);
    }
}

// forma 2 (mais eficiente):
for (let contador = 1; contador <= 200; contador++) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
}

/* Júlia gosta de se esconder, porém não gosta de contar. Ela
pediu para vocês criarem um código JavaScript para contar até
10 e quando acabar a contagem, imprimir a mensagem na tela:
“Prontas ou não, lá vou eu!!!” */
/*
for (let contador = 1; contador <= 10; contador++) {
    if (contador === 10) {
        console.log(`${contador}! Prontas ou não, lá vou eu!!!`); // melhor deixar a frase fora do laço for, caso a contagem mude
    } else {
        console.log(contador);
    }
}

*/

/* Como Júlia é indecisa, agora ela teve a ideia de fazer uma mudança
e pediu para que o programa fizesse uma contagem de 10 até 0 e em seguida
imprimir a mensagem na tela: "Prontas ou não, lá vou eu!!!". */
/*
for (let contador = 10; contador >= 0; contador--) {
    if (contador === 0) {
        console.log(contador);
        console.log("Prontas ou não, lá vou eu!!!");
    } else {
        console.log(contador);
    }
}

// versao mais limpa
for (let contador = 10; contador >= 0; contador--) {
    console.log(contador);
}
console.log("Prontas ou não, lá vou eu!!!");


/* Vamos ajudar, Júlia? Ela precisa estudar a tabuada do 9.
Em código JavaScript, crie uma tabuada do 9 e imprima no console. */
/*
for (i = 1; i <= 10; i++) {
    console.log(`9 * ${i} = ${9 * i}`);
}

*/

/* 6. Imprima os números de 0 até 40 na tela e em seguida, quantos números
pares e quantos números ímpares foram impressos. */

// precisa de variaveis fora do escopo do for para servirem como contadores
/*let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 1; i <= 40; i++) {
    console.log(i);

    if (i % 2 === 0) {
        quantidadePares++;
    } else {
        quantidadeImpares++;
    }
}

console.log(`Quantidade de números pares: ${quantidadePares}`);
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);
*/

/* 7. Dado um numero qualquer, crie um código em Javascript
que diga se ele é primo ou não.

numero primo = só é divisível por 1 e por ele mesmo
ex.: 2, 3, 5, 7, 11, 13, 17
tem algum outro numero que divide ele?
testar o intervalo entre 1 e o próprio número
*/

// usar estrutura de repetição - fazer varias divisoes
/*
let numeroTeste = 5;
let ePrimo = true; // só muda esse valor se algum numero do intervalo for divisivel

// no for, ignora o 1 e vai ate o numero anterior ao numero teste
for (let i = 2; i < numeroTeste; i++) {
    if (numeroTeste % i === 0) {
        // foi divisivel por algum numero do intervalo
        ePrimo = false;
    }
}
console.log(`${numeroTeste} É primo? ${ePrimo}`)
*/

// 8. Mostre na tela os números primos que estão entre o número 0 e o 400.
// criar outro laço for aninhado - usa o j
/*
let numeroBase = 400;
for (let i = 2; i <= numeroBase; i++) {
    let ePrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            ePrimo = false;
        }
    }
    if (ePrimo === true) {
        console.log(i);
    }
}
*/

/* Você já ouviu falar na Sequência de Fibonacci? É uma sequência de números,
onde o número 1 é o primeiro e segundo termo da ordem e os demais são originados
pela soma de seus antecessores.
Termo 1: 1
Termo 2: 1 (1 + 0)
Termo 3: 2 (1 + 1)
Termo 4: 3 (2 + 1)
Termo 5: 5 (3 + 2)
Termo 6: 8 (5 + 3)
Termo 7: 13 (8 + 5)
Termo 8: 21 (13 + 8)
Termo 9: 34 (21 + 13)
Escreva um código JavaScript para imprimir no console a sequência de fibonacci
com base no número passado. Por exemplo, dado que o número é 9, o console exibirá:
O Fibonacci de 9 é igual a 34. */

// for com i
// for com j, j deve ser menor que i
// i - j
// soma com numero anterior (j-1)
// inicia no 0?

let numeroEscolhido = 9;

for (let i = 1; i <= numeroEscolhido; i++) {
    let fibonacci = 1;
    for (let j = 1; j < i; j++) {
        fibonacci = i + fibonacci;
    }
    console.log(`O fibonacci de ${numeroEscolhido} é ${fibonacci}`);
}