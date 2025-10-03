import { router, AppControllers } from "../common/decorators/index.js";
import express, { Express } from "express";
import { EnvironmentManager } from "./modules/main/index.js";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config({ path: path.join(process.cwd(), ".env") });
export const DEFAULT_PREFIX = EnvironmentManager.getEnv("DEFAULT_PREFIX");

const app: Express = express();
/**
 * Contains Initialization Logic
 */

export class AppBootstrap {
  public start(): Express {
    app.use(cors());

    app.use(DEFAULT_PREFIX, router);

    AppControllers.forEach((controller) => console.log(controller.name));

    return app;
  }
}
