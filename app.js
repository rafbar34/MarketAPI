const express = require("express");
const http = require("http");
const app = express();

const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(usersRoutes);
app.use(shopRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});
const server = http.createServer(app);
server.listen(3000);
