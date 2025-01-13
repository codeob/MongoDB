const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BankSchema = new Schema({
       name:{
        type:String,
        required:true
       },
       location:{
        type:String,
        required:true
       },
       branch:{
        type:String,
        required:true
       },
       phone:{
        type:Number,
        required:true
       },
       address:{
        type:String,
        required:true
       }, 
       accountNumber:{
        type:Number,
        required:true
       },
})

const BankModel = mongoose.model("bank",BankSchema)

module.exports = BankModel
