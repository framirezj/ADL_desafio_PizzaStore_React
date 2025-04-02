import Header from "./Header";
import CardPizza from "./CardPizza";
import "../../src/index.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-header">
        <Header />
      </div>
      <div className="container-pizzas">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="/img/pizzapizza.webp"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="/img/pizzapizza.webp"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="/img/pizzapizza.webp"
        />
      </div>
    </div>
  );
};

export default Home;
