// src/components/SearchBar.jsx
import React, { Component } from "react";

class SearchBar extends Component {
  handleSearch = (event) => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search news..." onChange={this.handleSearch} />
      </div>
    );
  }
}

export default SearchBar;
