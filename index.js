const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const {createBankDetails,retrieveBankDetails, updateBankDetails, deleteBankDetails} = require("./controllers")

server = express();

server.use(bodyParser.json());

server.post('/bank',createBankDetails)
server.get('/bank/:id?',retrieveBankDetails)
server.put('/bank',updateBankDetails)
server.delete('/bank',deleteBankDetails)



  mongoose.connect( "mongodb+srv://tobed1586:KQUC5Rryu0ubcK0D@cluster0.6bcct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((result)=>{
    server.listen(5000, "localhost", () => {
        console.log("server is running on 5000");
      });
  }).catch(err => console.log(err));


