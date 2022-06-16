
//AULA 01 - Introdução ao JavaScript

/*Comentário em Bloco
// Comentário em linha

//Váriaveis
var nome = "Evelyn Cassinotte";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 5;
var n2 = 3;

//alert(nome+" tem "+ idade);
//alert(idade+idade2);

//Mostra o NOME no console
console.log(nome); 

//Mostra a SOMA das váriaveis IDADE e IDADE2
console.log(idade+idade2);

//Mostra a FRASE substituindo JAPÃO por BRASIL
console.log(frase.replace("Japão","Brasil"));

//Mostra a FRASE em letras Maiúsculas
console.log(frase.toUpperCase());

//Mostra a MUTIPLICAÇÃO das váriaveis N1 e N2
console.log(n1*n2);

//AULA 02 ARRAY E DICIONÁRIO

var lista = ["maça","pêra","laranja"];

//Adiciona um elemento no final da LISTA
lista.push("uva"); 

// Retira o último elemento da LISTA
 lista.pop();

//Mostra o contéudo da LISTA
console.log(lista);

//Mostra a quantidade de elementos na LISTA;
console.log(lista.length)

//Mostra a LISTA em ordem reversa
console.log(lista.reverse());

//Mostra a LISTA em forma de STRING
console.log(lista.toString());

//Mostra a LISTA e substitui a , por /
console.log(lista.join("/"));

//Dicionário
var fruta = {nome:"maça", cor:"vermelha"};

//Mostra o FRUTA.NOME
console.log(fruta.nome);

//Mostra o COR.FRUTA    
//alert(fruta.cor);

//Lista de dicionários
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];

//Mostra o contéudo da váriavel FRUTAS na posição [1]
console.log(frutas[1].nome);

//AULA 03 Condicionais, Laços, Repetição e Date

//Cria um PRIMPT que recebe a resposta do usuário
var idade = prompt("Qual sua idade?");


//Cria uma condição onde é verificada a idade do usuário
if (idade >= 18){
  alert("Maior de idade");
}else{
  alert("Menor de idade");
};

//Estruturas de repetição

var count = 0;
while (count<=5){
    console.log(count);
    alert(count);
    count++;
}

var count2;
for(count2=0; count<=5; count++){
   alert(count);
}

//DATE

var d = new Date();
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getHours());
alert(d.getMonth()+1); //Mês sempre conta do 0, necessário somar mais um

//Aula 04

//Função recebe 2 váriaveis e realiza a soma delas
function soma(n1, n2){
  return n1 + n2;
}

//Utiliza a função SOMA e mostra o resultado
alert(soma(5, 10));


//Função recebe FRASE NOME NOMENOVO e substitui o NOME por NOMENOVO dentro da FRASE
function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome)
}

//Utiliza a função SETREPLACE e mostra o resultado
alert(setReplace("Vai Japão","Japão","Brasil"));

//Função recebe um IDADE e verifica se é >=18
function validaIdade(idade){
  var validar;
  if (idade>=18){
    //return true;
    validar=true;
  }else{
    //return false;
    validar=false;
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

*/
//Aula 05

//Função que ao clicar no botão mostra um alerta e uma frase no navegador
function botao(){
  document.getElementById("Agradecimento").innerHTML = "<b>Obrigada por clicar!</b>";
  //console.log(document.getElementById("Agradecimento"));
  //alert("Obrigada por clicar!");
}

function redirecionar(){
  //abre o site em uma nova janela
  window.open("https://www.google.com/");
  //abre o site na mesma janela
  //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
  //alert("trocar texto");
  //document.getElementById("Mouseover").innerHTML = "Obrigada por passar o mouse!";
  elemento.innerHTML = "Obrigada por passar o mouse!";
}

function voltar(elemento){
  //document.getElementById("Mouseover").innerHTML = "Passe o mouse AQUI!";
  elemento.innerHTML = "Passe o mouse AQUI!";

}

function load(){
  alert("Página carregada!");
}

function change(elemento){
  console.log(elemento.value);
}