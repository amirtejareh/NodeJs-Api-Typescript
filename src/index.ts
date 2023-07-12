import express, { Application } from "express";
import mongoose from "mongoose";
import { ApiRoutes } from "@framework/routes";

const app: Application = express();

export default class StartApplication {
  constructor() {
    this.configDatabase();
    this.configServer();
    this.configRoutes();
  }

  configServer() {
    app.listen(global.config.server.port, () =>
      console.log(`listening on port ${global.config.server.port} ...`)
    );
  }
  configDatabase() {
    mongoose.connect(
      global.config.database.mongodb_uri,
      global.config.database.options
    );
    mongoose.connection.on(
      "error",
      console.error.bind(console, "connection error:")
    );
    mongoose.connection.once("open", function () {
      console.log("database connection successful!");
    });
  }

  configRoutes() {
    app.use("/api", ApiRoutes);
  }
}
