// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import { calculateBookStats } from "../utils/bookUtils";
import BookCard from "../components/BookCard";

function HomePage() {
  const { books, deleteBook } = useBookContext();

  // คำนวณสถิติต่างๆ ของหนังสือ
  const stats = calculateBookStats(books);

  // หาหนังสือที่เพิ่มล่าสุด 3 รายการ
  const recentBooks = [...books]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>ยินดีต้อนรับสู่ Book Collection Manager</h1>
          <p>จัดการคอลเลกชันหนังสือของคุณอย่างง่ายดาย</p>
          <Link to="/books/add" className="btn btn-primary">
            เริ่มเพิ่มหนังสือ
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>สถิติคอลเลกชันของคุณ</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>หนังสือทั้งหมด</h3>
            <p className="stat-number">{stats.totalBooks}</p>
          </div>
          <div className="stat-card">
            <h3>หมวดหมู่</h3>
            <p className="stat-number">{stats.totalCategories}</p>
          </div>
          <div className="stat-card">
            <h3>อ่านแล้ว</h3>
            <p className="stat-number">{stats.readBooks}</p>
          </div>
          <div className="stat-card">
            <h3>กำลังอ่าน</h3>
            <p className="stat-number">{stats.readingBooks}</p>
          </div>
          <div className="stat-card">
            <h3>ยังไม่ได้อ่าน</h3>
            <p className="stat-number">{stats.toReadBooks}</p>
          </div>
          <div className="stat-card">
            <h3>คะแนนเฉลี่ย</h3>
            <p className="stat-number">{stats.averageRating} / 5</p>
          </div>
        </div>
      </section>

      {/* Recent Books Section */}
      <section className="recent-books">
        <div className="section-header">
          <h2>หนังสือที่เพิ่มล่าสุด</h2>
          <Link to="/books" className="view-all">
            ดูทั้งหมด
          </Link>
        </div>

        {recentBooks.length === 0 ? (
          <div className="no-books">
            <p>ยังไม่มีหนังสือในคอลเลกชัน</p>
            <Link to="/books/add" className="btn btn-primary">
              เพิ่มหนังสือเล่มแรก
            </Link>
          </div>
        ) : (
          <div className="books-grid">
            {recentBooks.map((book) => (
              <BookCard key={book.id} book={book} onDelete={deleteBook} />
            ))}
          </div>
        )}
      </section>

      {/* Call-to-action Section */}
      <section className="cta-section">
        <h2>เริ่มจัดการคอลเลกชันหนังสือของคุณวันนี้</h2>
        <p>เพิ่ม จัดการ และติดตามหนังสือของคุณได้อย่างง่ายดาย</p>
        <div className="cta-buttons">
          <Link to="/books" className="btn btn-secondary">
            ดูคอลเลกชัน
          </Link>
          <Link to="/books/add" className="btn btn-primary">
            เพิ่มหนังสือ
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
