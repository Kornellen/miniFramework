import { ErrorRequestHandler, RequestHandler } from "express";
import "reflect-metadata";
import { HttpMethod, RouteType } from "types/index.js";

export const AppRoutes: { controller: string; route: RouteType }[] = [];

export function Route({
  method,
  path,
  middlewares,
}: {
  method: HttpMethod;
  path?: string;
  middlewares?: Array<RequestHandler | ErrorRequestHandler>;
}) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const controllerRoutes: RouteType[] = [];
    AppRoutes.push({
      controller: target.constructor.name,
      route: {
        method,
        path,
        handler: descriptor.value,
        middlewares: middlewares,
      },
    });

    controllerRoutes.push({
      method,
      path,
      handler: descriptor.value,
      middlewares: middlewares,
    });

    Reflect.defineMetadata(
      "Controller:Routes",
      controllerRoutes,
      target.constructor
    );
  };
}
