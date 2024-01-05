// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSvu7HaQMl3JSLhj0ZY5LSTKKs77PHw0g',
  authDomain: 'bookwhiz-ffd6f.firebaseapp.com',
  projectId: 'bookwhiz-ffd6f',
  storageBucket: 'bookwhiz-ffd6f.appspot.com',
  messagingSenderId: '609203275368',
  appId: '1:609203275368:web:ca56d8a1c0b92710409ddd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication service and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
  collection,
  addDoc,
  signInWithEmailAndPassword,
};
