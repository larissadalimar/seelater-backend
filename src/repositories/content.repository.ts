import connectionDB from "../database/db.js";
import { createContent, updateContent } from "../utils/protocols";

async function saveContent(content: createContent, createdAt: Date) {
    
    return await connectionDB.query(`INSERT INTO contents (name, link, "typeShow", "createdAt", "updatedAt", comment) VALUES ($1, $2, $3, $4, $5, $6);`, 
    [content.name, content.link, content.typeShow, createdAt, createdAt, content.comment]);
}

async function getOne(id: number) {
    
    return await connectionDB.query("SELECT * FROM contents WHERE id=$1;", [id]);
}

async function getAll() {

    return await connectionDB.query("SELECT * FROM contents ORDER BY id DESC;"); 
}

async function getContentsByStatus(status: string) {
    
    return await connectionDB.query(`SELECT * FROM contents WHERE "statusConsume"= $1;`, [status]);
}

async function updateContentBD(id: number , content: updateContent, updatedAt: Date) {

    let query = `UPDATE contents SET "updatedAt"=$1 `;

    if(content.comment) query +=`, comment='${content.comment}'`;
    if(content.name) query += `, name=${content.name}`;
    if(content.status) query += `, "statusConsume"='${content.status}'`;
    query += ` WHERE id=$2;`

    return await connectionDB.query(query, [updatedAt, id]);
}

async function deleteContent(id:number) {
    
    return await connectionDB.query("DELETE FROM contents WHERE id=$1;", [id]);
}

export const contentRepository = {
    saveContent,
    getAll,
    getOne,
    updateContentBD,
    deleteContent,
    getContentsByStatus
};