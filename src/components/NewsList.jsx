// src/components/NewsList.jsx
import React, { Component } from "react";
import NewsItem from "./NewsItem";

class NewsList extends Component {
  render() {
    return (
      <div className="news-list">
        {this.props.articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </div>
    );
  }
}

export default NewsList;
