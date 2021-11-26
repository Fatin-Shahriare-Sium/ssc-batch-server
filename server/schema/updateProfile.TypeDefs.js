let { gql } = require('apollo-server')

let updateProfileMutationTypeDefs = gql`
    type SocialLinks{
        facebook: String,
        twitter: String,
        tiktok: String,
        youtube: String
    }

    type UpdateProfileMutationResponses{
            name: String,
            profileImg: String,
            fathername: String,
            rollNumber: String,
            gmail: String,
            phoneNumber: Int,
            birthDate: String,
            birthplace: String,
            currentlocation: String,
            hobby: String,
            studingAt: String,
            studiedAt: String,
            workingAs: String,
            socialLinks:SocialLinks
            
    }

    extend type Mutation{
        updateProfile(
            userUid:String,
            name: String,
            fathername: String,
            rollNumber: String,
            gmail: String,
            phoneNumber: Int,
            birthDate: String,
            birthplace: String,
            currentlocation: String,
            hobby: String,
            studingAt: String,
            studiedAt: String,
            workingAs: String,
            facebook: String,
            twitter: String,
            tiktok: String,
            youtube: String
            ):UpdateProfileMutationResponses
    }

`

module.exports = updateProfileMutationTypeDefs