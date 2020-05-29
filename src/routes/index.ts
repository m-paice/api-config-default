import { Router } from "express";

import workspace from "./workspace";

const routes = Router();

routes.use("/workspace", workspace);

export default routes;
