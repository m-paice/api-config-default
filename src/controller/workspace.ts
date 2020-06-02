import { Request, Response } from "express";

import WorkspaceResource from "../resource/WorkspaceResource";

export const index = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response = await WorkspaceResource.findMany();

        return res.json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const show = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
        const response = await WorkspaceResource.findById(id);

        return res.json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const store = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response = await WorkspaceResource.create(req.body);

        return res.json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
        const response = await WorkspaceResource.updateById(id, req.body);

        return res.json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const destroy = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
        await WorkspaceResource.destroyById(id);

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json(error);
    }
};
