import { NextFunction, Request, Response } from "express";
import { contentRepository } from "../repositories/contents.repository.js";

export default async function validOwnership(req: Request, res: Response, next: NextFunction) {
    
    const contentId = Number(req.params.id);
    const userId = res.locals.userId;

    try {

        const content = await contentRepository.getOne(contentId);

        if(content.userId !== userId) return res.sendStatus(401);
        
        next();

    } catch (error) {
        
        return res.status(500).send(error.message);
    }
}