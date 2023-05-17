/**
 * This is a React component for a login page that allows users to log in as either a staff member or a
 * customer and redirects them to different pages based on their user type.
 * @returns A functional component for a login page with JSX elements and state variables for username,
 * email, and password. It also includes an axios post request to verify user login credentials and
 * redirects the user to different pages based on their user type.
 */
import React, { Component, useState } from "react";
import axios from "axios";
import GetEmployeeDetails from "./getAllEmployees";
import { Link } from "react-router-dom";

export default function LoginPage() {  
	const [username, setEmail] = useState("");
  const [email, setEmailCust] = useState("");
  const [password, setPwd] = useState("");

  var allEmp = GetEmployeeDetails();

  const staff = {
    username,
    password,
  };

  const user = {
    email,
    password,
  };

  var i = 0;

  async function Verify() {
    try {
      const result = await axios.post(
        "http://localhost:5001/user/login",
        {
          staff,
        }
      );

      if (result.data.message) {
        /* Here we check if the user */
        try {
          const custResult = await axios.post(
            "http://localhost:5001/user/login",
            {
              user,
            }
          );

          if (custResult.data.message) {
            localStorage.setItem("userType", "None");
            alert("Incorrect UserName/Password");
          } else {
            console.log("Welcome User");
            console.log(custResult.data);
            localStorage.setItem("currentUser", JSON.stringify(result.data));

            //setting the user type
            localStorage.setItem("userType", "Customer");

            localStorage.setItem(
              "currentUserID",
              JSON.stringify(custResult.data.email)
            );
            window.location.href = "/customerService";
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        //checking if the user is an employee
        localStorage.setItem("currentUser", JSON.stringify(result.data));

        let loggedId = result.data.empID;

        for (var k = 0; k < allEmp.length; k++) {
          if (loggedId === allEmp[k].empID) break;
        }

        if (allEmp[k].designation.trim().slice(-7) === "Manager") {
          console.log("Hello Manager");
          window.location.href = "/Manager";
        } else if (allEmp[k].designation.trim().slice(-5) === "Admin") {
          console.log("Hello Admin");
          window.location.href = "/admin";
        } else {
          console.log("Hello Employee");
          window.location.href = "/Staff";
        }
        console.log(allEmp[k]);
      }
    } catch (error) {
      console.log(error);
    }
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
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Log In</h1><br></br>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="User name" onChange={(e) => {
                setEmail(e.target.value);
                setEmailCust(e.target.value);
              }} />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)}/>
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={Verify}>Login</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
      <div><br></br>
            <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer" href="/SignUp">Don't have an account?</span>

      </div>
		</form>
	</div>
</div>
  );
}
