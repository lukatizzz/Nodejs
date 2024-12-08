import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => { 
    router.get('/', (req, res) => {
        return homeController.getHomePage(req, res);
    });
    return app.use("/", router);
}

module.exports = initWebRoutes;
