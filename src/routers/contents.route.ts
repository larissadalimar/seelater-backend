import { Router } from "express";
import { deleteContent, getAll, getContentsByStatus, getOne, saveContent, updateContentController } from "../controllers/contents.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import contentValidation from "../middlewares/contentValidation.middleware.js";
import updateContentMiddleware from "../middlewares/updateContent.middleware.js";
import verifyContentExist from "../middlewares/verifyContentExist.middleware.js";

const contentsRouter = Router();

contentsRouter.all("/*", authMiddleware)
.get("/", getAll)
.get('/:id', verifyContentExist, getOne)
.get('/status/:status', getContentsByStatus)
.post('/', contentValidation, saveContent)
.put('/:id', verifyContentExist, updateContentMiddleware, updateContentController)
.delete('/:id', verifyContentExist, deleteContent);

export default contentsRouter;