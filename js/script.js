
const numberOfFilms = +prompt("Сколько фильмоы вы посмотрели?", "");

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt("Один из последний фильмов", ""),
    b = prompt("Ваша оценка фильма", ""),
    c = prompt("Один из последний фильмов", ""),
    d = prompt("Ваша оценка фильма", "");

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;

console.log(personMovieDB);
