import { Request, Response } from "express";
import { contentService } from "../services/contents.service.js";
import { createContent, updateContent } from "../utils/protocols.js";


export async function saveContent(req: Request, res: Response) {

    const content = req.body as createContent;

    try {
        
        await contentService.saveContent(content);

        res.sendStatus(201);

    } catch (error) {
        
        res.status(500).send(error.message);
    }
}


export async function getOne(req: Request, res: Response) {

    const id = Number (req.params.id);
   
   try {
    
    const content = await contentService.getOne(id);

    res.send(content);

   } catch (error) {
    
    res.status(500).send(error.message);
   }
}


export async function getAll(req: Request, res: Response) {

   try {

    const contents = await contentService.getAll();

    res.send(contents);

   } catch (error) {
    
    res.status(500).send(error.message);
   }
}


export async function getContentsByStatus(req: Request, res: Response) {

    const status = req.params.status;
    
    try {

        const contents = await contentService.getContentsByStatus(status);
    
        res.send(contents);
    
       } catch (error) {
        
        res.status(500).send(error.message);
       }
}


export async function updateContentController(req: Request, res: Response) {
    
   const content = req.body as updateContent;
    const id = Number(req.params.id);
   try {
    
    const updatedContent = await contentService.updateContentService(id, content);

    return res.send(updatedContent);

   } catch (error) {
    res.status(500).send(error.message);
   }
}

export async function deleteContent(req: Request, res: Response) {
    
    const id = Number(req.params.id);

    try {

        const deletedContent = await contentService.deleteContent(id);

        if(deletedContent) res.sendStatus(200);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}
