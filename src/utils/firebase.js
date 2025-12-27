// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa9bKJDvL2pMntyYhPhJkojdTJYgMmAz4",
  authDomain: "netflixgpt-8dfb2.firebaseapp.com",
  projectId: "netflixgpt-8dfb2",
  storageBucket: "netflixgpt-8dfb2.firebasestorage.app",
  messagingSenderId: "976140111886",
  appId: "1:976140111886:web:364cc8370bbf1f403a2c5f",
  measurementId: "G-4WTEBQQJMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();