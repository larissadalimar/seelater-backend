import { createUser, createUserForm } from "../utils/protocols";
import bcrypt from 'bcrypt';
import authRepository from "../repositories/auth.repository.js";
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";

async function signUp(user: createUserForm): Promise<User> {
    
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    
    const newUser = {
        email: user.email,
        password: hashedPassword,
        username: user.username
    } as createUser;

    try {
        
        return await authRepository.register(newUser);

    } catch (error) {
        throw error;
    }
};

async function login(user: User): Promise<{ userId: number; token: string;}>{

    try {

        const token : string = jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY, {
            expiresIn: 86400
        });
        
        return {
            userId: user.id,
            token
        }

    } catch (error) {
        throw error;
    }
};

const authService = {
    signUp,
    login
};

export default authService;