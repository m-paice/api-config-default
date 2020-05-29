import { Sequelize } from "sequelize";

const sequelize = new Sequelize("internalchat.db", "postgres", "postgres", {
    dialect: "sqlite",
    storage: "data/internalchat.db",
    logging: true,
});

export default sequelize;
