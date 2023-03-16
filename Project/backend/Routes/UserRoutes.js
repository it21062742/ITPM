const router = require("express").Router();
let User = require("../models/User");

//http://localhost:5001/User/create
//Add a record to the database
router.route("/create").post((req, res) => {
  const UserID = req.body.UserID;
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const newUser = new User({
    UserID,
    username,
    password,
    name,
  });

  newUser
    .save()
    .then(() => {
      res.json("New user Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:5001/User/read
//Read data from the database
//Display records of all User
router.route("/read").get((req, res) => {
  User.find()
    .then((User) => {
      res.json(User);
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:5001/User/read/id
//Read data from the database
//Display recoords of one User
router.route("/read/:id").get(async (req, res) => {
  let UserId = req.params.id;

  const User = await User.findById(UserId)
    .then((User) => {
      res.status(200).send({ status: "User Details Fetched", User });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({
          status: "Error with fetching User details",
          error: err.message,
        });
    });
});

//http://localhost:5001/User/update/id
//Update one record
router.route("/update/:id").put(async (req, res) => {
  let UserId = req.params.id;
  const { UserID, username, password, name } = req.body;

  const updateUser = {
    UserID,
    username,
    password,
    name,
  };

  const update = await User.findByIdAndUpdate(UserId, updateUser)
    .then(() => {
      res.status(200).send({ status: "User Details Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({
          status: "Error with updating User details",
          error: err.message,
        });
    });
});

//http://localhost:5001/User/delete/id
//Delete one record
router.route("/delete/:id").delete(async (req, res) => {
  let UserId = req.params.id;

  await User.findByIdAndDelete(UserId)
    .then(() => {
      res.status(200).send({ status: "User  Details Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({
          status: "Error with deleting User details",
          error: err.message,
        });
    });
});

module.exports = router;
