'use strict';

const numberOfFilms = +prompt("Сколько фильмоы вы посмотрели?", "");

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

if(personMovieDB.count < 10){
  alert('Просмотрено довольно мало фильмов');
}else if(personMovieDB.count >= 10 && personMovieDB.count <= 30){
  alert('Вы классический зритель');
}else if(personMovieDB.count > 30){
  alert('Вы киноман');
}else{
  alert('Произошла ошибка');
}

for(let i = 1; i < 3; i++){

  const a = prompt("Один из последний фильмов", ""),
  b = prompt("Ваша оценка фильма", "");

  if(a != null && b != null && a != '' && b != '' && a.length < 50){
    personMovieDB.movies[a] = b;
  }else{
    i--;
  }

}


console.log(personMovieDB);
