'use strict'

var Service = require('../models/Service')
const { param } = require('../routes/service')

var controller = {
  //Ver o listar informacion peticion GET
  index : function(req, res){
    Service.find({}).exec((err, services) => {
      if (err) return res.status(500).send({message: 'Error al devover datos'}) 
      if (!services) return res.status(404).send({message: 'No se a podido encontrar datos'})
      return res.status(200).send({
        services
      })  
    })
  },

  //Guardar informacion en la base de datos peticion POST
  store : function(req, res){
    var service = new Service()
    var params = req.body

    service.name = params.name
    service.description = params.description
    service.author = params.author
    service.category = params.category
    service.state = params.state

    service.save((err, ServiceStored) => {
      if(err) return res.status(500).send({message: "Error al guardar"})
      if(!ServiceStored) return res.status(404).send({message: "no se a podido guardar"})
      return res.status(200).send({
        message: 'Guardado con exito',
        service: service
      })
    })

    
  },

  //traer un registro especifico por el id peticion GET
  show : function(req, res){
    var serviceId = req.params.id
    if(serviceId == null) return res.status(404).send({message: "no se a encontrado ningun registro"})
    Service.findById(serviceId, (err, service) => {
      if(err) return res.status(500).send({message: "Error al mostrar"})
      if(!service) return res.status(404).send({message: "no se a encontrado ningun registro"})
      return res.status(200).send({
        service
      })
    })
  },

  //actualizar informacion de registros peticion PUT
  update : function(req, res){
    var serviceId = req.params.id
    if (serviceId == null) return res.status(404).send({message: 'No tengo ID'})
    var update = req.body
    Service.findByIdAndUpdate(serviceId, update, (err, serviceUpdate) => {
      if (err) return res.status(500).send({message: 'Error al modificar los datos'})
      if (!serviceUpdate) return res.status(404).send({message: 'El registro no existe'})
      return res.status(200).send({
        message: 'Actualizado con exito',
        service: serviceUpdate
      })
    })
  },

  //eliminar registros peticion DELETE
  delete : function(req, res){
    var serviceId = req.params.id
    if (serviceId == null) return res.status(404).send({message: 'No tengo ID'})
    Service.findByIdAndDelete(serviceId, (err, serviceUpdate) => {
      if (err) return res.status(500).send({message: 'Error al eliminar los datos'})
      if (!serviceUpdate) return res.status(404).send({message: 'El documento no existe'})
      return res.status(200).send({
        message: 'Eliminado con exito',
        service: serviceUpdate
      })
    })
  }
}

module.exports = controller