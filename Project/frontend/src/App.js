import './App.css';
import LoginPage from "./components/Login/Login.js";
import SighnUpPage from "./components/SighnUp/SignUp";
import ArticlePage from "./components/Articles/Articles";
import RegisterScreen from "./components/SighnUp/RegisterScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<LoginPage />}></Route> //add as star
      after
    </Routes>

    <Routes>
      <Route path="/login" element={<LoginPage />}></Route> //add as star
      after
    </Routes>

    
    <Routes>
      <Route path="/reg" element={<RegisterScreen />}></Route> //add as star
      after
    </Routes>

    <Routes>
      <Route path="/SignUp" element={<SighnUpPage />}></Route> //add as star
      after
    </Routes>

    <Routes>
      <Route path="/Album" element={<ArticlePage />}></Route> //add as star
      after
    </Routes>
  </Router>   
  );
}

export default App;
