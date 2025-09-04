import cors from "cors";
import "dotenv/config";
import express from "express";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import pizzaRoute from "./routes/pizza.route.js";

const app = express();

app.use(express.json());

// Configuración de CORS para permitir tu frontend específico
const allowedOrigins = [
  'https://adl-desafio-pizzastore-react.onrender.com'
];


app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin 'origin' (como Postman, móviles, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      // Si el origen está en la lista blanca
      callback(null, true);
    } else {
      // Si el origen no está permitido
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Si necesitas enviar cookies o autenticación
}));

app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizzaRoute);
app.use("/api/checkouts", checkoutRoute);
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
