import { Request, Response } from "express";
import { BaseService } from "./Service.js";

export abstract class BaseController {
  private static instance: BaseController;
  constructor(protected service: BaseService) {
    if (BaseController.instance) {
      return BaseController.instance;
    }

    BaseController.instance = this;
  }
  public create(req: Request, res: Response) {}

  public get(req: Request, res: Response) {}

  public delete(req: Request, res: Response) {}
}
