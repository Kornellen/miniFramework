import { ErrorRequestHandler, RequestHandler } from "express";

export const AppMiddlewares: Map<string, RequestHandler | ErrorRequestHandler> =
  new Map<string, RequestHandler | ErrorRequestHandler>();

export function Middleware(name: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const instance = new target.constructor();

    AppMiddlewares.set(name, descriptor.value.bind(instance));
  };
}
