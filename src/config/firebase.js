
import { initializeApp } from "firebase/app";
import {getAuth, RecaptchaVerifier} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAd0B9kN3srNBQgkfCX7D2F_Wt2p0lt-a4",
  authDomain: "learn-firebase-a606b.firebaseapp.com",
  projectId: "learn-firebase-a606b",
  storageBucket: "learn-firebase-a606b.appspot.com",
  messagingSenderId: "513986970179",
  appId: "1:513986970179:web:33490edce1a8aac0bb8af6",
  measurementId: "G-GKBTW5KPM9"
};


const app = initializeApp(firebaseConfig);
export const auth =       getAuth(app)
// const appVerifier = new RecaptchaVerifier('recaptcha-container',{},auth);
