import fetch from "node-fetch"
const API_URL = `https://starwars.egghead.training/`;

const getFilms = async ({order}) => fetch(API_URL + "films")
  .then((response) => response.json())
  .then((data) => {
    return getFilmTitles({titles: data, order});
  })
  .catch((error) => {
      console.log('something went wrong', error)
  });

function getFilmTitles({titles, order}) {
  
  return titles
    .sort((a, b) => {
       return order === "asc" ? a.episode_id - b.episode_id : b.episode_id - a.episode_id
    })
    .map((film) => `${film.episode_id} ${film.title}`)
    .join("");
}

export default getFilms