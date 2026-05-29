
import { categories} from '../models/data.js';

const getAllCategories = (req, res) => {
  res.json(categories);
};

const getCategoryById = (req, res) => {
  const category = categories.find((c) => c.id == req.params.id);
  if (!category)
    return res.status(404).json({ error: "Category not found" });
  res.json(category);
};

const createCategory = (req, res) => {
  const newCategory = { id: categories.length + 1, ...req.body };
  categories.push(newCategory);
  res.status(201).json(newCategory);
};

const updateCategory = (req, res) => {
  const category = categories.find((c) => c.id == req.params.id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  const { name } = req.body;
  if ( name ) category.name = name;
  res.json(category);
};

const deleteCategory = (req, res) => {
  const index = categories.findIndex((c) => c.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ error: "Category not found" });
  categories.splice(index, 1);
  res.json({ message: "Category deleted" });
};
export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}