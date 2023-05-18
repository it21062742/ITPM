import './App.css';
import LoginPage from "./components/Main/SighnUp/Login.js";
import SighnUpPage from "./components/Main/SighnUp/SignUp";
import ArticlePage from "./components/User/Articles/Articles";
import Dashboard from './components/dashboard/Dashboard';
import Articlesdash from './components/User/Articles/Articlesdash';
import LoanCal from './components/User/HouseLoan/loancal';
import LoanDash from './components/User/HouseLoan/LoanDash';


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
      <Route path="/SignUp" element={<SighnUpPage />}></Route> 
    </Routes>

    <Routes>
      <Route path="/Album" element={<ArticlePage />}></Route> 
    </Routes>

    <Routes>
      <Route path="/Home" element={<ArticlePage />}></Route> 
    </Routes>

    <Routes>
      <Route path="/dash" element={<Dashboard />}></Route> 
    </Routes>

    <Routes>
      <Route path="/1" element={<Articlesdash />}></Route> 
    </Routes>

     <Routes>
      <Route path="/Loancal" element={<LoanDash />}></Route> 
    </Routes>


  </Router>   
  );
}

export default App;
