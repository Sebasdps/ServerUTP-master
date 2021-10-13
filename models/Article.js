'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  state: Boolean
})

module.exports = mongoose.model('Article', ArticleSchema)