import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import './App.css'; // Import the CSS

const articles = [
  {
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    description: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties...",
  },
  {
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Sep 15, 2018",
    description: "Recreating the gridgit hdhhdhshahaha",
  },
];

const highlightKeyword = (text, keyword) => {
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <mark key={i} style={{ backgroundColor: 'yellow' }}>{part}</mark>
    ) : (
      part
    )
  );
};

export default function App() {
  const [query, setQuery] = useState('');
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      
      {/* LEFT: Article List */}
      <div className="left">
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}
        />
        <p><strong>{filteredArticles.length} posts</strong> were found.</p>

        {filteredArticles.map((article, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <h3>{highlightKeyword(article.title, query)}</h3>
            <small>{article.date}</small>
            <p>{highlightKeyword(article.description, query)}</p>
          </div>
        ))}
      </div>

      {/* RIGHT: Author Info */}
      <div className="right">
        <div className="author-info">
          <p>
          <strong>BitsofCode . </strong>
            Articles on Frontend
            Development. All articles are written by
            <u>Ire Aderinokun</u>, Frontend Developer and
            User Interface Designer.
          </p>
        </div>

        <div className="bottom-row">
          <div className="follow-box">
            <FaTwitter color="white" />
            <span>Follow @ireaderinokun</span>
          </div>
          <div className="followers-box">
            19.1K followers
          </div>
        </div>
      </div>
    </div>
  );
}
