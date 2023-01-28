
export type Content = {
    id: number,
    title: string,
    link: string,
    typeId: number,
    comment: string,
    status: string
};

export type createContent = Omit<Content, 'id' | 'status'>;

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