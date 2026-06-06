import { useEffect, useState } from 'react';
import axios from 'axios';
export default function ArticleFilter() {
  const [articles, setArticles] = useState([]);
  // Fetch all articles when component mounts
  const [journalists, setJournalists] = useState([]);
  const [categories, setCategories] = useState([]);

  const [ selectCategoryId, setSelectCategoryId] = useState();
  const [ selectJournalId, setSelectJournalId] = useState();
  useEffect(() => {
    fetchArticles();
    fetchJournalists();
    fetchCategories();
  }, []);

  const fetchArticles = async () => {
    // Fetch articles from the API
    axios.get('http://localhost:5000/articles')
      .then((res) => { setArticles(res.data); })
      .catch((error) => { console.log(error); });
  };


  const fetchJournalists = async () => {
    // Fetch journalists from the API
    axios.get( `http://localhost:5000/journalists`)
    .then((res) => { setJournalists(res.data)})
    .catch((error) => { console.log(error)})
  };

  const fetchCategories = async () => {
    // Fetch categories from the API
    axios.get( `http://localhost:5000/categories`)
    .then((res) => { setCategories(res.data)})
    .catch((error) => { console.log(error)})
  }
  const filterArticles = () => {
    if ( selectCategoryId) {
      axios.get(`http://localhost:5000/journalist:${selectCategoryId}/articles`)
      .then((response) => {
        setArticles(response.data)
        .catch((error) => {
          console.log(error)
        })
      })
    } else if ( selectJournalId) {
       axios.get(`http://localhost:5000/journalist:${selectJournalId}/articles`)
      .then((response) => {
        setArticles(response.data)
        .catch((error) => {
          console.log(error)
        })
      })
    }
  }

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <label htmlFor="journalistFilter">Filter by Journalist:</label>
        <select id="journalistFilter" onChange={(e) => setSelectJournalId(e.target.value)}>
          <option value="">All Journalists</option>
          {/* Options for journalists */}
          {journalists.map((item) => {
            <option value = {item.id}>{item.id}</option>
          })}
        </select>

        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" onChange={(e) => setSelectCategoryId(e.target.value)}>
          <option value="">All Categories</option>
          {/* Options for categories */}
         { categories.map( (item) => {
              <option value = {item.id}>{item.id}</option>
          })}
        </select>

        <button
          onClick={() => {
            // Logic to apply filters
            filterArticles()
          }}
        >Apply Filters</button>
        <button
          onClick={() => {
            // Logic to reset filters

          }}
        >Reset Filters</button>
      </div>

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}