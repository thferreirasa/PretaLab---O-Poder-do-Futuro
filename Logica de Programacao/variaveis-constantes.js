// exercícios com variáveis e constantes com nomes de frutas:

// constantes:
const fruta1 = "banana";
const fruta2 = "maçã";
const fruta3 = "laranja";

// variáveis:
let fruta4 = "manga";
let fruta5 = "ameixa";
let fruta6 = "melão";

// output
console.log("Essa é minha lista de frutas: ")
console.log(`1. ${fruta1}`) // eu escrevi "1" + fruta1 e ele mudou sozinho
console.log(`2. ${fruta2}`);
console.log(`3. ${fruta3}`);
console.log(`4. ${fruta4}`);
console.log(`5. ${fruta5}`);
console.log(`6. ${fruta6}`);


// exercício de uso de constantes com dados sobre o Brasil:
const nomePais = "Brasil"; // string
const pontosTuristicos = ["Farol da Barra", "Cristo Redentor", "Pelourinho", "Elevador Lacerda", "Lençois Maranhenses"];
const capital = "Brasília";
const quantEstados = 26; //number
const AmLatina = true; // booleano

// output:
console.log("Dados sobre o Brasil: ");
console.log(nomePais + " - " + pontosTuristicos + " - " + capital + " - " + quantEstados + " - " + AmLatina);
console.log(`O ${nomePais} tem ${quantEstados} estados, e sua capital é ${capital}. Dentre seus pontos turísticos estão: ${pontosTuristicos}.`)

// frase com essas informações usando o Template String:
console.log(`Eu me chamo Thaís, moro no ${nomePais} que tem ${quantEstados} estados para desbravar, e a capital é ${capital}.`); 

// selecionar dados de uma lista, começa do 0
console.log("Abaixo alguns pontos turísticos do Brasil: ")
console.log(pontosTuristicos[0]); // Farol da Barra
console.log(pontosTuristicos[1]);
console.log(pontosTuristicos[2]);
console.log(pontosTuristicos[3]);
console.log(pontosTuristicos[4]);