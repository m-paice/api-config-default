import { Request, Response } from "express";
import Workspace from "../model/workspace";

export const index = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response = await Workspace.findAll({});

        return res.json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const store = async (req: Request, res: Response): Promise<Response> => {
    const response = await Workspace.create(req.body);

    return res.json(response);
};

export const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await Workspace.update(req.body, {
        where: {
            id,
        },
    });

    const response = await Workspace.findByPk(id);

    return res.json(response);
};

export const destroy = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await Workspace.destroy({
        where: {
            id,
        },
    });

    return res.sendStatus(200);
};
