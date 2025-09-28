import { Request, Response, Router } from "express";
import "reflect-metadata";
import { RouteType } from "types/index.js";
export const AppControllers: any[] = [];

const router = Router();

export function Controller(basePath: string) {
  return function (target: any) {
    AppControllers.push(target);
    const controller = new target();
    const routes: RouteType[] =
      Reflect.getMetadata("Controller:Routes", target) ?? [];

    if (routes.length === 0) {
      throw new Error("There are no routes defined");
    }

    routes.forEach((route: RouteType) => {
      router[route.method](
        `${basePath}${route.path}`,
        ...(route.middlewares ?? []),
        (req: Request, res: Response) =>
          controller[route.handler.name](req, res)
      );
    });

    routes.forEach((route) =>
      Reflect.defineMetadata(
        "Controllers:Routes",
        (route.path = `${basePath}${route.path}`),
        target
      )
    );
  };
}

export { router };
