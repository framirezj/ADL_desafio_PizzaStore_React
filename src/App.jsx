import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="app-container">
      <UserProvider>
      <CartProvider>
      <div className="container-navbar">        
        <Navbar />
      </div>
      <main className="container-home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>       
      </main>
      <footer className="container-footer">
        <Footer />
      </footer>
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
