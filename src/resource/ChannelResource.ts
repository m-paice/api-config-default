import BaseResource from "./BaseResource";
import ChannelRepository from "../repository/ChannelRepositoy";

import { Channels } from "../model/channels";

class ChannelResource extends BaseResource<Channels> {
    constructor() {
        super(ChannelRepository);
    }
}

export default new ChannelResource();
