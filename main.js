//  REQUIRES
const express = require("express");
const morgan = require("morgan");

const apiRoutes = require("./src/routes/api.routes");

//  INIT
const app = express();
const PORT = 3000;

//  USES AND CONNECTION
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use("/api/", apiRoutes);

//  SERVER
function run() {
  app.listen(PORT);
  console.log("Server on port", PORT);
  console.log(new Date());
}

run();