# 🌐 Portfolio Builder

A full-stack web application that allows users to create, customize, preview, and publish professional portfolios using pre-designed templates. Built using **React**, **Tailwind CSS**, and **Firebase** (Authentication, Firestore, and Storage).

## 🚀 Features

- 🔐 User Authentication (Login & Signup via Firebase Auth)
- 📝 Portfolio Builder with Forms (Education, Projects, Skills, etc.)
- 🎨 Multiple Templates (Minimalist, Bold, Creative, Professional, etc.)
- 👀 Live Preview
- ☁️ Image Upload using Firebase Storage
- 🔗 Public Portfolio Publishing
- 📋 Clipboard Copy of Portfolio Link
- 📁 Firestore Integration for user-specific data

## 🛠️ Technologies Used

- **Frontend:** React, React Router, Tailwind CSS
- **Backend:** Firebase (Firestore, Auth, Storage)
- **Notifications:** React Toastify
- **Hosting:** Firebase Hosting (optional)

## 📦 Folder Structure

portfolio-builder/
├── public/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Route-based pages (Login, Signup, Dashboard, Builder, Preview, PortfolioView)
│ ├── templates/ # Portfolio templates (Minimalist, Bold, etc.)
│ ├── firebase.js # Firebase config and initialization
│ └── App.jsx
├── .firebaserc
├── firebase.json
├── README.md
└── package.json

csharp
Copy
Edit

## 🔧 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable:
   - **Authentication** → Email/Password
   - **Cloud Firestore**
   - **Cloud Storage**
3. Update your `firebase.js` with your project credentials:

```js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MSG_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
Firestore Rules
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    match /publicData/{documentId} {
      allow read: if true;
      allow write: if false;
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
}
Fire Storage Rules
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /portfolioImages/{userId}/{fileName} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
Running Locally
git clone https://github.com/yourusername/portfolio-builder.git
cd portfolio-builder
npm install
npm run dev

Visit http://localhost:5173 in your browser.

✨ Publish Portfolio
When a user clicks "Publish Portfolio", the app:

Uploads image to Firebase Storage.

Saves user data & template choice to Firestore.

Copies a shareable portfolio link to clipboard (/portfolio-view/:userId).
