import { Request, Response } from "express";
import { Controller, Route } from "@miniframework/core/common";

@Controller("/test")
export class TestController {
  @Route({ method: "get", path: "" })
  public hello(req: Request, res: Response) {
    res.send("Hello");
  }
}
