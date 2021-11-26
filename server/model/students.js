let { model, Schema } = require('mongoose')

let studentsSchema = new Schema({
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }]
})

let Students = model('students', studentsSchema)

module.exports = Students