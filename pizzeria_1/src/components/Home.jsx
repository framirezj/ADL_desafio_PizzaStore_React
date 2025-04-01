import Header from "./Header";
import CardPizza from "./CardPizza";
import "../../src/index.css";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
 m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
 080-784dcc87ec2c"
      />
      <CardPizza
        name="Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
 m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2
a1c6-8c57bc388fab"
      />
      <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
 m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040
ac54-90f6c31eb3e3"
      />
    </div>
  );
};

export default Home;
