import { FindOptions, CreateOptions, UpdateOptions } from "sequelize";
import RepositoryAbstract from "../repository/RepositoryAbstract";

class BaseResource<T> {
    protected repository: RepositoryAbstract<T>;

    constructor(repository: RepositoryAbstract<T>) {
        this.repository = repository;
    }

    getRepository(): RepositoryAbstract<T> {
        return this.repository;
    }

    findMany(options?: FindOptions): Promise<T[]> {
        return this.getRepository()
            .findMany(options)
            .then((response) => response)
            .catch((error) => error);
    }

    findById(id: string, options?: FindOptions): Promise<T> {
        return this.getRepository()
            .findById(id, options)
            .then((response) => response)
            .catch((error) => error);
    }

    findOne(options: FindOptions): Promise<T> {
        return this.getRepository()
            .findOne(options)
            .then((response) => response)
            .catch((error) => error);
    }

    create(data: T, options?: CreateOptions): Promise<T> {
        return this.getRepository()
            .create(data, options)
            .then((response) => response)
            .catch((error) => error);
    }

    updateById(id: string, data: T, options?: UpdateOptions): Promise<T> {
        return this.getRepository()
            .updateById(id, data, options)
            .then((response) => response)
            .catch((error) => error);
    }

    destroyById(id: string): Promise<number> {
        return this.getRepository()
            .destroyById(id)
            .then(() => 1)
            .catch((error) => error);
    }
}

export default BaseResource;
