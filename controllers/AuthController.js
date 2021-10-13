'user strict'

var User = require('../models/User')
const { param } = require('../routes/user')
var settings = require("../config/settings")
var jwt = require("jsonwebtoken")
var passport = require("passport")
require("../config/passport")(passport)


var controller = {
  login : function(req, res) {
    User.findOne(
      {
        username: req.body.username
      },
      function(err, user) {
        if (err) throw err
        if (!user) {
          return res.status(401).send({
            success: false,
            msg: "Autenticación fallida. El usuario no funciona."
          })
        } else {
          // Verifica contraseña
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // si funciona el usuario y contraseña crea un token
              var token = jwt.sign(user.toJSON(), settings.secret)
              // retorna la info con el token
              return res.json({ success: true, token: "JWT " + token })
            } else {
              return res.status(401).send({
                success: false,
                msg: "Autenticación fallida. Contraseña no funciona."
              })
            }
          })
        }
      }
    )
  }
}

module.exports = controller