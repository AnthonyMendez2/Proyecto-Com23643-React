// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcUqLB3l_ZDt3Q0pz9Wuxrc8AwoC1sKns",
  authDomain: "project-movies-a5324.firebaseapp.com",
  projectId: "project-movies-a5324",
  storageBucket: "project-movies-a5324.appspot.com",
  messagingSenderId: "917384091754",
  appId: "1:917384091754:web:5bd4820e12235804efd213",
  measurementId: "G-R9QHNF4QS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);