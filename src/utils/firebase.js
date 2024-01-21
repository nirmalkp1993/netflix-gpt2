// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvOJ7viLMd21KzGNr4MMPxQt_rEFi6IvM",
  authDomain: "netflix-gpt-bd91b.firebaseapp.com",
  projectId: "netflix-gpt-bd91b",
  storageBucket: "netflix-gpt-bd91b.appspot.com",
  messagingSenderId: "306346653432",
  appId: "1:306346653432:web:bcc5624a4fdb38c5d32d0d",
  measurementId: "G-GKH0XJDN46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
