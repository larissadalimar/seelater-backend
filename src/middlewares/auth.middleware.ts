import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { nextTick } from "process";


export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    
    const token = req.headers.authorization?.split[' '][1];

    if(!token) return res.status(401).send("Sem token");

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        res.locals.userId = decoded;
        console.log(decoded);
        next(); 

    } catch (error) {
        
        return res.status(500).send(error.message);
    }
    
}