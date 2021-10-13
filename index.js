'use strict'

var mongoose = require('mongoose')
var app = require('./app')

app.set("PORT", process.env.PORT || 3000)

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://javier123:javier123@cluster0.vshzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log('Coneccion exitosa')    
    app.listen(app.get("PORT"), () => {
      console.log(`Server started on port: ${app.get("PORT")}`);
    });
  })
  .catch(err => console.log(err))