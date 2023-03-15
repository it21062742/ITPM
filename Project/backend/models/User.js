const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//user (UserID, username, password, name)
const adminSchema = new Schema({
      UserID: {
        type: String,
        required: true,
        unique: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
});

//model(tableName, schemaName)
const user = mongoose.model("user", userSchema);
module.exports = user;