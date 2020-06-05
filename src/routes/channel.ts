import { Router } from "express";

import useController from "../controller/UseController";
import ChannelResource from "../resource/ChannelResource";

const channelController = useController(ChannelResource);

const routes = Router();

routes.get("/", channelController.index);
routes.get("/:id", channelController.show);
routes.post("/", channelController.store);
routes.put("/:id", channelController.update);
routes.delete("/:id", channelController.destroy);

export default routes;
