// mandar cumprimento (Bom dia!, Boa tarde!, ou Boa Noite!) de acordo com o horário informado:

// horário
let hora = 17; 

// condicional
if (hora < 12 && hora > 5) {
    console.log("Bom dia!");
} else if (hora > 18) {
    console.log("Boa noite!");
} else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}


// comparar números com base em um valor informado previamente na variável numeroTeste:
let numeroTeste = 10;

if (numeroTeste > 10) {
    console.log("Esse número é maior que 10.");
} else if (numeroTeste === 10) {
    console.log("Esse número é igual a 10.");
} else {
    console.log("Esse número é menor que 10.");
}
