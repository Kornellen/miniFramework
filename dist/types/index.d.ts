import { ErrorRequestHandler, RequestHandler } from "express";

export {};

export type RouteType = {
  method: HttpMethod;
  path?: string;
  handler: any;
  middlewares?: Array<RequestHandler | ErrorRequestHandler>;
  description: string;
};
export type HttpMethod = "get" | "post" | "put" | "delete";
