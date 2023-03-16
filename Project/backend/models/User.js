const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//USer (UserID, username, password, name)
const UserSchema = new Schema({
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
const User = mongoose.model("User", UserSchema);
module.exports = User;