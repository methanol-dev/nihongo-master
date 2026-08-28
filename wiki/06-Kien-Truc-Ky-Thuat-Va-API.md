# 🏛️ 06. Kiến Trúc Kỹ Thuật & Cấu Trúc Dữ Liệu

Trang này phân tích sâu về các giải pháp kỹ thuật, cơ chế lưu trữ dữ liệu và bảo mật trong **Nihongo Master**:

---

## ⚡ 1. TRIẾT LÝ ZERO-DEPENDENCY & HIGH PERFORMANCE

* **Node.js HTTP Server (`server.js`)**: Không sử dụng `express` hay `npm package` bên thứ ba, chạy hoàn toàn bằng module tiêu chuẩn của Node.js (`http`, `fs`, `path`).
* **Hiệu năng thực tế**:
  - Thông lượng: **2.174 req/sec**.
  - Độ trễ: **0.46 ms / request**.
  - Bộ nhớ RAM tiêu thụ: chỉ **7.48 MB RAM**.

---

## 🛡️ 2. LỚP BẢO MẬT GIA CỐ (SECURITY ARMOR)

1. **Chống Leo Thang Thư Mục (Path Traversal Armor)**:
   - Sử dụng `path.resolve` kết hợp kiểm tra chặt chẽ `resolvedPath.startsWith(WEB_DIR)`.
2. **Chống Crash DoS**:
   - Bọc `decodeURIComponent` và `URL parser` trong `try...catch` để ngăn chặn các URL dị dạng làm sập server.
3. **HTTP Security Headers**:
   - `Content-Security-Policy`: Giới hạn domain nguồn cấp font, script và image.
   - `X-Content-Type-Options: nosniff`: Ngăn chặn tấn công MIME confusion.
   - `X-Frame-Options: SAMEORIGIN`: Chống tấn công Clickjacking.

---

## 📦 3. CẤU TRÚC DỮ LIỆU BÀI HỌC (`web/data.js`)

Mảng `ALL_LESSONS` chứa 76 bài học đã tiền biên dịch:

```javascript
{
  id: "n5_bai_01",              // Khóa chính
  categoryId: "n5",             // nhap_mon | n5 | n4 | n3 | bo_tro | luyen_de
  categoryName: "📘 Sơ Cấp 1 (N5)",
  filename: "bai-01.md",
  title: "📘 BÀI 01: Tự Giới Thiệu Bản Thân",
  content: "# Nội dung Markdown đầy đủ..."
}
```

---

## 🔄 4. CƠ CHẾ SERVICE WORKER (CACHE-FIRST ENGINE)
* `web/sw.js` tự động lưu vào bộ nhớ cache tất cả các file HTML, CSS, JS, Fonts và SVG trong lần truy cập đầu tiên.
* Khi mất mạng, Service Worker sẽ lập tức trả về nội dung từ Cache giúp ứng dụng chạy mượt mà không cần mạng.
