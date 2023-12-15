const express = require("express");
const http = require("http");
const app = express();

const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/erro404");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(usersRoutes);
app.use("/shop", shopRoutes);

app.use(errorController.get404);
const server = http.createServer(app);
server.listen(3000);
