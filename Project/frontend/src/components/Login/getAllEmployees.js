import React, { Component, useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export default function GetUserDetails() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/User/read")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return User;
}
