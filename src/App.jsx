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
import {  Navigate, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {

  const { token } = useContext(UserContext)

  return (
    <div className="app-container">
      
      <CartProvider>
      <div className="container-navbar">        
        <Navbar />
      </div>
      <main className="container-home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ !token ? <Login /> : <Navigate to="/" replace/>} />
          <Route path="/register" element={ !token ? <Register /> : <Navigate to="/" replace/> } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/profile" element={ token ? <Profile /> : <Navigate to="/login" replace/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>       
      </main>
      <footer className="container-footer">
        <Footer />
      </footer>
      </CartProvider>
      
    </div>
  );
}

export default App;
