import { router, AppControllers } from "./decorators/index.js";
import express from "express";
import "./modules/miniswagger/endpointDocumentationAPI.js";
export const DEFAULT_PATH = "/api";
const app = express();
export class AppBootstrap {
    start() {
        app.use("/api", router);
        AppControllers.forEach((controller) => console.log(controller.name));
        // console.log(router);
        return app;
    }
}
//# sourceMappingURL=AppBootstrap.js.map