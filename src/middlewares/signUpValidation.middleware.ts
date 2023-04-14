import { NextFunction, Request, Response } from "express";
import authRepository from "../repositories/auth.repository.js";
import { SignUpSchema } from "../schemas/signUp.schema.js";
import { createUserForm } from "../utils/protocols";

export default async function signUpMiddleware(req: Request, res: Response, next: NextFunction){


    const user = req.body as createUserForm;

    const { error } = SignUpSchema.validate(user, {abortEarly: false});

        if(error){
            const erros = error.details.map((e) => e.message);
            return res.status(422).send(erros);
        }
        

    try {

        const userExists = await authRepository.findUserByEmail(user.email);

        if(userExists) return res.status(409).send("Este usuário já existe");

        next();

    } catch (error) {
        
        return res.status(500).send(error.message);
    }

}