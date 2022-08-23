// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHMt5Qu5v5bmkvrEMeoaKmkLqlvbnQHfo",
  authDomain: "cityhospital-33971.firebaseapp.com",
  projectId: "cityhospital-33971",
  storageBucket: "cityhospital-33971.appspot.com",
  messagingSenderId: "575985319320",
  appId: "1:575985319320:web:c0f371cffd5d216100bfed",
  measurementId: "G-Y84QWF6HS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);