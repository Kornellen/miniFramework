import { ErrorRequestHandler, RequestHandler } from "express";

export {};

export type RouteType = {
  method: HttpMethod;
  path: string | undefined;
  handler: any;
  middlewares?: Array<RequestHandler | ErrorRequestHandler>;
};
export type HttpMethod = "get" | "post" | "put" | "delete";
