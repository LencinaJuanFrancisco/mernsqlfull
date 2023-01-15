const router = require("express").Router();

function apiRouter(app) {
  app.use("/api/v1", router);

  router.use("/users", require("./usersRouter"));
  router.use("/roles", require("./rolesRouter"));
  // router.use("/tasks", require("./usersRouter"));
}

module.exports = apiRouter;
