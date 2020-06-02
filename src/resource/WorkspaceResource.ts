import BaseResource from "./BaseResource";
import WorkspaceRepository from "../repository/WorkspaceRepositoy";

import { Workspace } from "../model/workspace";

class WorkspaceResource extends BaseResource<Workspace> {
    constructor() {
        super(WorkspaceRepository);
    }
}

export default new WorkspaceResource();
