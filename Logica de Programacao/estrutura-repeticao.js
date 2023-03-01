/* for (let contador = 0; contador < 9; contador++ ) {
    console.log(contador);
} */


/* contar de 5 a 10
for (let contador = 5; contador <= 10; contador++) {
    console.log(contador);
}
*/

/* Escreva um código JavaScript para exibir os números de 0 a 1000
for (let contador = 0; contador <= 1000; contador++) {
    console.log(contador);
}
*/
/*
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
*/
/* Júlia gosta de se esconder, porém não gosta de contar. Ela
pediu para vocês criarem um código JavaScript para contar até
10 e quando acabar a contagem, imprimir a mensagem na tela:
“Prontas ou não, lá vou eu!!!” */
for (let contador = 1; contador <= 10; contador++) {
    if (contador === 10) {
        console.log(`${contador}! Prontas ou não, lá vou eu!!!`); // melhor deixar a frase fora do laço for, caso a contagem mude
    } else {
        console.log(contador);
    }
}