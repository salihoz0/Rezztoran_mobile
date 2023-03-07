# Rezztoran_mobile

# APK build
'cd android && ./gradlew clean && ./gradlew assembleRelease && open android/app/build/outputs/apk/release'

# IOS build
- Product => Clean Build Folder
- Dosyalardan “RezztoranMobile” orta ekrandan “General” içerisinden versiyon numarası kontrolü 1.0.7 (1) Apple Sitesindende bak
- Product => Archive
- Çıkan ekranda Distribute App => Next next next => upload
- Daha sonra testfligha düşmesini bekliyoruz.

# Info
  * ./gradlew clean : Build'i temizlemek için
 
  * package-lock.json dosyası oluşturmayın

# projeyi başlatma
  /> yarn start 
  
  /> yarn android
