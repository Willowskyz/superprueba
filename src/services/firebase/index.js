
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBE3hnpVnZO2CVv1SpEt6QzUNVTToqwDeU",
  authDomain: "cafe-coder.firebaseapp.com",
  projectId: "cafe-coder",
  storageBucket: "cafe-coder.appspot.com",
  messagingSenderId: "200852060690",
  appId: "1:200852060690:web:41ace566d58c315dd036cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)