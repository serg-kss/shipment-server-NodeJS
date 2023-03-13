const Model = require("../models/users")

class UsersController{

   async  createUser(rec, res){
      try{
         const new_user = new Model({
            user_id: rec.body.user_id,
            name: rec.body.name,
            surname: rec.body.surname,
            login: rec.body.login,
            password: rec.body.password,
            position: rec.body.position            
         })
         await new_user.save()
         res.json({createUser: 'Ok'});
      }catch(e){
         res.json({createUser: 'Not Ok'});
      }
   }

   async getUsers(rec, res){
      try{
         const all_users = await Model.find({});
         res.json(all_users);
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

module.exports = new UsersController()