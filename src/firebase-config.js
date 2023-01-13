// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFHoOvAl-9vuTN5_-niHE_2YM8Iipf18c",
  authDomain: "personwebsite-41057.firebaseapp.com",
  projectId: "personwebsite-41057",
  storageBucket: "personwebsite-41057.appspot.com",
  messagingSenderId: "559343084051",
  appId: "1:559343084051:web:7c9a65388dc10a80bb55e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);