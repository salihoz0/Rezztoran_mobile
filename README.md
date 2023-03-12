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

# branch islemleri
git pull origin main
git add .
git commit -m "[file][job] message"
git push
git checkout main 
git pull origin main
git pull origin dev-alperen(ornek)
git push
git checkout dev-alperen(ornek)


# QR kod node_modules ayarı
yarn add deprecated-react-native-prop-types

import React from 'react';
import PropTypes from 'prop-types';
import {
  findNodeHandle,
  Platform,
  NativeModules,
  requireNativeComponent,
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import type { FaceFeature } from './FaceDetector';