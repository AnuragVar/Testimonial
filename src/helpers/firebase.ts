// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "testimo-bba63.firebaseapp.com",
  projectId: "testimo-bba63",
  storageBucket: "testimo-bba63.appspot.com",
  messagingSenderId: "964020895549",
  appId: "1:964020895549:web:58784dc0ee33a264e28f54",
  measurementId: "G-347F5L97YQ",
};

// Initialize Firebase
 export const app: FirebaseApp = initializeApp(firebaseConfig);
