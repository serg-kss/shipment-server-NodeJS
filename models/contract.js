const {Schema, model} = require('mongoose')

const contract = new Schema ({
   shipper:{
      type: String
   },
   contract_number:{
      type: String
   },
   contract_date:{
      type: String
   },
   payment:{
      type: String
   },
   currency:{
      type: String
   }     
})

module.exports = model ('contract', contract)