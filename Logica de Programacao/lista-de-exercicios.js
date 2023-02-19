// Atividade complementar - lista de exercícios

// Descendo a ladeira, fazendo poeira, atiçando calor

// 1.1. Crie uma constante chamada meuNome e atribua a ela o seu nome.
const meuNome = "Thaís";

// 1.2. Crie uma constante chamada cidadeNatal e atribua a ela a sua cidade de nascimento.
const cidadeNatal = "Valente";

// 1.3. Crie uma constante chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
const anoDeNascimento = 1999;

// 1.2. Crie uma variável chamada profissão e atribua a ela a sua profissão.
let profissao = "estudante";

// 1.3. Utilize o console.log para imprimir as constantes e variáveis que você criou.
console.log(`${meuNome} - ${cidadeNatal} - ${anoDeNascimento} - ${profissao}`);

// 1.4. Altere o valor da variável profissão para desenvolvedora e tente exibir no console novamente, observe o que acontece.
profissao = "desenvolvedora";
console.log(profissao);
/* como criei a variável usando let, o código a partir dela até a nova atribuição de valor seguem com o primeiro valor colocado
(estudante), depois da nova atribuição de valor à variável profissao, a variável passa a trazer desenvolvedora como valor */

// 1.5. Atribua um novo valor à constante cidadeNatal e tente exibir no console novamente, observe o que acontece.
// cidadeNatal = "Valente-BA";
// não é possível atribuir um novo valor a uma constante. Vou deixar como comentário para a mensagem de erro não ficar aparecendo.


/* 2. Abaixo iremos ver algumas declarações de constantes e variáveis, observe se as declarações estão de acordo com a sintaxe do
Javascript. Caso não esteja, corrija, deixando-a válida. */

// a. algum_nome: Mariana
const algumNome = "Mariana";

// b. var Nome = 32;
let nome = 32;

// c. const: idade 40;
const idade = 40;

// d. let profissão = 'desenvolvedor';
let profissaoDeNovo = "desenvolvedor"; // já existia uma variável com esse nome em outro exercício


/* 3. Vamos fazer algumas operações simples. Queremos imprimir a área e o perímetro de um retângulo,
sabemos que a base do retângulo é 5 e a altura é 8. */
let baseRetangulo = 5;
let alturaRetangulo = 8;

// calcular perímetro do retângulo:
const perimetroRetangulo = 2 * (baseRetangulo + alturaRetangulo);
console.log(perimetroRetangulo);

// calcular area do retangulo
let areaRetangulo = baseRetangulo * alturaRetangulo;
console.log(areaRetangulo);

// 4. Sem rodar os códigos, tente analisar e identificar quais trechos de código terá como saída no console 'Folia' com base
// nas variáveis declaradas.
const a = null;
const b = 20;
const c = true;
const d = '';


/* Trecho 1:
if (b === 20 && c != false && d == 0) {
   console.log('Folia')
} else {
   console.log('Descanso')
}
*/
// d não é igual a zero. d é null. O trecho 1 não retorna 'Folia'
// CORREÇÃO - null equivale a 0. O trecho 1 retorna 'Folia'

/* Trecho 2:
if (a == 0) {
   console.log('Folia')
} else {
   console.log('Descanso')
}
*/
// a não é igual a zero. a é null. O trecho 2 não retorna 'Folia', retorna 'Descanso'

/* Trecho 3:
if (d) {
   console.log('Folia')
} else {
   console.log('Descanso')
}
*/
// não existe condição de comparação. Não retorna 'Folia', dá erro --- CORREÇÃO: não dá erro, mas retorna 'Descanso'

/* Trecho 4:
if (b == '20') {
   console.log('Folia')
} else {
   console.log('Descanso')
}
*/
// b é igual a 20. A condição foi satisfeita e retorna 'Folia'

/* 5. Observe as variáveis criadas abaixo. Você tem o ano de nascimento da Shuri. Usando seus conhecimentos, com base
no ano de nascimento, calcule a idade dela e exiba da seguinte forma no console. */
const nomeShuri = "Shuri";
const anoDeNascimentoShuri = 1988;
const profissaoShuri = "Super Heroína";
const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";

// resgatar ano atual
const dataDeHoje = new Date();
const anoAtual = dataDeHoje.getFullYear();

// calcular idade de Shuri
const idadeShuri = anoAtual - anoDeNascimentoShuri;
console.log(`${nomeShuri} tem ${idadeShuri} anos, é uma grande ${profissaoShuri} e disse: "${frase}".`);

/* Crie uma variável chamada diaDaSemana que receba a string "quarta-feira". Utilizando if/else, implemente condicionais
para que:
a. Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", o console.log
imprima a seguinte mensagem:
Oba, mais um dia de aprendizado em JavaScript :D

b. Se for algum dia de fim de semana:
“FINALMENTE, descanso merecido”.
*/
const diaDaSemana = "quarta-feira";

if (diaDaSemana === "segunda-feira" || diaDaSemana === "terça-feira" || diaDaSemana === "quarta-feira" || diaDaSemana === "quinta-feira" || diaDaSemana === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado em JavaScript :D")
} else if (diaDaSemana == "sábado" || diaDaSemana === "domingo") {
    console.log("FINALMENTE, descanso merecido")
} else {
    console.log("Que dia é hoje??")
}


// Do pique do frevo caí como um raio

/* 7. Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz:
Por favor, me veja uma feijoada E um suco de laranja”

Seria muito triste se você recebesse apenas a bebida ou só a comida, não é? Também não seria legal se recebêssemos a
feijoada completa, mas a nossa bebida fosse um caldo de cana. Porque nosso pedido era de que as duas condições fossem
atendidas corretamente.

Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida. Quando o pedido vier certo, seu programa deve
imprima a mensagem: "Muito grata pelo almoço!" caso não seja o pedido, imprima: "Acho que houve um engano com meu pedido". */

let prato = "feijoada";
let bebida = "suco de laranja";

if (prato === "feijoada" && bebida === "suco de laranja") {
    console.log("Muito obrigada pelo almoço!");
} else {
    console.log("Acho que houve um engano com meu pedido")
}

/* 8. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100.
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera.

Para isso, considere as seguintes informações:
    Se a nota for maior ou igual a 80, imprima "Parabéns, você faz parte do grupo das pessoas aprovadas!".
    Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera".
    Se a nota for menor que 60, imprima "Infelizmente, você reprovou." .
    Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam
    a cada situação. Altere o valor da nota para verificar se as condições que você implementou funcionam.
*/
const notaDesafio = 95;

if (notaDesafio >= 80) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (notaDesafio < 80 && notaDesafio >= 60) {
    console.log("Você está na nossa lista de espera.");
} else {
    console.log("Infelizmente, você reprovou.")
}

// 9. Defina 2 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior dos dois números
const primeiroValor = 59;
const segundoValor = 235;

if (primeiroValor > segundoValor) {
    console.log(`O valor ${primeiroValor} é maior que ${segundoValor}.`);
} else {
    console.log(`O valor ${segundoValor} é maior que ${primeiroValor}.`);
}

// 10. Defina 3 constantes que salvem valores numericos diferentes. Utilize if/else para escrever um código que retorne o maior de três números.
const valorUm = 247;
const valorDois = 856;
const valorTres = 455;

if (valorUm > valorDois && valorUm > valorTres) {
    console.log(`O número ${valorUm} é maior que ${valorDois} e ${valorTres}.`);
} else if (valorDois > valorTres) {
    console.log(`O número ${valorDois} é maior que ${valorUm} e ${valorTres}.`);
} else {
    console.log(`O número ${valorTres} é maior que ${valorUm} e ${valorDois}.`);
}

/* 11. Utilize if/else para escrever um código que define três números em constantes e retorne true se pelo menos uma das três for par.
Caso contrário, ele deve retornar false */

// criar numeros
const numeroUm = 3;
const numeroDois = 5;
const numeroTres = 7;

// testar se é par - dividir por 2 e não ter resto. módulo 0
const testeUm = numeroUm % 2;
const testeDois = numeroDois % 2;
const testeTres = numeroTres % 2;

// condicional
if (testeUm === 0 || testeDois === 0 || testeTres === 0) {
    console.log(true);
} else {
    console.log(false);
}

/* 12. Siga as instruções abaixo:
a. Crie uma constante chamada "horarioAtual", que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
b. Crie uma variável chamada "mensagem" que, inicialmente, é uma string vazia.
c. Implemente condicionais para que:
    Se o horário for maior ou igual a 22, atribua "Não deveríamos comer nada, é hora de dormir" na variável "mensagem".
    Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "mensagem".
    Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "mensagem".
    Se o horário for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variável "mensagem".
    Se o horário estiver entre 4 e 11, insira "Humm, cheiro de café recém-passado" na variável "mensagem".
d. Por fim, dê um console.log na variável "mensagem".
*/
const horarioAtual = 23;

let mensagem = "";

if (horarioAtual >= 22) {
    mensagem = "Não deveriamos comer nada, é hora de dormir";
} else if (horarioAtual >= 18 && horarioAtual < 22) {
    mensagem = "Rango da noite, vamos jantar :D";
} else if (horarioAtual >= 14 && horarioAtual < 18) {
    mensagem = "Vamos fazer um bolo pro café da tarde?";
} else if (horarioAtual >= 11 && horarioAtual < 14) {
    mensagem = "Hora do almoço!!!";
} else if (horarioAtual > 4 && horarioAtual < 11) {
    mensagem = "Humm, cheiro de café recém-passado"
}

console.log(mensagem);

/* 13. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
Siga essas regras:
    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C 
    Porcentagem >= 60 -> D 
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro se a nota passada for menor que 0 ou maior que 100. */
