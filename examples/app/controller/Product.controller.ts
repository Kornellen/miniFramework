import { Request, Response } from "express";
import { Controller, Route } from "@miniframework/common";

@Controller("/product")
class ProductContoller {
  @Route({ method: "get", path: "/" })
  public getProduct(req: Request, res: Response) {
    res.send("Hi");
  }
}
