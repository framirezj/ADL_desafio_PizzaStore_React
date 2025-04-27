import Header from "./Header";
import CardPizza from "./CardPizza";
import "../../src/index.css";
import { pizzas } from "../pizzas.js";

/*
<CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="./img/pizzapizza.webp"
        />
*/


const Home = () => {
  return (
    <>
      <div className="container-header">
        <Header />
      </div>
      <div className="container-pizzas">
        
        {pizzas.map(
          pizza => 
          <CardPizza 
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        )}
      </div>
    </>
  );
};

export default Home;
