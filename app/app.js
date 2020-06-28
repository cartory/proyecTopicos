//  REQUIRES
const morgan = require("morgan");
const express = require("express");

const apiRoutes = require("../src/routes");

//  INIT
const app = express();

//  USES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Hello from proyecTopicos!!</h1>');
});

app.use("/api/", apiRoutes);

module.exports = app;