import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

import apiRoutes from "./routes";

app.use(express.json());

app.get("/", (req, res) => {
  const message = {
    message: "WELCOME TO MY SPACE X API PROJECT",
    routesAvailable: {
      launches: [
        "/api/launches/general",
        "/api/launches/falcon9",
        "/api/launches/falconheavy",
      ],
    },
  };
  res.json(message);
});

apiRoutes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`API WORKING ON PORT: ${process.env.PORT || 3000}`);
});

module.exports = app;
