import connectionDB from "../database/db.js";
import { createContent, updateContent } from "../utils/protocols";

async function saveContent(content: createContent, createdAt: Date) {
    
    return await connectionDB.query(`INSERT INTO contents (name, link, "typeShow", "createdAt", "updatedAt", comment) VALUES ($1, $2, $3, $4, $5, $6)`, 
    [content.name, content.link, content.typeShow, createdAt, createdAt, content.comment]);
}

async function getOne(id: number) {
    
    return await connectionDB.query("SELECT * FROM contents WHERE id=$1", [id]);
}

async function getAll() {

    return await connectionDB.query("SELECT * FROM contents ORDER BY id DESC;"); 
}

async function getContentsByStatus(status: string) {
    
    return await connectionDB.query(`SELECT * FROM contents WHERE "statusConsume"= $1;`, [status]);
}

async function updateContentBD(id: number , content: updateContent, updatedAt: Date) {

    let query = `UPDATE contents SET "updatedAt"=$1 `;

    if(content.comment && content.status && content.name) return await connectionDB.query(query += `, comment=$2, "statusConsume"=$3, name=$4 WHERE id=$5`, 
    [updatedAt, content.comment, content.status, content.name, id]);

    if(content.status && content.name) return await connectionDB.query(query += `,"statusConsume"=$2, name=$3 WHERE id=$4`, 
    [updatedAt, content.status, content.name, id]);

    if(content.status && content.comment) return await connectionDB.query(query += `, comment=$2, "statusConsume"=$3 WHERE id=$4`, 
    [updatedAt, content.comment, content.status, id]);

    if(content.comment && content.name) return await connectionDB.query(query += `, comment=$2, name=$3 WHERE id=$4`, 
    [updatedAt, content.comment, content.name, id]);

    if(content.name) return await connectionDB.query(query += `, name=$2 WHERE id=$3`, 
    [updatedAt, content.name, id]);

    if(content.comment) return await connectionDB.query(query += `, comment=$2 WHERE id=$3`, 
    [updatedAt, content.comment, id]);

    if(content.status) return await connectionDB.query(query += `, status=$2 WHERE id=$3`, 
    [updatedAt, content.status, id]);
}

async function deleteContent(id:number) {
    
    return await connectionDB.query("DELETE contents WHERE id=$1", [id]);
}

export const contentRepository = {
    saveContent,
    getAll,
    getOne,
    updateContentBD,
    deleteContent,
    getContentsByStatus
};