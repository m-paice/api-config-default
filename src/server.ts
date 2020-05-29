import * as express from "express";
import * as dotEnv from "dotenv";
import * as bodyParser from "body-parser";

import routes from "./routes";

dotEnv.config();

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.get("/", (req, res) => res.send("<h1> Welcome API digisac internal chat </h1>"));

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
