import { AppControllers, Controller, Route } from "../../decorators/index.js";
import { DEFAULT_PATH } from "../../AppBootstrap.js";
import { Request, Response } from "express";
import { RouteType } from "types/index.js";

@Controller("/status")
export class Documentation {
  @Route({ method: "get", path: "" })
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
              `<li>${route?.method.toUpperCase()} => ${DEFAULT_PATH}${
                route?.path || ""
              }</li>`
          )
          .join("")
      )
      .join("")}
  </ul>
  `;
    res.send(HTML_STRUCT);
  }
}
