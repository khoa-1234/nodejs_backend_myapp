import express from "express";
import usercontrollers from "../controller/usercontrollers";
import homecontrollers from "../controller/homecontrollers";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homecontrollers.getHomePage);
  router.get("/crud", homecontrollers.getCRUD);
  router.post("/api/login", usercontrollers.handeLogin);
  return app.use("/", router);
};
module.exports = initWebRoutes;
