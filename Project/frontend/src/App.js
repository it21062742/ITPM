import './App.css';
import LoginPage from "./components/Login/Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
          <Routes>
      <Route path="/log" element={<LoginPage />}></Route> //add as star
      after
    </Routes>
  </Router>   
  );
}

export default App;
