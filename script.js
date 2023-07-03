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
    capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/mNg0TQ0SGxtYSmqR9FkI2wHtC8Y.jpg",
  nome: "Blader Runner: O caçador de androides",
  lancado: 1982,
  genero: "Ficção científica, Drama, Thriller",
  oscar: false,
  elenco: [
    "Harrison Ford",
    "Rutger Hauer",
    "Sean Young",
    "Daryl Hannah",
    "Edward James",
  ],
  url: "https://www.themoviedb.org/movie/78-blade-runner"
};

const filme1 = {
    capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/66cLRuqg7dLXRgvgk427leeZhjd.jpg",
  nome: "2001: Uma Odisséia no Espaço",
  lancado: 1968,
  genero: "Ficção científica, Mistério, Aventura",
  oscar: true,
  elenco: [
    "Keir Dullea",
    "Douglas Rain",
    "Edwina Carrol",
    "Penny Brahms",
    "Margaret Tyzack",
  ],
  url: "https://www.themoviedb.org/movie/62-2001-a-space-odyssey"
};

const filme2 = {
    capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
  nome: "Interestelar",
  lancado: 2014,
  genero: "Ficção científica, Drama, Aventura",
  oscar: true,
  elenco: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain",
    "Michael Caine",
    "Mackenzie Foy",
  ],
  url: "https://www.themoviedb.org/movie/157336-interstellar"
};

//Semana 3 - crie um array vazio, é adicione os objetos usando o push()
const filmes = [];

// filmes.push(filme, filme1, filme2);

// console.log(filmes);

//Semana 4 - crie um if...else para adicionar os objetos a array, se a propriedade do objeto for true ele e adicionado a array se for false exiba um alert
let condicao = true;
if (filme.oscar && condicao) {
  filmes.push(filme);
} else {
 // alert("Item não adicionado");
}
if (filme1.oscar && condicao) {
  filmes.push(filme1);
} else {
  //alert("Item não adicionado");
}
if (filme2.oscar && condicao) {
  filmes.push(filme2);
} else {
  //alert("Item não adicionado")
}

console.log("semana 4");
console.log(filmes);

//Semana - 5 - refatoração parte 1
console.log("semana 5-1");
for (let i in filmes) {
  console.log(` ${filmes[i].elenco} `);
}

//Semana 5 - parte 2
console.log("semana 5-2");
for (let filme of filmes) {
  for (let propriedade in filme) {
    console.log(`${propriedade}: ${filme[propriedade]}`);
  }
  console.log(filme);
}

//Semana 6 - Parte 1
const mensagem = (objeto) => {
  return `${objeto.nome}, ${objeto.lancado}, ${objeto.oscar}, ${objeto.elenco}`;
};

console.log("semana 6-1");
console.log(mensagem(filmes[0]));

//Semana 6 - parte 2
function filtraFilme(arrayDeObj, valorString) {
  let objRetorno = {};

  for (let i = 0; i < arrayDeObj.length; i++) {
    if (arrayDeObj[i].nome.toLowerCase() === valorString.toLowerCase()) {
      objRetorno.nome = arrayDeObj[i].nome;
      objRetorno.lancado = arrayDeObj[i].lancado;
      objRetorno.oscar = arrayDeObj[i].oscar;
      objRetorno.elenco = arrayDeObj[i].oscar;
    }
  }

  if (
    objRetorno.nome &&
    objRetorno.nome.toLowerCase() !== valorString.toLowerCase()
  ) {
    alert("Não encontrei Filme");
  } else {
    return objRetorno;
  }
}

console.log("Semana 6-2");
console.log(filtraFilme(filmes, "interestelar"));


function addMovie(movies) {
  movies.forEach((movie) => {
    renderMovie(movie)
  })
};

// função que renderiza filme por filme
function renderMovie(movie) {
  const listItem = document.createElement("section");
  listItem.classList.add("filme-card");
  
  //criando card
  listItem.innerHTML += `
  <img src=${movie.capa} alt=${movie.nome}> 
  <div class="flex">
      <h3> <a href=${movie.url}>${movie.nome.toUpperCase()}</a></h3> 
      <ul>
          <li>${movie.lancado}</li>
          <li>${movie.genero}</li>
          <li>Oscar: ${movie.oscar ? "Sim" : "Não"}</li>
          <li>${movie.elenco}</li>
      </ul>
  </div>
  `;
  
  listaFilmes.appendChild(listItem);
  listaFilmes.insertAdjacentElement("beforeend", listItem);
};

addMovie(movies);