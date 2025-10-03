import {
  AppMiddlewares,
  Controller,
  Route,
  TryCatch,
} from "@miniframework/core/common";
import { BaseController, BaseService } from "@miniframework/core/components";
import { prisma } from "@miniframework/core/functions";
import { Request, Response } from "express";

@Controller("/user")
export class UserController extends BaseController {
  private static middlewaresName = ["validateJWT"];
  private static middlewares: any[] = [];
  constructor() {
    super(BaseService);

    for (const name of UserController.middlewaresName) {
      const mid = AppMiddlewares.get(name);

      if (mid !== undefined) {
        UserController.middlewares.push(mid);
      }

      continue;
    }
  }
  @TryCatch(TypeError)
  @Route({
    method: "get",
    path: "/add",
    description: "Adds user; Returns Informations about adding user",
    middlewares: UserController.middlewares
      ? UserController.middlewares
      : undefined,
  })
  public create(req: Request, res: Response) {
    UserController.middlewares
      ? console.log("Middlewares has been loaded")
      : console.warn("Middlewares cannot be loaded");

    if (Math.floor(Math.random() * 10) < 2) throw new TypeError("Test Error");
    const isUserAdded =
      Math.floor(Math.random() * 10) < 5 ? "User Not Added" : "User Added";
    console.log();

    res.send(
      `${isUserAdded}<br />Validation: ${res.getHeader("X-Validation-Info")}`
    );
  }
}
