import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  console.log("hola")
  return (
    <div className="app-container">
      <div className="container-navbar">
        <Navbar />
      </div>
      <main className="container-home">
        {/* <Home /> */}
        {/* <Register /> */}


        <div className="container-access">
          <div className="access-image">            
          </div>
          {/* <Login /> */}
          <Register />
        </div>
        
      </main>
      <footer className="container-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
