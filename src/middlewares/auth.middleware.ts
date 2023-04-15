import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    
    const token = req.headers.authorization?.replace('Bearer ', '');

    if(!token) return res.status(401).send("Sem token");

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decoded) return res.sendStatus(401);
        res.locals.userId = decoded;
        res.locals.userId = res.locals.userId.id;
        next(); 

    } catch (error) {
        
        return res.status(500).send(error.message);
    }
    
}