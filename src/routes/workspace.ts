import { Router } from "express";

import * as workspace from "../controller/workspace";

const routes = Router();

routes.get("/", workspace.index);
routes.post("/", workspace.store);
routes.put("/:id", workspace.update);
routes.delete("/:id", workspace.destroy);

export default routes;
