'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ServiceSchema = Schema({
  name: String,
  description: String,
  author: String,
  category: String,
  state: Boolean
})

module.exports = mongoose.model('Service', ServiceSchema)