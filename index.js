const express = require("express");
const connection = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const booksRouter = require("./routes/Books");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

dotenv.config();

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/books", booksRouter);

// Start the server
app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is listening on port ${port}`);
    console.log("mongo is connected");
  } catch (error) {
    console.log(error.message);
  }
});
