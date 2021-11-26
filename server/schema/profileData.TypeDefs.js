let { gql } = require('apollo-server')

let profileDataTypeDefs = gql`

extend type Query{
    profileData(userUid:String!):UpdateProfileMutationResponses
}

`

module.exports = profileDataTypeDefs