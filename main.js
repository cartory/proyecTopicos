const { App } = require("./app/app");


function main() {
  const server = new App();
  //const url = `http://${process.env.HOST}:${process.env.PORT}`;
  server.start(process.env.PORT||3000);
  //console.log("server on ", url);
  
  console.log(new Date());
}

main();
