let { model, Schema } = require('mongoose')

let profileSchema = new Schema({
    name: String,
    profileImg: String,
    fathername: String,
    rollNumber: String,
    gmail: String,
    phoneNumber: Number,
    birthDate: String,
    birthplace: String,
    currentlocation: String,
    hobby: String,
    studingAt: String,
    studiedAt: String,
    workingAs: String,
    socialLinks: {
        facebook: String,
        twitter: String,
        tiktok: String,
        youtube: String
    },
    photos: Array

})

let Profile = model('profile', profileSchema)

module.exports = Profile