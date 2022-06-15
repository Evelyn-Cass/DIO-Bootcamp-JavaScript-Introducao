
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

*/
//DATE

var d = new Date();
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getHours());
alert(d.getMonth()+1); //Mês sempre conta do 0, necessário somar mais um