import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
