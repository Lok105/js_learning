'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = +prompt("Сколько фильмоы вы посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмоы вы посмотрели?", "");
  }
}

start();

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


function rememberMyFilm(){
  for(let i = 0; i < 2; i++){
    const a = prompt("Один из последний фильмов", ""),
        b = prompt("Ваша оценка фильма", "");

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
      personMovieDB.movies[a] = b;
    }else{
      i--;
    }
  }
}

rememberMyFilm();

function detectPersonalLevel(){
  if(personMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
  }else if(personMovieDB.count >= 10 && personMovieDB.count <= 30){
    console.log('Вы классический зритель');
  }else if(personMovieDB.count > 30){
    console.log('Вы киноман');
  }else{
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function writeYourGenres(){
  for(let i = 1; i <= 3; i++){
    personMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
  }
}

writeYourGenres();

function showMyDB(hidden){
  if(!hidden){
    console.log(personMovieDB);
  }
}

showMyDB(personMovieDB.private);

