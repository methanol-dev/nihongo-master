# 📝 Changelog

Tất cả các thay đổi đáng chú ý của dự án **Nihongo Master** được ghi lại tại tệp này theo định dạng [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.0] - 2026-08-28

### ⚡ Added & Enhanced (Tính Năng Mới)
- **Bộ Điều Chỉnh Tốc Độ Phát Âm (Audio Speed Controller)**: Cho phép học viên tùy chỉnh tốc độ đọc tiếng Nhật `0.85x` (chậm chuẩn cho người mới), `1.0x` (bình thường), `1.2x` (phản xạ nhanh) ngay trên Header.
- **Bộ Phím Tắt Bàn Phím Cho Flashcard (Keyboard Shortcuts)**:
  - `Space`: Lật thẻ xem nghĩa / ví dụ.
  - `←` / `→`: Chuyển sang thẻ trước / thẻ kế tiếp.
  - `S` hoặc `A`: Phát âm tiếng Nhật.
  - `1`: Đánh dấu Chưa nhớ / `2`: Đánh dấu Đã thuộc.
- **Hệ Sinh Thái Đóng Gói Đa Nền Tảng (Cross-Platform Native Apps)**:
  - Cấu hình Electron Desktop App (`electron/main.js`, `electron/preload.js`).
  - Cấu hình Mobile App Android & iOS qua Capacitor (`capacitor.config.json`, `build-mobile.bat`).
  - GitHub Actions CI/CD tự động biên dịch và tạo bản cài đặt `.exe`, `.dmg`, `.AppImage`, `.deb` trên GitHub Releases.
- **Bộ Tài Liệu Kỹ Thuật Đầy Đủ**: Bổ sung `docs/ARCHITECTURE.md`, `docs/DEVELOPER_GUIDE.md`, `docs/USER_GUIDE.vi.md`.
- **Gia Cố Bảo Mật & SEO**: Tích hợp Schema.org JSON-LD, Robots.txt, Sitemap.xml, Path Traversal Armor và CSP Headers.

---

## [1.0.0] - 2026-08-28

### ✨ Added (Đã thêm)
- **Giáo án 76 bài học**:
  - Nhập môn: 4 bài học Hiragana, Katakana, Âm ghép, Biến âm & Chào hỏi.
  - N5 Sơ cấp 1: 25 bài học chuẩn Minna no Nihongo I, Bảng chia thể động từ, Tổng hợp ngữ pháp & 100 chữ Hán.
  - N4 Sơ cấp 2: 25 bài học chuẩn Minna no Nihongo II, Chuyên đề Tôn kính ngữ & Khiêm nhường ngữ.
  - N3 Trung cấp: 12 chuyên đề ngữ pháp Shinkanzen Master N3, 880 từ vựng Mimikara N3, Kỹ năng Đọc hiểu Dokkai & Nghe hiểu Choukai.
  - Tài liệu bổ trợ: 214 Bộ thủ Hán tự & Từ điển Trợ từ toàn tập.
  - Luyện đề: Bộ đề thi thử chuẩn format JLPT N3 có đáp án và giải thích chi tiết.
- **Web App Tĩnh (PWA)**:
  - Bảng điều khiển (Dashboard) với tính năng Điểm danh, Streak 🔥 và Bản đồ nhiệt 30 ngày (Calendar Heatmap).
  - Tích hợp Loa phát âm tiếng Nhật chuẩn bản ngữ (`ja-JP`) bằng Web Speech API.
  - Chế độ Luyện thẻ Flashcard 3D theo từng cấp độ N5, N4, N3.
  - Tính năng Sao lưu & Khôi phục tiến độ học tập (Xuất/Nhập file `.json`).
  - Hỗ trợ PWA với `manifest.json` và Service Worker (`sw.js`) để cài đặt app trên điện thoại và học offline.
- **Hệ thống Triển khai**:
  - `server.js` Node.js HTTP Server thuần không phụ thuộc npm, chạy mặc định ở cổng `3300`.
  - `Dockerfile` & `docker-compose.yml` chạy Nginx Alpine container.
  - Tài liệu hướng dẫn chi tiết Cloudflare Tunnel `HUONG_DAN_CLOUDFLARED.md`.

---

## [Định dạng Phiên bản]
- `MAJOR`: Thay đổi kiến trúc lớn hoặc cấu trúc dữ liệu không tương thích ngược.
- `MINOR`: Thêm tính năng mới, bài học mới mà vẫn tương thích.
- `PATCH`: Sửa lỗi, tối ưu hiệu năng hoặc chỉnh sửa văn bản.
