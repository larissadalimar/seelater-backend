import { createContent, updateContent } from "../utils/protocols";
import prisma from "../database/db.js";
import { Content } from "@prisma/client";

async function saveContent(content: createContent, userId: number): Promise<Content> {

    return prisma.content.create({
        data: {
            ...content,
            userId: userId
        } 
    });
}

async function getOne(id: number){
    
    return prisma.content.findFirst({
        where: {id: id}
    });
    
}

async function getAll(userId: number) {

    return prisma.content.findMany({
        where: {
            userId: userId
        }
    });
}

async function getContentsByStatus(status: string, userId: number) {
    
    return prisma.content.findMany({
        where: {
            status: status,
            userId: userId
        }
    });
    
}

async function updateContentBD(id: number , content: updateContent) {

    return await prisma.content.update({
        where: {id: id},
        data: content
    });
}

async function deleteContent(id:number) {
    
    return await prisma.content.delete({
        where: {id: id}
    });
}

export const contentRepository = {
    saveContent,
    getAll,
    getOne,
    updateContentBD,
    deleteContent,
    getContentsByStatus
};