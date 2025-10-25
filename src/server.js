import express from "express";
import cors from "cors";

import booksRouter from "./routers/books.router.js";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

const startServer = () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.use("/books", booksRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`),
  );
};

export default startServer;
