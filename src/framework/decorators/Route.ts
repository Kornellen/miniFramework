import { ErrorRequestHandler, RequestHandler } from "express";
import "reflect-metadata";
import { HttpMethod, RouteType } from "../../types";

export const AppRoutes: RouteType[] = [];

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
    AppRoutes.push({
      method,
      path,
      handler: descriptor.value,
      middlewares: middlewares,
    });
    Reflect.defineMetadata("Controller:Routes", AppRoutes, target.constructor);
  };
}
