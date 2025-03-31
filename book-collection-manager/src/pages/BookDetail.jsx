// src/pages/BookDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import { formatDate, translateReadingStatus } from "../utils/bookUtils";
import Loading from "../components/Loading";
import { DEFAULT_BOOK_COVER } from "../utils/constants";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById, deleteBook } = useBookContext();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ใช้ setTimeout เพื่อจำลองการโหลดข้อมูล
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
  }, [id, getBookById, navigate]);

  const handleDelete = () => {
    if (window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบหนังสือเล่มนี้?")) {
      deleteBook(id);
      navigate("/books");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!book) {
    return <div className="error-message">ไม่พบหนังสือที่ค้นหา</div>;
  }

  return (
    <div className="book-detail-page">
      <div className="book-detail-container">
        <div className="book-detail-header">
          <h1>{book.title}</h1>
          <div className="book-actions">
            <Link to={`/books/edit/${id}`} className="btn btn-edit">
              แก้ไข
            </Link>
            <button onClick={handleDelete} className="btn btn-delete">
              ลบ
            </button>
            <Link to="/books" className="btn btn-back">
              กลับ
            </Link>
          </div>
        </div>

        <div className="book-detail-content">
          <div className="book-cover-container">
            <img
              src={book.cover || DEFAULT_BOOK_COVER}
              alt={`${book.title} cover`}
              onError={(e) => {
                e.target.src = DEFAULT_BOOK_COVER;
              }}
              className="book-cover"
            />

            <div className="book-rating">
              <h3>คะแนน</h3>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={index < book.rating ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="book-info">
            <div className="info-row">
              <h3>ผู้แต่ง</h3>
              <p>{book.author}</p>
            </div>

            <div className="info-row">
              <h3>ปีที่พิมพ์</h3>
              <p>{book.year}</p>
            </div>

            <div className="info-row">
              <h3>หมวดหมู่</h3>
              <p>{book.category}</p>
            </div>

            <div className="info-row">
              <h3>สถานะการอ่าน</h3>
              <p className={`status-${book.status}`}>
                {translateReadingStatus(book.status)}
              </p>
            </div>

            <div className="info-row">
              <h3>วันที่เพิ่ม</h3>
              <p>{formatDate(book.dateAdded)}</p>
            </div>

            <div className="description-row">
              <h3>คำอธิบาย</h3>
              <p>{book.description || "ไม่มีคำอธิบาย"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
