//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//
import { pool } from "../utils/database.js";
// Get all articles
export async function getArticles() {
    // TODO
    const [rows] = await pool.query (`SELECT a.id, title, content, j.name, category FROM ARTICLES a 
        join journalist j on j.id = a.id `);
    return rows;
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    const [rows] = await pool.query(`SELECT a.id, title, content, j.name, category FROM ARTICLES a
        join journalist j on j.id = a.id  WHERE a.id = ?`, [id]);
    return rows[0];
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const [result] = await pool.query(`INSERT INTO ARTICLES (title, content) VALUES (?, ?)`, [article.title, article.content]);
    return { id: result.insertId, ...article };
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const [result] = await pool.query(`UPDATE ARTICLES SET title = ?, content = ? WHERE id = ?`, [updatedData.title, updatedData.content, id]);
    return { id, ...updatedData };
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    const [result] = await pool.query(`DELETE FROM ARTICLES WHERE id = ?`, [id]);
    return result.affectedRows > 0;
}
