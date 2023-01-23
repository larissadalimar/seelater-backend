import { NextFunction, Request, Response } from "express";
import { contentSchema } from "../schemas/content.schema.js";
import { createContent } from "../utils/protocols";

export default function contentValidation(req: Request, res: Response, next: NextFunction){

    const content = req.body as createContent;

    const { error } = contentSchema.validate(content, { abortEarly: false});

    if(error) return res.status(400).send(error.details.map(e => e.message));

    next();
}