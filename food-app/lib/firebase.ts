import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUNmxX8SmQixlatm9Ow4caBVq7eLygOUM",
  authDomain: "foodie-fiesta-451bf.firebaseapp.com",
  projectId: "foodie-fiesta-451bf",
  storageBucket: "foodie-fiesta-451bf.appspot.com",
  messagingSenderId: "329196818157",
  appId: "1:329196818157:web:4dbf438a9beee3ca19c6e4",
  measurementId: "G-ZYFHK4G6T3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

