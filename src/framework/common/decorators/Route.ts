import { ErrorRequestHandler, RequestHandler } from "express";
import "reflect-metadata";
import { HttpMethod, RouteType } from "types/index.js";

export const AppRoutes: { controller: string; route: RouteType }[] = [];

export function Route({
  method,
  path,
  middlewares,
  description,
}: {
  method: HttpMethod;
  path?: string;
  middlewares?: Array<RequestHandler | ErrorRequestHandler>;
  description: string;
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
        description: description,
      },
    });

    controllerRoutes.push({
      method,
      path,
      handler: descriptor.value,
      middlewares: middlewares,
      description: description,
    });

    Reflect.defineMetadata(
      "Controller:Routes",
      controllerRoutes,
      target.constructor
    );
  };
}
