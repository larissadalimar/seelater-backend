import { NextFunction, Request, Response } from "express";
import { contentRepository } from "../repositories/content.repository.js";

export default async function verifyContentExist(req: Request, res: Response, next: NextFunction){

    const id = Number(req.params.id);

    try {

        const contentExist = await contentRepository.getOne(id);
        if(!contentExist.rowCount) res.sendStatus(404);

    } catch (error) {
        res.status(500).send(error.message);
    }

    next();
}