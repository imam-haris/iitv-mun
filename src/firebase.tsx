// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrtjgf1sGxiMs-JlZc6ZPmFL5h03gvwuU",
  authDomain: "iitv-mun.firebaseapp.com",
  projectId: "iitv-mun",
  storageBucket: "iitv-mun.firebasestorage.app",
  messagingSenderId: "826962088944",
  appId: "1:826962088944:web:52dcb022300d0e3d7f0335",
  measurementId: "G-SGD0RDDFFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
