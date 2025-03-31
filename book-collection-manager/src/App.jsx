import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ListBooks from "./pages/ListBooks";
import BookDetail from "./pages/BookDetail";
import AddEditBook from "./pages/AddEditBook";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<ListBooks />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/books/add" element={<AddEditBook />} />
            <Route path="/books/edit/:id" element={<AddEditBook isEditing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
