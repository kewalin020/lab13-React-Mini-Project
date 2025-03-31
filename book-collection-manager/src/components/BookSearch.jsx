// src/components/BookSearch.jsx
import React, { useState } from "react";

function BookSearch({ onSearch, initialValue = "" }) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // ค้นหาแบบทันทีขณะที่พิมพ์
  };

  return (
    <div className="book-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ค้นหาหนังสือ..."
          value={searchQuery}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
    </div>
  );
}

export default BookSearch;
