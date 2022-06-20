import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEHfbNS_xcdr2c9r9CUagafCND-hMR4mI",
  authDomain: "backend31190.firebaseapp.com",
  projectId: "backend31190",
  storageBucket: "backend31190.appspot.com",
  messagingSenderId: "338930038997",
  appId: "1:338930038997:web:d2090d524157aaadbb8a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionsName = {
  products: 'products',
  orders: 'orders'
}