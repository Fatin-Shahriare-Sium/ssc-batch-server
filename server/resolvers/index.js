const createStudentMutationResolver = require("./createStudentMuatationResolver")
const updateStudentProfileMuatationResolver = require("./updateStudentProfileMutationResolver")
const profileDataQueryResolver = require('./profileDataQueryResolver')
const updateProfilePicMutationResolver = require("./updateProfilePicMutationResolver")


let rootResolvers = {
    Query: {
        details: () => {
            return {
                text: 'Allah is Almighty'
            }
        },
        profileData: profileDataQueryResolver,

    },
    Mutation: {
        createStudent: createStudentMutationResolver,
        updateProfile: updateStudentProfileMuatationResolver,
        updateProfilePic: updateProfilePicMutationResolver

    }
}

module.exports = rootResolvers