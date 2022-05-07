// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ants-a2aed.firebaseapp.com",
  projectId: "ants-a2aed",
  storageBucket: "ants-a2aed.appspot.com",
  messagingSenderId: "731979843310",
  appId: "1:731979843310:web:fb710fbac4811b257355ff",
  measurementId: "G-B5LGZQ6W4T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
