// src/components/BookCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book, onDelete }) {
  const defaultCoverUrl = "/images/default-book-cover.png";

  return (
    <div className="book-card">
      <div className="book-cover">
        <img
          src={book.cover || defaultCoverUrl}
          alt={`${book.title} cover`}
          onError={(e) => {
            e.target.src = defaultCoverUrl;
          }}
        />
      </div>

      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">โดย {book.author}</p>
        <p className="category">{book.category}</p>
        <p className="status">สถานะ: {book.status}</p>
        <div className="rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < book.rating ? "filled" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="book-actions">
        <Link to={`/books/${book.id}`} className="btn btn-view">
          ดูรายละเอียด
        </Link>
        <Link to={`/books/edit/${book.id}`} className="btn btn-edit">
          แก้ไข
        </Link>
        <button onClick={() => onDelete(book.id)} className="btn btn-delete">
          ลบ
        </button>
      </div>
    </div>
  );
}

export default BookCard;
