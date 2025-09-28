import { Controller, Route } from "@miniframework/core/common";
import { Request, Response } from "express";

@Controller("/user")
export class UserController {
  @Route({
    method: "get",
    path: "/add",
    description: "Adds user; Returns Informations about adding user",
  })
  public create(req: Request, res: Response) {
    const isUserAdded =
      Math.floor(Math.random() * 10) < 5 ? "User Not Added" : "User Added";

    res.send(isUserAdded);
  }
}
