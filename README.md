# Bright or Bite

Bright or Bite is a simple mobile app built with Expo and React Native. The app gives users two choices: receive a positive affirmation to brighten their day, or get a sharp insult for fun. Each mode has its own color theme and layout, designed to match the atmosphere.

This project is suitable for beginners learning Expo, or anyone who wants a fun, lightweight mobile app.

---

## ✨ Features

### 🔹 Affirmation Mode
- Fetches affirmations from **affirmations.dev**
- Soft and bright gradient background
- “New Quote” button to load fresh affirmations
- Copy-to-clipboard button with toast notification

### 🔹 Insult Mode
- Fetches insults from **evilinsult.com**
- Dark gradient theme
- “Hit Me Again” button to load new insults
- Copy-to-clipboard with toast notification

### 🔹 Shared Features
- Navigation using Expo Router
- Clean, responsive UI
- Smooth state handling with React Hooks

## 📁 Folder Structure
├── app/
│ ├── index.tsx // Home screen
│ ├── affirmation/
│ │ └── index.tsx // Affirmation screen
│ ├── insult/
│ └── index.tsx // Insult screen
├── assets/
│ └── images/ // Logos, icons, UI images
└── README.md--

---

# 🛠️ Installation & Setup Guide

Below is the full step-by-step setup to make the app run smoothly.

---

## 1. Install Node.js & Git
Make sure you have:

- **Node.js 18+**
- **Git**


## 2. Instal Expo CLI
Expo CLI allows you to run and build the app.

- **npm install -g expo-cli**

## 3. Clone the Project

- **git clone <repo-url>**
- **cd <project-folder>**

## 4. Install Dependencies
All dependencies needed by the app are declared in **package.json**.

- **npm install**

This will install:
- expo-router
- axios
- expo-linear-gradient
- expo-clipboard
- react-native-safe-area-context

and other necessary packages

## 5. Start the App
Run the project using Expo:

- **npx expo start**

Expo will give you:
- A QR code (scan wuth Expo Go app)
- Option to run on Android/IOS emulator
- Browser dev tools

---

# 📡 API Setup (Important)

This app uses two public APIs that do not require authentication.

## Affirmation API

- **[text](https://www.affirmations.dev/)**

### Response with:

- **{ "affirmation": "Your potential is endless." }**

## Insult API

- **{ "affirmation": "Your potential is endless." }**

### Response with:

- **{ "insult": "Sample insult message" }**


## No API Keys Needed
Just make sure the device/emulator has internet access.

---

---

# 🧱 Running on Emulator

## Android
- 1. Install Android Studio
- 2. Create an Android Virtual Device (AVD)
- 3. Run the emulator
- 4. Start Expo
- **npx expo start**
- 5. Press a in the terminal to open the app on the emulator

## IOS
- 1. Install Xcode
- 2. Run IOS Simulator
- 3. Start Expo
- **npx expo start**
- 5. Press i to open the app on iOS Simulator

---

---

# 📦 Building the App (APK / IPA)
To generate APK or iOS builds using Expo:

- 1. Install EAS CLI
- **npm install -g eas-cli**
- 2. Login to expo
- **eas login**
- 3. Build APK (Android)
- **eas build -p android --profile preview**
- 4. Build for iOS (Mac only)
- **eas build -p ios --profile preview**

Expo will provide a download link when build is finished

---

---

# 🎨 UI & Design Notes

## Affirmation Mode
- Light gradient
- Poppins font
- Soothing layout

## Insult Mode
- Dark gradient
- Montserrat font
- Slightly "edgy vibe"

Design kept simple for better readability

---

---

# 📜 License
This project is open-source and can be used freely

---

--- 

# 🙌 About the Project
Bright or Bite was created as a small, fun mobile application that fits different moods. Whether someone wants motivation or a harsh joke, both options are available in one place.

---
This app uses two public APIs that do not require authentication.
You can check by running:
```bash
node -v
git --version


