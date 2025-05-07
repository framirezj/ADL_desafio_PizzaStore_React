import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import "../../src/index.css";
/* import { pizzas } from "../pizzas.js"; */
import { useState, useEffect } from "react";

const Home = () => {
  /* variables de estado */
  const [pizzas, setPizzas] = useState([]);

  /* obtiene los datos */
  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
    
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
      <div className="container-pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
