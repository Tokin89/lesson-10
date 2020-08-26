"use strict";
let numberOfFilms = [];
numberOfFilms = +prompt('сколько фильмов ты посмотрел');
console.log(numberOfFilms);

const personalMovieDB = {
    let: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?'),
b = prompt('на сколько его оцените?'),
c = prompt('один из последних просмотренных фильмов?'),
d = prompt('на сколько его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




// const pol = 'pashtet';
// console.log(`${pol} ${"придурок"}`);
// console.log(pol);
// const answers = [];
// answers[0] = prompt("как тебя зову?", "");
// answers[1] = prompt("сколько тебе лет?", "");
// answers[2] = prompt("откуда ты?", "");
// console.log(typeof(answers));
// console.log(answers[0]);
// console.log(answers[1]);
// console.log(answers[2]);
// const answer = prompt("вам есть 18?","да");
// console.log(answer);
// const result = confirm("Are you here?");
// console.log(result);
// let number = 5;
// const leftBorderWidth = 1;
// console.log(number);
// const person = "pol";
// console.log(person);
// const obj ={
//     name: "jone",
//     age: 25,
//     isMarried: false
// };
// console.log(obj.name);