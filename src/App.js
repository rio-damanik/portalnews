// src/App.js
import React, { Component } from "react";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";
import "./App.css";

class App extends Component {
  state = {
    articles: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = (query = "") => {
    const apiKey = "13565b3eae304232ba7e66d4499ac7e3";
    const url = query ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}` : `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data.articles });
      })
      .catch((error) => console.error("Error fetching the news:", error));
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
    this.fetchNews(query);
  };

  render() {
    return (
      <div className="App container">
        <h1 className="my-4">Indonesian News Portal</h1>
        <SearchBar onSearch={this.handleSearch} />
        <NewsList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
