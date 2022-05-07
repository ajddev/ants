// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
