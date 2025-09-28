import { Express } from "express";
import { Server } from "http";
/**
 * Contains supported Web Servers.
 *
 * `Supported Servers`:
 *  - HTTP
 *  - HTTPS
 *  - WebSocket
 *
 * Example usage:
 *
 * ```TypeScript
 * import { AppBootstrap } from "@miniframework/core"
 * import { WebServer } from "@miniframework/core/functions"
 *
 * const app = new AppBootstrap().start();
 * WebServer.HTTPServer(app, 8080);
 *
 * ```
 */
export declare class WebServer {
    static HTTPServer(app: Express, port: number): Server;
    static HTTPSServer(app: Express, port: number): Server;
    static WebSocketServer(app: Express, port: number): Server;
}
