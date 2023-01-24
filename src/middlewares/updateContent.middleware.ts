import { NextFunction, Request, Response } from "express";
import { updateContentSchema } from "../schemas/updateContent.schema.js";
import { updateContent } from "../utils/protocols";

export default function updateContentMiddleware(req: Request, res: Response, next: NextFunction){

    const content = req.body as updateContent;

    const { error } = updateContentSchema.validate(content, { abortEarly: false});

    if(error) {

        const errors = error.details.map(e => e.message);
        return res.status(400).send(errors);
    }

    next();
}