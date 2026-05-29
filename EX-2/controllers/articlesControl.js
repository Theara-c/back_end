
import { articles } from '../models/data.js' ;
const getAllArticles = (req, res) => {
  res.json(articles);
};

const getArticleById = (req, res) => {
  const id = Number(req.params.id);
  const item = articles.find((a) => a.id === id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
};


const createArticle = (req, res) => {
  const payload = req.body;
  const maxId = articles.reduce((m, a) => Math.max(m, a.id || 0), 0);
  const newItem = { id: maxId + 1, ...payload };
  articles.push(newItem);
  res.status(201).json(newItem);
};

const updateArticle = (req, res) => {
  const id = Number(req.params.id);
  const idx = articles.findIndex((a) => a.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  articles[idx] = { ...articles[idx], ...req.body, id };
  res.json(articles[idx]);
};

const deleteArticle = (req, res) => {
  const id = Number(req.params.id);
  const idx = articles.findIndex((a) => a.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const deleted = articles.splice(idx, 1)[0];
  res.json(deleted);
};
export default {
    getAllArticles, 
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}
