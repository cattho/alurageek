import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4xmYMyUXZUcgyYyANYJjUMeGsxqqIHos",
    authDomain: "alura-geek-89d87.firebaseapp.com",
    projectId: "alura-geek-89d87",
    storageBucket: "alura-geek-89d87.appspot.com",
    messagingSenderId: "601544962528",
    appId: "1:601544962528:web:6087354afdafb3ff443b85",
    measurementId: "G-HGPCQ867K9"
  };

export const app = initializeApp(firebaseConfig);
export const gglLogin = new GoogleAuthProvider();
export const facebookLogin = new FacebookAuthProvider();