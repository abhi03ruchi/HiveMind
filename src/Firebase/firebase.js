import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCojcukp6-xLG6-M2xLeS12TSUxxG72QJA",
  authDomain: "workhive-f5ffc.firebaseapp.com",
  projectId: "workhive-f5ffc",
  storageBucket: "workhive-f5ffc.appspot.com",
  messagingSenderId: "1056458859007",
  appId: "1:1056458859007:web:f6d16830e57c26054a87ca",
  measurementId: "G-4DP34RP4Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);