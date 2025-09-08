# PizzaStore 🍕

Aplicación fullstack para una pizzería, desarrollada con React (frontend) y Node.js/Express (backend). Permite visualizar pizzas, autenticarse, registrarse, gestionar el carrito y realizar pedidos.
https://adl-desafio-pizzastore-react.onrender.com/

<img width="1845" height="947" alt="image" src="https://github.com/user-attachments/assets/22838764-831c-446f-b578-16cf59055126" />


## Estructura del Proyecto

```
backend/
  controllers/
  db/
  middlewares/
  models/
  routes/
  utils/
  .env
  index.js
  package.json
  README.md

frontend/
  public/
  src/
    components/
    context/
    pages/
    utils/
    index.css
    App.jsx
    main.jsx
  .env
  index.html
  package.json
  README.md
```

## Instalación

### Backend

```sh
cd backend
npm install
npm run dev
```

- El backend corre en el puerto `5000` por defecto.
- Configura la variable `JWT_SECRET` en el archivo `.env`.

### Frontend

```sh
cd frontend
npm install
npm run dev
```

- El frontend corre en el puerto `5173` por defecto.
- Configura la variable `VITE_API_URL` en el archivo `.env` para apuntar al backend.

## Funcionalidades

- **Visualización de pizzas:** Listado y detalle de cada pizza.
- **Carrito de compras:** Añadir, quitar y modificar cantidades.
- **Autenticación:** Registro y login de usuarios con JWT.
- **Perfil:** Visualización de datos del usuario autenticado.
- **Checkout:** Simulación de compra (requiere autenticación).

## Endpoints Backend

- `GET /api/pizzas` — Listado de pizzas.
- `GET /api/pizzas/:id` — Detalle de una pizza.
- `POST /api/auth/login` — Login de usuario.
- `POST /api/auth/register` — Registro de usuario.
- `GET /api/auth/me` — Perfil del usuario autenticado (requiere JWT).
- `POST /api/checkouts` — Realizar pedido (requiere JWT).


## Créditos

- Desarrollado por [framirezj](https://github.com/framirezj) y backend material de apoyo DesafíoLatam.

---

¡Disfruta de la mejor pizza!
