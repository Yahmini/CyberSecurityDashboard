// Replace the config below with your actual Firebase config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBek2LCWb5VS9GHbKVklM86pWATPn5dXbo",
    authDomain: "cybersecuritywebsite-4d044.firebaseapp.com",
    projectId: "cybersecuritywebsite-4d044",
    storageBucket: "cybersecuritywebsite-4d044.firebasestorage.app",
    messagingSenderId: "835047167419",
    appId: "1:835047167419:web:7408cd8f2adda2bea4209e",
    measurementId: "G-HWSZSYSTXV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
