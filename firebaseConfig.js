// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "file-sharing-5ebfb.firebaseapp.com",
  projectId: "file-sharing-5ebfb",
  storageBucket: "file-sharing-5ebfb.appspot.com",
  messagingSenderId: "2349933771",
  appId: "1:2349933771:web:29c17e02ffea7be166a74e",
  measurementId: "G-6YZ9NER8S0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
