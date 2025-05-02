import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC20gjAecwe61JTPI3MX1gHcjMPiMGxqU",
  authDomain:  "pharmafast-eacbc.firebaseapp.com",
  projectId:  "pharmafast-eacbc",
  storageBucket: "pharmafast-eacbc.firebasestorage.app",
  messagingSenderId:"1089326771721" ,
  appId: "1:1089326771721:web:3cf779bd2d54668567d2d8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();