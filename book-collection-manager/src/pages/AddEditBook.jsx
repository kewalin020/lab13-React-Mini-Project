// src/pages/AddEditBook.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import BookForm from "../components/BookForm";
import Loading from "../components/Loading";

function AddEditBook({ isEditing = false }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBook, updateBook, getBookById } = useBookContext();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(isEditing);

  useEffect(() => {
    if (isEditing) {
      // จำลองการโหลดข้อมูล
      const timer = setTimeout(() => {
        const foundBook = getBookById(id);

        if (foundBook) {
          setBook(foundBook);
        } else {
          // ถ้าไม่พบหนังสือ ให้นำทางกลับไปยังหน้ารายการหนังสือ
          navigate("/books", { replace: true });
        }

        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [id, isEditing, getBookById, navigate]);

  const handleSubmit = (bookData) => {
    if (isEditing) {
      updateBook(id, bookData);
      navigate(`/books/${id}`);
    } else {
      const newBook = addBook(bookData);
      navigate(`/books/${newBook.id}`);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="add-edit-book-page">
      <div className="page-header">
        <h1>{isEditing ? "แก้ไขหนังสือ" : "เพิ่มหนังสือใหม่"}</h1>
      </div>

      <div className="form-container">
        <BookForm book={book} onSubmit={handleSubmit} isEditing={isEditing} />
      </div>
    </div>
  );
}

export default AddEditBook;
