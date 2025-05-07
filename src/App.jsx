import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log("hola");
  return (
    <div className="app-container">
      <div className="container-navbar">
        <Navbar />
      </div>
      <main className="container-home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          {/* <Route path="/profile" element={<Profile/>} /> */}
          {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>
      </main>
      <footer className="container-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
