//here we are importing packages and assigning them to constants
//Const dont change in value
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express(); //used to create express appication
app.use(cors());
app.use(bodyParser.json({ limit: "30 mb", extended: true })); //sometimes we might have to send images. so here we are restricting its size
//extended:true, makes sure that everything goes through bodyparser and not just Strings.
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));

//pricess.env.PORT will allow us to choose the available port that is availabe once hosted
const PORT = process.env.PORT || 5001;

const URL = process.env.MONGODB_URL;

//To say the for mongoose about the db URL link (I think) here we also give options if we have any
mongoose.connect(URL);

//to ask mongose to connect to the URL set under connect (I think)
const connection = mongoose.connection;

//To connect once
//open is the name of the event and using the arrow function
connection.once("open", () => {
  console.log("Connection to MongoDB successful");
});

//To run the server in the assingned PORT
app.listen(PORT, () => {
  console.log("Server is up and running on port : " + PORT);
});

const router = express.Router();

//parking management controllers
router.get("/", (req, res) => {
  res.json({ message: "Test me" });
  console.log("hello");
});