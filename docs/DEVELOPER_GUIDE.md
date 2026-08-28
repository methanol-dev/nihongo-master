# 💻 Cẩm Nang Lập Trình Viên (Developer Guide)

Tài liệu này dành cho các lập trình viên muốn phát triển thêm tính năng, tùy biến giao diện hoặc đóng góp bài học mới vào **Nihongo Master**.

---

## 🛠️ 1. MÔI TRƯỜNG PHÁT TRIỂN (DEVELOPMENT SETUP)

### Yêu cầu:
- **Node.js**: Phiên bản 18+ trở lên.
- **Git**: Đã cài đặt trên máy.

### Khởi động dự án:
```bash
# 1. Clone repository
git clone https://github.com/methanol-dev/web-study-jp.git
cd web-study-jp

# 2. Khởi chạy Local Server
npm start
# Hoặc: node server.js
```
Ứng dụng sẽ chạy tại: `http://localhost:3300`

---

## 📦 2. CẤU TRÚC DỮ LIỆU BÀI HỌC (`web/data.js`)

Mỗi bài học trong mảng `ALL_LESSONS` tuân theo schema chuẩn:

```javascript
{
  id: "n5_bai_01",              // ID duy nhất (category_tên_file)
  categoryId: "n5",             // ID danh mục: nhap_mon, n5, n4, n3, bo_tro, luyen_de
  categoryName: "📘 Sơ Cấp 1 (N5)", // Tên hiển thị của danh mục
  filename: "bai-01.md",         // Tên file gốc
  title: "📘 BÀI 01: Tự Giới Thiệu Bản Thân...", // Tiêu đề bài học
  content: "# 📘 BÀI 01: ... [Nội dung định dạng Markdown]" // Toàn bộ nội dung
}
```

### Schema Thẻ Ghi Nhớ Flashcard (`FLASHCARDS`):
```javascript
{
  front: "私 (わたし)",           // Mặt trước: Từ vựng / Chữ Hán / Mẫu ngữ pháp
  back: "Tôi (Tư)",              // Mặt sau: Nghĩa tiếng Việt & âm Hán Việt
  tag: "N5",                     // Nhãn cấp độ: N5, N4, N3
  example: "わたしは タン です。(Tôi là Thắng.)" // Câu ví dụ minh họa
}
```

---

## ➕ 3. CÁCH THÊM BÀI HỌC HOẶC TỪ VỰNG MỚI

1. Tạo file Markdown bài học mới trong thư mục tương ứng (ví dụ: `01-n5-so-cap-1/bai-26.md`).
2. Viết nội dung tuân thủ cấu trúc chuẩn:
   - `# Tiêu đề`
   - `## 1. Mục tiêu`
   - `## 2. Từ vựng` (Dạng bảng Markdown)
   - `## 3. Ngữ pháp` (Kèm ví dụ mẫu)
   - `## 4. Bài tập thực hành`
   - `## 5. Checklist hoàn thành`
3. Cập nhật dữ liệu vào `web/data.js` tương ứng.

---

## 🧪 4. CÁC LỆNH ĐÓNG GÓI & KIỂM THỬ (SCRIPTS)

| Lệnh npm | Chức năng |
| :--- | :--- |
| `npm start` | Khởi chạy server tĩnh phục vụ Cloudflare Tunnel ở cổng `3300` |
| `npm run app:dev` | Chạy thử ứng dụng Desktop qua Electron |
| `npm run app:build:win` | Đóng gói file cài đặt Windows (`.exe`) |
| `npm run app:build:mac` | Đóng gói file cài đặt macOS (`.dmg`) |
| `npm run app:build:linux` | Đóng gói file cài đặt Linux (`.AppImage`, `.deb`) |
| `npm run cap:open:android`| Mở Android Studio để xuất file `.apk` |
