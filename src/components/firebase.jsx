// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-TGjsf3ptDAuIhWcENYkeb2LwQy4LP78",
  authDomain: "fti-nexus-7abf3.firebaseapp.com",
  projectId: "fti-nexus-7abf3",
  storageBucket: "fti-nexus-7abf3.appspot.com",
  messagingSenderId: "97759714423",
  appId: "1:97759714423:web:02597daec8b7b60bea3a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;