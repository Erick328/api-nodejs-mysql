const express = require('express');
const morgan = require('morgan');
const app = express();
import route from "./route/routeCliente"




//sttings
app.set('port', 4000);

//Middelwares
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use(route);


module.exports = app;