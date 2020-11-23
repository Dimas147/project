const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцените его ?", "");

          if (a != null && b != null  && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("Done");
          } else {
              console.log("error");
              i--;
          }

}

if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель.");
} else if(personalMovieDB.count >= 30){
    alert("Вы киноман.");
} else {
    alert("Произошла ошибка.");
}

console.log(personalMovieDB);









/*
for (let i = 0; i < 2; i++ ){

    let a = prompt("Один из последних просмотренных фильмов", "");
    console.log("a= " + a);

    if (a === null || a === ""){
        alert("Movie can not be empty");
        break;
    } else if(a.length >= 50){
        alert("Movie length can not be more than 50 symbols");
        break;
    }

    const b = prompt("На сколько оцените его ?", "");

    console.log("b= " + b);

    if (b === null || b === ""){
        alert("Rating can not be empty");
        break;
    }

    personalMovieDB.movies[a] = b;
}

if (numberOfFilms < 10){
    alert("Просмотрено довольно мало фильмов.");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30){
    alert("Вы классический зритель.");
} else if(numberOfFilms > 30){
    alert("Вы киноман.");
} else {
    alert("Произошла ошибка.");
}
*/

console.log(personalMovieDB);
