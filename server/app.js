require('dotenv').config()
let { ApolloServer, gql } = require('apollo-server');
const rootResolvers = require('./resolvers/index.js');
const rootTypeDefs = require('./schema/index.js');
let mongoose = require('mongoose')

let server = new ApolloServer({
    typeDefs: [rootTypeDefs],
    resolvers: rootResolvers,
    cors: true
})

mongoose.connect(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.xdefh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected database successfully,alhamdulillah');
})

server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
    console.log(`server is running at:${url},alhamdulillah`);
    console.log(process.env.DB_PASSWORD);
}).catch((error) => {
    console.log(error);
})