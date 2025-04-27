import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  console.log("hola");
  return (
    <div className="app-container">
      <div className="container-navbar">
        <Navbar />
      </div>
      <main className="container-home">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <Cart />
      </main>
      <footer className="container-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
