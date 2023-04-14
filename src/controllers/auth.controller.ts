import { Request, Response } from "express";
import { createUserForm } from "../utils/protocols";
import { User } from "@prisma/client";
import authService from "../services/auth.service.js";


export async function signUp(req: Request, res: Response){
  
    const user = req.body as createUserForm;

    try {
        
        await authService.signUp(user);

        res.sendStatus(201);

    } catch (error) {

        res.status(500).send(error.message);
    }
    
};

export async function login(req: Request, res: Response) {
    
    const user = res.locals.user as User;
    
    try {

        const {userId, token} = await authService.login(user);

        res.status(200).send({userId: userId, token: token});

    } catch (error) {

        res.status(500).send(error.message);
    }
};
