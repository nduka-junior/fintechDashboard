// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJBwnj9KYV8EO6rnTm5MxqnE0F89DQ0Js",
  authDomain: "payd-8a5c3.firebaseapp.com",
  projectId: "payd-8a5c3",
  storageBucket: "payd-8a5c3.appspot.com",
  messagingSenderId: "54506131689",
  appId: "1:54506131689:web:fc569e1acaa0d9dd81a078",
  measurementId: "G-3TKKBJQ8PQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
