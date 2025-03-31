// src/components/BookForm.jsx
import React, { useState, useEffect } from "react";

function BookForm({ book, onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: new Date().getFullYear(),
    category: "",
    status: "to-read",
    cover: "",
    description: "",
    rating: 0,
  });

  const [errors, setErrors] = useState({});

  // ถ้าเป็นการแก้ไข ให้ใช้ข้อมูลของหนังสือที่ส่งมา
  useEffect(() => {
    if (isEditing && book) {
      setFormData(book);
    }
  }, [isEditing, book]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "year" || name === "rating" ? Number(value) : value,
    });

    // ลบข้อผิดพลาดเมื่อผู้ใช้แก้ไขข้อมูล
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "กรุณาใส่ชื่อหนังสือ";
    }

    if (!formData.author.trim()) {
      newErrors.author = "กรุณาใส่ชื่อผู้แต่ง";
    }

    if (!formData.category.trim()) {
      newErrors.category = "กรุณาเลือกหมวดหมู่";
    }

    const currentYear = new Date().getFullYear();
    if (formData.year > currentYear || formData.year < 1000) {
      newErrors.year = "ปีที่พิมพ์ไม่ถูกต้อง";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">ชื่อหนังสือ *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        {errors.title && <div className="error">{errors.title}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="author">ผู้แต่ง *</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        {errors.author && <div className="error">{errors.author}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="year">ปีที่พิมพ์</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="1000"
          max={new Date().getFullYear()}
        />
        {errors.year && <div className="error">{errors.year}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="category">หมวดหมู่ *</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        {errors.category && <div className="error">{errors.category}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="status">สถานะการอ่าน</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="to-read">ยังไม่ได้อ่าน</option>
          <option value="reading">กำลังอ่าน</option>
          <option value="read">อ่านแล้ว</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cover">URL รูปปก (ถ้ามี)</label>
        <input
          type="url"
          id="cover"
          name="cover"
          value={formData.cover}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">คำอธิบาย</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating">คะแนน (1-5)</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {isEditing ? "บันทึกการแก้ไข" : "เพิ่มหนังสือ"}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
