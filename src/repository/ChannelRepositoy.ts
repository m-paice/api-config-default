import BaseRepository from "./BaseRepository";

import ChannelModel, { Channels } from "../model/channels";

class ChannelRepository extends BaseRepository<Channels> {
    constructor() {
        super(ChannelModel);
    }
}

export default new ChannelRepository();
