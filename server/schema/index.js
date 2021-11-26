
let { gql } = require('apollo-server')

const createStudentTypeDefs = require('./createStudent.TypeDefs')
const profileDataTypeDefs = require('./profileData.TypeDefs')
const updateProfileMutationTypeDefs = require('./updateProfile.TypeDefs')
const updateProfilePicTypeDefs = require('./updateProfilePic.TypeDefs')

let detailsTypeDefs = gql`
 scalar Date
    type Details{
        text:String
    }
   
    type Query{
        details:Details
    }

`


let rootTypeDefs = [detailsTypeDefs, createStudentTypeDefs, updateProfileMutationTypeDefs, profileDataTypeDefs, updateProfilePicTypeDefs]

module.exports = rootTypeDefs