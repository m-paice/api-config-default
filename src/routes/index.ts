import { Router } from "express";

import workspace from "./workspace";
import channel from "./channel";

const routes = Router();

routes.use("/workspace", workspace);
routes.use("/channel", channel);

export default routes;
