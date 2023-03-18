import './App.css';
import LoginPage from "./components/Login/Login.js";
import SighnUpPage from "./components/SighnUp/SignUp";
import ArticlePage from "./components/Articles/Articles";
import headerPage from "./components/Header_Footer/header";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<LoginPage />}></Route> //add as star
      after
    </Routes>

    <Routes>
      <Route path="/head" element={<headerPage />}></Route> //delete this
      after
    </Routes>

    <Routes>
      <Route path="/login" element={<LoginPage />}></Route> //add as star
      after
    </Routes>

    <Routes>
      <Route path="/SignUp" element={<SighnUpPage />}></Route> //add as star
      after
    </Routes>

    <Routes>
      <Route path="/Article" element={<ArticlePage />}></Route> //add as star
      after
    </Routes>
  </Router>   
  );
}

export default App;
