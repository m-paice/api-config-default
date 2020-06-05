import { Router } from "express";

import useController from "../controller/UseController";
import WorkspaceResource from "../resource/WorkspaceResource";

const workspaceController = useController(WorkspaceResource);

const routes = Router();

routes.get("/", workspaceController.index);
routes.get("/:id", workspaceController.show);
routes.post("/", workspaceController.store);
routes.put("/:id", workspaceController.update);
routes.delete("/:id", workspaceController.destroy);

export default routes;
