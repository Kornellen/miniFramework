import { Request, Response } from "express";
export declare abstract class BaseController {
    create(req: Request, res: Response): void;
    get(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}
