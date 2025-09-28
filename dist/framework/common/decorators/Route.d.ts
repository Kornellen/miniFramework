import { ErrorRequestHandler, RequestHandler } from "express";
import "reflect-metadata";
import { HttpMethod, RouteType } from "types/index.js";
export declare const AppRoutes: {
    controller: string;
    route: RouteType;
}[];
export declare function Route({ method, path, middlewares, description, }: {
    method: HttpMethod;
    path?: string;
    middlewares?: Array<RequestHandler | ErrorRequestHandler>;
    description: string;
}): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
