import { TypeGuard } from "../../../common/index.js";
/**
 * Allows easy access to Environment variables
 */
export class EnvironmentManager {
    static getEnv(key) {
        if (TypeGuard(process.env[key], "undefined")) {
            throw new Error(`Environment variable [${key}] value has not been set`);
        }
        return process.env[key] || "";
    }
}
//# sourceMappingURL=EnvironmentManager.js.map