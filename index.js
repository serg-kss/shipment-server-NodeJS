const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users.routes')
const productRouter = require('./routes/product.routes')
const shipperRouter = require('./routes/shipper.routes')
const contractRouter = require('./routes/contract.routes')


const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/shipments', [usersRouter, productRouter, shipperRouter, contractRouter])

async function start (){
   mongoose.connect('mongodb+srv://Sergey:12Serg0591@cluster0.itzqa8j.mongodb.net/shipments', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      })   
   .then(() => console.log("Database connected!"))
   .catch(err => console.log(err));
   app.listen(PORT, () =>{console.log('server has just started with MongoDB! ' + PORT)})
}

start ()