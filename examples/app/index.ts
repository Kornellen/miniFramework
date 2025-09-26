import express, { Express } from "express";
import http from "http";
import "reflect-metadata";
import "./controller/User.controller";
import { AppControllers, router } from "@miniframework/common";

export class App {
  private app: Express = express();
  private port: number = 8080;
  public bootstrap(): void {
    this.app.use("/api/", router);

    console.log("Controllers:");
    AppControllers.forEach((controller: any) => {
      console.log("   📄 " + controller.name);
    });
    console.log("--------------------------------");

    http.createServer(this.app).listen(this.port, () => {
      console.log("App is Working");
    });
  }
}

new App().bootstrap();
