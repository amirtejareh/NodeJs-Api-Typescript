import express, { Application } from "express";
import { ApiRoutes } from "@framework/routes";

const app: Application = express();

export default class StartApplication {
  constructor() {
    this.configServer();
    this.configRoutes();
  }

  configServer() {
    app.listen(process.env.PORT, () =>
      console.log(`listening on port ${process.env.PORT} ...`)
    );
  }

  configRoutes() {
    app.use("/api", ApiRoutes);
  }
}
