// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoNoaODLhgL89hCJwDgWLrrU2gMpDGw2Q",
  authDomain: "tay-center-auth.firebaseapp.com",
  projectId: "tay-center-auth",
  storageBucket: "tay-center-auth.appspot.com",
  messagingSenderId: "545979319452",
  appId: "1:545979319452:web:3a857f43babe9ab5595959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;