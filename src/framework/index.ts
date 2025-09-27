import { AppBootstrap } from "./AppBootstrap.js";
import http from "http";

const app = new AppBootstrap().start();

http.createServer(app).listen(8080, () => console.log("Hi"));
