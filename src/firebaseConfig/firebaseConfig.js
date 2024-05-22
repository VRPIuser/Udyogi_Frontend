// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB02qeLHHvfx7QqcaqVgcesEKKi61bKpcs",
  authDomain: "udyogi-chat.firebaseapp.com",
  projectId: "udyogi-chat",
  storageBucket: "udyogi-chat.appspot.com",
  messagingSenderId: "1000772766855",
  appId: "1:1000772766855:web:f4ea91e78d385ccf5e3c22",
  measurementId: "G-04W83CVYVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage();
