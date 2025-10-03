import { Middleware } from "@miniframework/core/common";
import { NextFunction, Request, Response } from "express";

export class SecurityMiddlewares {
  @Middleware("validateJWT")
  public validateJWT(req: Request, res: Response, next: NextFunction) {
    res.set("X-Validation-Info", "Validation Success");

    next();
  }
}
