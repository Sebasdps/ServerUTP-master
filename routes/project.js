'use strict'

var express = require('express')
var ProjectController = require('../controllers/ProjectController')

var router = express.Router()

router.get('/project', ProjectController.index)
router.get('/project/:id?', ProjectController.show)
router.post('/project', ProjectController.store)
router.put('/project/:id?', ProjectController.update)
router.delete('/project/:id?', ProjectController.delete)

module.exports = router
