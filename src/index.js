const express = require ("express");
const routes = require("../src/routes");

const app = express();//chamando o metodo do express para usar JSON

app.use(express.json());
app.use(routes);
app.listen(3000);