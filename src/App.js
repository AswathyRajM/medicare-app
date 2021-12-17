import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import NavDropdown from "./components/NavDropdown";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Electronics from "./pages/Electronics";
import WomensCloths from "./pages/WomesCloths";
import MensCloths from "./pages/MensCloths";
import Jewellery from "./pages/Jewellery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavDropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-products" element={<Home />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="womens-cloths" element={<WomensCloths />} />
        <Route path="mens-cloths" element={<MensCloths />} />
        <Route path="jewellery" element={<Jewellery />} />
        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                height: "50vh",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
              }}
            >
              <h3>Oops!! There's nothing here!</h3>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
