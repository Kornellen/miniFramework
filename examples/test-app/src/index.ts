import { AppBootstrap } from "@miniframework/core";
import { WebServer } from "@miniframework/core/functions";
import "./middlewares/index.js";
import "./controllers/index.js";

function main() {
  try {
    const app = new AppBootstrap().start();

    //  !!! If theres no SSL_KEY or SSL_CERT variable in .env file HTTP Server Will be initialized on port: HTTPS Port - 1 eg. 8080 - 1 = 8079  !!!
    WebServer.HTTPSServer(app, 8080);
  } catch (error) {
    console.error(error);
  }
}

main();
