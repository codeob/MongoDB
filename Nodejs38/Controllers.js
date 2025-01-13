const BankModel = require('./Model')

const CreateController =async (req,res)=>{
const {name,location,branch,phone,address,accountNumber} = req.body
const bank = await BankModel.create({name,location,branch,phone,address,accountNumber})
res.json({message:"Successfully Created", data: bank})
}


const GetDataController = ()=>{
    
}


const UpdateController = ()=>{
    
}


const DeleteController = ()=>{
    
}


module.exports = {CreateController,}