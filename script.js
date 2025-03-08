const movielist = [
    {
      "id": 1,
      "title": "Inception",
      "year": 2010,
      "genre": ["Action", "Sci-Fi", "Thriller"],
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg"
    },
    {
      "id": 2,
      "title": "Interstellar",
      "year": 2014,
      "genre": ["Adventure", "Drama", "Sci-Fi"],
      "rating": 8.6,
      "poster": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/8d8f28105415493.619ded067937d.jpg"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": ["Action", "Crime", "Drama"],
      "rating": 9.0,
      "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      "id": 4,
      "title": "The Matrix",
      "year": 1999,
      "genre": ["Action", "Sci-Fi"],
      "rating": 8.7,
      "poster": "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg"
    },
    {
      "id": 5,
      "title": "Avengers: Endgame",
      "year": 2019,
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "rating": 8.4,
      "poster": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },
    {
      "id": 6,
      "title": "Titanic",
      "year": 1997,
      "genre": ["Drama", "Romance"],
      "rating": 7.9,
      "poster": "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
    },
    {
      "id": 7,
      "title": "Joker",
      "year": 2019,
      "genre": ["Crime", "Drama", "Thriller"],
      "rating": 8.4,
      "poster": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
      "id": 8,
      "title": "Forrest Gump",
      "year": 1994,
      "genre": ["Drama", "Romance"],
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg"
    },
    {
      "id": 9,
      "title": "Gladiator",
      "year": 2000,
      "genre": ["Action", "Drama"],
      "rating": 8.5,
      "poster": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },
    {
      "id": 10,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": ["Drama"],
      "rating": 9.3,
      "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    }
  ]

const moviecontaner = document.getElementById('Movie-contaner');
const inputfild = document.querySelector("input");
const searchbutton = document.querySelector("button");
let bydifaltmovie = '';
function threemovie (movie) {
    bydifaltmovie = '';
    for(let i=0; i<3; i++){
        bydifaltmovie += `
           <div class="movie-card">
               <img src="${movie[i].poster}"alt="${movie[i].title}"/>
                <h2>${movie[i].title}</h2>
                <div class="info">
                <p>${movie[i].year} </p>
                <p> | ${movie[i].genre}</p>
                </div>
                <p class="num"><span class="yellow-star">&#9733;</span> ${movie[i].rating}</p>
            </div>   
        `;
    }
    moviecontaner.innerHTML = bydifaltmovie;
}
threemovie(movielist);

function serchmovie(){
   const searchbar = inputfild.value.trim();
   if(!searchbar){
    alert("Please enter a movie name.");
    return;
   }

   const searchbarlower = searchbar.toLowerCase();
   const getMovies = movielist.filter(movie => movie.title.toLowerCase().includes(searchbarlower));
   if(getMovies.length === 0) {
    alert("Movie not found");
   }else{
    moviecontaner.innerHTML = '';
    getMovies.forEach(movie => {
        moviecontaner.innerHTML +=`
           <div class="movie-card">
               <img src="${movie.poster}"alt="${movie.title}"/>
                <h2>${movie.title}</h2>
                <div class="info">
                <p>${movie.year} </p>
                <p> | ${movie.genre}</p>
                </div>
                <p class="num"><span class="yellow-star">&#9733;</span> ${movie.rating}</p>
            </div>   
        `;
    });
   }
}
searchbutton.addEventListener("click", serchmovie);