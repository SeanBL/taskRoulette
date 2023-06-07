// Having trouble understanding the proper way to set up the routes

const { Router } = require("express");

const userRouter = require("./user");

const apiRouter = new Router();

apiRouter.use("/user", userRouter);

module.exports = apiRouter;