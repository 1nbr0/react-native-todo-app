// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9BmudCT5y_yHjgBe-rmWaHEEsYwGGX8I",
  authDomain: "mytodoapp-28149.firebaseapp.com",
  projectId: "mytodoapp-28149",
  storageBucket: "mytodoapp-28149.appspot.com",
  messagingSenderId: "839572869266",
  appId: "1:839572869266:web:ab80f696bdd952829e164b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
