import { useState, useEffect } from "react";
import formatPrice from "../utils/formatPrice";
import { useParams } from "react-router-dom";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "",
    desc: "",
    ingredients: [],
    price: 0
  });

  const { id } = useParams();

  let url = `${import.meta.env.VITE_API_URL}/api/pizzas${id}`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleIngredients = (list) => {
    return list.map((ing, index) => (
      <li key={index}>
        {ing}
      </li>
    ));
  };

  return (
    <div className="container-pizza">
      <div className="description-image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          alt=""
        />
      </div>
      <div className="description-pizza">
        <h3>{pizza.name.toUpperCase()}</h3>
        <p>{pizza.desc}</p>
        <div>
          <ul>{handleIngredients(pizza.ingredients)}</ul>
        </div>
        <p className="fs-3 fw.bolder">Precio: ${formatPrice(pizza.price)}</p>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default Pizza;

/* http://localhost:5000/api/pizzas/p001 */

/* 
{
  "desc": "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
  "id": "p001",
  "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  "ingredients": [
    "mozzarella",
    "tomates",
    "jamón",
    "orégano"
  ],
  "name": "napolitana",
  "price": 5950
}
*/

/*
 Mostrar la información de la pizza en el componente, puedes inspirarte en las
 capturas proporcionadas al final de este documento, pero debes cumplir con los
 siguientes requerimientos:
 ○ Nombredelapizza.
 ○ Preciodelapizza.
 ○ Ingredientes de la pizza.
 ○ Imagendelapizza.
 ○ Descripción de la pizza.
 ● Elbotóndeañadir al carrito por ahora no tiene funcionalidad.
*/
