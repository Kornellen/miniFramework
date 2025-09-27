import "reflect-metadata";
export const AppRoutes = [];
export function Route({ method, path, middlewares, }) {
    return function (target, propertyKey, descriptor) {
        const controllerRoutes = [];
        AppRoutes.push({
            controller: target.constructor.name,
            route: {
                method,
                path,
                handler: descriptor.value,
                middlewares: middlewares,
            },
        });
        controllerRoutes.push({
            method,
            path,
            handler: descriptor.value,
            middlewares: middlewares,
        });
        Reflect.defineMetadata("Controller:Routes", controllerRoutes, target.constructor);
    };
}
//# sourceMappingURL=Route.js.map