import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  console.log("hola")
  return (
    <div className="app-container">
      <div className="container-navbar">
        <Navbar />
      </div>
      <main className="container-home">
        <Home />
      </main>
      <footer className="container-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
