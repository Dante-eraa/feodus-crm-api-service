import express from "express";
import dotenv from "dotenv";
import errorHandler from "./src/middlewares/errorHandler.js";
import routes from "./src/routes/index.js";
import morgan from "morgan";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
    data: {
      data: null,
      meta: null,
    },
  });
});
app.use("/api/v1", routes);
app.use(errorHandler);

export default app;
