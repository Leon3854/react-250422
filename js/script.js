'use strict';

/*let q = "w";
let num = ['0w', '1w', '2w', '3w', '4'];
for (let i = 0; i <= 4; i++) {
    
    console.log(i + q);
}
*/

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false 
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На скольно оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На скольно оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);