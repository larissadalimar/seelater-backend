import { NextFunction, Request, Response } from "express";
import authRepository from "../repositories/auth.repository.js";
import { loginUser } from "../utils/protocols";
import bcrypt from 'bcrypt';

export default async function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    
    const user = req.body as loginUser;

    try {
        const userExist = await authRepository.findUserByEmail(user.email);

        if(!userExist) return res.status(400).send("Este usuário não existe");

        const passwordIsValid = bcrypt.compareSync(user.password, userExist.password);

        if(!passwordIsValid) return res.status(401).send("Senha ou usuário incorreto");

        res.locals.user = userExist;
        
        next();
    } catch (error) {

        return res.status(500).send(error.message);
    }

}