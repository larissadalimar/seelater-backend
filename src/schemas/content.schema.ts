import Joi from 'joi';
import { createContent } from '../utils/protocols';

export const contentSchema = Joi.object<createContent>({
    title: Joi.string().min(3).required(),
    link: Joi.string().uri().required(),
    typeId: Joi.number().integer().required(),
    comment: Joi.string()
});