'use strict'

var express = require('express')
var ArticleController = require('../controllers/ArticleController')

var router = express.Router()

router.get('/article', ArticleController.index)
router.get('/article/:id?', ArticleController.show)
router.post('/article', ArticleController.store)
router.put('/article/:id?', ArticleController.update)
router.delete('/article/:id?', ArticleController.delete)

module.exports = router
