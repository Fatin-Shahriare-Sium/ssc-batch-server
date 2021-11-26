const { gql } = require("apollo-server-core");

let updateProfilePicTypeDefs = gql`

type updateProfilePicResponses{
    success:Boolean
    msg:String
}


extend type Mutation{
    updateProfilePic(userUid:String,src:String,alt:String):updateProfilePicResponses
}

`

module.exports = updateProfilePicTypeDefs