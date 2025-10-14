// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABkM3oJUB1M6P9Tq3HmOztWmlYD6COAag",
    authDomain: "email-password-auth-91d05.firebaseapp.com",
    projectId: "email-password-auth-91d05",
    storageBucket: "email-password-auth-91d05.firebasestorage.app",
    messagingSenderId: "341622041691",
    appId: "1:341622041691:web:acce6e8ca1d2678acee37e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);