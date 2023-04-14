import Joi from "joi";
import { createUserForm } from "../utils/protocols";

export const SignUpSchema = Joi.object<createUserForm>({
    email: Joi.string().email().required(),
    confirm_email: Joi.string().valid(Joi.ref('email')).required(),
    password: Joi.string().min(6).max(10).required(),
    confirm_password: Joi.string().valid(Joi.ref('password')).required(),
    username: Joi.string().min(4).max(8).required()
});