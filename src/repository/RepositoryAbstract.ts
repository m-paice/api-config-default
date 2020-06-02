import { Model, FindOptions, CreateOptions, UpdateOptions } from "sequelize";

abstract class BaseRepositoryAbstract<T> {
    abstract async findMany(options: FindOptions): Promise<Model<T>[]>;

    abstract async findById(id: string, options: FindOptions): Promise<Model<T>>;

    abstract async findOne(options: FindOptions): Promise<Model<T>>;

    abstract async create(data: T, options: CreateOptions): Promise<Model<T>>;

    abstract async updateById(id: string, data: T, options: UpdateOptions): Promise<[number, Model<T>[]]>;

    abstract async destroyById(id: string): Promise<number>;
}

export default BaseRepositoryAbstract;
