import Joi from 'joi';
import { createContent } from '../utils/protocols';

export const contentSchema = Joi.object<createContent>({
    name: Joi.string().min(3).required(),
    link: Joi.string().uri().required(),
    typeShow: Joi.string().min(4).required(),
    comment: Joi.string()
});