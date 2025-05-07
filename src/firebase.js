// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ import auth
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDwNRln41v21uk8zG2pjJAJErCaJC2u36M",
  authDomain: "portfolio-builder-39509.firebaseapp.com",
  projectId: "portfolio-builder-39509",
  storageBucket: "portfolio-builder-39509.appspot.com",
  messagingSenderId: "411272133933",
  appId: "1:411272133933:web:d317ebadd9c3248669a7a4",
  measurementId: "G-KJ7KBCH1FG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
export const auth = getAuth(app); // ✅ export this
