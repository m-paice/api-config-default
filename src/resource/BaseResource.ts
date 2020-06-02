import { Model, FindOptions, CreateOptions, UpdateOptions } from "sequelize";
import RepositoryAbstract from "../repository/RepositoryAbstract";

class BaseResource<T> {
    protected repository: RepositoryAbstract<T>;

    constructor(repository: RepositoryAbstract<T>) {
        this.repository = repository;
    }

    getRepository(): RepositoryAbstract<T> {
        return this.repository;
    }

    findMany(options?: FindOptions): Promise<Model<T>[]> {
        return this.getRepository().findMany(options);
    }

    findById(id: string, options?: FindOptions): Promise<Model<T>> {
        return this.getRepository().findById(id, options);
    }

    findOne(options: FindOptions): Promise<Model<T>> {
        return this.getRepository().findOne(options);
    }

    create(data: T, options?: CreateOptions): Promise<Model<T>> {
        return this.getRepository().create(data, options);
    }

    updateById(id: string, data: T, options?: UpdateOptions): Promise<[number, Model<T>[]]> {
        return this.getRepository().updateById(id, data, options);
    }

    destroyById(id: string): Promise<number> {
        return this.getRepository().destroyById(id);
    }
}

export default BaseResource;
