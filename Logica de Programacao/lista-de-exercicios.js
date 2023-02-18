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