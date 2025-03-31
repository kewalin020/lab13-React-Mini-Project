// src/pages/ListBooks.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import BookSearch from "../components/BookSearch";
import CategoryFilter from "../components/categoryFilter";
import useBooks from "../hooks/useBooks";

function ListBooks() {
  const {
    deleteBook,

    filterBooksByCategory,
    getAllCategories,
  } = useBooks();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ค้นหาและกรองหนังสือ
  const filteredBooks = filterBooksByCategory(selectedCategory).filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteBook = (id) => {
    if (window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบหนังสือเล่มนี้?")) {
      deleteBook(id);
    }
  };

  return (
    <div className="list-books-page">
      <div className="page-header">
        <h1>รายการหนังสือทั้งหมด</h1>
        <Link to="/books/add" className="btn btn-add">
          เพิ่มหนังสือใหม่
        </Link>
      </div>

      <div className="filters">
        <BookSearch onSearch={handleSearch} initialValue={searchQuery} />
        <CategoryFilter
          categories={getAllCategories()}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {filteredBooks.length === 0 ? (
        <div className="no-books">
          <p>ไม่พบหนังสือที่ตรงกับเงื่อนไขการค้นหา</p>
        </div>
      ) : (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onDelete={handleDeleteBook} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListBooks;
