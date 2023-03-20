const {Schema, model} = require('mongoose')

const shipper = new Schema ({
   name:{
      type: String
   },
   address:{
      type: String
   }  
})

module.exports = model ('shipper', shipper)