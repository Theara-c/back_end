import { journalists } from '../models/data.js';


const getAllJournalists = (req, res) => {
  res.json(journalists);
};

const getJournalistById = (req, res) => {
  const journalist = journalists.find((j) => j.id == req.params.id);
  if (!journalist)
    return res.status(404).json({ error: "Journalist not found" });
  res.json(journalist);
};

const createJournalist = (req, res) => {
  const newJournalist = { id: journalists.length + 1, ...req.body };
  journalists.push(newJournalist);
  res.status(201).json(newJournalist);
};

const updateJournalist = (req, res) => {
  const journalist = journalists.find((j) => j.id == req.params.id);
  if (!journalist)
    return res.status(404).json({ error: "Journalist not found" });
const { name, email } = req.body;
    if (name) journalist.name = name;
    if (email) journalist.email = email;
  res.json(journalist);
};

const deleteJournalist = (req, res) => {
  const index = journalists.findIndex((j) => j.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ error: "Journalist not found" });
  journalists.splice(index, 1);
  res.json({ message: "Journalist deleted" });
};
export default {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist
}

