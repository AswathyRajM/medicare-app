import Navbar from "./components/Navbar";
import "./App.css";
import NavDropdown from "./components/NavDropdown";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavDropdown />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
