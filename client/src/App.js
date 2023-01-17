import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Projects from "./components/projects/Projects";
import Notice from "./components/notice/Notice";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </>
  );
}

export default App;
