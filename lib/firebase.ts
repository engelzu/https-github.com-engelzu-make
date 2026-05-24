import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCUCJW_ha6SsXX-bSe2agDBQ1kgaRkGsc",
  authDomain: "make-7832b.firebaseapp.com",
  projectId: "make-7832b",
  storageBucket: "make-7832b.firebasestorage.app",
  messagingSenderId: "642149787378",
  appId: "1:642149787378:web:da2b3b647dce7c23fb526b"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
