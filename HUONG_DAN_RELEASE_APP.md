# 📱 HƯỚNG DẪN ĐÓNG GÓI & PHÁT HÀNH APP ĐA NỀN TẢNG

Tài liệu này hướng dẫn bạn cách xuất bản ứng dụng **Nihongo Master** thành Native App cài đặt trên **Windows**, **macOS**, **Linux**, **Android** và **iOS**.

---

## ⚡ PHƯƠNG PHÁP 1: TỰ ĐỘNG BUILD TRÊN CLOUD BẰNG GITHUB ACTIONS (KHUYÊN DÙNG)

Bạn không cần cài đặt môi trường build phức tạp trên máy tính, GitHub Servers sẽ tự động biên dịch đồng thời cho tất cả các hệ điều hành và gắn file tải về vào mục **Releases** trên GitHub!

### Các bước kích hoạt:
1. **Gắn tag phiên bản mới** (ví dụ `v1.0.0`):
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
2. **Theo dõi tiến trình**:
   - Truy cập tab **Actions** trên repo GitHub của bạn: `https://github.com/methanol-dev/web-study-jp/actions`
   - GitHub sẽ tự động chạy 3 máy ảo Windows, macOS, Linux để build.
3. **Nhận file cài đặt**:
   - Sau khi build xong (khoảng 3-5 phút), truy cập mục **Releases**: `https://github.com/methanol-dev/web-study-jp/releases`
   - Tải về các file cài đặt:
     - 🪟 `NihongoMaster-Setup-1.0.0.exe` (Windows Installer) & bản Portable
     - 🍎 `NihongoMaster-1.0.0.dmg` (macOS)
     - 🐧 `NihongoMaster-1.0.0.AppImage` & `.deb` (Linux)

---

## 🖥️ PHƯƠNG PHÁP 2: BUILD DESKTOP APP CỤC BỘ TRÊN MÁY BẠN

### 1. Chạy thử Desktop App trong môi trường phát triển:
```bash
npm install
npm run app:dev
```

### 2. Đóng gói file cài đặt Windows (`.exe`):
```bash
npm run app:build:win
```
*(File cài đặt `.exe` và bản Portable `.exe` sẽ được tạo trong thư mục `release/`)*

### 3. Đóng gói cho macOS hoặc Linux:
```bash
# Cho macOS (.dmg)
npm run app:build:mac

# Cho Linux (.AppImage, .deb)
npm run app:build:linux
```

---

## 🤖 PHƯƠNG PHÁP 3: BUILD MOBILE APP CHO ANDROID & IOS (CAPACITOR)

### 1. Khởi tạo và đồng bộ mã nguồn vào Android:
Click đúp file `build-mobile.bat` hoặc chạy:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap add android
npx cap sync android
```

### 2. Mở Android Studio để xuất file APK:
```bash
npx cap open android
```
- Trong Android Studio: Chọn **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**.
- Bạn sẽ có ngay file `app-debug.apk` hoặc `app-release.apk` để cài lên bất kỳ điện thoại Android nào!

---

## 📋 BẢNG TỔNG KẾT CÁC LỆNH BUILD

| Mục tiêu | Lệnh thực thi | Kết quả đầu ra |
| :--- | :--- | :--- |
| **Cloud Auto Build** | `git tag v1.0.0 && git push origin v1.0.0` | Tự động có link tải trên GitHub Releases |
| **Windows .exe** | `npm run app:build:win` | `release/Nihongo Master Setup 1.0.0.exe` |
| **macOS .dmg** | `npm run app:build:mac` | `release/Nihongo Master-1.0.0.dmg` |
| **Linux .AppImage** | `npm run app:build:linux` | `release/Nihongo Master-1.0.0.AppImage` |
| **Android .apk** | `npx cap open android` | `android/app/build/outputs/apk/app-debug.apk` |
