// src/components/NewsItem.jsx
import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { title, description, url, urlToImage } = this.props.article;
    return (
      <div className="card mb-3">
        <img src={urlToImage} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
