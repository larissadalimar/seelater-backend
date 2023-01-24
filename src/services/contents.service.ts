import { contentRepository } from "../repositories/content.repository.js";
import { Content, createContent, updateContent } from "../utils/protocols";


async function saveContent(content: createContent):Promise<any> {

    const createdAt = new Date();
    return await contentRepository.saveContent(content, createdAt);
}


async function getOne(id: number): Promise<Content> {
   
    return (await contentRepository.getOne(id)).rows[0];
}


async function getAll():Promise<Content[]>{

    return (await contentRepository.getAll()).rows;
}


async function getContentsByStatus(status: string):Promise<Content[]> {
    
    return (await contentRepository.getContentsByStatus(status)).rows;
}


async function updateContentService(id: number , content: updateContent): Promise<any>{
    
    const updatedAt = new Date();

    return (await contentRepository.updateContentBD(id, content, updatedAt)).rowCount;
   
}

async function deleteContent(id:number): Promise<any> {
    
    return await (await contentRepository.deleteContent(id)).rowCount;
}

export const contentService = {
    saveContent,
    getAll,
    getOne,
    updateContentService,
    getContentsByStatus,
    deleteContent
};