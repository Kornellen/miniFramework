import { Request, Response } from "express";
import { UserService } from "../service/User.service";
import { Controller, Route } from "@miniframework/common";

@Controller("/user")
class UserContoller {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  @Route({ method: "get", path: "/" })
  public getUser(req: Request, res: Response): void {
    res.send(this.userService.getUser());
  }

  @Route({ method: "post", path: "/" })
  public addUser(req: Request, res: Response): void {
    const id = Math.floor(Math.random()) * 100 < 50 ? 0 : 1;
    res.send(this.userService.addUser(id));
  }
}
