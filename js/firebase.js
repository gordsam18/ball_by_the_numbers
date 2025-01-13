// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA59PXk0kJmhWW5HOh7x3TcwkQlVPMuEb8",
  authDomain: "fantasy-app-bdd6a.firebaseapp.com",
  projectId: "fantasy-app-bdd6a",
  storageBucket: "fantasy-app-bdd6a.firebasestorage.app",
  messagingSenderId: "227487014431",
  appId: "1:227487014431:web:7c0a0571114145efcf7f2a",
  measurementId: "G-7C60SQMEWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);