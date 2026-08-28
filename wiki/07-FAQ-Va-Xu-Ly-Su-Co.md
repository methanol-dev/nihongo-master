# ❓ 07. Câu Hỏi Thường Gặp & Khắc Phục Sự Cố (FAQ)

---

## 💬 1. CÂU HỎI THƯỜNG GẶP (FAQ)

### Q1: Tôi có thể sử dụng ứng dụng khi không có mạng Internet không?
> **Trả lời**: **Có**. Ứng dụng hỗ trợ PWA đầy đủ, tự động cache toàn bộ 76 bài học và Flashcard về bộ nhớ máy ngay trong lần truy cập đầu tiên. Bạn có thể mở app và học mọi lúc mọi nơi kể cả khi đi máy bay.

### Q2: Tại sao tôi bấm vào icon loa 🔊 mà không nghe thấy tiếng?
> **Trả lời**: Ứng dụng sử dụng engine giọng đọc `Web Speech API (ja-JP)` có sẵn trên thiết bị:
> - **Trên Windows**: Đảm bảo bạn đã cài gói ngôn ngữ tiếng Nhật trong *Settings → Time & Language → Speech → Add voices (Japanese)*.
> - **Trên điện thoại**: Đảm bảo không bật chế độ im lặng (*Silent Mode*) và đã cấp quyền âm thanh cho trình duyệt.

### Q3: Tôi có bị mất chuỗi điểm danh Streak khi xóa lịch sử web không?
> **Trả lời**: Nếu bạn bấm "Xóa toàn bộ dữ liệu trang web" (*Clear Site Data*), dữ liệu trong `localStorage` sẽ bị xóa. Vì vậy, hãy sử dụng tính năng **"💾 Sao lưu & Khôi phục"** xuất file `.json` định kỳ mỗi tuần để an tâm tuyệt đối!

---

## 🛠️ 2. KHẮC PHỤC SỰ CỐ PHỔ BIẾN (TROUBLESHOOTING)

### Lỗi 1: Cổng 3300 bị xung đột với ứng dụng khác
Nếu cổng `3300` đã có dịch vụ khác chiếm giữ, bạn có thể đổi sang cổng khác (ví dụ `3500`):
```bash
# Windows PowerShell
$env:PORT=3500; node server.js

# Hoặc CMD
set PORT=3500 && node server.js
```

### Lỗi 2: Cloudflare Tunnel báo lỗi "connection refused"
- **Nguyên nhân**: Bạn kích hoạt Cloudflare Tunnel trước khi server local khởi động.
- **Cách sửa**: Hãy chạy `npm start` để server lắng nghe ở cổng `3300` trước, sau đó mới bật `cloudflared tunnel --url http://localhost:3300`.
