import {
  AppControllers,
  Controller,
  Route,
} from "../../../common/decorators/index.js";
import { DEFAULT_PREFIX } from "../../AppBootstrap.js";
import { Request, Response } from "express";
import { RouteType } from "types/index.js";

@Controller("/status")
export class Documentation {
  @Route({ method: "get", path: "", description: "Returns all Endpoints" })
  public generateDocumentation(req: Request, res: Response) {
    const routes: any[] = [];

    AppControllers.forEach((controller) =>
      routes.push(Reflect.getMetadata("Controller:Routes", controller))
    );

    const HTML_STRUCT = `
  <ul>
    ${routes
      .map((controllerRoutes) =>
        controllerRoutes
          .map(
            (route: RouteType) =>
              `<li><span>${route?.method.toUpperCase()}</span> => ${DEFAULT_PREFIX}${
                route?.path || ""
              } <pre>${route.description}</pre></li>`
          )
          .join("")
      )
      .join("")}
  </ul>
  `;
    res.send(HTML_STRUCT);
  }
}
