import { User } from "@prisma/client";
import prisma from "../database/db.js";
import { createUser } from "../utils/protocols";


async function register(user: createUser){
    
    return await prisma.user.create({
        data: user
    });
}

async function findUserByEmail(email: string): Promise<User> {
    
    return await prisma.user.findFirst({
        where: {
            email
        }
    });
}

const authRepository = {
    register,
    findUserByEmail
};

export default authRepository;