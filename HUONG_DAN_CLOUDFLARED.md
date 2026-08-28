# ☁️ HƯỚNG DẪN DEPLOY QUA CLOUDFLARE TUNNEL (PORT 3300)

Tài liệu này hướng dẫn bạn cách khởi chạy Web App **Nihongo Master** tại cổng **`3300`** và đưa lên Internet an toàn, miễn phí qua **Cloudflare Tunnel**.

---

## 🚀 CÁCH 1: QUICK TUNNEL (TEST NHANH TRONG 30 GIÂY)

Không cần cấu hình tên miền hay đăng nhập, Cloudflare sẽ cấp ngay cho bạn một đường link HTTPS ngẫu nhiên dạng `https://xxxx.trycloudflare.com`.

### Bước 1: Khởi động Local Server (Cổng 3300)
Mở một cửa sổ Terminal tại thư mục dự án và chạy:
```bash
npm start
# Hoặc: node server.js
```
*(Server sẽ thông báo: `🌸 Nihongo Master Server is running at http://localhost:3300`)*

### Bước 2: Bật Cloudflare Tunnel
Mở một cửa sổ Terminal thứ 2 và chạy lệnh:
```bash
cloudflared tunnel --url http://localhost:3300
```

Cloudflare sẽ in ra một đường link dạng:
`https://random-subdomain.trycloudflare.com`

👉 Bạn có thể gửi ngay link này cho bạn bè hoặc mở trên điện thoại để trải nghiệm!

---

## 🌐 CÁCH 2: NAMED TUNNEL VỚI TÊN MIỀN RIÊNG (PERSISTENT & CHÍNH THỨC)

Dành cho trường hợp bạn muốn gán cố định vào tên miền riêng của bạn trên Cloudflare (ví dụ: `nihongo.yourdomain.com`).

### Bước 1: Đăng nhập Cloudflared (nếu chưa)
```bash
cloudflared tunnel login
```

### Bước 2: Tạo Tunnel mới
```bash
cloudflared tunnel create nihongo-tunnel
```
*(Lệnh này sẽ tạo ra 1 file thông tin xác thực tunnel JSON)*

### Bước 3: Định tuyến tên miền về Tunnel
```bash
cloudflared tunnel route dns nihongo-tunnel nihongo.yourdomain.com
```

### Bước 4: Tạo file cấu hình `config.yml` (hoặc lưu trong `~/.cloudflared/config.yml`)
```yaml
tunnel: nihongo-tunnel
credentials-file: C:\Users\meth\.cloudflared\<TUNNEL_ID>.json

ingress:
  - hostname: nihongo.yourdomain.com
    service: http://localhost:3300
  - service: http_status:404
```

### Bước 5: Khởi chạy Tunnel vĩnh viễn
```bash
cloudflared tunnel run nihongo-tunnel
```

---

## 🐳 CÁCH 3: CHẠY BẰNG DOCKER (TÙY CHỌN)

Nếu bạn muốn chạy ngầm trong Docker container:
```bash
# Build và chạy container ở cổng 3300
docker-compose up -d --build

# Bật tunnel trỏ vào
cloudflared tunnel --url http://localhost:3300
```

---

## 📦 CÁCH ĐẨY CODE LÊN GITHUB

Để lưu trữ mã nguồn và quản lý phiên bản trên GitHub:

```bash
# 1. Khởi tạo git (nếu chưa có)
git init

# 2. Thêm tất cả file
git add .

# 3. Commit
git commit -m "feat: complete nihongo master learning hub and pwa web app"

# 4. Đổi nhánh chính thành main
git branch -M main

# 5. Thêm remote repository GitHub của bạn
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 6. Đẩy code lên
git push -u origin main
```
