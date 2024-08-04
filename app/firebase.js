// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixRFcod2DLNcj43mOSBFisg1bDCXUsUE",
  authDomain: "pantry-management-e5a53.firebaseapp.com",
  projectId: "pantry-management-e5a53",
  storageBucket: "pantry-management-e5a53.appspot.com",
  messagingSenderId: "18519859081",
  appId: "1:18519859081:web:8e10e80fde15614aec8b58",
  measurementId: "G-15CYVP7R1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Initialize Firestore

export { firestore };
