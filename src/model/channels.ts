import { DataTypes, Model, BuildOptions } from "sequelize";
import sequelize from ".";

export interface Channels extends Model {
    readonly id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ChannelsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Channels;
};

const Channels = <ChannelsStatic>sequelize.define(
    "Channels",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "channels",
        timestamps: true,
    },
);

// Channels.associations = () => {}

export default Channels;
