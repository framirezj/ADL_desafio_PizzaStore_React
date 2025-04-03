import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import formatPrice from "../utils/formatPrice";
import formatIngredients from "../utils/formatIngredients";

const CardPizza = ({ name, price, ingredients, img }) => {

  return (
    <Card style={{ width: "25rem" }} className="">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-start">Pizza {name}</Card.Title>
        <Card.Text className="fw-light border-top">Ingredientes:</Card.Text>
        <Card.Text className="border-bottom">🍕 {formatIngredients(ingredients)}</Card.Text>
        <Card.Text className="fw-bold fs-5">Precio: ${formatPrice(price)}</Card.Text>
        <div className="d-flex justify-content-around gap-2">
          <Button variant="outline-dark">Ver Más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

/*

 <CardPizza
 name="Española"
 price={6950}
 ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
 img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
 m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2
a1c6-8c57bc388fab"
 />
*/
