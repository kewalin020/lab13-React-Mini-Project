// src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // สร้าง state สำหรับเก็บค่า
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // ดึงค่าจาก localStorage
      const item = window.localStorage.getItem(key);
      // แปลงค่า JSON กลับเป็น object หรือใช้ค่าเริ่มต้น
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // เมื่อ storedValue หรือ key เปลี่ยน จะอัปเดต localStorage
  useEffect(() => {
    try {
      // บันทึกค่าใน localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
