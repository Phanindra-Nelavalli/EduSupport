// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5gm5oEX8uXr086DEtCLEiVgH3_L4Oz88",
  authDomain: "ar-application-35c3e.firebaseapp.com",
  databaseURL: "https://ar-application-35c3e-default-rtdb.firebaseio.com",
  projectId: "ar-application-35c3e",
  storageBucket: "ar-application-35c3e.appspot.com",
  messagingSenderId: "791180963944",
  appId: "1:791180963944:web:730e9f429001a21ff80bdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);