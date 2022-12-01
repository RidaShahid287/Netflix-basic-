window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}

function fetchMovies(url, dom_element, path_type) {
  fetch(url)
  .then(response => response.json()) //how  to respoonse
  .then(data => showMovies(data, dom_element, path_type)) //after getting response, how to show that response 
}


const showMovies = (movies, dom_element, path_type) => { //for dom
let moviesEL = document.querySelector(dom_element)
for(let movie of movies.results){ //data.results
  let imgElement = document.createElement('img')
  imgElement.setAttribute('id', movie.id) //data.results.id
  imgElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
  moviesEL.appendChild(imgElement)
}
}

function getOriginals() {
  var url =
    'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(url, '.original__movies', 'poster_path')
}
function getTrendingNow() {
  var url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies(url, '#trending', 'backdrop_path')
}
function getTopRated() {
  var url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovies(url, '#top_rated', 'backdrop_path')
}








