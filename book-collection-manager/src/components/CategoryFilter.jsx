// src/components/CategoryFilter.jsx
import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">กรองตามหมวดหมู่:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === "all" ? "ทั้งหมด" : category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
