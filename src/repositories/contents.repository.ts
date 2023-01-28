import { createContent, updateContent } from "../utils/protocols";
import prisma from "../database/db.js";

async function saveContent(content: createContent) {

    return prisma.content.create({
        data: content 
    });
}

async function getOne(id: number){
    
    return prisma.content.findFirst({
        where: {id: id}
    });
    
}

async function getAll() {

    return prisma.content.findMany();
}

async function getContentsByStatus(status: string) {
    
    return prisma.content.findMany({
        where: {status: status}
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