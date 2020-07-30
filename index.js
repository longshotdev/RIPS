const express = require("express");

const server = express();

server.use(express.static("./public"));

server.post("/bonk", (req, res) => {
  res.send(503);
});

server.listen(5400, () => {
  console.log("listening on port 5400");
});
