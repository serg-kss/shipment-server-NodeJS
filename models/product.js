const {Schema, model} = require('mongoose')

const product = new Schema ({
   tyre_id:{
      type: String
   },
   brand:{
      type: String
   },
   size:{
      type: String
   },
   model:{
      type: String
   },
   sl:{
      type: String
   },
   index_speed:{
      type: String
   },
   index_load:{
      type: String
   },
   type:{
      type: String
   },
   sezon:{
      type: String
   },
   comment:{
      type: String
   },
})

module.exports = model ('product', product)