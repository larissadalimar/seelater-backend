import { Router } from "express";
import { deleteContent, getAll, getContentsByStatus, getOne, saveContent, updateContentController } from "../controllers/contents.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import contentValidation from "../middlewares/contentValidation.middleware.js";
import validOwnership from "../middlewares/ownership.middleware.js";
import updateContentMiddleware from "../middlewares/updateContent.middleware.js";
import verifyContentExist from "../middlewares/verifyContentExist.middleware.js";

const contentsRouter = Router();

contentsRouter.all("/*", authMiddleware)
.get("/", getAll)
.get('/:id', verifyContentExist, validOwnership, getOne)
.get('/status/:status', getContentsByStatus)
.post('/', contentValidation, saveContent)
.put('/:id', verifyContentExist, validOwnership, updateContentMiddleware, updateContentController)
.delete('/:id', verifyContentExist, validOwnership, deleteContent);

export default contentsRouter;