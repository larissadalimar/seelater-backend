import Joi from "joi";
import { updateContent } from "../utils/protocols";


export const updateContentSchema = Joi.object<updateContent>({
    title: Joi.string().min(3),
    comment: Joi.string(),
    status: Joi.string().min(4)
});