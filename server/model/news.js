let { model, Schema } = require('mongoose')

let singleNews = new Schema({
    text: String,

}, { timestamps: true })

let News = model('news', singleNews)

module.exports = News