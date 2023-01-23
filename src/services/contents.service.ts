import { contentRepository } from "../repositories/content.repository.js";
import { createContent, updateContent } from "../utils/protocols";


async function saveContent(content: createContent) {

    const createdAt = new Date();
    return await contentRepository.saveContent(content, createdAt);
}


async function getOne(id: number) {
   
    return (await contentRepository.getOne(id)).rows[0];
}


async function getAll() {

    return (await contentRepository.getAll()).rows;
}


async function getContentsByStatus(status: string) {
    
    return (await contentRepository.getContentsByStatus(status)).rows;
}


async function updateContentService(id: number , content: updateContent) {
    
    const updatedAt = new Date();
    return await contentRepository.updateContentBD(id, content, updatedAt);
}

async function deleteContent(id:number) {
    
    return await contentRepository.deleteContent(id);
}

export const contentService = {
    saveContent,
    getAll,
    getOne,
    updateContentService,
    getContentsByStatus,
    deleteContent
};