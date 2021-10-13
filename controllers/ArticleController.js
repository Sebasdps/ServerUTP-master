'user strict'

var Article = require('../models/Article')
const { param } = require('../routes/article')

var controller = {
  //Ver o listar informacion peticion GET
  index : function(req, res){
    Article.find({}).exec((err, articles) => {
      if (err) return res.status(500).send({message: 'Error al devover datos'}) 
      if (!articles) return res.status(404).send({message: 'No se a podido encontrar datos'})
      return res.status(200).send({
        articles
      })  
    })
  },

  //Guardar informacion en la base de datos peticion POST
  store : function(req, res){
    var article = new Article()
    var params = req.body

    article.name = params.name
    article.price = params.price
    article.description = params.description
    article.category = params.category
    article.state = params.state

    article.save((err, ArticleStored) => {
      if(err) return res.status(500).send({message: "Error al guardar"})
      if(!ArticleStored) return res.status(404).send({message: "no se a podido guardar"})
      return res.status(200).send({
        message: 'Guardado con exito',
        article: article
      })
    })

    
  },

  //traer un registro especifico por el id peticion GET
  show : function(req, res){
    var articleId = req.params.id
    if(articleId == null) return res.status(404).send({message: "no se a encontrado ningun registro"})
    Article.findById(articleId, (err, article) => {
      if(err) return res.status(500).send({message: "Error al mostrar"})
      if(!article) return res.status(404).send({message: "no se a encontrado ningun registro"})
      return res.status(200).send({
        article
      })
    })
  },

  //actualizar informacion de registros peticion PUT
  update : function(req, res){
    var articleId = req.params.id
    if (articleId == null) return res.status(404).send({message: 'No tengo ID'})
    var update = req.body
    Article.findByIdAndUpdate(articleId, update, (err, articleUpdate) => {
      if (err) return res.status(500).send({message: 'Error al modificar los datos'})
      if (!articleUpdate) return res.status(404).send({message: 'El registro no existe'})
      return res.status(200).send({
        message: 'Actualizado con exito',
        article: articleUpdate
      })
    })
  },

  //eliminar registros peticion DELETE
  delete : function(req, res){
    var articleId = req.params.id
    if (articleId == null) return res.status(404).send({message: 'No tengo ID'})
    Article.findByIdAndDelete(articleId, (err, articleUpdate) => {
      if (err) return res.status(500).send({message: 'Error al eliminar los datos'})
      if (!articleUpdate) return res.status(404).send({message: 'El documento no existe'})
      return res.status(200).send({
        message: 'Eliminado con exito',
        article: articleUpdate
      })
    })
  }
}

module.exports = controller