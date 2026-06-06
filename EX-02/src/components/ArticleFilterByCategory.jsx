import { useEffect, useState } from "react";
import axios from "axios";
export default function ArticleFilterByCategory() {
  const [articles, setArticles] = useState([]);
  const [id, setId] = useState();
  // Fetch all articles when component mounts
  useEffect(() => {
    fetchArticles();
  }, []);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchArticles = async () => {
    // Fetch articles from the API
    
  };

  const fetchCategories = async () => {
    // Fetch categories from the API
    axios
      .get(`http://localhost:5000/categories`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" onChange={(e) => setId(e.target.value)}>
          <option value="">All Categories</option>
          {/* Options for categories */}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button
          onClick={() => {
            // Logic to apply filters
            setArticles(() => {
              articles.filter((item) => {
                item.categoryId === id;
              });
            });
          }}
        >
          Apply Filters
        </button>
        <button
          onClick={() => {
            // Logic to reset filters
            axios
              .get("http://localhost:5000/categories")
              .then((response) => {
                setArticles(response.data);
              })
              .catch((error) => {
                console.error("Error fetching categories:", error);
              });
          }}
        >
          Reset Filters
        </button>
      </div>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>
              By Journalist #{article.journalistId} | Category #
              {article.categoryId}
            </small>
            <br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
