# lab13-React-Mini-Project

แอปพลิเคชันจัดการคอลเลกชันหนังสือส่วนตัว พัฒนาด้วย React และ Vite

## การใช้งาน

1. หน้าแรก: แสดงภาพรวมของคอลเลกชันหนังสือ
2. รายการหนังสือ

- ดูหนังสือทั้งหมด
- ค้นหาหนังสือด้วยคำค้นหา
- กรองหนังสือตามหมวดหมู่
- ลบหนังสือโดยคลิกปุ่มลบ

3. เพิ่มหนังสือใหม่: คลิกปุ่ม "เพิ่มหนังสือใหม่" และกรอกข้อมูลในฟอร์ม
4. แก้ไขหนังสือ: คลิกปุ่มแก้ไขในหน้าดูรายละเอียดหนังสือ
5. ดูรายละเอียดหนังสือ: คลิกที่การ์ดหนังสือเพื่อดูข้อมูลทั้งหมด

## การติดตั้ง

1. git clone https://github.com/kewalin020/lab13-React-Mini-Project

### 1. สร้างโปรเจค React ใหม่ด้วย Vite

- npm create vite@latest
- book-collection-manager -- --template react
- cd book-collection-manager
- npm install

### 2. ติดตั้ง dependencies ที่จำเป็น

- npm install react-router-dom axios

### 3. ทดลองรันโปรเจค

- npm run dev
