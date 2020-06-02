import BaseRepository from "./BaseRepository";

import WorkspaceModel, { Workspace } from "../model/workspace";

class WorkspaceRepository extends BaseRepository<Workspace> {
    constructor() {
        super(WorkspaceModel);
    }
}

export default new WorkspaceRepository();
