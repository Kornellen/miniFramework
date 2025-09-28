import { FileHandler } from "./FileHandler.js";
import { Express } from "express";
import https from "https";
import http, { Server } from "http";
import { WebSocketServer as WSS } from "ws";
import { EnvironmentManager } from "./EnvironmentManager.js";
import { TypeGuard } from "../../../common/index.js";

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
export class WebServer {
  public static HTTPServer(app: Express, port: number): Server {
    return http
      .createServer(app)
      .listen(port, () =>
        console.log(`🚀 HTTP server running on http://localhost:${port}`)
      );
  }

  public static HTTPSServer(app: Express, port: number): Server {
    try {
      const key = FileHandler.getFile(EnvironmentManager.getEnv("SSL_KEY"));
      const cert = FileHandler.getFile(EnvironmentManager.getEnv("SSL_CERT"));

      if (TypeGuard(key, "undefined") || TypeGuard(cert, "undefined")) {
        throw new Error();
      }

      return https
        .createServer({ cert, key }, app)
        .listen(port, () =>
          console.log(`🚀 HTTPS server running on: https://localhost:${port}`)
        );
    } catch (error) {
      console.error("HTTPS Server Cannot be initialized");
      console.warn("Initializing HTTP Server Instead");
      console.log("Check your environment variables!");
      return this.HTTPServer(app, port - 1);
    }
  }

  public static WebSocketServer(app: Express, port: number): Server {
    const server = http.createServer(app);
    const wss = new WSS({ server });

    wss.on("connection", (socket) => {
      console.log("WebSocket Client Connected");
      socket.send("Hello");
    });
    return server.listen(port, () =>
      console.log(`🚀 Web Socket Server running on: ws://localhost:${port}`)
    );
  }
}
