import Navbar from "./components/Navbar";
import "./App.css";
import NavDropdown from "./components/NavDropdown";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavDropdown />

      <Home />
    </div>
  );
}

export default App;
