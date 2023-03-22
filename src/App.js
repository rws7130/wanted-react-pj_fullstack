import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Resume from "./pages/Resume";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import LoginModal from "./components/LoginModal";
import Login1 from "./components/Login1.js";
import Register from "./components/Register";
import Home from "./components/Home";
import LoginInputPage from "./pages/LoginInputPage";
// import Deletefile from "./components/Deletefile";

function App() {
  
  return (  
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/LoginRegisterPage" element={<LoginRegisterPage />} />
        {/* <Route path="/LoginModal" element={<LoginModal />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/LoginInputPage" element={<LoginInputPage />} /> 
        {/* <Route path="/Deletefile" element={<Deletefile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
