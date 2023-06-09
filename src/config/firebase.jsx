// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXuf0q6c41TUJJg6Vvt3FJd4AXbdpRzZ8",
  authDomain: "fir-test-247c9.firebaseapp.com",
  projectId: "fir-test-247c9",
  storageBucket: "fir-test-247c9.appspot.com",
  messagingSenderId: "487336297560",
  appId: "1:487336297560:web:081f0931bba2190288762d",
  measurementId: "G-DHZ5YZ2885"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();