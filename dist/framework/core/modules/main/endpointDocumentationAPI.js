var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AppControllers, Controller, Route, } from "../../../common/decorators/index.js";
import { DEFAULT_PREFIX } from "../../AppBootstrap.js";
let Documentation = class Documentation {
    generateDocumentation(req, res) {
        const routes = [];
        AppControllers.forEach((controller) => routes.push(Reflect.getMetadata("Controller:Routes", controller)));
        const HTML_STRUCT = `
  <ul>
    ${routes
            .map((controllerRoutes) => controllerRoutes
            .map((route) => `<li><span>${route?.method.toUpperCase()}</span> => ${DEFAULT_PREFIX}${route?.path || ""} <pre>${route.description}</pre></li>`)
            .join(""))
            .join("")}
  </ul>
  `;
        res.send(HTML_STRUCT);
    }
};
__decorate([
    Route({ method: "get", path: "", description: "Returns all Endpoints" })
], Documentation.prototype, "generateDocumentation", null);
Documentation = __decorate([
    Controller("/status")
], Documentation);
export { Documentation };
//# sourceMappingURL=endpointDocumentationAPI.js.map