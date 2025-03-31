// src/context/BookContext.jsx
import React, { createContext, useContext } from "react";
import useBooks from "../hooks/useBooks";

// สร้าง Context
const BookContext = createContext();

// สร้าง Provider Component
export function BookProvider({ children }) {
  // ใช้ custom hook useBooks เพื่อดึงฟังก์ชันจัดการข้อมูลหนังสือทั้งหมด
  const booksData = useBooks();

  return (
    <BookContext.Provider value={booksData}>{children}</BookContext.Provider>
  );
}

// สร้าง Custom Hook สำหรับใช้งาน Context
export function useBookContext() {
  const context = useContext(BookContext);

  // ตรวจสอบว่ามีการใช้ context ภายใต้ Provider หรือไม่
  if (!context) {
    throw new Error("useBookContext ต้องถูกใช้ภายใต้ BookProvider");
  }

  return context;
}
