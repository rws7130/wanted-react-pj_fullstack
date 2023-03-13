import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
