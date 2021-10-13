'user strict'

var Category = require('../models/Category')
const { param } = require('../routes/category')

var controller = {
  //Ver o listar informacion peticion GET
  index : function(req, res){
    Category.find({}).exec((err, categories) => {
      if (err) return res.status(500).send({message: 'Error al devover datos'}) 
      if (!categories) return res.status(404).send({message: 'No se a podido encontrar datos'})
      return res.status(200).send({
        categories
      })  
    })
  },

  //Guardar informacion en la base de datos peticion POST
  store : function(req, res){
    var category = new Category()
    var params = req.body

    category.name = params.name
    category.description = params.description

    category.save((err, CategoryStored) => {
      if(err) return res.status(500).send({message: "Error al guardar"})
      if(!CategoryStored) return res.status(404).send({message: "no se a podido guardar"})
      return res.status(200).send({
        message: 'Guardado con exito',
        category: category
      })
    })

    
  },

  //traer un registro especifico por el id peticion GET
  show : function(req, res){
    var categoryId = req.params.id
    if(categoryId == null) return res.status(404).send({message: "no se a encontrado ningun registro"})
    Category.findById(categoryId, (err, category) => {
      if(err) return res.status(500).send({message: "Error al mostrar"})
      if(!category) return res.status(404).send({message: "no se a encontrado ningun registro"})
      return res.status(200).send({
        category
      })
    })
  },

  //actualizar informacion de registros peticion PUT
  update : function(req, res){
    var categoryId = req.params.id
    if (categoryId == null) return res.status(404).send({message: 'No tengo ID'})
    var update = req.body
    Category.findByIdAndUpdate(categoryId, update, (err, categoryUpdate) => {
      if (err) return res.status(500).send({message: 'Error al modificar los datos'})
      if (!categoryUpdate) return res.status(404).send({message: 'El registro no existe'})
      return res.status(200).send({
        message: 'Actualizado con exito',
        category: categoryUpdate
      })
    })
  },

  //eliminar registros peticion DELETE
  delete : function(req, res){
    var categoryId = req.params.id
    if (categoryId == null) return res.status(404).send({message: 'No tengo ID'})
    Category.findByIdAndDelete(categoryId, (err, categoryUpdate) => {
      if (err) return res.status(500).send({message: 'Error al eliminar los datos'})
      if (!categoryUpdate) return res.status(404).send({message: 'El documento no existe'})
      return res.status(200).send({
        message: 'Eliminado con exito',
        category: categoryUpdate
      })
    })
  }
}

module.exports = controller