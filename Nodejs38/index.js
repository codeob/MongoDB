const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {CreateController} = require('./Controllers')

const Access = express()



//middleware
Access.use(bodyParser.json())
//Routes
Access.post('/bank',CreateController)



//Server
mongoose.connect('mongodb+srv://CodeTrain:f3PkoFMuFs0q8roF@cluster0.sfj6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((result)=>{
   Access.listen(5000,'localhost',()=>{console.log('db connected');
   })
}).catch(err => console.log(err))

const server = Access.listen(5000,(req,res)=>{
   console.log(`server running on port 5000`);
})
