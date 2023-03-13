const Model = require("../models/product")

class ProductController{

   async  createProduct(rec, res){
      try{
         const new_product = new Model({
            tyre_id: rec.body.tyre_id,
            brand: rec.body.brand,
            size: rec.body.size,
            model: rec.body.model,
            sl: rec.body.sl,
            index_speed: rec.body.index_speed,
            index_load: rec.body.index_load,
            type: rec.body.type,
            sezon: rec.body.sezon,
            comment: rec.body.comment           
         })
         await new_product.save()
         res.json({createProduct: 'Ok'});
      }catch(e){
         res.json({createProduct: 'Not Ok'});
      }
   }

   async getProducts(rec, res){
      try{
         const all_products = await Model.find({});
         res.json(all_products);
      }catch(e){
         res.json({'error':'error'});
      }     
   }

   async auth(rec, res){
      try{
         const auth = await Model.find({login: rec.body.login, password: rec.body.password});
         res.json(auth);
      }catch(e){
         res.json({'error':'error'});
      }     
   }

}

module.exports = new ProductController()