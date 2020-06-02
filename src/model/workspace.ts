import { DataTypes, Model, BuildOptions } from "sequelize";
import sequelize from ".";

export interface Workspace extends Model {
    readonly id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export type WorkspaceStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Workspace;
};

const Workspace = <WorkspaceStatic>sequelize.define(
    "workspace",
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
        tableName: "workspace",
        timestamps: true,
    },
);

// Workspace.associations = () => {}

export default Workspace;
