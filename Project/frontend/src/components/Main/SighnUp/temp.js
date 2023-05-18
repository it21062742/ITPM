/* This line of code is importing the React library, as well as the Component and useState modules from
the "react" package. This allows the code to use React components and state management
functionality. */
import React, { Component, useState } from "react";
import Link from '@mui/material/Link';

export default function LoginPage() {  
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
	function handleSubmit(e) {
	  e.preventDefault();
  
	  console.log(email, password);
	  fetch("http://localhost:5000/login-user", {
		method: "POST",
		crossDomain: true,
		headers: {
		  "Content-Type": "application/json",
		  Accept: "application/json",
		  "Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({
		  email,
		  password,
		}),
	  })
		.then((res) => res.json())
		.then((data) => {
		  console.log(data, "userRegister");
		  if (data.status == "ok") {
			alert("login successful");
			window.localStorage.setItem("token", data.data);
			window.localStorage.setItem("loggedIn", true);
  
			window.location.href = "./userDetails";
		  }
		});
	}

	return (
    <div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-6xl font-sans">HelpMe</h1>
			<p class="text-white mt-1">The most popular Income management tool</p>
			<button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Sign In</h1><br></br>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>

      </div>
		</form>
	</div>
</div>


  );
}
