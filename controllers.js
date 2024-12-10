const BankModel = require("./model");

const createBankDetails = (req, res) => {
  const { name, branch, phone, address, accountNumber } = req.body;

  const bank = new BankModel({
    name,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank
    .save()
    .then((result) => {
      res.json({ message: "Bank created successfully", data: result });
    })
    .catch((err) => console.log(err));
};

const retrieveBankDetails = (req, res) => {
  const { _id } = req.params;

  if (_id) {
    BankModel.find({ _id })
      .then((bank) => {
        res.json({ message: "bank details retrieved", data: bank });
      })
      .catch((err) => console.log(err));
  } else {
    BankModel.find()
      .then((banks) => {
        res.json({ message: "bank details retrieved", data: banks });
      })
      .catch((err) => console.log(err));
  }
};

const updateBankDetails = (req, res) => {
  const { id, name, branch, phone, address, accountNumber } = req.body;

  BankModel.findById(id).then((bank) => {
    if (bank) {
      bank.name = name;
      bank.branch = branch;
      bank.phone = phone;
      bank.address = address;
      bank.accountNumber = accountNumber;

      bank.save();

      res.json({ message: "Bank details updated", data: bank });
    } else {
      res.json({ message: "Failed to update" });
    }
  });
};

const deleteBankDetails = (req, res) => {
  const { id } = req.body;

  BankModel.findByIdAndDelete(id).then((bank) => {
    if (bank) {
      res.json({ message: "Bank details deleted", data: bank });
    } else {
      res.json({ message: "Failed to delete" });
    }
  });
};

module.exports = {
  createBankDetails,
  retrieveBankDetails,
  updateBankDetails,
  deleteBankDetails,
};
