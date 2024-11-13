// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByEcW5ci0PlH4IuU20eWu5WpqifjcCY_Y",
  authDomain: "auth-moha-milon-484da.firebaseapp.com",
  projectId: "auth-moha-milon-484da",
  storageBucket: "auth-moha-milon-484da.firebasestorage.app",
  messagingSenderId: "377376895630",
  appId: "1:377376895630:web:3a9263bd1ba645cca00fdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);