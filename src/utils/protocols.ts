import { User } from "@prisma/client";

export type Content = {
    id: number,
    title: string,
    link: string,
    typeId: number,
    comment: string,
    status: string
};

export type createContent = Omit<Content, 'id' | 'status'>;

export type createUser = Omit<User, 'id'>;

export type loginUser = Omit<User, 'id' | 'username'>;

export type updateContent = {
    title?: string
    comment?: string,
    status?: string
};

export type Type = {
    id: number,
    name: string
};

export type Label = {
    id: number,
    name: string
};

export type createUserForm = {
    email: string,
    password: string,
    confirm_email: string,
    confirm_password: string,
    username: string
};