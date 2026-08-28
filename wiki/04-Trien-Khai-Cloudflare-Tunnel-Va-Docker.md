# ☁️ 04. Triển Khai Cloudflare Tunnel & Docker

Trang này hướng dẫn triển khai **Nihongo Master** ra môi trường Internet công cộng miễn phí, an toàn tuyệt đối với HTTPS tự động.

---

## ⚡ 1. TRIỂN KHAI VỚI CLOUDFLARE TUNNEL (NHANH NHẤT)

### Bước 1: Khởi động Server Local (Cổng 3300)
```bash
npm start
```

### Bước 2: Kích hoạt Cloudflare Tunnel
Mở thêm 1 cửa sổ terminal mới và chạy:
```bash
cloudflared tunnel --url http://localhost:3300
```

### Bước 3: Truy cập Web
Cloudflare sẽ cung cấp cho bạn một đường link HTTPS công khai dạng:
`https://random-subdomain.trycloudflare.com`
*(Bạn có thể chia sẻ đường link này cho bạn bè hoặc mở trên điện thoại để học bài)*

---

## 🐳 2. TRIỂN KHAI BẰNG DOCKER & DOCKER COMPOSE

Dự án đã tích hợp sẵn `Dockerfile` và `docker-compose.yml` trên nền Nginx Alpine siêu nhẹ:

```bash
# Khởi chạy Docker container ngầm
docker-compose up -d --build

# Kiểm tra trạng thái container
docker ps

# Mở Tunnel trỏ vào container
cloudflared tunnel --url http://localhost:3300
```

---

## 🛡️ 3. LỢI ÍCH BẢO MẬT KHI DÙNG CLOUDFLARE TUNNEL
1. **Không cần mở port Modem (No Port Forwarding)**: Tránh lộ địa chỉ IP gia đình ra ngoài Internet.
2. **Miễn phí chứng chỉ SSL/HTTPS**: Đảm bảo bảo mật mã hóa đường truyền cho người dùng.
3. **Bảo vệ chống DDoS tự động**: Được bảo vệ bởi hạ tầng mạng toàn cầu của Cloudflare.
