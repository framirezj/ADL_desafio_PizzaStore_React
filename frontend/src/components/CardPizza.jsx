import { Button, Card, Placeholder } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import formatPrice from "../utils/formatPrice";
/* import formatIngredients from "../utils/formatIngredients"; */
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  //solo accedo al metodo para agregar pizzas en el contexto
  const { addToCart } = useContext(CartContext);

  const handleIngredients = (list) => {
    return list.map((ing, index) => (
      <li key={index}>
        {ing}
        {index < ingredients.length - 1 ? "," : ""}
      </li>
    ));
  };

  return (
    <Card style={{ width: "25rem" }} className="">
      
      {/* reserva el espacio de la imagen */}
      {!imgLoaded && (
        <Placeholder
          as="div"
          animation="glow"
          style={{ width: "100%", height: "264px", backgroundColor: "#f0f0f0" }}
        >
          <Placeholder xs={12} style={{ height: "100%" }} />
        </Placeholder>
      )}

      <Card.Img
        variant="top"
        src={img}
        onLoad={() => setImgLoaded(true)}
        style={{
          display: imgLoaded ? "block" : "none",
          height: "264px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Card.Title className="text-start">Pizza {name}</Card.Title>
        <Card.Text className="fw-light border-top">Ingredientes:</Card.Text>
        <div className="border-bottom">
          <span>🍕</span>
          <ul className="d-inline-flex list-unstyled gap-1">
            {handleIngredients(ingredients)}
          </ul>
        </div>
        {/* <Card.Text className="border-bottom">🍕 <ul className="d-inline-flex list-unstyled gap-1 ">{handleIngredients(ingredients)}</ul></Card.Text> */}
        <Card.Text className="fw-bold fs-5">
          Precio: ${formatPrice(price)}
        </Card.Text>
        <div className="d-flex justify-content-around gap-2">
          <Link to={`/pizzas/${id}`}>
            <Button variant="outline-dark">Ver Más 👀</Button>
          </Link>
          <Button
            variant="dark"
            onClick={() => addToCart(id, name, price, img)}
          >
            Añadir 🛒
          </Button>
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
