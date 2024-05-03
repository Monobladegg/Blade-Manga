// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3GMQrmN8iGqb5Ij0tqV60WZ3AlPZeHZM",
  authDomain: "shopmanga-d39b3.firebaseapp.com",
  projectId: "shopmanga-d39b3",
  storageBucket: "shopmanga-d39b3.appspot.com",
  messagingSenderId: "652854161068",
  appId: "1:652854161068:web:32fdcbc8e4187fa3efb909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);