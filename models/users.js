const {Schema, model} = require('mongoose')

const users = new Schema ({
   user_id:{
      type: String
   },
   name:{
      type: String
   },
   surname:{
      type: String
   },
   login:{
      type: String
   },
   password:{
      type: String
   },
   position:{
      type: String
   },
})

module.exports = model ('users', users)