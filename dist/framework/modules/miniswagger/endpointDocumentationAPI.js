var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AppControllers, Controller, Route } from "../../decorators/index.js";
import { DEFAULT_PATH } from "../../AppBootstrap.js";
let Documentation = class Documentation {
    generateDocumentation(req, res) {
        const routes = [];
        AppControllers.forEach((controller) => routes.push(Reflect.getMetadata("Controller:Routes", controller)));
        console.log(routes);
        const HTML_STRUCT = `
  <ul>
    ${routes.map((controllerRoutes) => controllerRoutes.map((route) => `<li>${DEFAULT_PATH}${route?.path || ""}</li>`))}
  </ul>
  `;
        console.log(HTML_STRUCT);
        res.send(HTML_STRUCT);
    }
};
__decorate([
    Route({ method: "get", path: "" })
], Documentation.prototype, "generateDocumentation", null);
Documentation = __decorate([
    Controller("/status")
], Documentation);
export { Documentation };
//# sourceMappingURL=endpointDocumentationAPI.js.map