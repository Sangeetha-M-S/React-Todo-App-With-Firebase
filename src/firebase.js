// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC19HFjJDWV78sExs0wEwKTQ5K4vGzdDdE",
  authDomain: "todo-app-y.firebaseapp.com",
  projectId: "todo-app-y",
  storageBucket: "todo-app-y.appspot.com",
  messagingSenderId: "273873975301",
  appId: "1:273873975301:web:5e06532ee719701453846c",
  measurementId: "G-W2LW5LMVMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)