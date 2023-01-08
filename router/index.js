const router = require("express").Router();

function apiRouter(app) {
  app.use("/api/v1", router);

  router.use("/users", require("./usersRouter"));
}

module.exports = apiRouter;
