import { contentRepository } from "../repositories/contents.repository.js";
import { Content, createContent, updateContent } from "../utils/protocols";


async function saveContent(content: createContent):Promise<Content> {

    return await contentRepository.saveContent(content);
}


async function getOne(id: number): Promise<Content> {
   
    return await contentRepository.getOne(id);
}


async function getAll():Promise<Content[]>{

    return await contentRepository.getAll();
}


async function getContentsByStatus(status: string):Promise<Content[]> {
    
    return await contentRepository.getContentsByStatus(status);
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