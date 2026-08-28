# 📦 05. Đóng Gói Native App & CI/CD

**Nihongo Master** hỗ trợ đóng gói thành Native App cài đặt trực tiếp trên máy tính và điện thoại thông minh.

---

## ☁️ 1. TỰ ĐỘNG BUILD & PHÁT HÀNH QUA GITHUB ACTIONS

Chỉ cần gắn tag phiên bản mới và push lên GitHub, hệ thống máy chủ đám mây GitHub Actions sẽ tự động biên dịch và tạo bản phát hành tại mục **Releases**:

```bash
git tag v1.1.0
git push origin v1.1.0
```

### Các bản cài đặt được tạo ra tự động:
* 🪟 **Windows**: `Nihongo Master Setup 1.1.0.exe` & bản Portable `.exe`.
* 🍎 **macOS**: `Nihongo Master-1.1.0.dmg` (hỗ trợ cả chip Intel và Apple Silicon).
* 🐧 **Linux**: `Nihongo Master-1.1.0.AppImage` & `Nihongo Master_1.1.0_amd64.deb`.

---

## 💻 2. BUILD DESKTOP CỤC BỘ TRÊN MÁY TÍNH

```bash
# Cài đặt dependencies
npm install

# Build bản cài đặt Windows (.exe)
npm run app:build:win

# Build bản cài đặt macOS (.dmg)
npm run app:build:mac

# Build bản cài đặt Linux (.AppImage)
npm run app:build:linux
```
*(File thành phẩm sẽ được lưu trong thư mục `release/`)*

---

## 🤖 3. BUILD MOBILE APP CHO ANDROID (CAPACITOR)

1. **Khởi tạo và đồng bộ mã nguồn**:
   Click đúp file `build-mobile.bat` hoặc chạy:
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/android
   npx cap add android
   npx cap sync android
   ```
2. **Mở Android Studio**:
   ```bash
   npx cap open android
   ```
3. Trong Android Studio: Chọn **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)** để lấy file `.apk` cài trực tiếp vào điện thoại.
