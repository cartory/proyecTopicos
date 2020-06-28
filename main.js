const dotenv = require("dotenv");
const { App } = require("./app/app");

dotenv.config();

function main() {
  const server = new App();
  const url = `http://${process.env.HOST}:${process.env.PORT}`;
  server.start(process.env.PORT);
  console.log("server on ", url);
  console.log(new Date());
}

main();