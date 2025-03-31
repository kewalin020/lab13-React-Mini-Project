// src/utils/constants.js
// ค่าคงที่ต่างๆ สำหรับใช้ในแอปพลิเคชัน

export const READING_STATUS = {
  TO_READ: "to-read",
  READING: "reading",
  READ: "read",
};

export const READING_STATUS_THAI = {
  [READING_STATUS.TO_READ]: "ยังไม่ได้อ่าน",
  [READING_STATUS.READING]: "กำลังอ่าน",
  [READING_STATUS.READ]: "อ่านแล้ว",
};

export const DEFAULT_BOOK_COVER = "/images/default-book-cover.png";

export const SAMPLE_CATEGORIES = [
  "นวนิยาย",
  "วิทยาศาสตร์",
  "ธุรกิจ",
  "การพัฒนาตนเอง",
  "การเงิน",
  "ประวัติศาสตร์",
  "ชีวประวัติ",
  "การท่องเที่ยว",
  "อาหาร",
  "เทคโนโลยี",
];
