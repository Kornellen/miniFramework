import { router, AppControllers } from "../common/decorators/index.js";
import express from "express";
import { EnvironmentManager } from "./modules/main/index.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export const DEFAULT_PREFIX = EnvironmentManager.getEnv("DEFAULT_PREFIX");
const app = express();
/**
 * Contains Initialization Logic
 */
export class AppBootstrap {
    start() {
        app.use(DEFAULT_PREFIX, router);
        AppControllers.forEach((controller) => console.log(controller.name));
        return app;
    }
}
//# sourceMappingURL=AppBootstrap.js.map