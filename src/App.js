import Navbar from "./components/Navbar";
import "./App.css";
import NavDropdown from "./components/NavDropdown";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavDropdown />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
