import { router, AppControllers } from "./decorators/index.js";
import express, { Express } from "express";
import "./modules/miniswagger/endpointDocumentationAPI.js";

export const DEFAULT_PATH = "/api";

const app: Express = express();
export class AppBootstrap {
  public start(): Express {
    app.use("/api", router);

    AppControllers.forEach((controller) => console.log(controller.name));

    return app;
  }
}
