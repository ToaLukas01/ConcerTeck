const { Router } = require("express");
const { getUser, createUser, putUser } = require("../controllers/Usuario");
const {createProductor, getProductor}= require("../controllers/Productor")
const routes = Router();

routes.post("/user",createUser);
routers.put("/user", putUser);
routes.get("/productor",getProductor);
routes.post("/productor",createProductor);


module.exports = routes;
