const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Employee (empID, name, DOB, gender, NIC, phone, email, address, hourlyPay)
const employeeSchema = new Schema({
  empID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: String,

  address: {
    type: String,
    required: true,
  },
  hourlyPay: {
    type: Number,
    required: true,
  }
});

//model(tableName, schemaName)
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
