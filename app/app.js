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
    res.send('Hello from proyecTopicos!!');
});

app.use("/api/", apiRoutes);

module.exports = app;