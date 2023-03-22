const Model = require("../models/contract")

class ContractController{

   async  createContract(rec, res){
      try{
         const new_contract = new Model({
            shipper: rec.body.shipper,
            contract_number: rec.body.contract_number,
            contract_date: rec.body.contract_date,
            payment: rec.body.payment,
            currency: rec.body.currency,        
         })
         await new_contract.save()
         res.json({createContract: 'Ok'});
      }catch(e){
         res.json({createContract: 'Not Ok'});
      }
   }

   async getContracts(rec, res){
      try{
         const all_contracts = await Model.find({});
         res.json(all_contracts);
      }catch(e){
         res.json({'error':'error'});
      }     
   }

   async changeContract(rec, res){
      try{
         const contract = await Model.updateOne(
            {key: rec.body.key}, 
            {
               shipper: rec.body.shipper,
               contract_number: rec.body.contract_number,
               contract_date: rec.body.contract_date,
               payment: rec.body.payment,
               currency: rec.body.currency,
            });            
         res.json(contract);
      }catch(e){
         res.json({'error':'error'});
      }  
   }

   async deleteContract(rec, res){
      try{
         const contract = await Model.deleteOne({key: rec.body.key})
         res.json(contract);
      }catch(e){
         res.json({'error':'error'});
      }
   }
}

module.exports = new ContractController()