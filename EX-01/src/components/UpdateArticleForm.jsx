import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function UpdateArticleForm() {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    content: "",
    journalistId: "",
    categoryId: "",
  });

  const fetchArticlesbyId = async (id) => {
    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((response) => {
        setForm(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // Fetch to prefill a form and update an existing article
  useEffect(() => {
    fetchArticlesbyId(id);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update article with axios
    axios
      .put(`http://localhost:5000/articles/${id}`, form)
      .then(() => {
        console.log("Article updated successfully");
      })
      .catch((error) => {
        console.error("Error updating article:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Article</h3>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <br />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <br />
      <input
        name="journalistId"
        value={form.journalistId}
        onChange={handleChange}
        placeholder="Journalist ID"
        required
      />
      <br />
      <input
        name="categoryId"
        value={form.categoryId}
        onChange={handleChange}
        placeholder="Category ID"
        required
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}
