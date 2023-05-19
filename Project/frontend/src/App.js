import "./App.css";
import LoginPage from "./components/Main/SighnUp/Login.js";
import SighnUpPage from "./components/Main/SighnUp/SignUp";
import ArticlePage from "./components/User/Articles/Articles";
import Articlesdash from "./components/User/Articles/Articlesdash";
import LoanDash from "./components/User/HouseLoan/LoanDash";
import LeaseDash from "./components/User/VehicleLease/LeaseDash";
import UserDetails from "./components/User/userDetails";
import HomePage from "./components/Main/LandingPage/HomePage";
import UserHomePage from "./components/User/HomePage/UserHomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const isLoggedIn = window.localStorage.getItem("loggedIn");
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/"
					element={
						isLoggedIn == "true" ? (
							<UserDetails />
						) : (
							<UserHomePage />
						)
					}
				/>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/SignUp" element={<SighnUpPage />}></Route>
				<Route path="/Album" element={<ArticlePage />}></Route>
				<Route path="/Home" element={<UserHomePage />}></Route>
				<Route path="/Articles" element={<Articlesdash />}></Route>
				<Route path="/Loancal" element={<LoanDash />}></Route>
				<Route path="/Leasecal" element={<LeaseDash />}></Route>
				<Route path="/userDetails" element={<userDetails />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
