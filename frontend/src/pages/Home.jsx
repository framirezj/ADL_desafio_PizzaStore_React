import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import "../../src/index.css";
/* import { pizzas } from "../pizzas.js"; */
import { useState, useEffect } from "react";

const Home = () => {
  /* variables de estado */
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  /* obtiene los datos */
  const url = `${import.meta.env.VITE_API_URL}/api/pizzas`;

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al traer datos:", error);
    } finally {
      setLoading(false);
    }
  };

  /* useEfect */
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-header">
        <Header />
      </div>
      
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="container-pizzas">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
          </div>
        )}
      
    </>
  );
};

export default Home;
