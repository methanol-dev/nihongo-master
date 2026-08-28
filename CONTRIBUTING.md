# 🤝 Hướng Dẫn Đóng Góp (Contributing Guide)

Cảm ơn bạn đã quan tâm đến việc đóng góp và phát triển dự án **Nihongo Master**! Dự án luôn chào đón mọi đóng góp về bài học, từ vựng, ngữ pháp, bài tập hoặc giao diện.

---

## 🛠️ Quy Trình Đóng Góp (Workflow)

1. **Fork Repository** về tài khoản GitHub của bạn.
2. **Clone** repo về máy:
   ```bash
   git clone https://github.com/USERNAME/hoc-tieng.git
   cd hoc-tieng
   ```
3. **Tạo nhánh mới (Feature Branch)**:
   ```bash
   git checkout -b feature/them-bai-hoc-n2
   ```
4. **Thực hiện thay đổi**:
   - Thêm file bài học mới vào thư mục tương ứng (`01-n5-so-cap-1/`, `02-n4-so-cap-2/`, `03-n3-trung-cap/`...).
   - Kiểm tra định dạng Markdown, bảng biểu và cấu trúc ví dụ chuẩn tiếng Nhật.
5. **Commit thay đổi**:
   ```bash
   git commit -m "docs: bo sung chuyen de tro tu nang cao"
   ```
6. **Push lên GitHub và tạo Pull Request (PR)**:
   ```bash
   git push origin feature/them-bai-hoc-n2
   ```

---

## 📝 Quy Chuẩn Soạn Thảo Bài Học

Mỗi file bài học `.md` mới cần tuân thủ cấu trúc chuẩn:
- `# 📘 TIÊU ĐỀ BÀI HỌC`
- `## 🎯 1. MỤC TIÊU BÀI HỌC`
- `## 📚 2. TỪ VỰNG CỐT LÕI (KOTOBA)` (Bảng: Tiếng Nhật | Hán tự | Âm Hán Việt | Nghĩa tiếng Việt)
- `## 💡 3. NGỮ PHÁP TRỌNG TÂM (BUNPOU)` (Cấu trúc | Ý nghĩa | Câu ví dụ Nhật - Việt)
- `## ✍️ 4. BÀI TẬP VẬN DỤNG & ĐÁP ÁN`
- `## 🎯 5. CHECKLIST ĐÁNH GIÁ`

---

## 💬 Hỗ Trợ & Thắc Mắc
Nếu bạn phát hiện lỗi sai trong bài giảng hoặc có đề xuất cải tiến, hãy mở một **Issue** trên GitHub để cùng thảo luận nhé!
