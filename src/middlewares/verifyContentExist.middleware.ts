import { NextFunction, Request, Response } from "express";
import { contentRepository } from "../repositories/contents.repository.js";

export default async function verifyContentExist(req: Request, res: Response, next: NextFunction){

    const id = Number(req.params.id);

    try {

        const contentExist = await contentRepository.getOne(id);
        if(!contentExist) return res.sendStatus(404);

    } catch (error) {
        return res.status(500).send(error.message);
    }

    next();
}