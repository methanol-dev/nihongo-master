@echo off
echo ========================================================
echo 📱 Nihongo Master - Khoi tao va Dong bo Android Project
echo ========================================================

echo [1/3] Cai dat Capacitor dependencies...
call npm install @capacitor/core @capacitor/cli @capacitor/android

echo [2/3] Khoi tao Android Platform...
call npx cap add android

echo [3/3] Dong bo ma nguon Web vao Android...
call npx cap sync android

echo.
echo ========================================================
echo ✅ Hoan tat! De mo Android Studio va build file APK:
echo    chay lenh: npx cap open android
echo ========================================================
pause
