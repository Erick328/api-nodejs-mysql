const express = require('express');
const route = express.Router();
import { methodos as UsersController } from "./../Controllers/UsersController";

route.get("/api/cliente/index", UsersController.index);
route.post("/api/cliente/store", UsersController.store);
route.put("/api/cliente/update/:id", UsersController.update);
route.delete("/api/cliente/destroy/:id", UsersController.destroy);
route.get("/api/cliente/show/:id", UsersController.show);


module.exports = route;