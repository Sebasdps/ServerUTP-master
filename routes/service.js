'use strict'

var express = require('express')
var ServiceController = require('../controllers/ServiceController')

var router = express.Router()

router.get('/service', ServiceController.index)
router.get('/service/:id?', ServiceController.show)
router.post('/service', ServiceController.store)
router.put('/service/:id?', ServiceController.update)
router.delete('/service/:id?', ServiceController.delete)

module.exports = router
