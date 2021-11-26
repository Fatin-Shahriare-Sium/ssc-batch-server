let { model, Schema } = require('mongoose')

let singleStudentSchema = new Schema({
    name: String,
    gmail: String,
    profileImg: String,
    uid: String,
    news: [{
        type: Schema.Types.ObjectId,
        ref: 'news'
    }],
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    }
})

let Student = model('student', singleStudentSchema)

module.exports = Student