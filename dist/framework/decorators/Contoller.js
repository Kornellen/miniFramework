import { Router } from "express";
import "reflect-metadata";
export const AppControllers = [];
const router = Router();
export function Controller(basePath) {
    return function (target) {
        AppControllers.push(target);
        const controller = new target();
        const routes = Reflect.getMetadata("Controller:Routes", target) ?? [];
        if (routes.length === 0) {
            throw new Error("There are no routes defined");
        }
        routes.forEach((route) => {
            router[route.method](`${basePath}${route.path}`, ...(route.middlewares ?? []), (req, res) => controller[route.handler.name](req, res));
        });
        routes.forEach((route) => Reflect.defineMetadata("Controllers:Routes", (route.path = `${basePath}${route.path}`), target));
    };
}
export { router };
//# sourceMappingURL=Contoller.js.map