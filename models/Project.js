'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = Schema({
  name: String,
  age: Number,
  description: String
})

module.exports = mongoose.model('Project', ProjectSchema)