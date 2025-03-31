// src/hooks/useBooks.js
import useLocalStorage from "./useLocalStorage";

function useBooks() {
  const [books, setBooks] = useLocalStorage("books", []);

  // เพิ่มหนังสือใหม่
  const addBook = (book) => {
    const newBook = {
      ...book,
      id: crypto.randomUUID(),
      dateAdded: new Date().toISOString(),
    };
    setBooks([...books, newBook]);
    return newBook;
  };

  // แก้ไขหนังสือที่มีอยู่
  const updateBook = (id, updatedBook) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };

  // ลบหนังสือ
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // ค้นหาหนังสือตาม ID
  const getBookById = (id) => {
    return books.find((book) => book.id === id);
  };

  // ค้นหาหนังสือตามชื่อ
  const searchBooks = (query) => {
    if (!query) return books;

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  };

  // กรองหนังสือตามหมวดหมู่
  const filterBooksByCategory = (category) => {
    if (!category || category === "all") return books;

    return books.filter((book) => book.category === category);
  };

  // ดึงหมวดหมู่ทั้งหมดที่มีอยู่
  const getAllCategories = () => {
    const categories = new Set(books.map((book) => book.category));
    return ["all", ...Array.from(categories)];
  };

  return {
    books,
    addBook,
    updateBook,
    deleteBook,
    getBookById,
    searchBooks,
    filterBooksByCategory,
    getAllCategories,
  };
}

export default useBooks;
