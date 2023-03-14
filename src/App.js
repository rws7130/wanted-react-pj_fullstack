import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Resume from "./pages/Resume";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/LoginRegisterPage" element={<LoginRegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
