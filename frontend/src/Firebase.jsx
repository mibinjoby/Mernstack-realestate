// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f7934.firebaseapp.com",
  projectId: "mern-estate-f7934",
  storageBucket: "mern-estate-f7934.firebasestorage.app",
  messagingSenderId: "134423194842",
  appId: "1:134423194842:web:66b14280f19048a4e749e3",
  measurementId: "G-PQ9C5RKGV8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
