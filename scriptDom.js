const movies = [{
  capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/mNg0TQ0SGxtYSmqR9FkI2wHtC8Y.jpg",
  nome: "blader Runner: o caçador de androides",
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
},
{
  capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/66cLRuqg7dLXRgvgk427leeZhjd.jpg",
  nome: "2001: uma odisséia no espaço",
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
},
{
  capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
  nome: "interestelar",
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
}];

const filme = {
  // capa: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/mNg0TQ0SGxtYSmqR9FkI2wHtC8Y.jpg",
  // nome: "Blader Runner: O caçador de androides",
  lancado: 1982,
  genero: "Ficção científica, Drama, Thriller",
  oscar: false,
  elenco: [
    "Harrison Ford",
    "Rutger Hauer",
    "Sean Young",
    "Daryl Hannah",
    "Edward James",
  ]
//  url: "https://www.themoviedb.org/movie/78-blade-runner"
}

//Semana 11-12
// acessando a lista de filmes através do DOM
const listMovies = document.getElementById("list-movie");

const searchMovie = () => {
  const nameMovie = document.getElementById("inputSearch").value.toLowerCase()
  
  const filterMovie = movies.filter((item) => {
      if (item.nome.toLowerCase().includes(nameMovie)) {
          return item
      }
  })
  
  return filterMovie.length > 0 ? renderMovie(filterMovie) : renderMovie("Filme não encotrado!")
}

const renderMovie = (returnSearchMovie) => {
  let movie = ""
  if (returnSearchMovie === "Filme não encotrado!") {
      movie = (`<article class="card">
          <p>${returnSearchMovie}</p>
      </article>`)
  } else {
      returnSearchMovie.map((item) => {
          movie +=`
          <section class="filme-card">
                <img src="${item.capa}" alt="filme">
                <div class="flex">
                    <h3> <a href="${item.url}">${item.nome.toUpperCase()}</a></h3>
                    <ul>
                        <li>Lançamento: ${item.lancado}</li>
                        <li>Gênero: ${item.genero}</li>
                        <li>Óscar: ${item.oscar ? "Sim" : "Não"}</li>
                        <li>Elenco: ${item.elenco}</li>
                    </ul>
                </div>
            </section>
          `
      })
  }
  document.getElementById("list-movie").innerHTML = movie
  document.getElementById("inputSearch").value = ""
}

searchMovie()