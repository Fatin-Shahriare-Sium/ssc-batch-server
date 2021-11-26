let { gql } = require('apollo-server')

let createStudentTypeDefs = gql`
    type CreateStudentMutationResponses{
        msg:String,
        success:Boolean,
        id:String,
        gmail:String
    }

     type Mutation{
        createStudent(name:String!,gmail:String!,uid:String):CreateStudentMutationResponses
    }
`
module.exports = createStudentTypeDefs