// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArmw6ZMv4aHIe_b0jmC7XPDgakhCTJWlI",
  authDomain: "react-disney-plus-dd3cc.firebaseapp.com",
  projectId: "react-disney-plus-dd3cc",
  storageBucket: "react-disney-plus-dd3cc.appspot.com",
  messagingSenderId: "865748529004",
  appId: "1:865748529004:web:cea1ee75ffd8ef80fdcd49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;