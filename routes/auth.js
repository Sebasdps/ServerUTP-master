'use strict'

var express = require('express')
var AuthController = require('../controllers/AuthController')
var router = express.Router()

router.post('/login', AuthController.login)

module.exports = router

