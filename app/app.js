
//'use strict' 
//const { myRouter } = require("../src/routes");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  routes() {
    //this.app.use("/api", myRouter.router);
    this.app.get("/", (req, res) => {
      res.send("<h1>Hello from proyecTopicos!!</h1>");
    });
  }

  start(port) {
    this.app.listen(port);
  }
}

module.exports = { App };
