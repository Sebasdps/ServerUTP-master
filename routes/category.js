'use strict'

var express = require('express')
var CategoryController = require('../controllers/CategoryController')

var router = express.Router()

router.get('/category', CategoryController.index)
router.get('/category/:id?', CategoryController.show)
router.post('/category', CategoryController.store)
router.put('/category/:id?', CategoryController.update)
router.delete('/category/:id?', CategoryController.delete)

module.exports = router
