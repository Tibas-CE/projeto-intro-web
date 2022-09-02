//Projeto introdução a web

//Semana 1 - criando o item
//Semana 2 - criando uma array de strings em cada item
// const filme = "Blader Runner: O caçador de androides";
// const lancado = 1982;
// const oscar = false;
// const elenco = ["Harrison Ford", "Rutger Hauer", "Sean Young", "Daryl Hannah"];

//Semana 1 - criando mais dois itens
// const filme1 = "2001: Uma Odisséia no Espaço";
// const lancado1 = 1968;
// const oscar1 = true;
// const elenco1 = ["Keir Dullea", "Douglas Rain", "Edwina Carrol", "Penny Brahms"];

// const filme2 = "Interestelar";
// const lancado2 = 2014;
// const oscar2 = true;
// const elenco2 = ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"];

//Semana 1 - Faça um cálculo de média
// let media = (lancado+lancado1+lancado2)/3;
// console.log(media);

//Semana 1 - Operação lógica
// let verificaOscar = oscar && oscar1 && oscar2;
// console.log(verificaOscar);

//Semana 2 - Imprima um relatório de cada um dos itens,o nome do filme tem que está em letras maiúsculas
// console.log(filme.toUpperCase() + "\nLançado:" + lancado + "\nOscar:" + oscar + "\nElenco:"+elenco); //Itém 1
// console.log(filme1.toUpperCase() + "\nLançado:" + lancado1 + "\nOscar:" + oscar1 + "\nElenco:"+elenco1); //Itém 2
// console.log(filme2.toUpperCase() + "\nLançado:" + lancado2 + "\nOscar:" + oscar2 + "\nElenco:"+elenco2); //Itém 1

//Semana 3 - Criar um objeto para cada item
const filme = {
    nome: "Blader Runner: O caçador de androides",
    lancado: 1982,
    oscar: false,
    elenco: ["Harrison Ford", "Rutger Hauer", "Sean Young", "Daryl Hannah"]
};

const filme1 = {
    nome: "2001: Uma Odisséia no Espaço",
    lancado: 1968,
    oscar: true,
    elenco: ["Keir Dullea", "Douglas Rain", "Edwina Carrol", "Penny Brahms"]
};

const filme2 = {
    nome: "Interestelar",
    lancado: 2014,
    oscar: true,
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"]
};

//Semana 3 - crie um array vazio, é adicione os objetos usando o push()
const filmes = [];

// filmes.push(filme, filme1, filme2);

// console.log(filmes);

//Semana 4 - crie um if...else para adicionar os objetos a array, se a propriedade do objeto for true ele e adicionado a array se for false exiba um alert
let condicao = true
if(filme.oscar && condicao){
    filmes.push(filme)
} else if(filme1.oscar && condicao){
    filmes.push(filme1)
} else if(filme2.oscar && condicao){
    filmes.push(filme2)
} else {
    alert("Item não adicionado")
};

console.log(filmes);