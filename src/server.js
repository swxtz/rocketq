const express = require("express");
const route = require("./routes");
const path = require("path")
const port = process.env.PORT || 3333;

const server = express();

server.set("view engine", "ejs");
server.use(express.static("public"));
server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({extended: true}))
server.use(route);

server.listen(port, () => {
  console.log(`🚀 Rodando servidor em http://localhost:${port}`);
});
