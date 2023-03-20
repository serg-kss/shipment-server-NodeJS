const Model = require("../models/shipper")

class ShipperController{

   async createShipper(rec, res){
      try{
         const new_shipper = new Model({
            name: rec.body.name,
            address: rec.body.address,          
         })
         await new_shipper.save()
         res.json({createShipper: 'Ok'});
      }catch(e){
         res.json({createShipper: 'Not Ok'});
      }
   }

   async getShippers(rec, res){
      try{
         const all_shippers = await Model.find({});
         res.json(all_shippers);
      }catch(e){
         res.json({'error':'error'});
      }     
   }
}

module.exports = new ShipperController()