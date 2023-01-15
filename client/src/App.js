import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import "./App.css";
function App() {
  return (
    <>
      {" "}
      <div className="backImg"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
