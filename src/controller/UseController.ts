import { Request, Response } from "express";

interface Methods<T> {
    findMany(): Promise<T[]>;
    findById(id: string): Promise<T>;
    create(data: T): Promise<T>;
    updateById(id: string, data: any): Promise<T>;
    destroyById(id: string): Promise<number>;
}

export default <T>(resource: Methods<T>) => {
    const index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const response = await resource.findMany();

            return res.json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    const show = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        try {
            const response = await resource.findById(id);

            return res.json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    const store = async (req: Request, res: Response): Promise<Response> => {
        try {
            const response = await resource.create(req.body);

            return res.json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    const update = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        try {
            const response = await resource.updateById(id, req.body);

            return res.json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    const destroy = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        try {
            await resource.destroyById(id);

            return res.sendStatus(200);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    return {
        index,
        show,
        store,
        update,
        destroy,
    };
};
