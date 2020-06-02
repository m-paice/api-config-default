import { Model, CreateOptions, FindOptions, UpdateOptions, DestroyOptions } from "sequelize";

interface Data {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

type Resource<T> = typeof Model & {
    new (values?: object, options?: T): T;
};

class BaseRepository<T extends Data> {
    protected model: Resource<T>;

    constructor(model: Resource<T>) {
        this.model = model;
    }

    async findMany(options: FindOptions = {}): Promise<Model<T>[]> {
        return this.model.findAll(options);
    }

    async findById(id: string, options: FindOptions = {}): Promise<Model<T>> {
        return this.model.findByPk(id, options);
    }

    async findOne(options: FindOptions = {}): Promise<Model<T>> {
        return this.model.findOne(options);
    }

    async create(data: T, options: CreateOptions = {}): Promise<Model<T>> {
        return this.model.create(data, options);
    }

    async updateById(id: string, data: T, options: UpdateOptions): Promise<[number, Model<T>[]]> {
        return this.model.update(data, {
            where: {
                id,
            },
            returning: true,
            ...options,
        });
    }

    async destroyById(id: string): Promise<number> {
        return this.model.destroy({
            where: {
                id,
            },
        });
    }
}

export default BaseRepository;
