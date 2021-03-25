const fetch = require("node-fetch");
const fs = require("fs").promises;

fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then((json) => {
    const movieList = [];
    json.forEach((movie) => {
      movieList.push([movie.title, movie.release_date]);
    });
    console.log(movieList);
    fs.writeFile("movies.json", JSON.stringify(movieList));
  });
