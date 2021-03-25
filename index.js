import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import apollo from 'apollo-server-express'
import { typeDefs, resolvers } from "./graphql.js"
const { ApolloServer } = apollo

export const app = express()


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.use(function(req, res) {
    res.status(404).send('not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message)
})

app.listen(8080, function() {
    console.log('app listening on port 8080')
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)