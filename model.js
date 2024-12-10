const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BankSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    accountNumber:{
        type:Number,
        require:true
    },
})

const BankModel = mongoose.model("Bank",BankSchema)

module.exports = BankModel