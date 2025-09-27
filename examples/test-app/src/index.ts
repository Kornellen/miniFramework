import { AppBootstrap } from "@miniframework/core";
import "./controllers/index.js";

const app = new AppBootstrap().start();
app.listen(8080, () => console.log(`App is working`));
