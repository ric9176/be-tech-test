import fetch from "node-fetch"
const API_URL = `https://starwars.egghead.training/`;

const getFilms = async ({film}) => fetch(API_URL + "people")
  .then((response) => response.json())
  .then((data) => {
    return getFilmTitles({people: data, film});
  })
  .catch((err) => {
      console.err('something went wrong', error)
  });

function getFilmTitles({people, film}) {

 return people.reduce((acc, curr) => {
     if (curr.films.includes(Number(film))) {
         acc = [...acc, {name: curr.name, image: curr.image}]
        }
        return acc
    }, [])
    
//   return people
//     .filter((person) => person.films.includes(Number(film))) 
//     .map((person) => ({name: person.name, image: person.image}))
//     
}

export default getFilms