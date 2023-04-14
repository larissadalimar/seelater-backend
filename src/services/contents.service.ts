import { contentRepository } from "../repositories/contents.repository.js";
import { Content, createContent, updateContent } from "../utils/protocols";


async function saveContent(content: createContent, userId: number):Promise<Content> {

    return await contentRepository.saveContent(content, userId);
}


async function getOne(id: number): Promise<Content> {
   
    return await contentRepository.getOne(id);
}


async function getAll(userId: number):Promise<Content[]>{

    return await contentRepository.getAll(userId);
}


async function getContentsByStatus(status: string, userId: number):Promise<Content[]> {
    
    return await contentRepository.getContentsByStatus(status, userId);
}


async function updateContentService(id: number , content: updateContent): Promise<any>{

    return await contentRepository.updateContentBD(id, content);
   
}

async function deleteContent(id:number): Promise<any> {
    
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