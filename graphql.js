import apollo from 'apollo-server-express'
import getFilmsService from './services/getFilms.js'
import getCharactersService from './services/getCharacters.js'

const { gql } = apollo

export const typeDefs = gql`
type Query {
    films(order: Order): String
    characters(film: Int): [Character]
}
  enum Order {
    asc
    desc
  }

  type Character {
    name: String, 
    image: String
  }
`

export const resolvers = {
    Query: {
        films: async (parent, args) => {
            const { order } = args ?? "desc"
            const films = await getFilmsService({order})
            return films
        },
        characters: async (parent, args) => {
            const { film } = args ?? 1
            const characters = await getCharactersService({film})
            return characters
        }
    },
}