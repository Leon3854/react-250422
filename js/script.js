/*jslint node: true*/

"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
		start:  function () {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
			while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
				personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
			}
		},
		rememberMyFilms: function() {
			for (let i = 0; i < 2; i++) {
				const a = prompt('Один из последних просмотренных фильмов?', ''),
							b = prompt('На скольно оцените его?', '');
				if (a != null && b != null && a != '' && b != '' && a.length < 50) {
						personalMovieDB.movies[a] = b;
						console.log('done');
				} else {
						console.log('error');
						i--; // Если будет не заплненная или клиент нажмёт "Ok" то нас вернёт на шаг назад
				}
			}
	 },
	 detectPersonalLevel: function() {
		// В данном условии мы у пользователя спрашиваем  какое количество фильмов он смотрел
		// в зависимости от ответа мы выводим определённый ответ.
		if (personalMovieDB < 10) {
				console.log("Просмотренно довольно мало фильмов");
		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
				console.log("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
				console.log("Вы киноман!");
		} else {
				console.log('Произошла ошибка.');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if(personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			personalMovieDB.genres[i - 1] = genre;
		}
	}
};





