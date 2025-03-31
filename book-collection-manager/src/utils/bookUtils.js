// src/utils/bookUtils.js
// ฟังก์ชันช่วยเหลือต่าง ๆ สำหรับการจัดการหนังสือ

// ฟังก์ชันสำหรับแสดงวันที่ในรูปแบบที่อ่านง่าย
export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date(dateString).toLocaleDateString("th-TH", options);
}

// แปลงสถานะการอ่านเป็นภาษาไทย
export function translateReadingStatus(status) {
  const statusMap = {
    "to-read": "ยังไม่ได้อ่าน",
    reading: "กำลังอ่าน",
    read: "อ่านแล้ว",
  };

  return statusMap[status] || status;
}

// คำนวณสถิติของหนังสือ
export function calculateBookStats(books) {
  if (!books || books.length === 0) {
    return {
      totalBooks: 0,
      totalCategories: 0,
      readBooks: 0,
      readingBooks: 0,
      toReadBooks: 0,
      averageRating: 0,
    };
  }

  // จำนวนหนังสือทั้งหมด
  const totalBooks = books.length;

  // หมวดหมู่ทั้งหมด (ไม่ซ้ำกัน)
  const categories = new Set(books.map((book) => book.category));
  const totalCategories = categories.size;

  // จำนวนหนังสือตามสถานะการอ่าน
  const readBooks = books.filter((book) => book.status === "read").length;
  const readingBooks = books.filter((book) => book.status === "reading").length;
  const toReadBooks = books.filter((book) => book.status === "to-read").length;

  // คะแนนเฉลี่ย
  const ratedBooks = books.filter((book) => book.rating > 0);
  const averageRating =
    ratedBooks.length > 0
      ? ratedBooks.reduce((sum, book) => sum + book.rating, 0) /
        ratedBooks.length
      : 0;

  return {
    totalBooks,
    totalCategories,
    readBooks,
    readingBooks,
    toReadBooks,
    averageRating: averageRating.toFixed(1),
  };
}
