
export type createContent = {
    name: string,
    link: string,
    typeShow: string
    comment?: string
};

export type updateContent = {
    name?: string
    comment?: string,
    status?: string
};

export type Content = {
    id: number,
    name: string,
    link: string,
    typeShow: string
    comment: string,
    statusConsume: string,
    createdAt: Date,
    updatedAt: Date 
};