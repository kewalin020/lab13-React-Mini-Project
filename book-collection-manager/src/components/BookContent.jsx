// src/context/BookContext.jsx
import React, { createContext, useContext } from "react";
import useBooks from "../hooks/useBooks";

// สร้าง Context
const BookContext = createContext();

// สร้าง Provider Component
export function BookProvider({ children }) {
  const booksData = useBooks();

  return (
    <BookContext.Provider value={booksData}>{children}</BookContext.Provider>
  );
}

// สร้าง Custom Hook สำหรับใช้งาน Context
export function useBookContext() {
  return useContext(BookContext);
}
