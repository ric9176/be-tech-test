import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import apollo from 'apollo-server-express'
import { typeDefs, resolvers} from "./graphql.js"
const { ApolloServer } = apollo

export const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Note: you can implement your api using either express or graphQL (or both!)

// add your middlewares and listeners here...

