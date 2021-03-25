const axios = require("axios");
const fs = require("fs").promises;

async function saveMovies() {
  try {
    let response = await axios.get("https://ghibliapi.herokuapp.com/films");
    const movieList = [];
    response.data.forEach((movie) => {
      movieList.push([movie.title, movie.release_date]);
    });
    await fs.writeFile("asyncMovies.json", JSON.stringify(movieList));
  } catch (error) {
    console.error("Error...", error);
  }
}

saveMovies();
