import "./App.css";
import LoginPage from "./components/Login/Login.js";
import ArticlePage from "./components/Articles/Articles";
import RegisterScreen from "./components/SighnUp/RegisterScreen";
import ComplexNavbar from "./components/header-footer/header";
import Footerbar from "./components/header-footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />}></Route>
			</Routes>

			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
			</Routes>

			<Routes>
				<Route path="/nav" element={<ComplexNavbar />}></Route>
			</Routes>

			<Routes>
				<Route path="/foot" element={<Footerbar />}></Route>
			</Routes>

			<Routes>
				<Route path="/reg" element={<RegisterScreen />}></Route>
			</Routes>

			<Routes>
				<Route path="/Album" element={<ArticlePage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
