# 🌸 Nihongo Master - Nền Tảng Học Tiếng Nhật Từ 0 Đến JLPT N3

> **Nền tảng tự học tiếng Nhật toàn diện 76 bài học (Nhập môn → N5 → N4 → N3) tích hợp Web App PWA điểm danh, streak 🔥, luyện Flashcard 3D và phát âm chuẩn bản ngữ.**

---

## ⚡ Bắt Đầu Nhanh (Quick Start)

Yêu cầu: Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18+).

```bash
# 1. Khởi chạy Local Web Server (Cổng 3300)
npm start

# 2. Public ra Internet qua Cloudflare Tunnel (Miễn phí 0đ)
cloudflared tunnel --url http://localhost:3300
```
*(Truy cập ứng dụng tại: `http://localhost:3300`)*

---

## ✨ Tính Năng Nổi Bật (Features)

- **📚 76 Bài Học Toàn Diện**:
  - `00-nhap-mon`: Bảng chữ cái Hiragana, Katakana, Âm ghép, Biến âm & Chào hỏi.
  - `01-n5-so-cap-1`: 25 Bài học Minna no Nihongo I + 100 chữ Hán N5 + Bảng chia thể.
  - `02-n4-so-cap-2`: 25 Bài học Minna no Nihongo II + Chuyên đề Kính ngữ.
  - `03-n3-trung-cap`: 12 Chuyên đề Shinkanzen Master N3 + Kỹ năng Đọc hiểu (Dokkai) & Nghe hiểu (Choukai).
  - `04-luyen-de-n3`: Bộ đề thi thử chuẩn format JLPT kèm giải thích chi tiết.
- **🔥 Điểm Danh & Streak Hằng Ngày**: Theo dõi kỷ luật học tập với bản đồ nhiệt (Calendar Heatmap) và hiệu ứng pháo hoa chúc mừng.
- **🔊 Phát Âm Bản Ngữ (Text-to-Speech)**: Tích hợp Web Speech API (`ja-JP`) trực tiếp trên từng từ vựng và câu ví dụ.
- **🎴 Thẻ Ghi Nhớ Flashcard 3D**: Luyện phản xạ từ vựng, Kanji, ngữ pháp theo phương pháp lặp lại ngắt quãng (SRS).
- **📲 Progressive Web App (PWA)**: Cài đặt trực tiếp lên màn hình chính điện thoại (iOS / Android), hỗ trợ học tập Offline 100%.
- **💾 Sao Lưu & Khôi Phục**: Xuất/Nhập file `.json` để bảo toàn dữ liệu điểm danh khi đổi thiết bị.

---

## ⚙️ Cấu Hình Môi Trường (Configuration)

| Biến Môi Trường | Mô Tả | Giá Trị Mặc Định |
| :--- | :--- | :---: |
| `PORT` | Cổng HTTP Server lắng nghe | `3300` |
| `NODE_ENV` | Môi trường hoạt động (`development` / `production`) | `production` |

---

## 🗺️ Bản Đồ Cấu Trúc Dự Án (Directory Structure)

```
hoc-tieng/
│
├── 📜 README.md                                  # Tài liệu giới thiệu & tổng quan dự án
├── 📜 CHANGELOG.md                               # Nhật ký cập nhật phiên bản
├── 📜 CONTRIBUTING.md                            # Hướng dẫn đóng góp bài học & nội dung
├── 📜 HUONG_DAN_CLOUDFLARED.md                   # Hướng dẫn chi tiết triển khai Cloudflare Tunnel
├── 📜 GIAO_TRINH_TIENG_NHAT_N5_TO_N3.md          # Lộ trình học 4 giai đoạn
├── 📜 server.js                                  # HTTP Server Node.js thuần (Port 3300)
├── 📜 package.json                               # Cấu hình scripts & dependencies
├── 📜 Dockerfile & docker-compose.yml            # Đóng gói container Nginx Alpine
│
├── 📁 web/                                       # Mã nguồn Frontend Web App (PWA)
│   ├── index.html                                # Giao diện chính (Dashboard, Reader, Flashcard)
│   ├── style.css                                 # Phong cách Nhật Bản hiện đại, Dark/Light theme
│   ├── data.js                                   # Bộ dữ liệu 76 bài học & flashcard
│   ├── app.js                                    # Logic điểm danh, TTS, streak & PWA handler
│   ├── favicon.svg                               # Icon hoa anh đào vector
│   ├── manifest.json                             # Cấu hình PWA App Manifest
│   └── sw.js                                     # Service Worker Offline Caching
│
├── 📁 00-nhap-mon/                               # 4 bài học nền tảng bảng chữ cái & phát âm
├── 📁 01-n5-so-cap-1/                            # 25 bài học N5 Minna I + Kanji + Ngữ pháp
├── 📁 02-n4-so-cap-2/                            # 25 bài học N4 Minna II + Kính ngữ
├── 📁 03-n3-trung-cap/                           # 12 chuyên đề Shinkanzen N3 + Đọc - Nghe
├── 📁 04-luyen-de-n3/                            # Bộ đề thi thử JLPT N3
└── 📁 tai-lieu-bo-tro/                           # 214 Bộ thủ Hán tự & Từ điển trợ từ
```

---

## 🐳 Triển Khai Bằng Docker (Optional)

```bash
# Khởi chạy container ngầm ở cổng 3300
docker-compose up -d --build

# Bật Cloudflare Tunnel
cloudflared tunnel --url http://localhost:3300
```

---

## 🤝 Đóng Góp (Contributing)

Mọi đóng góp nhằm hoàn thiện nội dung giáo án, bổ sung thẻ Flashcard hoặc cải tiến giao diện đều được hoan nghênh! Vui lòng xem hướng dẫn chi tiết tại [CONTRIBUTING.md](file:///c:/Users/meth/Desktop/hoc-tieng/CONTRIBUTING.md).

---

## 📄 Bản Quyền (License)

Dự án được phân phối dưới giấy phép **MIT License**.
