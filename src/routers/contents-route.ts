import { Router } from "express";
import { deleteContent, getAll, getContentsByStatus, getOne, saveContent, updateContentController } from "../controllers/contents.controller.js";
import contentValidation from "../middlewares/contentValidation.middleware.js";
import updateContentMiddleware from "../middlewares/updateContent.middleware.js";

const contentsRouter = Router();

contentsRouter.get("/", getAll)
.get('/:id', getOne)
.get('/status/:status', getContentsByStatus)
.post('/', contentValidation, saveContent)
.put('/:id', updateContentMiddleware, updateContentController)
.delete('/:id', deleteContent);

export default contentsRouter;