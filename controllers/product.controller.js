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

   async changeProduct(rec, res){
      try{
         const product = await Model.updateOne(
            {tyre_id: rec.body.id}, 
            {
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
            });            
         res.json(product);
      }catch(e){
         res.json({'error':'error'});
      }  
   }

   async deleteProduct(rec, res){
      try{
         const product = await Model.deleteOne({tyre_id: rec.body.id})
         res.json(product);
      }catch(e){
         res.json({'error':'error'});
      }
   }

   async getProductSearch(rec, res){
      try{
         const some_product = await Model.find({tyre_id: rec.query.tyre_id});
         res.json(some_product);
      }catch(e){
         res.json({'error':'error'});
      }     
   }
}

module.exports = new ProductController()