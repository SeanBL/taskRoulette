//Having trouble understanding how to set up the routes in the index.js file in the controllers folder vs. the api folder 

const { Router } = require("express");

const apiRouter = require("./api")

const allRouter = new Router();

allRouter.use("/api", apiRouter);

module.exports = allRouter;
