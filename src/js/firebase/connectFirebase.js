// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTcOQaY7_8tYXuHkaDmyWrosLZrvWEUhI",
  authDomain: "divinaresto-44194.firebaseapp.com",
  projectId: "divinaresto-44194",
  storageBucket: "divinaresto-44194.appspot.com",
  messagingSenderId: "372855281613",
  appId: "1:372855281613:web:35632051c3105d44d09684",
  measurementId: "G-HQHWR3CCD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
