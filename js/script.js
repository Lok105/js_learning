'use strict';

const personMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
  start: function (){
    this.count = +prompt("Сколько фильмов вы посмотрели?", "");

    while (this.count == '' || this.count == null || isNaN(this.count)){
      this.count = +prompt("Сколько фильмоы вы посмотрели?", "");
    }
  },
  rememberMyFilm: function (){
    for(let i = 0; i < 2; i++){
      const a = prompt("Один из последний фильмов", ""),
          b = prompt("Ваша оценка фильма", "");

      if(a != null && b != null && a != '' && b != '' && a.length < 50){
        this.movies[a] = b;
      }else{
        i--;
      }
    }
  },
  detectPersonalLevel: function (){
    if(this.count < 10){
      console.log('Просмотрено довольно мало фильмов');
    }else if(this.count >= 10 && this.count <= 30){
      console.log('Вы классический зритель');
    }else if(this.count > 30){
      console.log('Вы киноман');
    }else{
      console.log('Произошла ошибка');
    }
  },
  writeYourGenres: function (){
    for(let i = 1; i <= 3; i++){
      const a = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if(a == null || a === '' || isNaN(a)){
        i--;
      }else{
        this.genres[i - 1] = a;
      }
    }
    this.genres.forEach((value, index) => {
      console.log(`Любимый жанр #${index+1} - это ${value}`);
    });
  },
  showMyDB: function (hidden){
    if(!hidden){
      console.log(personMovieDB);
    }
  },
  toggleVisibleMyDB: function (){
    if(this.private){
      this.private = false;
    }else{
      this.private = true;
    }
    this.showMyDB(this.private);
  }
};

personMovieDB.start();

personMovieDB.rememberMyFilm();

personMovieDB.detectPersonalLevel();

personMovieDB.writeYourGenres();

// personMovieDB.showMyDB(personMovieDB.private);
personMovieDB.toggleVisibleMyDB();
