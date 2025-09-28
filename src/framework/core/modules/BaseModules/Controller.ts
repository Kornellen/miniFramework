import { Request, Response } from "express";

export abstract class BaseController {
  public create(req: Request, res: Response) {}

  public get(req: Request, res: Response) {}

  public delete(req: Request, res: Response) {}
}
